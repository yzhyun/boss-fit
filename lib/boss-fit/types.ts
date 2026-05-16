import type { MbtiType } from "@/lib/constants";

export const TRAIT_KEYS = [
  "sense_score",
  "report_score",
  "reaction_score",
  "distance_score",
  "survival_score",
] as const;

export type TraitKey = (typeof TRAIT_KEYS)[number];

export type TraitScores = Record<TraitKey, number>;

export type UserGender = "male" | "female" | "unspecified";

export type BossExpectationProfile = TraitScores & {
  mbti: MbtiType;
};

export type ResultTypeDefinition = {
  code: string;
  title: string;
  subtitle: string;
  description: string;
  minScore: number;
  maxScore: number;
  shareText: string;
  displayOrder: number;
};

export type QuestionChoice = TraitScores & {
  id: number;
  questionId: number;
  choiceText: string;
  displayOrder: number;
};

export type QuestionItem = {
  id: number;
  questionText: string;
  displayOrder: number;
  choices: QuestionChoice[];
};

export type AnswerInput = {
  questionId: number;
  choiceId: number;
};

export type SessionComputation = {
  traitScores: TraitScores;
  totalScore: number;
};

export type ResultTypeRecord = ResultTypeDefinition & {
  id: number;
};

export type SessionResultRecord = {
  sessionKey: string;
  bossMbti: MbtiType;
  userGender: UserGender | null;
  totalScore: number;
  traitScores: TraitScores;
  resultType: ResultTypeRecord;
  createdAt: string;
  completedAt: string | null;
};
