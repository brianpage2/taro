'use client'

import { useState } from 'react'

interface ShareButtonsProps {
  title: string
  resultLabel?: string
  testSlug?: string
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taro.codedanswer.com'

export default function ShareButtons({ title, resultLabel, testSlug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const testUrl = testSlug ? `${BASE_URL}/${testSlug}` : BASE_URL
  const shareText = resultLabel
    ? `나의 ${title} 결과는 "${resultLabel}"! 너도 해봐 👉`
    : `${title} — 나도 해봐! 무료로 테스트하기 👉`

  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share

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
    } catch { }
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
        <button
          onClick={canNativeShare ? handleNativeShare : handleCopy}
          className="w-full py-3 rounded-pill text-[15px] font-normal transition-all active:scale-95 hover:opacity-90"
          style={{ background: '#FEE500', color: '#191919', letterSpacing: '-0.224px' }}
        >
          💬 카카오톡으로 공유
        </button>

        <button
          onClick={handleCopy}
          className="w-full py-3 rounded-pill text-[14px] font-normal transition-all active:scale-95 hover:opacity-90"
          style={{ letterSpacing: '-0.224px', background: '#0066cc', color: '#fff' }}
        >
          {copied ? '✓ 복사됨' : '🔗 링크 복사'}
        </button>

        <button
          onClick={handleSiteShare}
          className="w-full py-3 rounded-pill text-[14px] font-normal transition-all active:scale-95 hover:opacity-90"
          style={{ letterSpacing: '-0.224px', background: '#059669', color: '#fff' }}
        >
          🌐 이 사이트 친구에게 공유
        </button>

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
