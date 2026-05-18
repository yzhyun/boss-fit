# Boss Fit Audit

## Summary

- Audit date: 2026-05-18
- Verified against code and remote Neon DB
- Current DB row counts:
  - `questions`: 10
  - `choices`: 40
  - `result_types`: 5
  - `test_sessions`: 5
  - `test_answers`: 50
- Verified facts:
  - Every saved session has exactly 10 answers
  - Saved trait totals in `test_sessions` match recomputed sums from `test_answers + choices`
  - Saved `total_score` matches the current scoring formula
  - Saved `result_type_id` values match the configured score bands

## Data Model

### Main tables

- `questions`
  - question text
  - display order
  - active flag
- `choices`
  - belongs to one question
  - stores 5 trait weights per answer
- `result_types`
  - score band metadata
  - title, subtitle, description, share text
- `test_sessions`
  - selected boss MBTI
  - selected gender
  - final 5 trait totals
  - final score
  - matched result type
- `test_answers`
  - selected choice per question for a session

## Scoring Logic

### 1. Trait accumulation

Each selected choice contributes to five trait buckets:

- `sense_score`
- `report_score`
- `reaction_score`
- `distance_score`
- `survival_score`

The final user trait profile is the simple sum of the 10 chosen answers.

Code reference:

- [lib/boss-fit/calculate.ts](/Users/jin/zhyun/dev/boss-fit/boss-fit/lib/boss-fit/calculate.ts)
- [app/api/sessions/route.ts](/Users/jin/zhyun/dev/boss-fit/boss-fit/app/api/sessions/route.ts)

### 2. Final score formula

For the chosen boss MBTI, the app loads a target expectation profile from `BOSS_EXPECTATIONS`.

Formula:

```text
differenceTotal =
  |user.sense - boss.sense|
  + |user.report - boss.report|
  + |user.reaction - boss.reaction|
  + |user.distance - boss.distance|
  + |user.survival - boss.survival|

totalScore = clamp(100 - differenceTotal * 2, 0, 100)
```

That means:

- perfect match: `100`
- every 1-point trait gap costs `2` points
- score is clamped to `0..100`

### 3. Result type mapping

The DB score bands are:

| Code | Title | Range |
| --- | --- | --- |
| `boss_favorite` | 팀장님 최애핏 | 90-100 |
| `survival_sensor` | 눈치 빠른 생존핏 | 75-89 |
| `normal_office_fit` | 무난한 회사핏 | 60-74 |
| `risky_bamti` | 아슬아슬 밤티핏 | 40-59 |
| `bamti_member` | 밤티 팀원핏 | 0-39 |

## Boss Expectation Profiles

Source: [lib/boss-fit/constants.ts](/Users/jin/zhyun/dev/boss-fit/boss-fit/lib/boss-fit/constants.ts)

| MBTI | Sense | Report | Reaction | Distance | Survival |
| --- | ---: | ---: | ---: | ---: | ---: |
| ENTJ | 14 | 24 | 8 | 10 | 20 |
| ESTJ | 15 | 25 | 7 | 12 | 22 |
| ENFJ | 18 | 20 | 16 | 14 | 18 |
| ESFJ | 19 | 21 | 15 | 16 | 18 |
| ENTP | 14 | 16 | 20 | 10 | 17 |
| ESTP | 13 | 15 | 18 | 9 | 20 |
| ENFP | 16 | 15 | 21 | 12 | 16 |
| ESFP | 15 | 14 | 22 | 11 | 17 |
| INTJ | 13 | 23 | 6 | 16 | 20 |
| ISTJ | 16 | 25 | 6 | 15 | 22 |
| INFJ | 20 | 19 | 12 | 18 | 17 |
| ISFJ | 21 | 20 | 12 | 19 | 18 |
| INTP | 12 | 16 | 7 | 18 | 16 |
| ISTP | 12 | 17 | 6 | 17 | 19 |
| INFP | 18 | 14 | 14 | 20 | 14 |
| ISFP | 17 | 15 | 13 | 19 | 16 |

## Question / Choice / Weight Table

Weight order in each row:

```text
[sense, report, reaction, distance, survival]
```

### Q1. 팀장님이 “이거 오늘 안에 되지?”라고 물었다. 사실 좀 애매하다.

