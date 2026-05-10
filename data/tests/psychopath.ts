import type { TestData } from '@/types/test'

export const psychopath: TestData = {
  slug: 'psychopath',
  title: '사이코패스 테스트',
  shortTitle: '사이코패스',
  description: '사이코패스 성향 자가진단 테스트입니다. 26문항으로 반사회적 성격 특성과 공감 능력을 무료로 확인하세요.',
  keywords: [
    '사이코패스 테스트', '사이코패스 자가진단', '반사회성 성격 테스트',
    '공감 능력 테스트', '사이코패스 증상', '사이코패스 점수',
    '나는 사이코패스인가', '사이코패스 성향', '어둠의 3요소',
  ],
  category: '임상',
  questionCount: 26,
  estimatedMinutes: 7,
  ogImage: '/og/psychopath.png',
  lastModified: '2025-05-01',
  canonical: 'https://taro.codedanswer.com/psychopath',
  disclaimer: '이 테스트는 오락/교육 목적이며 의학적 진단이 아닙니다. 실제 사이코패스 진단은 전문 임상심리사의 종합 평가가 필요합니다.',
  sourceCredit: 'LSRP (Levenson Self-Report Psychopathy Scale) 기반 — 공개도메인',
  sourceCreditUrl: 'https://pubmed.ncbi.nlm.nih.gov/1494579/',
  longDescription: `사이코패스(Psychopathy)는 공감 능력 결여, 감정적 피상성, 충동성, 조종적 행동 등을 특징으로 하는 성격 특성 집합입니다. 영화나 미디어에서 묘사되는 것과 달리, 대부분의 사이코패스 성향을 가진 사람들은 일상생활을 영위하며 극단적 범죄를 저지르지 않습니다.

이 테스트는 Levenson, Kiehl, Fitzpatrick(1995)이 개발한 LSRP(Levenson Self-Report Psychopathy Scale)를 기반으로 합니다. 1차 사이코패스(감정적 무감각, 조종적 행동)와 2차 사이코패스(충동성, 반사회적 행동) 두 가지 차원을 측정합니다.

이 테스트는 자기 이해와 교육적 목적으로만 활용하시기 바랍니다. 점수가 높게 나왔다고 해서 반드시 사이코패스 진단을 받는 것은 아닙니다. 실제 임상 진단은 훈련된 전문가만이 수행할 수 있습니다.`,
  faqs: [
    {
      question: '사이코패스 점수가 높게 나오면 어떻게 해야 하나요?',
      answer: '이 테스트는 자가보고 방식의 교육용 도구입니다. 점수가 높다고 사이코패스라는 의미가 아닙니다. 자신의 행동과 관계에 대해 우려가 있다면 전문 심리사 상담을 권장합니다.',
    },
    {
      question: '사이코패스와 소시오패스의 차이는 무엇인가요?',
      answer: '두 용어는 종종 혼용되지만, 사이코패스는 선천적(신경학적) 요인이 강하고 소시오패스는 환경적 요인이 더 크다고 봅니다. 공식 DSM-5 진단 용어는 "반사회성 인격장애"입니다.',
    },
    {
      question: '모든 사람에게 어느 정도의 사이코패스적 특성이 있나요?',
      answer: '사이코패스 성향은 연속선상에 있으며, 모든 사람이 어느 정도는 해당 특성을 가지고 있습니다. 일반 인구의 약 1%만이 임상적으로 의미 있는 수준의 사이코패스로 분류됩니다.',
    },
    {
      question: '직장 내 사이코패스는 얼마나 많은가요?',
      answer: '연구에 따르면 CEO를 포함한 고위직에 사이코패스 성향이 높은 사람의 비율이 일반 인구보다 높다는 보고가 있습니다. 이는 냉철한 판단력과 목표 지향성이 특정 직무에서 유리할 수 있기 때문입니다.',
    },
    {
      question: '공감 능력은 훈련으로 키울 수 있나요?',
      answer: '네, 공감 능력은 훈련으로 향상될 수 있습니다. 다른 사람의 관점에서 생각하는 연습, 적극적 경청, 심리치료 등이 공감 능력 향상에 도움이 됩니다.',
    },
  ],
  questions: [
    // 1차 사이코패스 (1-16): 감정적 무감각, 조종적 행동
    { id: 1, text: '나는 내가 원하는 것을 얻기 위해 상대방을 교묘하게 이용하기도 한다', type: 'likert4', axis: 'primary' },
    { id: 2, text: '나는 사람들이 나를 어떻게 생각하는지 별로 신경 쓰지 않는다', type: 'likert4', axis: 'primary' },
    { id: 3, text: '나는 다른 사람의 감정에 크게 공감하지 못한다', type: 'likert4', axis: 'primary' },
    { id: 4, text: '나에게 도움이 된다면 거짓말을 할 수 있다', type: 'likert4', axis: 'primary' },
    { id: 5, text: '나는 목표를 위해서라면 규칙을 어길 의향이 있다', type: 'likert4', axis: 'primary' },
    { id: 6, text: '나는 보통 사람들의 고통을 봐도 감동받지 않는다', type: 'likert4', axis: 'primary' },
    { id: 7, text: '성공한다면 다른 사람의 감정을 상하게 하는 것도 괜찮다', type: 'likert4', axis: 'primary' },
    { id: 8, text: '나는 다른 사람들보다 우월하다고 느낄 때가 많다', type: 'likert4', axis: 'primary' },
    { id: 9, text: '나는 원하는 것을 얻기 위해 매력을 이용한다', type: 'likert4', axis: 'primary' },
    { id: 10, text: '나는 누군가에게 상처를 줬다는 것을 알아도 별로 죄책감을 느끼지 않는다', type: 'likert4', axis: 'primary' },
    { id: 11, text: '나는 내가 좋아하지 않는 사람을 해칠 수도 있다', type: 'likert4', axis: 'primary' },
    { id: 12, text: '나는 감정을 쉽게 조절할 수 있고 냉정하게 생각한다', type: 'likert4', axis: 'primary' },
    { id: 13, text: '약자를 이용하는 것은 자연스러운 일이다', type: 'likert4', axis: 'primary' },
    { id: 14, text: '나는 필요하다면 사람들을 조종한다', type: 'likert4', axis: 'primary' },
    { id: 15, text: '나는 사람들의 감정적 반응을 이해하기 어렵다', type: 'likert4', axis: 'primary' },
    { id: 16, text: '나는 다른 사람들의 문제에 크게 신경 쓰지 않는다', type: 'likert4', axis: 'primary' },
    // 2차 사이코패스 (17-26): 충동성, 반사회적 행동
    { id: 17, text: '나는 흥미로운 일이라면 위험을 감수한다', type: 'likert4', axis: 'secondary' },
    { id: 18, text: '나는 충동적으로 행동하는 경향이 있다', type: 'likert4', axis: 'secondary' },
    { id: 19, text: '나는 결과를 생각하기 전에 먼저 행동한다', type: 'likert4', axis: 'secondary' },
    { id: 20, text: '나는 지루함을 참지 못한다', type: 'likert4', axis: 'secondary' },
    { id: 21, text: '나는 규칙을 어겨야 할 상황이 생기면 어긴다', type: 'likert4', axis: 'secondary' },
    { id: 22, text: '나는 강한 자극과 흥분을 필요로 한다', type: 'likert4', axis: 'secondary' },
    { id: 23, text: '나는 사회 규범을 지키는 것이 항상 중요하다고 생각하지 않는다', type: 'likert4', axis: 'secondary' },
    { id: 24, text: '나는 미래보다 현재의 즐거움을 더 중요시한다', type: 'likert4', axis: 'secondary' },
    { id: 25, text: '나는 법적 문제가 생기더라도 원하는 것을 할 수 있다', type: 'likert4', axis: 'secondary' },
    { id: 26, text: '나는 계획 없이 충동적으로 결정을 내리는 편이다', type: 'likert4', axis: 'secondary' },
  ],
  scoring: {
    type: 'score-range',
    ranges: [
      {
        min: 0,
        max: 25,
        label: '낮음',
        description: '사이코패스 성향이 매우 낮습니다. 공감 능력이 높고 사회적 규범을 잘 따르는 편입니다.',
        recommendation: '현재의 건강한 공감 능력과 사회적 관계를 유지하세요.',
      },
      {
        min: 26,
        max: 50,
        label: '보통',
        description: '일반적인 범위의 사이코패스 성향을 보입니다. 대부분의 사람들이 이 범위에 속합니다.',
        recommendation: '자신의 공감 능력과 충동 조절 능력을 지속적으로 개발하세요.',
      },
      {
        min: 51,
        max: 75,
        label: '높음',
        description: '다소 높은 사이코패스 성향이 나타납니다. 타인의 감정에 대한 인식을 높이는 것이 도움이 될 수 있습니다.',
        recommendation: '전문 심리 상담을 통해 공감 능력 개발과 충동 조절 방법을 탐색해보세요.',
      },
      {
        min: 76,
        max: 104,
        label: '매우 높음',
        description: '상당히 높은 수준의 사이코패스 성향이 측정됐습니다. 이 수준은 전문적인 평가와 상담이 도움이 될 수 있습니다.',
        recommendation: '정신건강 전문가와 상담하여 이 결과의 의미와 대처 방법을 논의해보세요.',
      },
    ],
  },
}
