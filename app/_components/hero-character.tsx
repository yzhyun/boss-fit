export function HeroCharacter() {
  return (
    <div className="mx-auto flex w-full max-w-[220px] items-center justify-center rounded-[24px] border border-[#d4c7aa] bg-[linear-gradient(180deg,#fcf8ef_0%,#efe4cc_100%)] px-4 py-3 shadow-[0_8px_18px_rgba(86,67,40,0.1)]">
      <div className="flex w-full items-center gap-3 rounded-[18px] border border-dashed border-[#b7a98a] bg-[#f7efdd] px-3 py-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] border border-[#9c8a6c] bg-[#fff9ec] text-3xl shadow-[inset_0_-3px_0_rgba(0,0,0,0.04)]">
          🐿️
        </div>
        <div className="text-left">
          <p className="text-[11px] font-black tracking-[0.18em] text-[#75624b] uppercase">
            HeroCharacter
          </p>
          <p className="mt-1 text-sm leading-5 font-semibold text-[#3f3226]">
            밤티 대리
            <br />
            업무 궁합 분석 대기중
          </p>
        </div>
      </div>
    </div>
  );
}
