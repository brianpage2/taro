import { ImageResponse } from 'next/og'
import { TEST_REGISTRY } from '@/data/index'

export const runtime = 'edge'

const MBTI_COLORS: Record<string, string> = {
  INTJ: '#3730a3', INTP: '#4c1d95', ENTJ: '#5b21b6', ENTP: '#6d28d9',
  INFJ: '#065f46', INFP: '#064e3b', ENFJ: '#047857', ENFP: '#059669',
  ISTJ: '#1e3a8a', ISFJ: '#1e40af', ESTJ: '#1d4ed8', ESFJ: '#2563eb',
  ISTP: '#92400e', ISFP: '#78350f', ESTP: '#b45309', ESFP: '#d97706',
}

const MBTI_LABELS: Record<string, string> = {
  INTJ: '전략가', INTP: '논리술사', ENTJ: '지휘관', ENTP: '변론가',
  INFJ: '옹호자', INFP: '중재자', ENFJ: '선도자', ENFP: '활동가',
  ISTJ: '현실주의자', ISFJ: '수호자', ESTJ: '경영자', ESFJ: '집정관',
  ISTP: '만능재주꾼', ISFP: '모험가', ESTP: '사업가', ESFP: '연예인',
}

const MBTI_DIMS: Record<string, [string, string, string, string]> = {
  INTJ: ['I', 'N', 'T', 'J'], INTP: ['I', 'N', 'T', 'P'],
  ENTJ: ['E', 'N', 'T', 'J'], ENTP: ['E', 'N', 'T', 'P'],
  INFJ: ['I', 'N', 'F', 'J'], INFP: ['I', 'N', 'F', 'P'],
  ENFJ: ['E', 'N', 'F', 'J'], ENFP: ['E', 'N', 'F', 'P'],
  ISTJ: ['I', 'S', 'T', 'J'], ISFJ: ['I', 'S', 'F', 'J'],
  ESTJ: ['E', 'S', 'T', 'J'], ESFJ: ['E', 'S', 'F', 'J'],
  ISTP: ['I', 'S', 'T', 'P'], ISFP: ['I', 'S', 'F', 'P'],
  ESTP: ['E', 'S', 'T', 'P'], ESFP: ['E', 'S', 'F', 'P'],
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug') ?? ''
  const mbtiType = searchParams.get('type')?.toUpperCase() ?? ''

  // MBTI 결과 이미지
  if (mbtiType && MBTI_COLORS[mbtiType]) {
    const bgColor = MBTI_COLORS[mbtiType]
    const label = MBTI_LABELS[mbtiType] ?? mbtiType
    const dims = MBTI_DIMS[mbtiType] ?? ['?', '?', '?', '?']

    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: bgColor,
            fontFamily: 'system-ui, sans-serif',
            position: 'relative',
          }}
        >
          {/* 배경 장식 */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.06)',
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '-60px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.04)',
              display: 'flex',
            }}
          />

          {/* 상단 레이블 */}
          <div
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.1em',
              marginBottom: '28px',
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            MBTI 성격유형
          </div>

          {/* 4글자 개별 박스 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
            {dims.map((d, i) => (
              <div
                key={i}
                style={{
                  width: '140px',
                  height: '140px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '80px',
                  fontWeight: 700,
                  color: '#ffffff',
                  border: '2px solid rgba(255,255,255,0.25)',
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* 유형 이름 */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '16px',
              display: 'flex',
            }}
          >
            {label}
          </div>

          {/* 사이트 */}
          <div
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.4)',
              display: 'flex',
            }}
          >
            taro.codedanswer.com
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    )
  }

  // 기본 테스트 랜딩 이미지
  const test = TEST_REGISTRY.find((t) => t.slug === slug)
  const title = test?.title ?? '무료 심리테스트'
  const subtitle = test
    ? `${test.questionCount}문항 · 약 ${test.estimatedMinutes}분`
    : 'MBTI · 우울증 · 번아웃 · ADHD · 에니어그램'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f7',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: '14px', color: '#7a7a7a', marginBottom: '20px', display: 'flex' }}>
          taro.codedanswer.com
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 600,
            color: '#1d1d1f',
            textAlign: 'center',
            lineHeight: 1.07,
            maxWidth: '900px',
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: '24px', color: '#7a7a7a', textAlign: 'center', display: 'flex' }}>
          {subtitle}
        </div>
        <div
          style={{
            marginTop: '40px',
            padding: '12px 28px',
            backgroundColor: '#0066cc',
            color: '#ffffff',
            fontSize: '18px',
            borderRadius: '9999px',
            display: 'flex',
          }}
        >
          무료로 시작하기
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
