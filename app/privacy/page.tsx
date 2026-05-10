import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '무료 심리테스트 개인정보처리방침입니다.',
  alternates: { canonical: 'https://taro.codedanswer.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">개인정보처리방침</h1>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
        <section>
          <h2 className="font-semibold text-gray-800 mb-2">1. 수집하는 개인정보</h2>
          <p>본 서비스는 별도의 회원가입 없이 이용 가능하며, 개인 식별 정보를 수집하지 않습니다. 테스트 응답 데이터는 서버에 저장되지 않으며 브라우저 URL 파라미터로만 처리됩니다.</p>
        </section>
        <section>
          <h2 className="font-semibold text-gray-800 mb-2">2. 광고 서비스</h2>
          <p>본 서비스는 Google AdSense 광고를 사용합니다. Google은 쿠키를 통해 사용자의 방문 기록을 바탕으로 맞춤형 광고를 제공할 수 있습니다. <a href="https://policies.google.com/privacy" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">Google 개인정보처리방침</a>을 참조하세요.</p>
        </section>
        <section>
          <h2 className="font-semibold text-gray-800 mb-2">3. 쿠키</h2>
          <p>본 서비스는 광고 제공 목적으로 제3자 쿠키(Google AdSense)를 사용합니다. 브라우저 설정에서 쿠키를 비활성화할 수 있습니다.</p>
        </section>
        <section>
          <h2 className="font-semibold text-gray-800 mb-2">4. 면책 조항</h2>
          <p>본 서비스의 모든 테스트는 교육·오락 목적이며 의학적 진단을 대체하지 않습니다. 테스트 결과를 의학적 판단 기준으로 삼지 마시고, 전문 의료기관의 진료를 받으시기 바랍니다.</p>
        </section>
        <section>
          <h2 className="font-semibold text-gray-800 mb-2">5. 문의</h2>
          <p>개인정보 관련 문의: <a href="mailto:brianpage.kr@gmail.com" className="text-indigo-600 hover:underline">brianpage.kr@gmail.com</a></p>
        </section>
        <p className="text-xs text-gray-400">최종 수정일: 2025년 5월 1일</p>
      </div>
      <div className="mt-6">
        <Link href="/" className="text-indigo-600 hover:underline text-sm">← 홈으로 돌아가기</Link>
      </div>
    </div>
  )
}
