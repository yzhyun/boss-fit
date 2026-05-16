import { NextResponse } from "next/server";
import {
  calculateBossFitScore,
  createEmptyTraitScores,
  addTraitScores,
  findFallbackResultType,
} from "@/lib/boss-fit/calculate";
import {
  getChoicesByIds,
  getResultTypeByScore,
} from "@/lib/boss-fit/data";
import { isMbtiType, isUserGender } from "@/lib/boss-fit/constants";
import type { AnswerInput, UserGender } from "@/lib/boss-fit/types";
import { sql } from "@/lib/db";

type CreateSessionRequest = {
  bossMbti?: string;
  userGender?: string;
  answers?: AnswerInput[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateSessionRequest;
    const { bossMbti, userGender, answers } = body;

    if (!bossMbti || !isMbtiType(bossMbti)) {
      return NextResponse.json(
        { error: "유효한 팀장 MBTI가 필요합니다." },
        { status: 400 }
      );
    }

    if (!userGender || !isUserGender(userGender)) {
      return NextResponse.json(
        { error: "유효한 성별 선택값이 필요합니다." },
        { status: 400 }
      );
    }

    if (!answers || answers.length !== 10) {
      return NextResponse.json(
        { error: "답변은 10개가 모두 필요합니다." },
        { status: 400 }
      );
    }

    const uniqueQuestionIds = new Set(answers.map((answer) => answer.questionId));
    const uniqueChoiceIds = new Set(answers.map((answer) => answer.choiceId));

    if (uniqueQuestionIds.size !== 10 || uniqueChoiceIds.size !== 10) {
      return NextResponse.json(
        { error: "질문과 선택지는 중복 없이 제출되어야 합니다." },
        { status: 400 }
      );
    }

    const choices = await getChoicesByIds(Array.from(uniqueChoiceIds));

    if (choices.length !== 10) {
      return NextResponse.json(
        { error: "일부 선택지를 찾을 수 없습니다." },
        { status: 400 }
      );
    }

    const choiceMap = new Map(choices.map((choice) => [choice.id, choice]));
    let traitScores = createEmptyTraitScores();

    for (const answer of answers) {
      const choice = choiceMap.get(answer.choiceId);

      if (!choice || choice.questionId !== answer.questionId) {
        return NextResponse.json(
          { error: "질문과 선택지 매칭이 올바르지 않습니다." },
          { status: 400 }
        );
      }

      traitScores = addTraitScores(traitScores, {
        sense_score: choice.sense_score,
        report_score: choice.report_score,
        reaction_score: choice.reaction_score,
        distance_score: choice.distance_score,
        survival_score: choice.survival_score,
      });
    }

    const computed = calculateBossFitScore(bossMbti, traitScores);
    const dbResultType = await getResultTypeByScore(computed.totalScore);
    const fallbackResultType = findFallbackResultType(computed.totalScore);
    const resultType = dbResultType ?? {
      id: 0,
      ...fallbackResultType,
    };

    const insertedSessions = (await sql`
      INSERT INTO test_sessions (
        boss_mbti,
        user_gender,
        sense_score,
        report_score,
        reaction_score,
        distance_score,
        survival_score,
        total_score,
        result_type_id,
        completed_at
      )
      VALUES (
        ${bossMbti},
        ${userGender as UserGender},
        ${computed.traitScores.sense_score},
        ${computed.traitScores.report_score},
        ${computed.traitScores.reaction_score},
        ${computed.traitScores.distance_score},
        ${computed.traitScores.survival_score},
        ${computed.totalScore},
        ${dbResultType?.id ?? null},
        NOW()
      )
      RETURNING id, session_key
    `) as Array<{ id: string | number; session_key: string }>;

    const createdSession = insertedSessions[0];

    if (!createdSession) {
      throw new Error("세션 생성에 실패했습니다.");
    }

    const sessionId = Number(createdSession.id);

    for (const answer of answers) {
      await sql`
        INSERT INTO test_answers (session_id, question_id, choice_id)
        VALUES (${sessionId}, ${answer.questionId}, ${answer.choiceId})
      `;
    }

    return NextResponse.json({
      sessionKey: createdSession.session_key,
      totalScore: computed.totalScore,
      resultCode: resultType.code,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "세션 저장 중 오류가 발생했습니다.";

    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 }
    );
  }
}