| Choice | Weights |
| --- | --- |
| “가능합니다”라고 하고 일단 달린다 | `[1, -2, 0, 0, -1]` |
| “어디까지 필요하신지 먼저 확인해보겠습니다”라고 말한다 | `[2, 3, 1, 1, 2]` |
| “오늘은 어렵습니다”라고 바로 말한다 | `[0, 1, -1, 1, 0]` |
| 조용히 야근 각을 본다 | `[1, -3, -1, 0, -2]` |

### Q2. 팀장님이 갑자기 “잠깐 얘기 좀 할까?”라고 한다.

| Choice | Weights |
| --- | --- |
| 머릿속으로 최근 실수를 빠르게 검색한다 | `[2, -1, -1, 0, 0]` |
| 침착하게 “네, 지금 갈게요”라고 한다 | `[1, 1, 1, 1, 2]` |
| “무슨 일인데요?”라고 바로 묻는다 | `[0, 1, 1, -1, 0]` |
| 일단 메신저 상태를 오프라인으로 바꾸고 싶어진다 | `[-1, -3, -2, 2, -3]` |

### Q3. 회의 중 팀장님이 살짝 재미없는 농담을 했다.

| Choice | Weights |
| --- | --- |
| 자연스럽게 웃으며 분위기를 맞춘다 | `[2, 0, 3, 1, 1]` |
| 옅은 미소만 짓고 넘어간다 | `[1, 0, 1, 2, 1]` |
| 못 들은 척 노트북을 본다 | `[-2, 0, -3, 1, -1]` |
| 한 술 더 떠서 받아친다 | `[1, 0, 2, -1, 0]` |

### Q4. 업무 중 실수가 생겼다. 아직 팀장님은 모른다.

| Choice | Weights |
| --- | --- |
| 바로 상황과 해결안을 같이 공유한다 | `[2, 3, 1, 1, 2]` |
| 혼자 해결한 뒤 나중에 말한다 | `[1, 0, 0, 1, 0]` |
| 들키기 전까지 최대한 조용히 처리한다 | `[-1, -3, -1, 0, -2]` |
| 관련된 사람들에게 먼저 물어보고 정리해서 보고한다 | `[2, 2, 1, 1, 2]` |

### Q5. 팀장님이 퇴근 직전에 “이거 간단히만 봐줄래?”라고 한다.

| Choice | Weights |
| --- | --- |
| “네, 확인해보겠습니다” 하고 바로 본다 | `[1, 1, 1, 0, 1]` |
| “언제까지 필요하실까요?”라고 먼저 묻는다 | `[2, 2, 1, 1, 2]` |
| “내일 오전에 봐도 될까요?”라고 말한다 | `[0, 1, 0, 2, 1]` |
| 말은 웃으며 받지만 속으로 울고 있다 | `[1, -1, 1, 0, -1]` |

### Q6. 팀장님이 업무 방향을 갑자기 바꿨다.

| Choice | Weights |
| --- | --- |
| 바뀐 방향 기준으로 바로 다시 정리한다 | `[1, 2, 0, 0, 2]` |
| 왜 바뀌었는지 먼저 확인한다 | `[2, 1, 1, 1, 1]` |
| 기존에 한 일이 아까워서 살짝 반박한다 | `[0, 0, -1, -1, -1]` |
| 일단 알겠다고 하고 혼자 다시 해석한다 | `[1, -1, -1, 1, 0]` |

### Q7. 팀장님이 단체방에 공지를 올렸다.

| Choice | Weights |
| --- | --- |
| 바로 확인하고 필요한 답변을 남긴다 | `[1, 3, 1, 0, 2]` |
| 읽긴 했지만 답장은 상황을 보고 한다 | `[0, 0, 0, 1, 0]` |
| 누가 먼저 답하는지 기다린다 | `[1, -1, -1, 0, -1]` |
| 공지 내용을 따로 정리해서 챙긴다 | `[2, 2, 0, 1, 2]` |

### Q8. 팀장님이 “요즘 일 많지?”라고 묻는다.

| Choice | Weights |
| --- | --- |
| “괜찮습니다”라고 말하고 버틴다 | `[1, -1, 1, 0, -1]` |
| “우선순위만 한번 정리해주시면 좋겠습니다”라고 말한다 | `[2, 3, 1, 1, 3]` |
| “솔직히 좀 많습니다”라고 말한다 | `[0, 1, 0, 1, 1]` |
| 웃으며 “살아는 있습니다”라고 답한다 | `[1, 0, 2, 0, 1]` |

