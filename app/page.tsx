import { StartForm } from "@/app/_components/start-form";
import { HeroCharacter } from "@/app/_components/hero-character";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e9dfc8] px-4 py-6 text-[#2d261f]">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[420px] items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[30px] border border-[#cabd9d] bg-[#f7f0de] px-5 py-6 shadow-[0_14px_32px_rgba(88,64,39,0.14)]">
          <div className="pointer-events-none absolute inset-x-4 top-3 h-5 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_70%)]" />
          <div className="pointer-events-none absolute -right-6 top-16 h-24 w-24 rounded-full border border-[#b6372e]/15 bg-[#b6372e]/6" />
          <div className="pointer-events-none absolute -left-5 bottom-28 h-20 w-20 rounded-full border border-[#1f314f]/10 bg-[#1f314f]/5" />

          <div className="absolute left-1/2 top-0 h-8 w-20 -translate-x-1/2 rounded-b-[18px] border-x border-b border-[#9f9277] bg-[linear-gradient(180deg,#d8d0bd_0%,#bfb49a_100%)] shadow-[0_4px_8px_rgba(76,60,39,0.18)]" />

          <div className="space-y-5">
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex rounded-sm border border-[#a79572] bg-[#efe3c7] px-2 py-1 text-[11px] font-bold tracking-[0.24em] text-[#5b4a33] uppercase shadow-[2px_2px_0_rgba(137,117,87,0.18)]">
                밤티연구소
              </span>
              <span className="inline-flex rotate-[8deg] rounded-full border-2 border-[#b6372e] px-3 py-1 text-sm font-black tracking-[0.18em] text-[#b6372e] shadow-[0_0_0_2px_rgba(182,55,46,0.08)]">
                보류
              </span>
            </div>

            <div className="space-y-3 text-center">
              <HeroCharacter />
              <div className="space-y-2">
                <p className="text-sm font-semibold tracking-[0.14em] text-[#7a6952]">
                  비공식 업무 궁합 분석 보고서
                </p>
                <h1 className="text-[2rem] leading-[1.1] font-black tracking-[-0.03em] text-[#231d17]">
                  팀장님 전
                  <br />
                  밤티인가요?
                </h1>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[20px] border border-[#d4c7aa] bg-[#fbf6ea] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-sm font-black tracking-[0.16em] text-[#403224] uppercase">
                    체크리스트
                  </h2>
                  <span className="text-xs font-semibold text-[#8d7b62]">결재 전 확인</span>
                </div>
                <ul className="space-y-2 text-sm text-[#4a3d30]">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-sm border border-[#8b7a60] bg-white text-[11px] font-bold">
                      ✓
                    </span>
                    <span>팀장 MBTI를 기준으로 업무 케미를 대충은 진지하게 분석합니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-sm border border-[#8b7a60] bg-white text-[11px] font-bold">
                      ✓
                    </span>
                    <span>회사 밈, 공감, 약간의 촌스러움을 포함한 비공식 보고서입니다.</span>
                  </li>
                </ul>
              </div>

              <div className="relative rotate-[-2deg] rounded-[6px] border border-[#d7c667] bg-[#f6e78d] px-4 py-3 shadow-[4px_5px_0_rgba(162,139,44,0.18)]">
                <div className="absolute left-1/2 top-2 h-4 w-10 -translate-x-1/2 rounded-full bg-white/40 blur-[1px]" />
                <p className="text-[11px] font-black tracking-[0.18em] text-[#745c18] uppercase">
                  메모
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f4d1d]">
                  팀장님 속마음, 내 회사생활 습관,
                  <br />
                  회식 생존력까지 슬쩍 반영 예정.
                </p>
              </div>
            </div>

            <div className="rounded-[22px] border border-[#d3c5a8] bg-[#f3ead6] p-4">
              <StartForm />
            </div>

            <p className="text-center text-xs leading-5 text-[#7d6d58]">
              재미로 보는 사내 문서형 테스트입니다. 진짜 인사평가에는 아무 효력이 없습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
