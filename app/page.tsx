import { StartForm } from "@/app/_components/start-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f6fb] px-3 py-4 text-stone-900 sm:px-4">
      <section className="mx-auto w-full max-w-md border border-stone-400 bg-white shadow-[4px_4px_0_0_rgba(148,163,184,0.35)]">
        <div className="flex items-center justify-between border-b border-blue-950 bg-blue-700 px-3 py-2 text-white">
          <p className="text-sm font-black tracking-[0.04em]">
            사내 관계 분석 시스템 v2.1
          </p>
          <div className="flex gap-1.5">
            <span className="h-3 w-3 border border-blue-950 bg-white/80" />
            <span className="h-3 w-3 border border-blue-950 bg-white/80" />
          </div>
        </div>

        <div className="space-y-5 p-4 sm:p-5">
          <div className="border border-stone-300 bg-[#f8fbff] px-3 py-2 text-[11px] font-bold tracking-[0.18em] text-blue-700">
            ::: 관계 분석 시작 :::
          </div>

          <div className="space-y-2">
            <p className="text-xs font-bold tracking-[0.16em] text-stone-500">
              BOSS FIT / INTERNAL USE ONLY
            </p>
            <h1 className="text-[30px] leading-9 font-black tracking-[-0.03em] text-stone-900">
              팀장님과의 업무 궁합
              <br />
              분석 시스템
            </h1>
          </div>

          <div className="border border-stone-300 bg-stone-50 p-3 text-sm leading-6 text-stone-700">
            <p className="font-bold text-stone-800">
              사내 관계 데이터를 기반으로 업무 성향을 분석합니다.
            </p>
            <p>총 10문항 / 약 3분 소요</p>
            <p>결과는 본인만 확인 가능합니다.</p>
          </div>

          <div className="border border-stone-300 bg-white p-3">
            <StartForm />
          </div>

          <div className="border border-stone-300 bg-[#f7faff] p-3">
            <div className="flex items-center justify-between text-xs font-bold text-stone-700">
              <span>시스템 상태</span>
              <span>80%</span>
            </div>
            <p className="mt-2 text-sm font-bold text-blue-700">
              데이터 분석 준비 중...
            </p>
            <div className="mt-3 border border-stone-400 bg-white p-1">
              <div className="h-3 w-4/5 bg-blue-700" />
            </div>
            <p className="mt-2 text-xs text-stone-500">
              업무 성향 매칭 중...
            </p>
          </div>

          <div className="border border-stone-300 bg-[#fffdf7] px-3 py-2 text-xs leading-5 text-stone-600">
            <p className="font-bold text-stone-800">시스템 메시지</p>
            <p>재미로 보는 직장 관계 테스트입니다.</p>
            <p>주의: 결과를 보고 퇴사 충동이 들 수 있습니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
