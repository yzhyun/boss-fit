import type {
  BossExpectationProfile,
  ResultTypeDefinition,
  TraitScores,
  UserGender,
} from "@/lib/boss-fit/types";
import { MBTI_TYPES, type MbtiType } from "@/lib/constants";

export const EMPTY_TRAIT_SCORES: TraitScores = {
  sense_score: 0,
  report_score: 0,
  reaction_score: 0,
  distance_score: 0,
  survival_score: 0,
};

export const GENDER_OPTIONS: Array<{ value: UserGender; label: string }> = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
  { value: "unspecified", label: "선택 안 함" },
];

export const TRAIT_LABELS: Record<keyof TraitScores, string> = {
  sense_score: "눈치핏",
  report_score: "보고핏",
  reaction_score: "리액션핏",
  distance_score: "거리감핏",
  survival_score: "생존핏",
};

export const BOSS_EXPECTATIONS: Record<MbtiType, BossExpectationProfile> = {
  ENTJ: {
    mbti: "ENTJ",
    sense_score: 14,
    report_score: 24,
    reaction_score: 8,
    distance_score: 10,
    survival_score: 20,
  },
  ESTJ: {
    mbti: "ESTJ",
    sense_score: 15,
    report_score: 25,
    reaction_score: 7,
    distance_score: 12,
    survival_score: 22,
  },
  ENFJ: {
    mbti: "ENFJ",
    sense_score: 18,
    report_score: 20,
    reaction_score: 16,
    distance_score: 14,
    survival_score: 18,
  },
  ESFJ: {
    mbti: "ESFJ",
    sense_score: 19,
    report_score: 21,
    reaction_score: 15,
    distance_score: 16,
    survival_score: 18,
  },
  ENTP: {
    mbti: "ENTP",
    sense_score: 14,
    report_score: 16,
    reaction_score: 20,
    distance_score: 10,
    survival_score: 17,
  },
  ESTP: {
    mbti: "ESTP",
    sense_score: 13,
    report_score: 15,
    reaction_score: 18,
    distance_score: 9,
    survival_score: 20,
  },
  ENFP: {
    mbti: "ENFP",
    sense_score: 16,
    report_score: 15,
    reaction_score: 21,
    distance_score: 12,
    survival_score: 16,
  },
  ESFP: {
    mbti: "ESFP",
    sense_score: 15,
    report_score: 14,
    reaction_score: 22,
    distance_score: 11,
    survival_score: 17,
  },
  INTJ: {
    mbti: "INTJ",
    sense_score: 13,
    report_score: 23,
    reaction_score: 6,
    distance_score: 16,
    survival_score: 20,
  },
  ISTJ: {
    mbti: "ISTJ",
    sense_score: 16,
    report_score: 25,
    reaction_score: 6,
    distance_score: 15,
    survival_score: 22,
  },
  INFJ: {
    mbti: "INFJ",
    sense_score: 20,
    report_score: 19,
    reaction_score: 12,
    distance_score: 18,
    survival_score: 17,
  },
  ISFJ: {
    mbti: "ISFJ",
    sense_score: 21,
    report_score: 20,
    reaction_score: 12,
    distance_score: 19,
    survival_score: 18,
  },
  INTP: {
    mbti: "INTP",
    sense_score: 12,
    report_score: 16,
    reaction_score: 7,
    distance_score: 18,
    survival_score: 16,
  },
  ISTP: {
    mbti: "ISTP",
    sense_score: 12,
    report_score: 17,
    reaction_score: 6,
    distance_score: 17,
    survival_score: 19,
  },
  INFP: {
    mbti: "INFP",
    sense_score: 18,
    report_score: 14,
    reaction_score: 14,
    distance_score: 20,
    survival_score: 14,
  },
  ISFP: {
    mbti: "ISFP",
    sense_score: 17,
    report_score: 15,
    reaction_score: 13,
    distance_score: 19,
    survival_score: 16,
  },
};

export const RESULT_TYPE_FALLBACKS: ResultTypeDefinition[] = [
  {
    code: "boss_favorite",
    title: "팀장님 최애핏",
    subtitle: "팀장님이 은근히 믿고 맡기는 타입",
    description:
      "보고 타이밍, 리액션, 거리감이 꽤 안정적입니다. 일을 엄청 잘한다기보다 팀장님이 불안해하지 않게 만드는 쪽에 가깝습니다. 이 정도면 팀장님 입장에서는 꽤 편한 팀원입니다.",
    minScore: 90,
    maxScore: 100,
    shareText: "나는 팀장님 최애핏이래요. 당신은?",
    displayOrder: 1,
  },
  {
    code: "survival_sensor",
    title: "눈치 빠른 생존핏",
    subtitle: "회사 생활 센서가 잘 켜져 있는 타입",
    description:
      "팀장님이 원하는 포인트를 꽤 잘 읽습니다. 가끔 속으로는 딴생각을 해도 겉으로는 크게 티 나지 않습니다. 회사에서 오래 살아남을 가능성이 높습니다.",
    minScore: 75,
    maxScore: 89,
    shareText: "나는 눈치 빠른 생존핏이래요. 당신은?",
    displayOrder: 2,
  },
  {
    code: "normal_office_fit",
    title: "무난한 회사핏",
    subtitle: "크게 예쁨받지도, 크게 찍히지도 않는 타입",
    description:
      "팀장님과의 궁합은 무난한 편입니다. 엄청 잘 맞는 건 아니지만 그렇다고 크게 어긋나지도 않습니다. 가끔만 보고 타이밍과 리액션을 챙기면 안정권입니다.",
    minScore: 60,
    maxScore: 74,
    shareText: "나는 무난한 회사핏이래요. 당신은?",
    displayOrder: 3,
  },
  {
    code: "risky_bamti",
    title: "아슬아슬 밤티핏",
    subtitle: "나쁜 의도는 없는데 묘하게 엇나가는 타입",
    description:
      "당신은 일은 하려고 하는데 팀장님이 원하는 타이밍과 살짝 어긋나는 경우가 있습니다. 본인은 평온한데 팀장님은 속으로 ‘음…’ 하고 있을 수 있습니다. 조금만 눈치핏과 보고핏을 챙기면 탈출 가능합니다.",
    minScore: 40,
    maxScore: 59,
    shareText: "나는 아슬아슬 밤티핏이래요. 당신은?",
    displayOrder: 4,
  },
  {
    code: "bamti_member",
    title: "밤티 팀원핏",
    subtitle: "팀장님 눈에는 이상하게 자꾸 걸리는 타입",
    description:
      "당신이 못된 사람이라는 뜻은 아닙니다. 다만 지금 입력한 팀장님 스타일과는 반응 방식이 꽤 다를 수 있습니다. 팀장님은 빠른 공유를 원하는데 당신은 조용히 처리하거나, 팀장님은 리액션을 원하는데 당신은 진심 어린 무표정일 수 있습니다.",
    minScore: 0,
    maxScore: 39,
    shareText: "나는 밤티 팀원핏이래요. 당신은?",
    displayOrder: 5,
  },
];

export function isMbtiType(value: string): value is MbtiType {
  return MBTI_TYPES.includes(value as MbtiType);
}

export function isUserGender(value: string): value is UserGender {
  return GENDER_OPTIONS.some((option) => option.value === value);
}
