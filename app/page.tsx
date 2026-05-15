import { StartForm } from "@/app/_components/start-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#d8dde6] px-3 py-4 text-stone-900 sm:px-4">
      <section className="mx-auto w-full max-w-md border border-stone-500 bg-[#efefef] shadow-[3px_3px_0_0_rgba(120,130,150,0.25)]">
        <div className="flex items-center justify-between border-b border-blue-950 bg-[#1b458f] px-3 py-2 text-white">
          <p className="text-sm font-black tracking-[0.04em]">
            사내 관계 분석 시스템 v2.1
          </p>
          <div className="flex gap-1.5">
            <span className="h-3 w-3 border border-blue-950 bg-[#d6def3]" />
            <span className="h-3 w-3 border border-blue-950 bg-[#d6def3]" />
          </div>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <div className="border border-stone-400 bg-[#f7f7f7] px-3 py-2 text-[11px] font-bold tracking-[0.18em] text-blue-800">
            ::: 사내 관계 분석 시스템 :::
          </div>

          <div className="space-y-1">
            <p className="text-[11px] font-bold tracking-[0.16em] text-stone-600">
              TEAM RELATION CHECKER
            </p>
            <p className="text-[11px] font-bold tracking-[0.16em] text-stone-600">
              INTERNAL OFFICE TEST
            </p>
            <p className="text-[11px] font-bold tracking-[0.16em] text-stone-600">
              회사생활 적응 진단툴
            </p>
            <h1 className="pt-2 text-[30px] leading-9 font-black tracking-[-0.04em] text-stone-900">
              팀장님...
              <br />
              전 밤티인가요?
            </h1>
          </div>

          <div className="border border-stone-400 bg-white p-3 text-sm leading-6 text-stone-700">
            <p>상사의 MBTI와</p>
            <p>당신의 업무 반응 패턴을 기반으로</p>
            <p>최첨단 궁합을 분석합니다.</p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[11px] font-bold text-stone-700">
            <div className="border border-stone-400 bg-[#fbfbfb] px-2 py-2">
              총 10문항
            </div>
            <div className="border border-stone-400 bg-[#fbfbfb] px-2 py-2">
              약 3분
            </div>
            <div className="border border-stone-400 bg-[#fbfbfb] px-2 py-2">
              몰래 가능
            </div>
          </div>

          <div className="border border-stone-400 bg-[#f9fbff] p-3">
            <StartForm />
          </div>
          <div className="border border-stone-400 bg-[#fffdf7] px-3 py-2 text-xs leading-5 text-stone-700">
            <p className="font-bold text-stone-900">NOTICE</p>
            <p>결과는 본인만 확인 가능합니다.</p>
            <p>주의: 결과를 보고 퇴사 충동이 들 수 있습니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
