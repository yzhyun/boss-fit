import { NextResponse } from "next/server";
import { getActiveQuestions } from "@/lib/boss-fit/data";

export async function GET() {
  try {
    const questions = await getActiveQuestions();

    return NextResponse.json({
      questions,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "질문 데이터를 불러오지 못했습니다.";

    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 }
    );
  }
}
