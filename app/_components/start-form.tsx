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
        <p className="text-[11px] font-bold tracking-[0.18em] text-blue-800">
          INPUT 상사 MBTI
        </p>
        <label
          htmlFor="boss-mbti"
          className="block text-sm font-bold text-stone-800"
        >
          팀장 성향 분류 코드
        </label>
        <select
          id="boss-mbti"
          name="bossMbti"
          value={bossMbti}
          onChange={(event) => setBossMbti(event.target.value as MbtiType | "")}
          className="h-13 w-full border border-stone-500 bg-[#fcfcfc] px-3 text-[15px] font-bold text-stone-900 outline-none transition focus:border-blue-800"
          aria-describedby="boss-mbti-help"
        >
          <option value="">팀장 유형 선택</option>
          {MBTI_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <p id="boss-mbti-help" className="text-xs leading-5 text-stone-600">
          {isDisabled
            ? "상사 MBTI를 선택해주세요."
            : `선택 완료: ${bossMbti} / 팀장 성향 매칭 대기 중`}
        </p>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="flex h-13 w-full items-center justify-center border border-blue-950 bg-blue-800 text-base font-black tracking-[0.04em] text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:border-stone-400 disabled:bg-stone-300"
      >
        생존 테스트 시작
      </button>
    </form>
  );
}