### Q9. 팀장님이 내가 한 일을 칭찬했다.

| Choice | Weights |
| --- | --- |
| “감사합니다. 더 챙겨보겠습니다”라고 답한다 | `[1, 1, 2, 1, 2]` |
| “아닙니다, 별거 아닙니다”라고 낮춘다 | `[1, 0, 0, 2, 1]` |
| “이번엔 좀 잘 된 것 같습니다”라고 말한다 | `[0, 1, 1, 0, 1]` |
| 어색해서 웃기만 한다 | `[0, -1, -1, 1, 0]` |

### Q10. 팀장님과 의견이 다르다.

| Choice | Weights |
| --- | --- |
| 바로 반대 의견을 말한다 | `[0, 1, -1, -2, -1]` |
| 먼저 팀장님 의견을 정리한 뒤 내 의견을 말한다 | `[2, 3, 1, 1, 2]` |
| 일단 따른 뒤 나중에 결과로 보여준다 | `[1, 1, 0, 1, 1]` |
| 회의 후 따로 메시지로 조심스럽게 말한다 | `[2, 2, 1, 2, 2]` |

## Trait Total Range Per Full Test

Across 10 answers, the reachable total range per trait is:

| Trait | Min | Max |
| --- | ---: | ---: |
| `sense_score` | -4 | 19 |
| `report_score` | -13 | 21 |
| `reaction_score` | -11 | 14 |
| `distance_score` | -5 | 15 |
| `survival_score` | -13 | 20 |

This explains why some MBTI expectation profiles are hard to reach:

- several MBTIs expect `report_score` 23 to 25, but the quiz max is 21
- several MBTIs expect `distance_score` up to 20, but the quiz max is 15
- several MBTIs expect `reaction_score` up to 22, but the quiz max is 14

## Reachable Final Score Range By MBTI

Computed from all `4^10 = 1,048,576` possible answer combinations.

| MBTI | Reachable Min | Reachable Max |
| --- | ---: | ---: |
| ENFJ | 0 | 80 |
| ENFP | 0 | 78 |
| ENTJ | 0 | 88 |
| ENTP | 0 | 82 |
| ESFJ | 0 | 74 |
| ESFP | 0 | 78 |
| ESTJ | 0 | 78 |
| ESTP | 0 | 82 |
| INFJ | 0 | 76 |
| INFP | 0 | 72 |
| INTJ | 0 | 76 |
| INTP | 0 | 86 |
| ISFJ | 0 | 72 |
| ISFP | 0 | 80 |
| ISTJ | 0 | 72 |
| ISTP | 0 | 86 |

## Findings

### Confirmed correct

- Trait score accumulation is implemented correctly.
- Stored session trait totals match saved answer data.
- Final score calculation matches code and DB records.
- Result type mapping is consistent with current score bands.

### Confirmed design problem

- `boss_favorite (90-100)` is unreachable for all 16 MBTI types with the current question weights and formula.
- In practice, the top result tier can never be returned.

### Likely balancing problem

- The model is very punitive because every 1-point trait mismatch costs 2 final points.
- Some boss expectation targets are above the reachable maximum generated by the quiz.
- That combination compresses many outcomes into lower bands, especially `0-59`.

### Implementation risk

- If `result_types` is missing or mis-seeded for a score band, session creation falls back to in-memory metadata, but `test_sessions.result_type_id` is saved as `NULL`.
- Later, `getResultBySessionKey()` returns `null` when `result_type_id` is missing, so the result page would fail even though the session was computed.

Code reference:

- [lib/boss-fit/data.ts](/Users/jin/zhyun/dev/boss-fit/boss-fit/lib/boss-fit/data.ts)
- [app/api/sessions/route.ts](/Users/jin/zhyun/dev/boss-fit/boss-fit/app/api/sessions/route.ts)

## Recommendation

If the intent is to actually use all five result bands:

1. Lower MBTI expectation targets to fit inside reachable trait ranges.
2. Or reduce the final penalty multiplier from `2` to `1`.
3. Or widen result score bands.
4. Or adjust choice weights so the quiz can produce much higher trait totals.

The single biggest issue right now is not a bug in code execution. It is a calibration problem in the scoring design.
