"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MBTI_TYPES, type MbtiType } from "@/lib/constants";

export function StartForm() {
  const router = useRouter();
  const [bossMbti, setBossMbti] = useState<MbtiType | "">("");
  const isDisabled = bossMbti === "";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!bossMbti) {
      return;
    }

    router.push(`/test?bossMbti=${bossMbti}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="boss-mbti"
          className="block text-sm font-semibold text-slate-700"
        >
          상사 MBTI
        </label>
        <select
          id="boss-mbti"
          name="bossMbti"
          value={bossMbti}
          onChange={(event) => setBossMbti(event.target.value as MbtiType | "")}
          className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-[15px] font-semibold text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
          aria-describedby="boss-mbti-help"
        >
          <option value="">상사 MBTI를 선택해주세요</option>
          {MBTI_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <p id="boss-mbti-help" className="text-sm text-slate-500">
          {isDisabled
            ? "상사 MBTI를 선택해주세요."
            : `${bossMbti} 유형 상사 기준으로 테스트를 시작합니다.`}
        </p>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="flex h-14 w-full items-center justify-center rounded-2xl bg-sky-600 text-base font-bold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        테스트 시작하기
      </button>
    </form>
  );
}
