import Link from "next/link";
import { MBTI_TYPES } from "@/lib/constants";

type TestPageProps = {
  searchParams: Promise<{
    bossMbti?: string;
  }>;
};

export default async function TestPage({ searchParams }: TestPageProps) {
  const { bossMbti } = await searchParams;
  const selectedBossMbti = MBTI_TYPES.includes(bossMbti as (typeof MBTI_TYPES)[number])
    ? bossMbti
    : "선택되지 않음";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#fffaf5_0%,#ffe8e4_100%)] px-5 py-10 text-stone-900">
      <section className="w-full max-w-sm rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_20px_60px_rgba(120,84,63,0.12)] backdrop-blur">
        <div className="space-y-5 text-center">
          <div className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-500">
            Boss Fit
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-black tracking-tight">임시 테스트 화면</h1>
            <p className="text-base font-semibold text-stone-700">
              상사 MBTI: {selectedBossMbti}
            </p>
            <p className="text-sm leading-6 text-stone-500">
              질문 화면은 다음 단계에서 구성됩니다.
            </p>
          </div>

          <Link
            href="/"
            className="flex h-12 w-full items-center justify-center rounded-2xl bg-stone-900 text-sm font-semibold text-white transition hover:bg-stone-800"
          >
            처음으로 돌아가기
          </Link>
        </div>
      </section>
    </main>
  );
}
