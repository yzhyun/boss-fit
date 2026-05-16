import { NextResponse } from "next/server";
import { getResultBySessionKey } from "@/lib/boss-fit/data";

type ResultRouteProps = {
  params: Promise<{
    sessionKey: string;
  }>;
};

export async function GET(_request: Request, { params }: ResultRouteProps) {
  try {
    const { sessionKey } = await params;
    const result = await getResultBySessionKey(sessionKey);

    if (!result) {
      return NextResponse.json(
        { error: "결과를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "결과를 불러오지 못했습니다.";

    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 }
    );
  }
}
