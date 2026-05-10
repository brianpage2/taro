import type { Metadata } from 'next'
import Link from 'next/link'
import { TEST_REGISTRY } from '@/data/index'

export const metadata: Metadata = {
  title: '소개',
  description: '무료 심리테스트 사이트 소개. MBTI, 우울증(PHQ-9), 불안(GAD-7), 번아웃, ADHD, Big5, 에니어그램 등 국제 검증 척도 기반 심리테스트를 무료로 제공합니다.',
  alternates: { canonical: 'https://taro.codedanswer.com/about' },
}

const SOURCES = [
  { test: 'PHQ-9 (우울증)', source: 'WHO / Pfizer — 완전 공개도메인', url: 'https://www.phqscreeners.com/', color: '#065f46' },
  { test: 'GAD-7 (불안)', source: 'Spitzer et al. — 공개 임상척도', url: 'https://www.phqscreeners.com/', color: '#064e3b' },
  { test: 'PSS-10 (스트레스)', source: 'Cohen et al. — 공개 심리척도', url: 'https://www.psy.cmu.edu/~scohen/scales.html', color: '#1e3a8a' },
  { test: 'ASRS (ADHD)', source: 'WHO / Harvard — 공개 임상척도', url: 'https://www.hcp.med.harvard.edu/ncs/asrs.php', color: '#1e40af' },
  { test: 'CBI (번아웃)', source: 'Copenhagen Burnout Inventory — 공개도메인', url: 'https://www.ami.au.dk/research/copenhagen-burnout-inventory-cbi/', color: '#3730a3' },
  { test: 'Big5 성격', source: 'IPIP 한국어 공식 번역본', url: 'https://ipip.ori.org/', color: '#4c1d95' },
  { test: 'MBTI 유형', source: 'IPIP 공개도메인 기반 자체 작성', url: 'https://ipip.ori.org/', color: '#5b21b6' },
  { test: '에니어그램', source: 'OEPS — OpenPsychometrics (CC BY-NC-SA 4.0)', url: 'https://openpsychometrics.org/tests/OEPS/', color: '#92400e' },
]

