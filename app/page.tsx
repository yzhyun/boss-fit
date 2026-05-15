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
              전 밤티 팀원인가요?
            </h1>
          </div>

          <div className="border border-stone-400 bg-white p-3 text-sm leading-6 text-stone-700">
            <p className="font-bold text-stone-800">
              상사의 MBTI 기반 회사 생존 테스트
            </p>
            <p>혼난 뒤 조용히 우는 유형인지 분석합니다</p>
            <p>직장인들의 눈물 데이터를 기반으로 분석합니다</p>
            <p>팀장님과의 업무 온도차를 계산합니다</p>
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
            <div className="mb-3 border border-dashed border-stone-400 bg-[#eef4ff] px-2 py-1 text-[11px] font-bold tracking-[0.14em] text-blue-800">
              회사 밈 기반 진단 모듈 로드 완료
            </div>
            <StartForm />
          </div>

          <div className="border border-stone-400 bg-[#f6f6f6] p-3">
            <div className="flex items-center justify-between text-xs font-bold text-stone-700">
              <span>상태창</span>
              <span>80%</span>
            </div>
            <p className="mt-2 text-sm font-bold text-blue-800">
              사내 데이터 동기화 중...
            </p>
            <div className="mt-3 border border-stone-500 bg-white p-1">
              <div className="h-3 w-4/5 bg-[#1b458f]" />
            </div>
            <div className="mt-3 space-y-1 text-[12px] text-stone-600">
              <p>&gt; 퇴사 위험도 계산 중...</p>
              <p>&gt; 팀장 성향 매칭 중...</p>
              <p>&gt; 감정형 팀원 보호 모드 활성화..</p>
              <p>&gt; 야근 내성 수치 확인 중...</p>
            </div>
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
