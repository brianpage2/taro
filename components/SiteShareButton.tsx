'use client'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taro.codedanswer.com'

export default function SiteShareButton() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: '무료 심리테스트',
          text: 'MBTI, 우울증, 번아웃, ADHD 등 다양한 무료 심리테스트 🎯 친구에게 공유해보세요!',
          url: BASE_URL,
        })
      } else {
        await navigator.clipboard.writeText(BASE_URL)
        alert('링크가 복사됐습니다!')
      }
    } catch { }
  }

  return (
    <section className="bg-parchment text-center px-5 py-12">
      <p
        className="text-ink-faint mb-4"
        style={{ fontSize: '15px', letterSpacing: '-0.224px' }}
      >
        이 사이트가 도움이 됐다면 친구에게 공유해보세요 😊
      </p>
      <button
        onClick={handleShare}
        className="px-6 py-3 rounded-pill text-[15px] font-normal transition-all active:scale-95 hover:opacity-90"
        style={{ background: '#FEE500', color: '#191919', letterSpacing: '-0.224px' }}
      >
        💬 카카오톡으로 공유하기
      </button>
    </section>
  )
}
