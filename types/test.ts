export type QuestionType =
  | 'likert5'     // 전혀 아니다 ~ 매우 그렇다 (5점)
  | 'likert4'     // 전혀 아니다 ~ 매우 그렇다 (4점)
  | 'frequency4'  // 전혀 없음 / 며칠 / 절반 이상 / 거의 매일 (PHQ-9 방식)
  | 'binary'      // 예 / 아니오
  | 'mcq'         // 객관식 (IQ 패턴 문제)

export type ResultType =
  | 'type-description' // MBTI: 축별 점수 비교로 유형 결정
  | 'type-axis'        // 에니어그램/애착 유형: 가장 높은 축 점수
  | 'score-range'      // PHQ-9, 번아웃: 총점 → 심각도 범위
  | 'multi-axis'       // Big5: 5개 차원 각각 점수
  | 'image-character'  // 동물 성격: 캐릭터 이미지 + 설명

export interface AnswerOption {
  label: string
  value: number
  key?: string // MBTI: 'E'|'I'|'S'|'N'|'T'|'F'|'J'|'P'
}

export interface Question {
  id: number
  text: string
  type: QuestionType
  options?: AnswerOption[]
  axis?: string     // MBTI/Big5: 어느 축에 해당하는지
  reverse?: boolean // 역문항 여부
  image?: string    // IQ: 이미지 문제일 경우 경로
}

export interface TypeResult {
  id: string
  label: string
  description: string
  traits: string[]
  imageUrl?: string
  compatibleWith?: string[]
}

export interface ScoreRange {
  min: number
  max: number
  label: string
  description: string
  recommendation?: string
}

export interface Axis {
  id: string
  label: string
  highLabel: string
  lowLabel: string
  description: string
}

export interface ScoringConfig {
  type: ResultType
  typeMap?: Record<string, TypeResult>
  ranges?: ScoreRange[]
  axes?: Axis[]
  characterMap?: Record<string, TypeResult>
}

export interface FAQ {
  question: string
  answer: string
}

export interface TestMeta {
  slug: string
  title: string
  shortTitle: string
  description: string
  keywords: string[]
  category: string
  questionCount: number
  estimatedMinutes: number
  ogImage: string
  lastModified: string
  canonical: string
  disclaimer?: string
}

export interface TestData extends TestMeta {
  longDescription: string
  faqs: FAQ[]
  questions: Question[]
  scoring: ScoringConfig
  sourceCredit?: string
  sourceCreditUrl?: string
}
