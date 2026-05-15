import { StartForm } from "@/app/_components/start-form";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#fffaf5_0%,#ffe7e3_100%)] px-4 py-8 text-stone-900">
      <section className="w-full max-w-md rounded-[2rem] border border-white/80 bg-white/92 p-6 shadow-[0_24px_60px_rgba(120,84,63,0.12)] backdrop-blur sm:p-8">
        <div className="space-y-6">
          <div className="space-y-3 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-rose-500">
              Boss Fit
            </p>
            <h1 className="text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
              우리 팀장님과 나는
              <br />
              왜 이렇게 안 맞을까?
            </h1>
            <p className="text-base leading-7 text-stone-600">
              상사의 MBTI를 선택하고
              <br />
              10개의 회사 상황 질문에 답해보세요.
            </p>
          </div>

          <StartForm />

          <p className="text-center text-sm text-stone-500">
            재미로 보는 직장 관계 테스트입니다.
          </p>
        </div>
      </section>
    </main>
  );
}
