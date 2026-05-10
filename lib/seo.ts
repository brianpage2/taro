import type { Metadata } from 'next'
import type { TestMeta, FAQ } from '@/types/test'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taro.codedanswer.com'
const SITE_NAME = '무료 심리테스트'

export const DEFAULT_OG_IMAGE = `${BASE_URL}/og?slug=`

export const globalMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? '',
    other: {
      'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION ?? '',
    },
  },
  title: {
    default: '무료 심리테스트 | MBTI · 우울증 · 불안 · 스트레스 · 번아웃 · ADHD',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    '무료 심리테스트 모음. MBTI, 우울증(PHQ-9), 불안(GAD-7), 스트레스(PSS-10), 번아웃, ADHD, 사이코패스, Big5, 에니어그램, 완벽주의, IQ 테스트를 무료로 체험하세요.',
  keywords: [
    '무료 심리테스트',
    'MBTI 무료',
    '우울증 자가진단',
    '불안 테스트',
    '스트레스 테스트',
    '번아웃 테스트',
    'ADHD 자가진단',
    '에니어그램',
    'Big5 성격검사',
    '완벽주의 테스트',
    '사이코패스 테스트',
    'IQ 테스트 무료',
  ],
  openGraph: {
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export function buildTestMetadata(test: TestMeta): Metadata {
  const ogImageUrl = `${BASE_URL}/og?slug=${test.slug}`
  return {
    title: test.title,
    description: test.description,
    keywords: test.keywords,
    alternates: { canonical: test.canonical },
    openGraph: {
      title: `${test.title} | ${SITE_NAME}`,
      description: test.description,
      url: test.canonical,
      type: 'website',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: test.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${test.title} | ${SITE_NAME}`,
      description: test.description,
      images: [ogImageUrl],
    },
  }
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    description: '한국어 무료 심리테스트 제공 서비스',
  }
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    inLanguage: 'ko-KR',
    description: '무료 심리테스트 모음 사이트',
  }
}

export function buildQuizJsonLd(test: TestMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: test.title,
    description: test.description,
    url: test.canonical,
    inLanguage: 'ko-KR',
    educationalUse: 'Self-assessment',
    numberOfQuestions: test.questionCount,
  }
}

export function buildBreadcrumbJsonLd(test: TestMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: test.shortTitle, item: test.canonical },
    ],
  }
}

export function buildFaqJsonLd(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}
