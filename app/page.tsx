import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fffaf0_0%,#ffe9d7_42%,#ffdbe6_100%)] px-6 py-10 text-stone-800">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center">
        <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-rose-200 bg-white/85 px-4 py-2 text-sm font-semibold text-rose-500 shadow-sm backdrop-blur">
              Boss Fit
            </div>

            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-stone-900 sm:text-5xl lg:text-7xl">
                직장상사와 나,
                <br />
                얼마나 잘 맞는지
                <br />
                귀엽게 확인해보자
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600">
                Boss Fit은 직장상사, 동료, 오피스 관계를 가볍고 귀엽게
                풀어보는 궁합 테스트 서비스입니다. 첫 인상부터 부담 없이,
                하지만 기억에 남게.
              </p>
              <p className="inline-flex rounded-2xl bg-stone-900 px-4 py-3 text-sm font-semibold text-amber-100">
                초기 뼈대 구성 중
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/api/health"
                className="rounded-full bg-rose-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-300/60 transition-transform hover:-translate-y-0.5"
              >
                DB 연결 확인
              </a>
              <div className="rounded-full border border-stone-200 bg-white/70 px-5 py-3 text-sm text-stone-600">
                health endpoint:
                <code className="ml-2 rounded bg-stone-100 px-2 py-1 font-semibold text-stone-800">
                  /api/health
                </code>
              </div>
            </div>

            <div className="grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose-400">
                  Mood
                </p>
                <p className="mt-2 text-2xl font-black text-stone-900">Cute</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-500">
                  Match
                </p>
                <p className="mt-2 text-2xl font-black text-stone-900">92%</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-500">
                  Style
                </p>
                <p className="mt-2 text-2xl font-black text-stone-900">Office</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 left-8 h-28 w-28 rounded-full bg-amber-300/55 blur-3xl" />
            <div className="absolute -right-2 top-24 h-32 w-32 rounded-full bg-rose-300/55 blur-3xl" />
            <div className="absolute bottom-8 left-14 h-24 w-24 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/72 p-4 shadow-[0_30px_100px_rgba(125,85,56,0.22)] backdrop-blur sm:p-6">
              <div className="absolute left-5 top-5 rounded-full bg-stone-900 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white">
                boss match mascot
              </div>
              <div className="absolute right-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-rose-500 shadow">
                launch face
              </div>
              <div className="relative rounded-[2rem] bg-[linear-gradient(180deg,#fff7f0_0%,#fff4fb_100%)] p-3">
                <Image
                  src="/boss-fit-mascot.png"
                  alt="Boss Fit mascot character"
                  width={1024}
                  height={1536}
                  priority
                  className="h-auto w-full rounded-[1.6rem] object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-rose-200/60 blur-2xl" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
