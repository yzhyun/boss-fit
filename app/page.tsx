export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fff8ef_0%,#ffe8d8_48%,#ffe0e6_100%)] px-6 py-10 text-stone-800">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-semibold text-rose-500 shadow-sm backdrop-blur">
              Boss Fit
            </div>

            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                직장상사와 나,
                <br />
                얼마나 잘 맞을까?
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600">
                Boss Fit은 직장상사, 동료, 오피스 관계를 가볍고 귀엽게
                풀어보는 궁합 테스트 서비스입니다.
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
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-6 h-28 rounded-full bg-amber-300/50 blur-3xl" />
            <div className="absolute inset-x-10 bottom-4 h-24 rounded-full bg-rose-300/50 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_24px_80px_rgba(125,85,56,0.18)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between rounded-2xl bg-[#fff4ea] px-4 py-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-400">
                    Office Match
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-500">
                    boss compatibility preview
                  </p>
                </div>
                <div className="rounded-full bg-white px-3 py-1 text-sm font-bold text-rose-500 shadow-sm">
                  92%
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#fffdf8_0%,#fff1ef_100%)] p-4">
                <svg
                  viewBox="0 0 520 420"
                  className="h-auto w-full"
                  role="img"
                  aria-label="Cute office compatibility illustration"
                >
                  <circle cx="118" cy="100" r="46" fill="#fecaca" />
                  <circle cx="405" cy="96" r="52" fill="#fde68a" />
                  <circle cx="428" cy="300" r="40" fill="#ddd6fe" />
                  <rect x="76" y="170" width="368" height="164" rx="28" fill="#fff" />
                  <rect x="96" y="190" width="328" height="110" rx="22" fill="#fef3c7" />
                  <rect x="150" y="300" width="220" height="18" rx="9" fill="#fed7aa" />
                  <rect x="170" y="318" width="24" height="52" rx="12" fill="#cbd5e1" />
                  <rect x="326" y="318" width="24" height="52" rx="12" fill="#cbd5e1" />

                  <g transform="translate(120 86)">
                    <circle cx="62" cy="62" r="48" fill="#fcd7bf" />
                    <path d="M26 52c6-30 64-42 86-8 4 7 6 14 6 23-14-10-27-14-38-12-21 3-35 11-52 24-9-8-10-18-2-27Z" fill="#7c4a33" />
                    <circle cx="46" cy="70" r="4.5" fill="#3f2a1d" />
                    <circle cx="78" cy="70" r="4.5" fill="#3f2a1d" />
                    <path d="M49 89c10 10 20 10 30 0" stroke="#ef4444" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                    <rect x="26" y="112" width="72" height="78" rx="24" fill="#f87171" />
                    <path d="M62 112l18 18H44l18-18Z" fill="#fff" />
                    <rect x="12" y="132" width="20" height="58" rx="10" fill="#fcd7bf" />
                    <rect x="92" y="132" width="20" height="58" rx="10" fill="#fcd7bf" />
                  </g>

                  <g transform="translate(258 74)">
                    <circle cx="72" cy="66" r="50" fill="#f7d4b5" />
                    <path d="M26 60c0-31 24-56 56-56 31 0 53 19 60 49-17-4-33-2-48 4-22 9-35 20-49 36-12-7-19-19-19-33Z" fill="#374151" />
                    <circle cx="55" cy="75" r="4.5" fill="#1f2937" />
                    <circle cx="88" cy="75" r="4.5" fill="#1f2937" />
                    <path d="M58 92c8 9 18 9 26 0" stroke="#f43f5e" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                    <rect x="34" y="116" width="78" height="82" rx="24" fill="#60a5fa" />
                    <path d="M72 116l18 18H54l18-18Z" fill="#fff" />
                    <rect x="18" y="136" width="20" height="60" rx="10" fill="#f7d4b5" />
                    <rect x="108" y="136" width="20" height="60" rx="10" fill="#f7d4b5" />
                  </g>

                  <g fill="#fb7185">
                    <path d="M244 88c0-10 8-18 18-18 8 0 14 5 17 11 3-6 9-11 17-11 10 0 18 8 18 18 0 21-25 34-35 42-10-8-35-21-35-42Z" />
                    <path d="M206 138c0-7 6-12 12-12 6 0 10 3 12 8 2-5 6-8 12-8 6 0 12 5 12 12 0 14-18 23-24 29-6-6-24-15-24-29Z" opacity="0.8" />
                    <path d="M304 146c0-7 6-12 12-12 6 0 10 3 12 8 2-5 6-8 12-8 6 0 12 5 12 12 0 14-18 23-24 29-6-6-24-15-24-29Z" opacity="0.8" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