const CATEGORIES = [
  {
    title: '성격 테스트',
    desc: 'MBTI, Big5, 에니어그램, 애착 유형, 자존감, 완벽주의 — 나를 더 깊이 이해하는 검사',
    count: TEST_REGISTRY.filter(t => t.category === '성격').length,
  },
  {
    title: '심리 자가진단',
    desc: '국제 검증 임상척도 기반. 우울증·불안·스트레스·번아웃·ADHD 위험도 체크',
    count: TEST_REGISTRY.filter(t => t.category === '임상').length,
  },
  {
    title: '인지·재미',
    desc: 'IQ 논리 테스트, 동물 성격 유형 등 가볍게 즐기는 검사',
    count: TEST_REGISTRY.filter(t => t.category === '인지' || t.category === '재미').length,
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* 히어로 */}
      <section className="bg-parchment text-center px-5 py-20 md:py-28">
        <nav className="mb-8 text-[12px] text-ink-faint" style={{ letterSpacing: '-0.12px' }}>
          <Link href="/" className="hover:text-primary transition-colors">홈</Link>
          <span className="mx-2">/</span>
          <span>소개</span>
        </nav>
        <h1
          className="font-semibold text-ink mb-4"
          style={{ fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: '1.07', letterSpacing: '-0.28px' }}
        >
          무료 심리테스트
        </h1>
        <p
          className="text-ink-faint max-w-[560px] mx-auto"
          style={{ fontSize: '21px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
        >
          국제적으로 검증된 심리척도와 성격 검사를 누구나 무료로 체험할 수 있도록 만들었습니다.
        </p>
      </section>

      {/* 미션 */}
      <section className="bg-canvas">
        <div className="max-w-[640px] mx-auto px-5 py-20">
          <h2
            className="font-semibold text-ink mb-8"
            style={{ fontSize: '34px', lineHeight: '1.10', letterSpacing: '-0.374px' }}
          >
            왜 만들었나요?
          </h2>
          <div className="space-y-5">
            {[
              '심리 검사는 자신을 이해하는 강력한 도구입니다. 그런데 검증된 검사들은 대부분 유료이거나, 한국어로 제대로 된 서비스가 드뭅니다.',
              'WHO·Harvard·IPIP 등에서 공개한 신뢰할 수 있는 척도들을 한국어로 번역·재구성하여, 광고 없이 완전 무료로 제공하는 것이 이 서비스의 목표입니다.',
              '단, 모든 테스트는 교육·자기 이해 목적입니다. 임상 진단은 반드시 전문 의료기관에서 받으시기 바랍니다.',
            ].map((text, i) => (
              <p
                key={i}
                className="text-ink"
                style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 제공 테스트 카테고리 */}
      <section className="bg-tile-1">
        <div className="max-w-[640px] mx-auto px-5 py-20">
          <h2
            className="font-semibold text-white mb-10"
            style={{ fontSize: '34px', lineHeight: '1.10', letterSpacing: '-0.374px' }}
          >
            제공하는 테스트
          </h2>
          <div className="space-y-4">
            {CATEGORIES.map(({ title, desc, count }) => (
              <div key={title} className="bg-tile-2 rounded-apple p-6 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-white" style={{ fontSize: '17px', letterSpacing: '-0.374px' }}>
                    {title}
                  </p>
                  <span className="text-[12px] text-muted-dark bg-white/10 px-2.5 py-1 rounded-pill">
                    {count}종
                  </span>
                </div>
                <p className="text-muted-dark" style={{ fontSize: '14px', lineHeight: '1.43', letterSpacing: '-0.224px' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block px-[22px] py-[11px] bg-primary text-white text-[17px] font-normal rounded-pill transition-all active:scale-95 hover:opacity-90"
              style={{ letterSpacing: '-0.374px' }}
            >
              전체 테스트 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 문항 출처 */}
      <section className="bg-canvas">
        <div className="max-w-[640px] mx-auto px-5 py-20">
          <h2
            className="font-semibold text-ink mb-3"
            style={{ fontSize: '34px', lineHeight: '1.10', letterSpacing: '-0.374px' }}
          >
            문항 출처
          </h2>
          <p
            className="text-ink-faint mb-10"
            style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
          >
            모든 임상 척도는 공개도메인 또는 허용 라이선스 기반으로 사용합니다.
          </p>
          <div className="space-y-3">
            {SOURCES.map(({ test, source, url, color }) => (
              <a
                key={test}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-parchment border border-hairline rounded-apple px-5 py-4 transition-all hover:border-primary hover:shadow-sm"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink" style={{ fontSize: '14px', letterSpacing: '-0.224px' }}>
                    {test}
                  </p>
                  <p className="text-ink-faint" style={{ fontSize: '12px', letterSpacing: '-0.12px' }}>
                    {source}
                  </p>
                </div>
                <span className="text-[11px] text-primary shrink-0">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 면책 */}
      <section className="bg-tile-1">
        <div className="max-w-[640px] mx-auto px-5 py-16 text-center">
          <p
            className="font-semibold text-white mb-4"
            style={{ fontSize: '17px', letterSpacing: '-0.374px' }}
          >
            ⚠️ 의료 면책 고지
          </p>
          <p
            className="text-muted-dark"
            style={{ fontSize: '14px', lineHeight: '1.6', letterSpacing: '-0.224px' }}
          >
            이 서비스의 모든 테스트는 교육 및 자기 이해 목적으로 제공되며,
            의학적 진단을 대체하지 않습니다.<br />
            PHQ-9, GAD-7, ASRS 등 임상 척도에서 높은 점수가 나온 경우,
            반드시 정신건강의학과 전문의 상담을 받으시기 바랍니다.
          </p>
        </div>
      </section>

      {/* 연락처 */}
      <section className="bg-parchment">
        <div className="max-w-[640px] mx-auto px-5 py-20">
          <h2
            className="font-semibold text-ink mb-6"
            style={{ fontSize: '34px', lineHeight: '1.10', letterSpacing: '-0.374px' }}
          >
            문의
          </h2>
          <div className="bg-canvas border border-hairline rounded-apple p-8">
            <p
              className="text-ink mb-6"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
            >
              테스트 오류, 문항 관련 문의, 저작권 문제 등은 아래 이메일로 연락해주세요.
              최대한 빠르게 답변드리겠습니다.
            </p>
            <a
              href="mailto:brianpage.kr@gmail.com"
              className="inline-flex items-center gap-2 px-[22px] py-[11px] border border-primary text-primary text-[17px] font-normal rounded-pill transition-all active:scale-95 hover:bg-primary hover:text-white"
              style={{ letterSpacing: '-0.374px' }}
            >
              brianpage.kr@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
