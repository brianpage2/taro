'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type MenuItem = { label: string; href: string } | { label: string; children: { label: string; href: string }[] }

const MENU_ITEMS: MenuItem[] = [
  { label: '홈', href: '/' },
  {
    label: '성격 테스트',
    children: [
      { label: 'MBTI', href: '/mbti' },
      { label: 'Big 5', href: '/big5' },
      { label: '에니어그램', href: '/enneagram' },
      { label: '동물 성격', href: '/animal-personality' },
      { label: '연애 유형', href: '/attachment' },
      { label: '자존감', href: '/self-esteem' },
      { label: '완벽주의', href: '/perfectionism' },
    ],
  },
  {
    label: '심리 자가진단',
    children: [
      { label: '우울증 (PHQ-9)', href: '/depression' },
      { label: '불안 (GAD-7)', href: '/anxiety' },
      { label: '스트레스 (PSS-10)', href: '/stress' },
      { label: '번아웃', href: '/burnout' },
      { label: 'ADHD', href: '/adhd' },
      { label: '사이코패스', href: '/psychopath' },
      { label: '나르시시스트', href: '/narcissist' },
    ],
  },
  { label: 'IQ 테스트', href: '/iq' },
  { label: '소개', href: '/about' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-tile-black h-11 flex items-center">
      <div className="w-full max-w-[980px] mx-auto px-5 flex items-center justify-between" ref={ref}>
        <Link
          href="/"
          className="text-white text-[17px] font-semibold tracking-[-0.374px] hover:opacity-80 transition-opacity"
          onClick={() => setOpen(false)}
        >
          심리테스트
        </Link>

        {/* 데스크톱 nav */}
        <nav className="hidden sm:flex items-center gap-5">
          <Link href="/" className="text-white text-[12px] tracking-[-0.12px] opacity-80 hover:opacity-100 transition-opacity">홈</Link>
          <Link href="/about" className="text-white text-[12px] tracking-[-0.12px] opacity-80 hover:opacity-100 transition-opacity">소개</Link>
        </nav>

        {/* 햄버거 버튼 */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-1.5 p-1"
          aria-label="메뉴"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* 드롭다운 메뉴 */}
        {open && (
          <div className="absolute top-11 left-0 right-0 bg-tile-black border-t border-white/10 py-4 px-5 sm:hidden">
            {MENU_ITEMS.map((item) => (
              <div key={item.label}>
                {'href' in item ? (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-white text-[15px] tracking-[-0.224px] opacity-80 hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <p className="pt-3 pb-1.5 text-[11px] text-white/40 tracking-[0.08em] uppercase">
                      {item.label}
                    </p>
                    <div className="grid grid-cols-2 gap-x-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="py-1.5 text-white text-[14px] tracking-[-0.224px] opacity-70 hover:opacity-100"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
