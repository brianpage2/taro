'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo, useEffect, useState } from 'react'
import type { TestData } from '@/types/test'
import type { Answer } from '@/lib/scoring'
import {
  scoreMbti,
  scoreBySum,
  scoreMultiAxis,
  scoreByAxis,
  scoreByCategory,
  scoreCbi,
} from '@/lib/scoring'
import {
  TypeResultDisplay,
  ScoreResultDisplay,
  MultiAxisResultDisplay,
  CharacterResultDisplay,
} from '@/components/test/ResultDisplay'
import ShareButtons from '@/components/test/ShareButtons'
import Link from 'next/link'

export default function ResultContent({ slug }: { slug: string }) {
  const searchParams = useSearchParams()
  const [test, setTest] = useState<TestData | null>(null)

  useEffect(() => {
    import('@/lib/test-loader').then(({ getTestBySlug }) => {
      getTestBySlug(slug).then(setTest)
    })
  }, [slug])

  const answers: Answer[] = useMemo(() => {
    try {
      const d = searchParams.get('d')
      if (!d) return []
      return JSON.parse(decodeURIComponent(d))
    } catch {
      return []
    }
  }, [searchParams])

  if (!test) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <p className="text-ink-faint" style={{ fontSize: '17px', letterSpacing: '-0.374px' }}>
          결과를 불러오는 중…
        </p>
      </div>
    )
  }

  if (answers.length === 0) {
    return (
      <div className="min-h-screen bg-parchment flex flex-col items-center justify-center gap-6 px-5">
        <p className="text-ink-faint text-center" style={{ fontSize: '17px', letterSpacing: '-0.374px' }}>
          결과 데이터가 없습니다.
        </p>
        <Link
          href={`/quiz/${slug}`}
          className="px-[22px] py-[11px] bg-primary text-white text-[17px] rounded-pill active:scale-95"
          style={{ letterSpacing: '-0.374px' }}
        >
          테스트 다시 시작
        </Link>
      </div>
    )
  }

  const { scoring, questions } = test
  let resultNode: React.ReactNode = null
  let resultHeading = '나의 결과'
  let resultLabel: string | undefined

  if (scoring.type === 'type-description') {
    const result = scoreMbti(answers, scoring, questions)
    resultHeading = result.label
    resultLabel = result.label
    resultNode = <TypeResultDisplay result={result} testSlug={slug} />
  } else if (scoring.type === 'type-axis') {
    const result = scoreByAxis(answers, scoring)
    resultHeading = result.label
    resultLabel = result.label
    resultNode = <TypeResultDisplay result={result} testSlug={slug} />
  } else if (scoring.type === 'score-range') {
    const total = answers.reduce((s, a) => s + a.value, 0)
    const range = slug === 'burnout'
      ? scoreCbi(answers, questions, scoring)
      : scoreBySum(answers, scoring)
    let scoreLabel: string | undefined
    if (slug === 'iq') {
      const iq = total <= 9  ? Math.round(55 + total * (70 - 55) / 9)
               : total <= 16 ? Math.round(85 + (total - 10) * (100 - 85) / 6)
               : total <= 22 ? Math.round(110 + (total - 17) * (125 - 110) / 5)
               : Math.round(130 + (total - 23) * (145 - 130) / 7)
      scoreLabel = `IQ: ${iq}`
    }
    const maxScore = scoring.ranges![scoring.ranges!.length - 1].max
    resultLabel = range.label
    resultNode = <ScoreResultDisplay range={range} score={total} testSlug={slug} scoreLabel={scoreLabel} maxScore={maxScore} />
  } else if (scoring.type === 'multi-axis') {
    const axes = scoreMultiAxis(answers, questions, scoring)
    resultNode = <MultiAxisResultDisplay axes={axes} testSlug={slug} />
  } else if (scoring.type === 'image-character') {
    const result = scoreByCategory(answers, scoring)
    resultHeading = result.label
    resultLabel = result.label
    resultNode = <CharacterResultDisplay result={result} testSlug={slug} />
  }

  return (
    <div className="min-h-screen bg-parchment">
      <section className="text-center px-5 py-16">
        <p
          className="text-ink-faint mb-2"
          style={{ fontSize: '14px', letterSpacing: '-0.224px' }}
        >
          {test.title}
        </p>
        <h1
          className="font-semibold text-ink"
          style={{ fontSize: '34px', lineHeight: '1.10', letterSpacing: '-0.374px' }}
        >
          {resultHeading}
        </h1>
      </section>

      <section className="bg-canvas">
        <div className="max-w-[640px] mx-auto px-5 py-16">
          {resultNode}
        </div>
      </section>

      <section className="bg-parchment px-5 py-16">
        <ShareButtons title={test.title} resultLabel={resultLabel} testSlug={slug} />
      </section>

      {test.disclaimer && (
        <section className="bg-tile-1">
          <div className="max-w-[640px] mx-auto px-5 py-10 text-center">
            <p
              className="text-muted-dark"
              style={{ fontSize: '12px', lineHeight: '1.5', letterSpacing: '-0.12px' }}
            >
              {test.disclaimer}
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
