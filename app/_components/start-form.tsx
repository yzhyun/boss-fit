"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GENDER_OPTIONS, isUserGender } from "@/lib/boss-fit/constants";
import { MBTI_TYPES, type MbtiType } from "@/lib/constants";

export function StartForm() {
  const router = useRouter();
  const [bossMbti, setBossMbti] = useState<MbtiType | "">("");
  const [userGender, setUserGender] = useState<(typeof GENDER_OPTIONS)[number]["value"]>(
    "unspecified"
  );
  const isDisabled = bossMbti === "";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!bossMbti || !isUserGender(userGender)) {
      return;
    }

    router.push(`/test?bossMbti=${bossMbti}&userGender=${userGender}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="boss-mbti"
          className="block text-sm font-black tracking-[0.08em] text-[#473729]"
        >
          상사 MBTI
        </label>
        <select
          id="boss-mbti"
          name="bossMbti"
          value={bossMbti}
          onChange={(event) => setBossMbti(event.target.value as MbtiType | "")}
          className="h-14 w-full rounded-[18px] border border-[#bdae90] bg-[#fffaf0] px-4 text-[15px] font-semibold text-[#2c251f] outline-none transition focus:border-[#1f314f] focus:bg-white"
          aria-describedby="boss-mbti-help"
        >
          <option value="">상사 MBTI를 선택해주세요</option>
          {MBTI_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <p id="boss-mbti-help" className="text-sm text-[#7e6f5b]">
          {isDisabled
            ? "상사 MBTI를 선택해주세요."
            : `${bossMbti} 유형 상사 기준으로 상사핏 테스트를 시작합니다.`}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-black tracking-[0.08em] text-[#473729]">내 성별</p>
        <div className="grid grid-cols-3 gap-2">
          {GENDER_OPTIONS.map((option) => {
            const isSelected = userGender === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setUserGender(option.value)}
                className={`h-12 rounded-[16px] border text-sm font-bold transition ${
                  isSelected
                    ? "border-[#b6372e] bg-[#fbebe8] text-[#9f2c24]"
                    : "border-[#c6b89c] bg-[#fffaf0] text-[#6a5c49] hover:bg-[#f8f1e3]"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="flex h-14 w-full items-center justify-center rounded-[18px] border border-[#14243e] bg-[#1b2c49] text-base font-black text-white transition hover:bg-[#16243c] disabled:cursor-not-allowed disabled:border-[#9e988d] disabled:bg-[#a9a298]"
      >
        궁합 분석 시작하기
      </button>
    </form>
  );
}
