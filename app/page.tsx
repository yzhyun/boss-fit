import Image from "next/image";
import { StartForm } from "@/app/_components/start-form";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#f6faff_0%,#eef4ff_100%)] px-4 py-8 text-slate-900">
      <section className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_20px_50px_rgba(148,163,184,0.18)] sm:px-8">
        <div className="space-y-5">
          <div className="flex justify-center">
            <Image
              src="/images/bamti-placeholder.svg"
              alt="밤티 회사원 마스코트"
              width={128}
              height={128}
              priority
              className="h-28 w-28 sm:h-36 sm:w-36"
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-600">
              Boss Fit
            </p>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              팀장님 전 밤티인가요?
            </h1>
            <p className="text-base leading-7 text-slate-600">
              상사의 MBTI와 내 선택으로
              <br />
              회사 궁합도를 확인해보세요.
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
