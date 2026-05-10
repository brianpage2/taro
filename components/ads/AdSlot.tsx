'use client'

import { useEffect, useRef } from 'react'

interface AdSlotProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export default function AdSlot({ slot, format = 'auto', className = '' }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    if (process.env.NODE_ENV !== 'production') return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch {
      // AdSense 로드 전이면 무시
    }
  }, [])

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_ID

  if (process.env.NODE_ENV !== 'production' || !clientId || !slot) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 text-gray-400 text-xs min-h-[90px] rounded ${className}`}>
        광고 영역
      </div>
    )
  }

  return (
    <div className={className}>
      <p className="text-xs text-gray-400 mb-1 text-center">광고</p>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
