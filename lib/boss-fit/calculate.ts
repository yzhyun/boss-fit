import {
  BOSS_EXPECTATIONS,
  EMPTY_TRAIT_SCORES,
  RESULT_TYPE_FALLBACKS,
} from "@/lib/boss-fit/constants";
import type {
  ResultTypeDefinition,
  SessionComputation,
  TraitScores,
} from "@/lib/boss-fit/types";
import { TRAIT_KEYS } from "@/lib/boss-fit/types";
import type { MbtiType } from "@/lib/constants";

export function createEmptyTraitScores(): TraitScores {
  return { ...EMPTY_TRAIT_SCORES };
}

export function addTraitScores(
  current: TraitScores,
  delta: TraitScores
): TraitScores {
  const next = { ...current };

  for (const key of TRAIT_KEYS) {
    next[key] += delta[key];
  }

  return next;
}

export function clampBossFitScore(score: number): number {
  return Math.max(0, Math.min(100, score));
}

export function calculateBossFitScore(
  bossMbti: MbtiType,
  userScores: TraitScores
): SessionComputation {
  const bossExpected = BOSS_EXPECTATIONS[bossMbti];

  const differenceTotal = TRAIT_KEYS.reduce((sum, key) => {
    return sum + Math.abs(userScores[key] - bossExpected[key]);
  }, 0);

  return {
    traitScores: userScores,
    totalScore: clampBossFitScore(100 - differenceTotal * 2),
  };
}

export function findFallbackResultType(score: number): ResultTypeDefinition {
  return (
    RESULT_TYPE_FALLBACKS.find(
      (resultType) => score >= resultType.minScore && score <= resultType.maxScore
    ) ?? RESULT_TYPE_FALLBACKS[RESULT_TYPE_FALLBACKS.length - 1]
  );
}
