import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-parchment border-t border-hairline mt-0">
      <div className="max-w-[980px] mx-auto px-5 py-16">
        <p className="text-[12px] text-ink-faint leading-relaxed mb-4" style={{ letterSpacing: '-0.12px' }}>
          이 테스트들은 교육 및 오락 목적이며 의학적 진단을 대체하지 않습니다. 임상 증상이 있는 경우 전문 의료기관의 진료를 받으시기 바랍니다.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
          <Link href="/privacy" className="text-[12px] text-ink-faint hover:text-ink transition-colors" style={{ letterSpacing: '-0.12px' }}>
            개인정보처리방침
          </Link>
          <Link href="/about" className="text-[12px] text-ink-faint hover:text-ink transition-colors" style={{ letterSpacing: '-0.12px' }}>
            소개
          </Link>
          <a href="mailto:brianpage.kr@gmail.com" className="text-[12px] text-ink-faint hover:text-ink transition-colors" style={{ letterSpacing: '-0.12px' }}>
            문의
          </a>
        </div>
        <p className="text-[12px] text-ink-faint" style={{ letterSpacing: '-0.12px' }}>
          Copyright © {new Date().getFullYear()} taro.codedanswer.com. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
