"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { AnswerInput, QuestionItem, UserGender } from "@/lib/boss-fit/types";
import type { MbtiType } from "@/lib/constants";

type TestRunnerProps = {
  bossMbti: MbtiType;
  userGender: UserGender;
  questions: QuestionItem[];
};

type SessionResponse = {
  sessionKey: string;
  totalScore: number;
  resultCode: string;
};

export function TestRunner({
  bossMbti,
  userGender,
  questions,
}: TestRunnerProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [error, setError] = useState("");
  const [isSubmitting, startTransition] = useTransition();

  const currentQuestion = questions[currentIndex];
  const answerCount = Object.keys(answers).length;
  const currentChoiceId = answers[currentQuestion.id];
  const canGoPrev = currentIndex > 0;
  const isLastQuestion = currentIndex === questions.length - 1;
  const allAnswered = answerCount === questions.length;

  const answerPayload = useMemo<AnswerInput[]>(() => {
    return questions
      .filter((question) => answers[question.id] !== undefined)
      .map((question) => ({
        questionId: question.id,
        choiceId: answers[question.id],
      }));
  }, [answers, questions]);

  function handleSelect(choiceId: number) {
    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: choiceId,
    }));
    setError("");

    if (!isLastQuestion) {
      setCurrentIndex((index) => index + 1);
    }
  }

  function handlePrevious() {
    if (canGoPrev) {
      setCurrentIndex((index) => index - 1);
    }
  }

  function handleNext() {
    if (currentChoiceId && !isLastQuestion) {
      setCurrentIndex((index) => index + 1);
      setError("");
      return;
    }

    setError("선택지를 하나 골라주세요.");
  }

  function handleSubmit() {
    if (!allAnswered) {
      setError("10개 질문에 모두 답해 주세요.");
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bossMbti,
            userGender,
            answers: answerPayload,
          }),
        });

        if (!response.ok) {
          const payload = (await response.json()) as { error?: string };
          throw new Error(payload.error ?? "테스트 저장에 실패했습니다.");
        }

        const payload = (await response.json()) as SessionResponse;
        router.push(`/result/${payload.sessionKey}`);
      } catch (submissionError) {
        setError(
          submissionError instanceof Error
            ? submissionError.message
            : "테스트 저장 중 오류가 발생했습니다."
        );
      }
    });
  }

  return (
    <section className="mx-auto w-full max-w-md rounded-[28px] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_40px_rgba(148,163,184,0.14)] sm:px-6">
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
            <span>
              {currentIndex + 1} / {questions.length}
            </span>
            <span>{bossMbti} 팀장 기준</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-sky-500 transition-all"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="rounded-[24px] bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
            Question {currentIndex + 1}
          </p>
          <h1 className="mt-2 text-xl font-black leading-8 text-slate-900">
            {currentQuestion.questionText}
          </h1>
        </div>

        <div className="space-y-3">
          {currentQuestion.choices.map((choice) => {
            const isSelected = currentChoiceId === choice.id;

            return (
              <button
                key={choice.id}
                type="button"
                onClick={() => handleSelect(choice.id)}
                className={`w-full rounded-[22px] border px-4 py-4 text-left text-base leading-6 transition ${
                  isSelected
                    ? "border-sky-500 bg-sky-50 text-sky-900"
                    : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50/50"
                }`}
              >
                {choice.choiceText}
              </button>
            );
          })}
        </div>

        {error ? <p className="text-sm text-rose-500">{error}</p> : null}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={!canGoPrev || isSubmitting}
            className="flex h-12 flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            이전
          </button>

          {isLastQuestion ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!allAnswered || isSubmitting}
              className="flex h-12 flex-[1.4] items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {isSubmitting ? "결과 계산 중..." : "결과 보기"}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className="flex h-12 flex-[1.4] items-center justify-center rounded-2xl bg-sky-600 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              다음 질문
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
