import type { TestData } from '@/types/test'

export const big5Short: TestData = {
  slug: 'big5-short',
  title: 'Big 5 성격 테스트 (간단)',
  shortTitle: 'Big 5 간단',
  description: '20문항으로 빠르게 알아보는 Big 5 성격 테스트. 개방성·성실성·외향성·우호성·신경성 5가지 차원을 약 4분만에 측정하세요.',
  keywords: [
    'Big5 간단 테스트', '빅파이브 간단', 'Big5 20문항', '빠른 성격 테스트',
    'Mini-IPIP', 'Big5 단축 버전', '성격 테스트 4분', '간단한 성격검사',
    'Big5 빠른 버전', '미니 IPIP',
  ],
  category: '성격',
  questionCount: 20,
  estimatedMinutes: 4,
  ogImage: '/og/big5-short.png',
  lastModified: '2025-05-01',
  canonical: 'https://taro.codedanswer.com/big5-short',
  sourceCredit: 'Mini-IPIP (Donnellan et al., 2006) — IPIP 공개도메인. 원본 50문항 대비 상관 r=.80+',
  sourceCreditUrl: 'https://ipip.ori.org/',
  longDescription: `바쁜 분들을 위한 20문항 간단 Big 5 성격 테스트입니다.

Donnellan 등(2006)이 개발한 Mini-IPIP는 IPIP 50문항 버전과 r=.80 이상의 높은 상관관계를 보이는 검증된 단축형 척도입니다. 각 성격 차원(개방성·성실성·외향성·우호성·신경성)을 4문항씩 측정하여 약 4분 만에 결과를 확인할 수 있습니다.

더 세밀하고 정확한 결과를 원하신다면 50문항 전체 버전을 이용하세요. Big 5 성격 모델은 현대 심리학에서 가장 많이 연구된 성격 이론으로, 모든 항목은 국제 공개도메인(IPIP)입니다.`,
  faqs: [
    {
      question: '20문항과 50문항 버전의 차이는 무엇인가요?',
      answer: '20문항 Mini-IPIP는 50문항 버전과 r=.80+ 이상의 상관관계를 가져 충분히 신뢰할 수 있습니다. 단, 각 차원을 4문항으로 측정하므로 50문항보다는 덜 정밀합니다. 빠른 확인에는 20문항, 정밀한 측정에는 50문항을 권장합니다.',
    },
    {
      question: 'Big 5 어떤 차원이 가장 중요한가요?',
      answer: '5개 차원 모두 삶의 다양한 측면과 연관됩니다. 연구에 따르면 성실성(C)은 직업 성과와, 우호성(A)은 대인관계와, 신경성(N)은 정신 건강과 강한 관련성을 보입니다. 어떤 차원이 중요한지는 개인의 상황에 따라 다릅니다.',
    },
  ],
  questions: [
    // 외향성 (E) — 4문항
    { id: 1, text: '파티나 모임에서 활기차게 행동한다', type: 'likert5', axis: 'E' },
    { id: 2, text: '사람들과 잘 어울리지 못한다', type: 'likert5', axis: 'E', reverse: true },
    { id: 3, text: '대화를 시작하는 것을 즐긴다', type: 'likert5', axis: 'E' },
    { id: 4, text: '말이 없는 편이다', type: 'likert5', axis: 'E', reverse: true },
    // 우호성 (A) — 4문항
    { id: 5, text: '다른 사람들에게 관심이 많다', type: 'likert5', axis: 'A' },
    { id: 6, text: '다른 사람들의 감정에 공감한다', type: 'likert5', axis: 'A' },
    { id: 7, text: '때로 무례하게 행동한다', type: 'likert5', axis: 'A', reverse: true },
    { id: 8, text: '친절하고 따뜻하다', type: 'likert5', axis: 'A' },
    // 성실성 (C) — 4문항
    { id: 9, text: '항상 준비가 되어 있다', type: 'likert5', axis: 'C' },
    { id: 10, text: '물건을 제자리에 두지 않는다', type: 'likert5', axis: 'C', reverse: true },
    { id: 11, text: '세부사항에 주의를 기울인다', type: 'likert5', axis: 'C' },
    { id: 12, text: '중요한 일을 미루는 경향이 있다', type: 'likert5', axis: 'C', reverse: true },
    // 신경성 (N) — 4문항
    { id: 13, text: '자주 기분이 변한다', type: 'likert5', axis: 'N' },
    { id: 14, text: '쉽게 화가 난다', type: 'likert5', axis: 'N' },
    { id: 15, text: '감정적으로 안정적이다', type: 'likert5', axis: 'N', reverse: true },
    { id: 16, text: '걱정을 많이 한다', type: 'likert5', axis: 'N' },
    // 개방성 (O) — 4문항
    { id: 17, text: '상상력이 풍부하다', type: 'likert5', axis: 'O' },
    { id: 18, text: '추상적인 아이디어에 관심이 없다', type: 'likert5', axis: 'O', reverse: true },
    { id: 19, text: '다양한 분야에 호기심이 많다', type: 'likert5', axis: 'O' },
    { id: 20, text: '새로운 아이디어를 즐긴다', type: 'likert5', axis: 'O' },
  ],
  scoring: {
    type: 'multi-axis',
    axes: [
      { id: 'E', label: '외향성 (Extraversion)', highLabel: '사교적·활동적', lowLabel: '내성적·조용함', description: '사회적 상호작용과 외부 자극 추구 정도를 나타냅니다.' },
      { id: 'A', label: '우호성 (Agreeableness)', highLabel: '협력적·배려심 많음', lowLabel: '독립적·직설적', description: '타인과의 협력, 공감, 배려의 정도를 나타냅니다.' },
      { id: 'C', label: '성실성 (Conscientiousness)', highLabel: '체계적·목표 지향적', lowLabel: '유연하고 즉흥적', description: '자기 통제, 계획성, 책임감의 정도를 나타냅니다.' },
      { id: 'N', label: '신경성 (Neuroticism)', highLabel: '감정적으로 민감함', lowLabel: '감정적으로 안정적', description: '부정적 감정을 경험하는 경향성을 나타냅니다.' },
      { id: 'O', label: '개방성 (Openness)', highLabel: '창의적·호기심 많음', lowLabel: '실용적·전통 중시', description: '새로운 경험, 아이디어, 예술에 대한 개방 정도를 나타냅니다.' },
    ],
  },
}
