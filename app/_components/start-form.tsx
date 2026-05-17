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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
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
        <p id="boss-mbti-help" className="text-xs leading-5 text-slate-500">
          {isDisabled
            ? "상사 MBTI를 선택해주세요."
            : `${bossMbti} 상사 기준으로 테스트를 시작합니다.`}
        </p>
      </div>

      <div className="space-y-1.5">
        <p className="text-sm font-semibold text-slate-700">내 성별</p>
        <div className="grid grid-cols-3 gap-2">
          {GENDER_OPTIONS.map((option) => {
            const isSelected = userGender === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setUserGender(option.value)}
                className={`h-12 rounded-2xl border text-sm font-semibold transition ${
                  isSelected
                    ? "border-sky-600 bg-sky-50 text-sky-700"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
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
        className="flex h-12 w-full items-center justify-center rounded-2xl bg-sky-600 text-[15px] font-bold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        상사핏 테스트 시작하기
      </button>
    </form>
  );
}
