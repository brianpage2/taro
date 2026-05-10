import type { Question, ScoringConfig, TypeResult, ScoreRange, Axis } from '@/types/test'

export type Answer = { questionId: number; value: number; key?: string }

// PHQ-9 / 번아웃 / ADHD / 사이코패스 / 나르시시스트: 합산 점수
export function scoreBySum(answers: Answer[], config: ScoringConfig): ScoreRange {
  const total = answers.reduce((sum, a) => sum + a.value, 0)
  const range = config.ranges!.find((r) => total >= r.min && total <= r.max)
  return range ?? config.ranges![config.ranges!.length - 1]
}

// MBTI: 4개 축별 E/I, S/N, T/F, J/P 우세 결정
// 문항 수 불균형을 보정하기 위해 축별 평균 점수로 비교
export function scoreMbti(answers: Answer[], config: ScoringConfig, questions?: Question[]): TypeResult {
  const axisScores: Record<string, number> = {}
  const axisCounts: Record<string, number> = {}

  for (const answer of answers) {
    const axis = answer.key ?? questions?.find(q => q.id === answer.questionId)?.axis
    if (!axis) continue
    axisScores[axis] = (axisScores[axis] ?? 0) + answer.value
    axisCounts[axis] = (axisCounts[axis] ?? 0) + 1
  }

  const avg = (axis: string) => axisCounts[axis] ? (axisScores[axis] ?? 0) / axisCounts[axis] : 0

  const type = `${avg('E') >= avg('I') ? 'E' : 'I'}${avg('S') >= avg('N') ? 'S' : 'N'}${avg('T') >= avg('F') ? 'T' : 'F'}${avg('J') >= avg('P') ? 'J' : 'P'}`
  return config.typeMap![type]
}

// 에니어그램: 9개 축 중 최고 점수
export function scoreByAxis(answers: Answer[], config: ScoringConfig): TypeResult {
  const axisScores: Record<string, number> = {}
  for (const answer of answers) {
    if (!answer.key) continue
    axisScores[answer.key] = (axisScores[answer.key] ?? 0) + answer.value
  }
  const topAxis = Object.entries(axisScores).sort((a, b) => b[1] - a[1])[0]?.[0]
  return config.typeMap![topAxis] ?? Object.values(config.typeMap!)[0]
}

// Big 5: 5개 차원별 0~100 백분율
export function scoreMultiAxis(
  answers: Answer[],
  questions: Question[],
  config: ScoringConfig
): { axis: Axis; score: number }[] {
  const axisScores: Record<string, { total: number; count: number; max: number }> = {}

  for (const q of questions) {
    if (!q.axis) continue
    const answer = answers.find((a) => a.questionId === q.id)
    if (!answer) continue

    const value = q.reverse ? (6 - answer.value) : answer.value

    if (!axisScores[q.axis]) {
      axisScores[q.axis] = { total: 0, count: 0, max: 0 }
    }
    axisScores[q.axis].total += value
    axisScores[q.axis].count += 1
    axisScores[q.axis].max += 5
  }

  return config.axes!.map((axis) => {
    const data = axisScores[axis.id]
    const score = data ? Math.round((data.total / data.max) * 100) : 50
    return { axis, score }
  })
}

// 동물 성격 / MCQ 카테고리: 가장 많이 선택된 key
export function scoreByCategory(answers: Answer[], config: ScoringConfig): TypeResult {
  const keyCounts: Record<string, number> = {}
  for (const answer of answers) {
    if (!answer.key) continue
    keyCounts[answer.key] = (keyCounts[answer.key] ?? 0) + 1
  }
  const topKey = Object.entries(keyCounts).sort((a, b) => b[1] - a[1])[0]?.[0]
  return config.characterMap![topKey] ?? Object.values(config.characterMap!)[0]
}

// 번아웃 CBI: 축별 평균으로 점수 계산
export function scoreCbi(answers: Answer[], questions: Question[], config: ScoringConfig): ScoreRange {
  const total = answers.reduce((sum, a) => sum + a.value, 0)
  const maxPossible = questions.length * 5
  const normalized = Math.round((total / maxPossible) * 100)
  const range = config.ranges!.find((r) => normalized >= r.min && normalized <= r.max)
  return range ?? config.ranges![config.ranges!.length - 1]
}

// frequency4 옵션 기본값
export const FREQUENCY4_OPTIONS = [
  { label: '전혀 없음', value: 0 },
  { label: '며칠', value: 1 },
  { label: '절반 이상', value: 2 },
  { label: '거의 매일', value: 3 },
]

// likert5 옵션 기본값
export const LIKERT5_OPTIONS = [
  { label: '전혀 그렇지 않다', value: 1 },
  { label: '그렇지 않다', value: 2 },
  { label: '보통이다', value: 3 },
  { label: '그렇다', value: 4 },
  { label: '매우 그렇다', value: 5 },
]

// likert4 옵션 기본값
export const LIKERT4_OPTIONS = [
  { label: '전혀 그렇지 않다', value: 1 },
  { label: '그렇지 않다', value: 2 },
  { label: '그렇다', value: 3 },
  { label: '매우 그렇다', value: 4 },
]
