import Image from "next/image";
import { StartForm } from "@/app/_components/start-form";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#f6faff_0%,#eef4ff_100%)] px-4 py-8 text-slate-900">
      <section className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_20px_50px_rgba(148,163,184,0.18)] sm:px-8">
        <div className="space-y-5">
          <div className="flex justify-center">
            <div className="relative rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,#e0f2fe_0%,#f8fafc_48%,#fef3c7_100%)] p-3 shadow-[0_18px_45px_rgba(14,165,233,0.18)] ring-1 ring-sky-100">
              <div className="absolute -right-2 -top-2 rounded-full bg-amber-300 px-3 py-1 text-xs font-black text-amber-950 shadow-sm">
                NEW
              </div>
              <Image
                src="/images/bamti-placeholder.svg"
                alt="커피와 노트북을 든 밤티 회사원 마스코트"
                width={192}
                height={192}
                priority
                className="h-36 w-36 sm:h-44 sm:w-44"
              />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-600">
              상사핏 테스트
            </p>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              팀장님 전 밤티인가요?
            </h1>
            <p className="text-base leading-7 text-slate-600">
              팀장님의 MBTI와 내 회사생활 선택으로 보는
              <br />
              장난 반, 공감 반 업무 궁합 테스트
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-left">
            <StartForm />
          </div>

          <p className="text-sm text-slate-500">
            재미로 보는 직장 관계 테스트입니다.
          </p>
        </div>
      </section>
    </main>
  );
}
