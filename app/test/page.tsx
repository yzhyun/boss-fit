import Link from "next/link";
import { redirect } from "next/navigation";
import { TestRunner } from "@/app/_components/test-runner";
import { getActiveQuestions } from "@/lib/boss-fit/data";
import { isMbtiType, isUserGender } from "@/lib/boss-fit/constants";

type TestPageProps = {
  searchParams: Promise<{
    bossMbti?: string;
    userGender?: string;
  }>;
};

export default async function TestPage({ searchParams }: TestPageProps) {
  const { bossMbti, userGender } = await searchParams;

  if (!bossMbti || !isMbtiType(bossMbti)) {
    redirect("/");
  }

  const safeUserGender = userGender && isUserGender(userGender) ? userGender : "unspecified";
  const questions = await getActiveQuestions();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-md space-y-5">
        <div className="space-y-2 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
            상사핏 테스트 진행 중
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            팀장님 {bossMbti}
          </h1>
          <p className="text-sm leading-6 text-slate-500">
            질문은 한 문제씩 진행됩니다. 지금 제일 회사 사람다운 선택을 골라주세요.
          </p>
        </div>

        {questions.length > 0 ? (
          <TestRunner
            bossMbti={bossMbti}
            userGender={safeUserGender}
            questions={questions}
          />
        ) : (
          <section className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_18px_40px_rgba(148,163,184,0.14)]">
            <p className="text-sm leading-6 text-slate-500">
              질문 데이터가 없습니다. schema와 seed를 먼저 적용해 주세요.
            </p>
          </section>
        )}

        <Link
          href="/"
          className="flex h-12 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          처음으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
