"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MBTI_TYPES, type MbtiType } from "@/lib/constants";

export function StartForm() {
  const router = useRouter();
  const [bossMbti, setBossMbti] = useState<MbtiType | "">("");

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
        <select
          id="boss-mbti"
          name="bossMbti"
          value={bossMbti}
          onChange={(event) => setBossMbti(event.target.value as MbtiType | "")}
          className="h-13 w-full border border-stone-500 bg-[#fcfcfc] px-3 text-[15px] font-bold text-stone-900 outline-none transition focus:border-blue-800"
          aria-describedby="boss-mbti-help"
        >
          <option value="">MBTI 유형 선택</option>
          {MBTI_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="flex h-13 w-full items-center justify-center border border-blue-950 bg-blue-800 text-base font-black tracking-[0.04em] text-white transition hover:bg-blue-700"
      >
        생존 테스트 시작
      </button>
    </form>
  );
}
