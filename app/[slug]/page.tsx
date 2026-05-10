import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TEST_REGISTRY, getAllSlugs, getTestMeta } from '@/data/index'
import AdSlot from '@/components/ads/AdSlot'
import { getTestBySlug } from '@/lib/test-loader'
import JsonLd from '@/components/seo/JsonLd'
import {
  buildTestMetadata,
  buildQuizJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from '@/lib/seo'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = getTestMeta(params.slug)
  if (!meta) return {}
  return buildTestMetadata(meta)
}

export default async function TestLandingPage({ params }: Props) {
  const meta = getTestMeta(params.slug)
  if (!meta) notFound()

  const test = await getTestBySlug(params.slug)
  if (!test) notFound()

  return (
    <>
      <JsonLd data={buildQuizJsonLd(meta)} />
      <JsonLd data={buildBreadcrumbJsonLd(meta)} />
      {test.faqs.length > 0 && <JsonLd data={buildFaqJsonLd(test.faqs)} />}

      {/* 히어로 타일 */}
      <section className="bg-parchment text-center px-5 py-20">
        {/* 브레드크럼 */}
        <nav className="mb-8 text-[12px] text-ink-faint" style={{ letterSpacing: '-0.12px' }}>
          <Link href="/" className="hover:text-primary transition-colors">홈</Link>
          <span className="mx-2">/</span>
          <span>{meta.shortTitle}</span>
        </nav>

        <h1
          className="font-semibold text-ink mb-4 max-w-[640px] mx-auto"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.10', letterSpacing: '-0.374px' }}
        >
          {test.title}
        </h1>

        <p
          className="text-ink-faint mb-8"
          style={{ fontSize: '21px', lineHeight: '1.19', letterSpacing: '0.231px' }}
        >
          {test.questionCount}문항 · 약 {test.estimatedMinutes}분
        </p>

        {/* MBTI: 두 버전 카드 */}
        {(params.slug === 'mbti' || params.slug === 'mbti-short') && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[560px] mx-auto mb-8">
            <Link
              href="/mbti"
              className={`flex-1 rounded-apple px-6 py-5 text-left transition-all active:scale-95 ${
                params.slug === 'mbti'
                  ? 'bg-primary text-white ring-2 ring-primary ring-offset-2'
                  : 'bg-canvas border border-hairline hover:border-primary'
              }`}
              style={{ textDecoration: 'none' }}
            >
              <p className={`text-[12px] mb-1 ${params.slug === 'mbti' ? 'text-white/70' : 'text-ink-faint'}`} style={{ letterSpacing: '0.05em' }}>
                정식 버전 {params.slug === 'mbti' && '✓'}
              </p>
              <p className={`font-semibold text-[17px] mb-1 ${params.slug === 'mbti' ? 'text-white' : 'text-ink'}`} style={{ letterSpacing: '-0.374px' }}>
                MBTI 60문항
              </p>
              <p className={`text-[13px] ${params.slug === 'mbti' ? 'text-white/80' : 'text-ink-faint'}`}>약 12분 · 정확도 높음</p>
            </Link>
            <Link
              href="/mbti-short"
              className={`flex-1 rounded-apple px-6 py-5 text-left transition-all active:scale-95 ${
                params.slug === 'mbti-short'
                  ? 'bg-primary text-white ring-2 ring-primary ring-offset-2'
                  : 'bg-canvas border border-hairline hover:border-primary'
              }`}
              style={{ textDecoration: 'none' }}
            >
              <p className={`text-[12px] mb-1 ${params.slug === 'mbti-short' ? 'text-white/70' : 'text-ink-faint'}`} style={{ letterSpacing: '0.05em' }}>
                간단 버전 {params.slug === 'mbti-short' && '✓'}
              </p>
              <p className={`font-semibold text-[17px] mb-1 ${params.slug === 'mbti-short' ? 'text-white' : 'text-ink'}`} style={{ letterSpacing: '-0.374px' }}>
                MBTI 32문항
              </p>
              <p className={`text-[13px] ${params.slug === 'mbti-short' ? 'text-white/80' : 'text-ink-faint'}`}>약 6분 · 빠르게 확인</p>
            </Link>
          </div>
        )}

        {/* 일반 CTA 버튼 (MBTI 아닌 경우만) */}
        {params.slug !== 'mbti' && params.slug !== 'mbti-short' && (
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/quiz/${test.slug}`}
              className="px-[22px] py-[11px] bg-primary text-white text-[17px] font-normal rounded-pill transition-all active:scale-95 hover:opacity-90"
              style={{ letterSpacing: '-0.374px' }}
            >
              테스트 시작
            </Link>
            <a
              href="#description"
              className="px-[22px] py-[11px] border border-primary text-primary text-[17px] font-normal rounded-pill transition-all active:scale-95 hover:bg-primary hover:text-white"
              style={{ letterSpacing: '-0.374px' }}
            >
              자세히 보기
            </a>
          </div>
        )}

        {/* 광고 — 버튼 아래 */}
        <div className="mt-10 max-w-[580px] mx-auto w-full">
          <AdSlot slot="3089755852" format="horizontal" />
        </div>
      </section>

      {/* 설명 타일 */}
      <section id="description" className="bg-canvas">
        <div className="max-w-[640px] mx-auto px-5 py-20">
          <h2
            className="font-semibold text-ink mb-8"
            style={{ fontSize: '34px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
          >
            테스트 소개
          </h2>

          <div className="space-y-5 mb-10">
            {test.longDescription.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="text-ink"
                style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
              >
                {para}
              </p>
            ))}
          </div>

          {test.sourceCredit && (
            <p
              className="text-ink-faint border-t border-divider pt-6"
              style={{ fontSize: '12px', letterSpacing: '-0.12px' }}
            >
              출처:{' '}
              {test.sourceCreditUrl ? (
                <a
                  href={test.sourceCreditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  {test.sourceCredit}
                </a>
              ) : (
                test.sourceCredit
              )}
            </p>
          )}
        </div>
      </section>

      {/* 동물 성격 8유형 */}
      {params.slug === 'animal-personality' && test.scoring.characterMap && (
        <section className="bg-parchment">
          <div className="max-w-[640px] mx-auto px-5 py-20">
            <h2
              className="font-semibold text-ink mb-3"
              style={{ fontSize: '34px', lineHeight: '1.10', letterSpacing: '-0.374px' }}
            >
              8가지 동물 유형
            </h2>
            <p className="text-ink-faint mb-10" style={{ fontSize: '17px', letterSpacing: '-0.374px' }}>
              테스트를 완료하면 아래 유형 중 하나의 결과를 받게 됩니다
            </p>
            <div className="space-y-3">
              {Object.values(test.scoring.characterMap).map((animal) => {
                const EMOJI: Record<string, string> = {
                  lion: '🦁', fox: '🦊', cat: '🐱', bear: '🐻',
                  penguin: '🐧', owl: '🦉', dog: '🐶', rabbit: '🐰',
                }
                return (
                  <div key={animal.id} className="flex items-center gap-4 bg-canvas border border-hairline rounded-apple px-5 py-4">
                    <span className="text-4xl shrink-0">{EMOJI[animal.id] ?? '🐾'}</span>
                    <div>
                      <p className="font-semibold text-ink" style={{ fontSize: '15px', letterSpacing: '-0.224px' }}>
                        {animal.label}
                      </p>
                      <p className="text-ink-faint" style={{ fontSize: '13px', letterSpacing: '-0.12px' }}>
                        {animal.traits.slice(0, 3).join(' · ')}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* MBTI 16유형 이미지 */}
      {(params.slug === 'mbti' || params.slug === 'mbti-short') && (
        <section className="bg-parchment">
          <div className="max-w-[980px] mx-auto px-5 py-20">
            <h2
              className="font-semibold text-ink mb-3 text-center"
              style={{ fontSize: '34px', lineHeight: '1.10', letterSpacing: '-0.374px' }}
            >
              16가지 성격 유형
            </h2>
            <p
              className="text-ink-faint text-center mb-10"
              style={{ fontSize: '17px', letterSpacing: '-0.374px' }}
            >
              테스트를 완료하면 아래 유형 중 하나의 결과를 받게 됩니다
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                ['INTJ','전략가'],['INTP','논리술사'],['ENTJ','지휘관'],['ENTP','변론가'],
                ['INFJ','옹호자'],['INFP','중재자'],['ENFJ','선도자'],['ENFP','활동가'],
                ['ISTJ','현실주의자'],['ISFJ','수호자'],['ESTJ','경영자'],['ESFJ','집정관'],
                ['ISTP','만능재주꾼'],['ISFP','모험가'],['ESTP','사업가'],['ESFP','연예인'],
              ].map(([type, label]) => (
                <a
                  key={type}
                  href={`/og/mbti-${type}.jpg`}
                  download={`mbti-${type}.jpg`}
                  className="rounded-apple overflow-hidden block relative group"
                  style={{ textDecoration: 'none' }}
                >
                  <Image
                    src={`/og/mbti-${type}.jpg`}
                    alt={`${type} ${label}`}
                    width={1200}
                    height={630}
                    className="w-full h-auto"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-1 rounded-pill opacity-0 group-hover:opacity-100 transition-opacity">
                    ↓ 저장
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 의료 면책 — dark tile */}
      {test.disclaimer && (
        <section className="bg-tile-1">
          <div className="max-w-[640px] mx-auto px-5 py-12 text-center">
            <p
              className="text-muted-dark"
              style={{ fontSize: '14px', lineHeight: '1.43', letterSpacing: '-0.224px' }}
            >
              {test.disclaimer}
            </p>
          </div>
        </section>
      )}

      {/* 시작 CTA 타일 */}
      <section className="bg-parchment text-center px-5 py-20">
        <h2
          className="font-semibold text-ink mb-6"
          style={{ fontSize: '28px', lineHeight: '1.14', letterSpacing: '-0.374px' }}
        >
          준비되셨나요?
        </h2>
        <Link
          href={`/quiz/${test.slug}`}
          className="inline-block px-[22px] py-[11px] bg-primary text-white text-[17px] font-normal rounded-pill transition-all active:scale-95 hover:opacity-90"
          style={{ letterSpacing: '-0.374px' }}
        >
          테스트 시작하기
        </Link>
        <div className="mt-12 max-w-[580px] mx-auto">
          <AdSlot slot="3089755852" format="horizontal" />
        </div>
      </section>

      {/* FAQ 타일 */}
      {test.faqs.length > 0 && (
        <section className="bg-canvas">
          <div className="max-w-[640px] mx-auto px-5 py-20">
            <h2
              className="font-semibold text-ink mb-10"
              style={{ fontSize: '34px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
            >
              자주 묻는 질문
            </h2>
            <div className="space-y-6">
              {test.faqs.map((faq, i) => (
                <div key={i} className="border-b border-divider pb-6">
                  <p
                    className="font-semibold text-ink mb-3"
                    style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
                  >
                    {faq.question}
                  </p>
                  <p
                    className="text-ink-faint"
                    style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 다른 테스트 — dark tile */}
      <section className="bg-tile-2">
        <div className="max-w-[980px] mx-auto px-5 py-20">
          <h2
            className="font-semibold text-white mb-10 text-center"
            style={{ fontSize: '34px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
          >
            다른 테스트
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TEST_REGISTRY.filter((t) => t.slug !== params.slug).slice(0, 6).map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="flex items-center justify-between p-5 bg-tile-1 rounded-apple border border-white/10 hover:border-white/30 transition-all group"
              >
                <span
                  className="text-white group-hover:text-primary-on-dark transition-colors"
                  style={{ fontSize: '14px', letterSpacing: '-0.224px' }}
                >
                  {t.title}
                </span>
                <span
                  className="text-muted-dark shrink-0 ml-3"
                  style={{ fontSize: '12px', letterSpacing: '-0.12px' }}
                >
                  {t.questionCount}문항
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
