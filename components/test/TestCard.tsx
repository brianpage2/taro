import Link from 'next/link'
import type { TestMeta } from '@/types/test'

const TEST_EMOJI: Record<string, string> = {
  mbti: '🧩', 'mbti-short': '🧩',
  depression: '💙', burnout: '🔥', adhd: '⚡', anxiety: '😰', stress: '😮‍💨',
  psychopath: '🎭', narcissist: '🪞',
  big5: '🌟', 'big5-short': '🌟',
  enneagram: '⭕', 'enneagram-short': '⭕',
  'animal-personality': '🦁',
  iq: '🧠',
  attachment: '💞', 'self-esteem': '✨', perfectionism: '🎯',
}

interface TestCardProps {
  test: TestMeta
  shortVersion?: TestMeta
}

export default function TestCard({ test, shortVersion }: TestCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={`/${test.slug}`}
        className="group block bg-canvas border border-hairline rounded-apple p-6 transition-all duration-200 hover:border-primary hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
        style={{ textDecoration: 'none' }}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2
            className="text-[17px] font-semibold text-ink"
            style={{ letterSpacing: '-0.374px', lineHeight: '1.24' }}
          >
            {test.title}
          </h2>
          <span className="shrink-0 text-xl">{TEST_EMOJI[test.slug] ?? '📝'}</span>
        </div>
        <p
          className="text-[14px] text-ink-faint mb-4 line-clamp-2"
          style={{ letterSpacing: '-0.224px', lineHeight: '1.43' }}
        >
          {test.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-[12px] text-ink-faint" style={{ letterSpacing: '-0.12px' }}>
            <span>{test.questionCount}문항</span>
            <span>약 {test.estimatedMinutes}분</span>
          </div>
          <span className="text-[13px] text-white font-normal bg-primary px-3 py-1.5 rounded-pill" style={{ letterSpacing: '-0.12px' }}>
            시작하기
          </span>
        </div>
      </Link>

      {shortVersion && (
        <Link
          href={`/${shortVersion.slug}`}
          className="flex items-center justify-between px-4 py-3 rounded-apple transition-all duration-200 hover:shadow-sm active:scale-[0.98] border border-primary/30 bg-primary/5"
          style={{ textDecoration: 'none' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white bg-primary px-2 py-0.5 rounded-pill font-semibold" style={{ letterSpacing: '0.02em' }}>간단</span>
            <span className="text-[14px] text-ink font-medium" style={{ letterSpacing: '-0.224px' }}>
              {shortVersion.questionCount}문항 · 약 {shortVersion.estimatedMinutes}분
            </span>
          </div>
          <span className="text-[13px] text-white font-normal bg-primary px-3 py-1.5 rounded-pill" style={{ letterSpacing: '-0.12px' }}>
            빠른 버전
          </span>
        </Link>
      )}
    </div>
  )
}
