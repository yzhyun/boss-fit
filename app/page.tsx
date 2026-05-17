import Image from "next/image";
import { StartForm } from "@/app/_components/start-form";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#f6faff_0%,#eef4ff_100%)] px-4 py-4 text-slate-900">
      <section className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_20px_50px_rgba(148,163,184,0.18)] sm:px-7 sm:py-7">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="relative rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,#e0f2fe_0%,#f8fafc_48%,#fef3c7_100%)] p-2.5 shadow-[0_14px_34px_rgba(14,165,233,0.16)] ring-1 ring-sky-100">
              <div className="absolute -right-2 -top-2 rounded-full bg-amber-300 px-3 py-1 text-xs font-black text-amber-950 shadow-sm">
                NEW
              </div>
              <Image
                src="/images/bamti-placeholder.svg"
                alt="커피와 노트북을 든 밤티 회사원 마스코트"
                width={192}
                height={192}
                priority
                className="h-28 w-28 sm:h-36 sm:w-36"
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-600 sm:text-sm">
              상사핏 테스트
            </p>
            <h1 className="text-[1.9rem] font-black tracking-tight text-slate-900 sm:text-4xl">
              팀장님 전 밤티인가요?
            </h1>
            <p className="text-sm leading-6 text-slate-600 sm:text-base">
              팀장 MBTI와 내 회사생활 선택으로 보는
              <br className="hidden sm:block" />
              장난 반, 공감 반 업무 궁합 테스트
            </p>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-left">
            <StartForm />
          </div>

          <p className="text-xs leading-5 text-slate-500">
            재미로 보는 직장 관계 테스트입니다.
          </p>
        </div>
      </section>
    </main>
  );
}
