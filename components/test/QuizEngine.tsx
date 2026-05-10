'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { TestData } from '@/types/test'
import type { Answer } from '@/lib/scoring'
import Image from 'next/image'
import QuestionCard from './QuestionCard'
import ProgressBar from './ProgressBar'


interface QuizEngineProps {
  test: TestData
}

const ANIMAL_EMOJI: Record<string, string> = {
  lion: '🦁', fox: '🦊', cat: '🐱', bear: '🐻',
  penguin: '🐧', owl: '🦉', dog: '🐶', rabbit: '🐰',
}

function ResultTypeIntro({ test, onStart, resumeMode }: { test: TestData; onStart: () => void; resumeMode?: boolean }) {
  const { scoring } = test
  const isMbti = scoring.typeMap && Object.keys(scoring.typeMap).length === 16
  const isAnimal = !!scoring.characterMap
  const types = scoring.typeMap
    ? Object.values(scoring.typeMap)
    : scoring.characterMap
    ? Object.values(scoring.characterMap)
    : null

  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-[640px] mx-auto px-5 py-12">
        <p className="text-[14px] text-ink-faint mb-2" style={{ letterSpacing: '-0.224px' }}>
          {test.shortTitle}
        </p>
        <h1
          className="font-semibold text-ink mb-2"
          style={{ fontSize: '28px', lineHeight: '1.14', letterSpacing: '-0.374px' }}
        >
          결과 유형 미리보기
        </h1>
        <p className="text-ink-faint mb-8" style={{ fontSize: '14px', letterSpacing: '-0.224px' }}>
          {test.questionCount}문항 · 약 {test.estimatedMinutes}분 소요
        </p>

        {isMbti && (
          <div className="mb-10">
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(scoring.typeMap!).map((type) => (
                <div key={type} className="rounded-apple overflow-hidden">
                  <Image
                    src={`/og/mbti-${type}.jpg`}
                    alt={`${type} ${scoring.typeMap![type].label}`}
                    width={1200}
                    height={630}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {!isMbti && types && (
          <div className="space-y-3 mb-10">
            {types.map((t) => (
              <div key={t.id} className="bg-canvas border border-hairline rounded-apple p-5 flex items-center gap-4">
                {isAnimal && (
                  <span className="text-4xl shrink-0">{ANIMAL_EMOJI[t.id] ?? '🐾'}</span>
                )}
                <div>
                  <p className="font-semibold text-ink mb-1" style={{ fontSize: '15px', letterSpacing: '-0.224px' }}>
                    {t.label}
                  </p>
                  <p className="text-ink-faint" style={{ fontSize: '13px', lineHeight: '1.43', letterSpacing: '-0.12px' }}>
                    {t.traits.slice(0, 3).join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {scoring.type === 'score-range' && scoring.ranges && (
          <div className="space-y-3 mb-10">
            {scoring.ranges.map((r) => (
              <div key={r.label} className="bg-canvas border border-hairline rounded-apple p-5">
                <p className="font-semibold text-ink mb-1" style={{ fontSize: '15px', letterSpacing: '-0.224px' }}>
                  {r.label}
                </p>
                <p className="text-ink-faint" style={{ fontSize: '13px', lineHeight: '1.43', letterSpacing: '-0.12px' }}>
                  {r.description.slice(0, 55)}…
                </p>
              </div>
            ))}
          </div>
        )}

        {scoring.type === 'multi-axis' && scoring.axes && (
          <div className="space-y-3 mb-10">
            {scoring.axes.map((a) => (
              <div key={a.id} className="bg-canvas border border-hairline rounded-apple p-5">
                <p className="font-semibold text-ink mb-1" style={{ fontSize: '15px', letterSpacing: '-0.224px' }}>
                  {a.label}
                </p>
                <p className="text-ink-faint" style={{ fontSize: '13px', letterSpacing: '-0.12px' }}>
                  {a.lowLabel} ↔ {a.highLabel}
                </p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onStart}
          className="w-full py-3 bg-primary text-white text-[17px] font-normal rounded-pill transition-all active:scale-95 hover:opacity-90"
          style={{ letterSpacing: '-0.374px' }}
        >
          {resumeMode ? '계속 풀기' : '테스트 시작하기'}
        </button>
      </div>
    </div>
  )
}

export default function QuizEngine({ test }: QuizEngineProps) {
  const router = useRouter()
  const storageKey = `quiz_progress_${test.slug}`

  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [selectedKey, setSelectedKey] = useState<string | undefined>(undefined)
  const [hydrated, setHydrated] = useState(false)

  // 저장된 진행상황 복원
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(storageKey)
      if (saved) {
        const { currentIndex: idx, answers: ans, started: st } = JSON.parse(saved)
        if (st && Array.isArray(ans) && ans.length > 0) {
          setStarted(true)
          setCurrentIndex(idx)
          setAnswers(ans)
        }
      }
    } catch {}
    setHydrated(true)
  }, [storageKey])

  // 진행상황 자동 저장
  useEffect(() => {
    if (!hydrated || !started) return
    try {
      sessionStorage.setItem(storageKey, JSON.stringify({ currentIndex, answers, started }))
    } catch {}
  }, [currentIndex, answers, started, hydrated, storageKey])

  const currentQuestion = test.questions[currentIndex]
  const isLast = currentIndex === test.questions.length - 1

  const getDefaultValue = (q: typeof currentQuestion): number => {
    if (q.options) {
      const mid = Math.floor(q.options.length / 2)
      return q.options[mid].value
    }
    if (q.type === 'likert5') return 3
    if (q.type === 'likert4') return 2
    if (q.type === 'frequency4') return 1
    return 3
  }

  const isMcq = currentQuestion.type === 'mcq' || !!currentQuestion.options
  const effectiveValue = isMcq ? selectedValue : (selectedValue ?? getDefaultValue(currentQuestion))

  const handleAnswer = (value: number, key?: string) => {
    setSelectedValue(value)
    setSelectedKey(key)
  }

  const handleNext = useCallback(() => {
    const defaultVal = currentQuestion.options
      ? currentQuestion.options[Math.floor(currentQuestion.options.length / 2)].value
      : currentQuestion.type === 'likert5' ? 3 : currentQuestion.type === 'likert4' ? 2 : 1
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      value: selectedValue ?? defaultVal,
      key: selectedKey,
    }
    const newAnswers = [...answers, newAnswer]

    if (isLast) {
      try { sessionStorage.removeItem(storageKey) } catch {}
      const encoded = encodeURIComponent(JSON.stringify(newAnswers))
      router.push(`/${test.slug}/result?d=${encoded}`)
      return
    }

    setAnswers(newAnswers)
    setCurrentIndex((i) => i + 1)
    setSelectedValue(null)
    setSelectedKey(undefined)
  }, [selectedValue, selectedKey, currentQuestion, answers, isLast, test.slug, router, storageKey])

  const handlePrev = () => {
    if (currentIndex === 0) return
    const prev = answers[currentIndex - 1]
    setCurrentIndex((i) => i - 1)
    setSelectedValue(prev?.value ?? null)
    setSelectedKey(prev?.key)
    setAnswers((a) => a.slice(0, -1))
  }

  const handleRestart = () => {
    try { sessionStorage.removeItem(storageKey) } catch {}
    setStarted(false)
    setCurrentIndex(0)
    setAnswers([])
    setSelectedValue(null)
    setSelectedKey(undefined)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handleNext])

  if (!hydrated) return null

  if (!started) {
    return <ResultTypeIntro test={test} onStart={() => setStarted(true)} resumeMode={answers.length > 0} />
  }

  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-[640px] mx-auto px-5 py-12">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[14px] text-ink-faint" style={{ letterSpacing: '-0.224px' }}>
              {test.shortTitle}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setStarted(false)}
                className="text-[12px] text-primary hover:opacity-70 transition-opacity"
                style={{ letterSpacing: '-0.12px' }}
              >
                결과 유형 보기
              </button>
              <button
                onClick={handleRestart}
                className="text-[12px] text-ink-faint hover:text-primary transition-colors"
                style={{ letterSpacing: '-0.12px' }}
              >
                처음부터
              </button>
            </div>
          </div>
          <ProgressBar current={currentIndex + 1} total={test.questions.length} />
        </div>

        <div className="bg-canvas rounded-apple p-8 mb-8">
          <p className="text-[12px] text-ink-faint mb-6" style={{ letterSpacing: '-0.12px' }}>
            Q{currentIndex + 1}.
          </p>
          <QuestionCard
            question={currentQuestion}
            selectedValue={effectiveValue}
            selectedKey={selectedKey}
            isDefault={selectedValue === null && !isMcq}
            onAnswer={handleAnswer}
          />
        </div>

        <div className="flex gap-3">
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="flex-1 py-3 border border-hairline text-ink-faint text-[14px] rounded-pill transition-all active:scale-95 hover:border-ink hover:text-ink"
              style={{ letterSpacing: '-0.224px' }}
            >
              이전
            </button>
          )}
          <button
            onClick={handleNext}
            className="flex-1 py-3 bg-primary text-white text-[17px] font-normal rounded-pill transition-all active:scale-95"
            style={{ letterSpacing: '-0.374px' }}
          >
            {isLast ? '결과 보기' : '다음'}
          </button>
        </div>
        <p className="text-center text-ink-faint mt-3" style={{ fontSize: '12px', letterSpacing: '-0.12px' }}>
          Enter 키를 눌러도 넘어갑니다
        </p>
      </div>
    </div>
  )
}
