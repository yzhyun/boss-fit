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
        <p className="text-[11px] font-bold tracking-[0.18em] text-blue-700">
          INPUT 상사 MBTI
        </p>
        <label
          htmlFor="boss-mbti"
          className="block text-sm font-bold text-stone-800"
        >
          분석 대상 관리자 성향 코드
        </label>
        <select
          id="boss-mbti"
          name="bossMbti"
          value={bossMbti}
          onChange={(event) => setBossMbti(event.target.value as MbtiType | "")}
          className="h-13 w-full border border-stone-400 bg-white px-3 text-[15px] font-bold text-stone-900 outline-none transition focus:border-blue-700"
          aria-describedby="boss-mbti-help"
        >
          <option value="">선택하십시오</option>
          {MBTI_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <p id="boss-mbti-help" className="text-xs leading-5 text-stone-600">
          {isDisabled
            ? "상사 MBTI를 선택해주세요."
            : `선택 완료: ${bossMbti} / 업무 성향 매칭 준비됨`}
        </p>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="flex h-13 w-full items-center justify-center border border-blue-950 bg-blue-700 text-base font-black tracking-[0.04em] text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:border-stone-400 disabled:bg-stone-300"
      >
        분석 시작
      </button>
    </form>
  );
}
