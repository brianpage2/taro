import type { TypeResult, ScoreRange } from '@/types/test'
import Image from 'next/image'
import Link from 'next/link'
import MbtiTypeGrid from './MbtiTypeGrid'

interface TypeResultProps {
  result: TypeResult
  testSlug: string
}

interface ScoreResultProps {
  range: ScoreRange
  score: number
  testSlug: string
  scoreLabel?: string
  maxScore?: number
}

interface MultiAxisResultProps {
  axes: { axis: { id: string; label: string; highLabel: string; lowLabel: string; description: string }; score: number }[]
  testSlug: string
}

const MBTI_SLUGS = new Set(['mbti', 'mbti-short'])

function MbtiResultCard({ result }: { result: TypeResult }) {
  return (
    <div className="rounded-apple overflow-hidden mb-8">
      <Image
        src={`/og/mbti-${result.id}.jpg`}
        alt={`${result.id} ${result.label}`}
        width={1200}
        height={630}
        className="w-full h-auto"
        priority
      />
    </div>
  )
}

export function TypeResultDisplay({ result, testSlug }: TypeResultProps) {
  const isMbti = MBTI_SLUGS.has(testSlug)

  return (
    <div>
      {/* MBTI: 결과 카드 (유형 + 특징) */}
      {isMbti && <MbtiResultCard result={result} />}

      {/* MBTI: 16유형 매트릭스 */}
      {isMbti && (
        <div className="mb-8">
          <MbtiTypeGrid activeType={result.id} />
        </div>
      )}

      {/* 비 MBTI: 유형 이름만 */}
      {!isMbti && (
        <div className="text-center mb-8">
          <div
            className="inline-block text-[40px] font-semibold text-ink mb-2"
            style={{ lineHeight: '1.10', letterSpacing: '-0.374px' }}
          >
            {result.label}
          </div>
        </div>
      )}

      {/* 상세 설명 */}
      <div className="bg-canvas border border-hairline rounded-apple p-8 mb-6">
        {result.description.split('\n\n').map((para, i) => (
          <p
            key={i}
            className={`text-ink ${i > 0 ? 'mt-5' : ''}`}
            style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* 비 MBTI: 특징 태그 */}
      {!isMbti && result.traits.length > 0 && (
        <div className="mb-6">
          <p
            className="text-[14px] font-semibold text-ink-faint mb-3"
            style={{ letterSpacing: '-0.224px' }}
          >
            주요 특성
          </p>
          <div className="flex flex-wrap gap-2">
            {result.traits.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 bg-parchment border border-hairline rounded-pill text-[14px] text-ink"
                style={{ letterSpacing: '-0.224px' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <RetakeButton testSlug={testSlug} />
    </div>
  )
}

export function ScoreResultDisplay({ range, score, testSlug, scoreLabel, maxScore }: ScoreResultProps) {
  return (
    <div>
      <div className="text-center mb-8">
        <p
          className="text-[56px] font-semibold text-ink mb-1"
          style={{ lineHeight: '1.07', letterSpacing: '-0.28px' }}
        >
          {scoreLabel ?? `${score}점`}
        </p>
        {!scoreLabel && maxScore && (
          <p className="text-[15px] text-ink-faint mb-2" style={{ letterSpacing: '-0.224px' }}>
            {maxScore}점 만점
          </p>
        )}
        <p
          className="text-[21px] font-semibold text-ink-faint"
          style={{ lineHeight: '1.19' }}
        >
          {range.label}
        </p>
      </div>

      <div className="bg-canvas border border-hairline rounded-apple p-8 mb-6">
        <p
          className="text-ink mb-6"
          style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
        >
          {range.description}
        </p>
        {range.recommendation && (
          <div className="border-t border-divider pt-6">
            <p
              className="text-[14px] font-semibold text-ink-faint mb-2"
              style={{ letterSpacing: '-0.224px' }}
            >
              권장 사항
            </p>
            <p
              className="text-ink"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
            >
              {range.recommendation}
            </p>
          </div>
        )}
      </div>

      <RetakeButton testSlug={testSlug} />
    </div>
  )
}

export function MultiAxisResultDisplay({ axes, testSlug }: MultiAxisResultProps) {
  return (
    <div>
      <p
        className="text-center text-ink-faint mb-8"
        style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
      >
        5가지 성격 차원별 점수
      </p>

      <div className="space-y-4 mb-8">
        {axes.map(({ axis, score }) => (
          <div key={axis.id} className="bg-canvas border border-hairline rounded-apple p-6">
            <div className="flex justify-between items-center mb-3">
              <span
                className="font-semibold text-ink"
                style={{ fontSize: '17px', letterSpacing: '-0.374px' }}
              >
                {axis.label}
              </span>
              <span
                className="text-primary font-semibold"
                style={{ fontSize: '17px', letterSpacing: '-0.374px' }}
              >
                {score}
              </span>
            </div>
            <div className="w-full bg-divider rounded-full h-[2px] mb-3">
              <div
                className="bg-primary h-[2px] rounded-full"
                style={{ width: `${score}%` }}
              />
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-[12px] text-ink-faint" style={{ letterSpacing: '-0.12px' }}>
                {axis.lowLabel}
              </span>
              <span className="text-[12px] text-ink-faint" style={{ letterSpacing: '-0.12px' }}>
                {axis.highLabel}
              </span>
            </div>
            <p className="text-[14px] text-ink-faint" style={{ letterSpacing: '-0.224px', lineHeight: '1.43' }}>
              {axis.description}
            </p>
          </div>
        ))}
      </div>

      <RetakeButton testSlug={testSlug} />
    </div>
  )
}

export function CharacterResultDisplay({ result, testSlug }: TypeResultProps) {
  const emoji = getAnimalEmoji(result.id)

  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-7xl mb-4">{emoji}</p>
        <div
          className="text-[40px] font-semibold text-ink"
          style={{ lineHeight: '1.10', letterSpacing: '-0.374px' }}
        >
          {result.label}
        </div>
      </div>

      <div className="bg-canvas border border-hairline rounded-apple p-8 mb-6">
        {result.description.split('\n\n').map((para, i) => (
          <p
            key={i}
            className={`text-ink ${i > 0 ? 'mt-5' : ''}`}
            style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
          >
            {para}
          </p>
        ))}
      </div>

      {result.traits.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {result.traits.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 bg-parchment border border-hairline rounded-pill text-[14px] text-ink"
                style={{ letterSpacing: '-0.224px' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <RetakeButton testSlug={testSlug} />
    </div>
  )
}

function RetakeButton({ testSlug }: { testSlug: string }) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <Link
        href={`/quiz/${testSlug}`}
        className="block w-full py-3 text-center border border-primary text-primary text-[17px] font-normal rounded-pill transition-all active:scale-95 hover:bg-primary hover:text-white"
        style={{ letterSpacing: '-0.374px' }}
      >
        다시 테스트하기
      </Link>
      <Link
        href="/"
        className="block w-full py-3 text-center bg-parchment border border-hairline text-ink text-[14px] font-normal rounded-pill transition-all active:scale-95 hover:border-ink"
        style={{ letterSpacing: '-0.224px' }}
      >
        다른 테스트 보기
      </Link>
    </div>
  )
}

function getAnimalEmoji(id: string): string {
  const map: Record<string, string> = {
    lion: '🦁', fox: '🦊', cat: '🐱', bear: '🐻',
    penguin: '🐧', owl: '🦉', dog: '🐶', rabbit: '🐰',
  }
  return map[id] ?? '🐾'
}
