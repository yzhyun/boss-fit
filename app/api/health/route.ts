import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    const result = await sql`select now() as now`;
    const currentTime = String(result[0]?.now ?? "");

    return NextResponse.json({
      ok: true,
      service: "boss-fit",
      db: {
        connected: true,
        now: currentTime,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected database error";

    return NextResponse.json(
      {
        ok: false,
        service: "boss-fit",
        db: {
          connected: false,
        },
        error: message.replace(/postgres(?:ql)?:\/\/\S+/gi, "[redacted]"),
      },
      { status: 500 }
    );
  }
}
