'use client'

import { useState } from 'react'

interface ShareButtonsProps {
  title: string
  resultLabel?: string
  testSlug?: string
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taro.codedanswer.com'
const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY

declare global {
  interface Window {
    Kakao: {
      isInitialized: () => boolean
      init: (key: string) => void
      Share: { sendDefault: (opts: object) => void }
    }
  }
}

async function loadKakaoSDK(): Promise<typeof window.Kakao> {
  return new Promise((resolve) => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) window.Kakao.init(KAKAO_KEY!)
      resolve(window.Kakao)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js'
    script.crossOrigin = 'anonymous'
    script.onload = () => {
      window.Kakao.init(KAKAO_KEY!)
      resolve(window.Kakao)
    }
    document.head.appendChild(script)
  })
}

export default function ShareButtons({ title, resultLabel, testSlug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const testUrl = testSlug ? `${BASE_URL}/${testSlug}` : BASE_URL

  // MBTI 결과면 유형별 이미지, 아니면 테스트 OG 이미지
  const mbtiTypeMatch = resultLabel?.match(/\(([A-Z]{4})\)/)
  const mbtiType = mbtiTypeMatch?.[1]
  const ogImageUrl = mbtiType
    ? `${BASE_URL}/og/mbti-${mbtiType}.jpg`
    : `${BASE_URL}/og?slug=${testSlug ?? ''}`

  const shareText = resultLabel
    ? `나의 ${title} 결과는 "${resultLabel}"! 너도 해봐 👉`
    : `${title} — 나도 해봐! 무료로 테스트하기 👉`

  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share

  const handleKakao = async () => {
    if (!KAKAO_KEY) {
      alert('카카오 API 키가 설정되지 않았습니다.')
      return
    }
    try {
      const Kakao = await loadKakaoSDK()
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: resultLabel ? `${title} 결과: ${resultLabel}` : title,
          description: '무료 심리테스트 — 나도 해보기',
          imageUrl: ogImageUrl,
          link: { mobileWebUrl: testUrl, webUrl: testUrl },
        },
        buttons: [{ title: '나도 테스트하기', link: { mobileWebUrl: testUrl, webUrl: testUrl } }],
      })
    } catch {
      // 취소 무시
    }
  }

  const handleNativeShare = async () => {
    try {
      await navigator.share({ title, text: shareText, url: testUrl })
    } catch { }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${testUrl}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  const handleTwitter = () => {
    const text = encodeURIComponent(`${shareText} ${testUrl}`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  const handleSiteShare = async () => {
    if (canNativeShare) {
      try {
        await navigator.share({
          title: '무료 심리테스트',
          text: 'MBTI, 우울증, 번아웃, ADHD 등 다양한 무료 심리테스트 🎯',
          url: BASE_URL,
        })
      } catch { }
    } else {
      await navigator.clipboard.writeText(BASE_URL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="text-center">
      <p className="text-[14px] text-ink-faint mb-6" style={{ letterSpacing: '-0.224px' }}>
        결과 공유하기
      </p>

      <div className="flex flex-col gap-3 max-w-[320px] mx-auto">
        {/* 카카오·이메일 등 공유 (모바일: 네이티브 공유시트) */}
        {canNativeShare ? (
          <button
            onClick={handleNativeShare}
            className="w-full py-3 rounded-pill text-[15px] font-normal transition-all active:scale-95 hover:opacity-90"
            style={{ background: '#FEE500', color: '#191919', letterSpacing: '-0.224px' }}
          >
            💬 카카오톡으로 공유
          </button>
        ) : (
          <button
            onClick={handleKakao}
            className="w-full py-3 rounded-pill text-[15px] font-normal transition-all active:scale-95 hover:opacity-90"
            style={{ background: '#FEE500', color: '#191919', letterSpacing: '-0.224px' }}
          >
            💬 카카오톡으로 공유
          </button>
        )}

        {/* 링크 복사 */}
        {canNativeShare && (
          <button
            onClick={handleCopy}
            className="w-full py-3 rounded-pill text-[14px] font-normal transition-all active:scale-95 hover:opacity-90"
            style={{ letterSpacing: '-0.224px', background: '#0066cc', color: '#fff' }}
          >
            {copied ? '✓ 복사됨' : '🔗 링크 복사'}
          </button>
        )}

        {/* 사이트 공유 */}
        <button
          onClick={handleSiteShare}
          className="w-full py-3 rounded-pill text-[14px] font-normal transition-all active:scale-95 hover:opacity-90"
          style={{ letterSpacing: '-0.224px', background: '#059669', color: '#fff' }}
        >
          🌐 이 사이트 친구에게 공유
        </button>

        {/* X 공유 — 맨 아래 */}
        <button
          onClick={handleTwitter}
          className="w-full py-3 rounded-pill text-[14px] font-normal transition-all active:scale-95 hover:opacity-80"
          style={{ letterSpacing: '-0.224px', background: '#000', color: '#fff' }}
        >
          𝕏 X(트위터)에 공유
        </button>
      </div>
    </div>
  )
}
