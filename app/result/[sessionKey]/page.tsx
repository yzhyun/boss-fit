import Link from "next/link";
import { notFound } from "next/navigation";
import { ResultShare } from "@/app/_components/result-share";
import { TRAIT_LABELS } from "@/lib/boss-fit/constants";
import { getResultBySessionKey } from "@/lib/boss-fit/data";
import { TRAIT_KEYS } from "@/lib/boss-fit/types";

type ResultPageProps = {
  params: Promise<{
    sessionKey: string;
  }>;
};

export default async function ResultPage({ params }: ResultPageProps) {
  const { sessionKey } = await params;
  const result = await getResultBySessionKey(sessionKey);

  if (!result) {
    notFound();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] px-4 py-8 text-slate-900">
      <section className="w-full max-w-lg rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_44px_rgba(148,163,184,0.16)] sm:px-8">
        <div className="space-y-6">
          <div className="space-y-3 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
              상사핏 테스트 결과
            </p>
            <div className="mx-auto inline-flex rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              {result.totalScore}점
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              {result.resultType.title}
            </h1>
            <p className="text-base font-semibold text-slate-600">
              {result.resultType.subtitle}
            </p>
            <p className="text-sm leading-7 text-slate-600">
              {result.resultType.description}
            </p>
          </div>

          <div className="rounded-[24px] bg-slate-50 p-4">
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="rounded-2xl bg-white px-3 py-3">
                <p className="text-xs font-semibold text-slate-500">팀장 MBTI</p>
                <p className="mt-1 text-lg font-black text-slate-900">
                  {result.bossMbti}
                </p>
              </div>
              <div className="rounded-2xl bg-white px-3 py-3">
                <p className="text-xs font-semibold text-slate-500">세션 코드</p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  {result.sessionKey.slice(0, 8)}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {TRAIT_KEYS.map((key) => (
                <div key={key} className="rounded-2xl bg-white px-3 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-600">
                      {TRAIT_LABELS[key]}
                    </span>
                    <span className="font-black text-slate-900">
                      {result.traitScores[key]}
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-sky-500"
                      style={{
                        width: `${Math.max(
                          8,
                          Math.min(100, ((result.traitScores[key] + 30) / 60) * 100)
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ResultShare
            shareText={result.resultType.shareText}
            score={result.totalScore}
            title={result.resultType.title}
          />

          <Link
            href="/"
            className="flex h-12 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            처음부터 다시 하기
          </Link>
        </div>
      </section>
    </main>
  );
}
