import type { Metadata } from 'next'
import { TEST_REGISTRY } from '@/data/index'
import TestCard from '@/components/test/TestCard'
import AdSlot from '@/components/ads/AdSlot'

export const metadata: Metadata = {
  title: '무료 심리테스트 | MBTI · 우울증 · 불안 · 스트레스 · 번아웃 · ADHD',
  description: '무료 심리테스트 모음. MBTI, 우울증(PHQ-9), 불안(GAD-7), 스트레스(PSS-10), 번아웃, ADHD, Big5, 에니어그램, 사이코패스, 완벽주의, IQ 테스트를 무료로 체험하세요.',
  alternates: { canonical: 'https://taro.codedanswer.com' },
  openGraph: {
    title: '무료 심리테스트 | MBTI · 우울증 · 번아웃 · ADHD',
    description: 'MBTI, 우울증, 불안, 스트레스, 번아웃, ADHD 등 다양한 심리테스트를 무료로 체험하세요.',
    url: 'https://taro.codedanswer.com',
    images: [{ url: 'https://taro.codedanswer.com/og?slug=', width: 1200, height: 630 }],
  },
}

const SHORT_VERSION_MAP: Record<string, string> = {
  mbti: 'mbti-short',
  big5: 'big5-short',
  enneagram: 'enneagram-short',
}

const SECTIONS = [
  {
    key: '성격',
    title: '성격 테스트',
    subtitle: '나의 성격 유형과 특성을 알아보세요',
    dark: false,
  },
  {
    key: '임상',
    title: '심리 자가진단',
    subtitle: '정신 건강 상태를 스스로 점검해보세요',
    dark: true,
  },
  {
    key: '인지',
    title: '인지 능력 테스트',
    subtitle: '논리력과 지능을 측정해보세요',
    dark: false,
  },
  {
    key: '재미',
    title: '재미있는 테스트',
    subtitle: '친구들과 함께 공유해보세요',
    dark: true,
  },
]

export default function HomePage() {
  return (
    <div>
      {/* 히어로 타일 */}
      <section className="bg-parchment text-center px-5 py-10 md:py-14">
        <h1
          className="font-semibold text-ink mb-4"
          style={{ fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: '1.07', letterSpacing: '-0.28px' }}
        >
          무료 심리테스트
        </h1>
        <p
          className="text-ink-faint max-w-[500px] mx-auto"
          style={{ fontSize: '21px', lineHeight: '1.19', letterSpacing: '0.231px' }}
        >
          MBTI, 우울증, 번아웃, ADHD 등 다양한 심리테스트를 무료로 체험하세요
        </p>
      </section>

      {/* 카테고리 타일 — 교대로 light/dark */}
      {SECTIONS.map(({ key, title, subtitle, dark }) => {
        const shortSlugs = new Set(Object.values(SHORT_VERSION_MAP))
        const baseTests = TEST_REGISTRY.filter((t) => t.category === key && !shortSlugs.has(t.slug))
        if (baseTests.length === 0) return null
        const tests = baseTests.flatMap((t) => {
          const shortSlug = SHORT_VERSION_MAP[t.slug]
          const short = shortSlug ? TEST_REGISTRY.find((s) => s.slug === shortSlug) : undefined
          return short ? [t, short] : [t]
        })

        return (
          <section
            key={key}
            className={dark ? 'bg-tile-1 text-white' : 'bg-canvas text-ink'}
          >
            <div className="max-w-[980px] mx-auto px-5 py-20">
              {/* 섹션 헤드 */}
              <div className="text-center mb-12">
                <h2
                  className={`font-semibold mb-3 ${dark ? 'text-white' : 'text-ink'}`}
                  style={{ fontSize: '40px', lineHeight: '1.10', letterSpacing: '-0.374px' }}
                >
                  {title}
                </h2>
                <p
                  className={dark ? 'text-muted-dark' : 'text-ink-faint'}
                  style={{ fontSize: '21px', lineHeight: '1.19' }}
                >
                  {subtitle}
                </p>
              </div>

              {/* 섹션당 광고 1개 — 카드 위 */}
              <div className="mb-8">
                <AdSlot slot="3089755852" format="horizontal" />
              </div>

              {/* 테스트 카드 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tests.map((test) => {
                  const shortSlug = SHORT_VERSION_MAP[test.slug]
                  const shortVersion = shortSlug ? TEST_REGISTRY.find(t => t.slug === shortSlug) : undefined
                  return <TestCard key={test.slug} test={test} shortVersion={shortVersion} />
                })}
              </div>
            </div>
          </section>
        )
      })}

      {/* 면책 고지 타일 */}
      <section className="bg-parchment border-t border-hairline">
        <div className="max-w-[640px] mx-auto px-5 py-12 text-center">
          <p
            className="text-ink-faint"
            style={{ fontSize: '12px', lineHeight: '1.5', letterSpacing: '-0.12px' }}
          >
            이 테스트들은 교육 및 오락 목적으로 제공되며 의학적 진단을 대체하지 않습니다.
            임상 증상이 있는 경우 전문 의료기관의 진료를 받으시기 바랍니다.
          </p>
        </div>
      </section>
    </div>
  )
}
