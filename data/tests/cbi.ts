import type { TestData } from '@/types/test'

export const cbi: TestData = {
  slug: 'burnout',
  title: '번아웃 증후군 테스트',
  shortTitle: '번아웃',
  description: '번아웃 증후군 자가진단 테스트입니다. 19문항으로 개인·업무·대인관계 번아웃 수준을 무료로 확인하세요.',
  keywords: [
    '번아웃 테스트', '번아웃 증후군', '번아웃 자가진단', '직장 번아웃',
    '소진 증후군', '번아웃 증상', '번아웃 체크리스트', '업무 스트레스 테스트',
    '정서적 소진', '번아웃 자가테스트',
  ],
  category: '임상',
  questionCount: 19,
  estimatedMinutes: 5,
  ogImage: '/og/burnout.png',
  lastModified: '2025-05-01',
  canonical: 'https://taro.codedanswer.com/burnout',
  sourceCredit: 'Copenhagen Burnout Inventory (CBI) — Kristensen et al. (2005)',
  sourceCreditUrl: 'https://nfa.dk/en/themes/burnout/the-copenhagen-burnout-inventory-cbi/',
  longDescription: `번아웃 증후군(Burnout Syndrome)은 과도한 스트레스와 만성적인 피로로 인해 신체적·정서적·정신적으로 완전히 소진된 상태를 말합니다. 직장인뿐 아니라 학생, 부모, 돌봄 종사자 등 누구에게나 나타날 수 있습니다.

이 테스트는 Copenhagen Burnout Inventory(CBI)를 기반으로 합니다. CBI는 2005년 Kristensen 등이 독점 도구인 MBI(Maslach Burnout Inventory)의 대안으로 개발한 공개도메인 척도로, 한국어 검증판이 PLOS ONE 2019 논문에 공개되어 있습니다.

19문항은 ① 개인 번아웃(6문항): 일반적인 피로와 소진 수준, ② 업무 번아웃(7문항): 업무와 관련된 소진, ③ 대인관계 번아웃(6문항): 사람들과의 상호작용으로 인한 소진으로 구성됩니다. 각 영역 점수가 50점을 초과하면 번아웃 위험 상태로 판단합니다.`,
  faqs: [
    {
      question: '번아웃과 우울증은 어떻게 다른가요?',
      answer: '번아웃은 주로 직장이나 특정 역할과 관련된 소진 상태로, 상황이 바뀌면 회복될 수 있습니다. 반면 우울증은 삶의 전반에 걸쳐 기분, 인지, 행동에 영향을 미치는 정신건강 질환입니다. 두 상태는 공존할 수 있으므로 증상이 심하면 전문가 상담이 필요합니다.',
    },
    {
      question: '번아웃은 어떻게 회복하나요?',
      answer: '번아웃 회복을 위해서는 충분한 휴식, 업무량 조절, 스트레스 관리, 사회적 지지 확보가 중요합니다. 심한 경우 정신건강의학과 상담이나 직장 내 상담 프로그램을 활용하는 것이 도움이 됩니다.',
    },
    {
      question: '번아웃 테스트 결과를 어떻게 활용하나요?',
      answer: '점수가 높은 영역이 어디인지 파악하여 해당 영역의 부담을 줄이는 방법을 찾아보세요. 업무 번아웃이 높다면 업무 방식을, 대인관계 번아웃이 높다면 경계 설정 방법을 고민해보시기 바랍니다.',
    },
    {
      question: '번아웃 예방법은 무엇인가요?',
      answer: '명확한 업무 경계 설정, 규칙적인 휴식, 취미 활동, 운동, 충분한 수면이 번아웃 예방에 효과적입니다. 직장 내 자신의 역할에서 의미와 가치를 찾는 것도 중요합니다.',
    },
    {
      question: '번아웃 회복에는 얼마나 걸리나요?',
      answer: '번아웃 심각도에 따라 다르지만, 경미한 경우 수 주~수 개월, 심각한 경우 6개월~1년 이상이 필요할 수 있습니다. 전문가 상담과 생활 습관 변화가 회복을 도와줍니다.',
    },
  ],
  questions: [
    // 개인 번아웃 (1-6)
    { id: 1, text: '피로감을 얼마나 자주 느끼시나요?', type: 'likert5', axis: 'personal' },
    { id: 2, text: '신체적으로 탈진한 느낌이 얼마나 자주 드시나요?', type: 'likert5', axis: 'personal' },
    { id: 3, text: '정서적으로 탈진한 느낌이 얼마나 자주 드시나요?', type: 'likert5', axis: 'personal' },
    { id: 4, text: '"나는 더 이상 못 하겠다"라고 생각하시나요?', type: 'likert5', axis: 'personal' },
    { id: 5, text: '완전히 탈진한 느낌이 얼마나 자주 드시나요?', type: 'likert5', axis: 'personal' },
    { id: 6, text: '기진맥진한 느낌이 얼마나 자주 드시나요?', type: 'likert5', axis: 'personal' },
    // 업무 번아웃 (7-13)
    { id: 7, text: '업무가 감당하기 힘들다고 느끼시나요?', type: 'likert5', axis: 'work' },
    { id: 8, text: '업무 때문에 지쳐서 하루를 마칠 기력이 없다고 느끼시나요?', type: 'likert5', axis: 'work' },
    { id: 9, text: '업무 때문에 탈진한 느낌이 드시나요?', type: 'likert5', axis: 'work' },
    { id: 10, text: '업무에 좌절감을 느끼시나요?', type: 'likert5', axis: 'work' },
    { id: 11, text: '업무를 하는 것이 감당하기 벅차다고 느끼시나요?', type: 'likert5', axis: 'work' },
    { id: 12, text: '업무가 에너지를 빼앗아 간다고 느끼시나요?', type: 'likert5', axis: 'work' },
    { id: 13, text: '업무에 의욕이나 흥미를 느끼지 못하시나요?', type: 'likert5', axis: 'work' },
    // 대인관계 번아웃 (14-19)
    { id: 14, text: '사람들을 상대하는 것이 힘들다고 느끼시나요?', type: 'likert5', axis: 'interpersonal' },
    { id: 15, text: '사람들과 함께하는 것이 지친다고 느끼시나요?', type: 'likert5', axis: 'interpersonal' },
    { id: 16, text: '사람들과의 관계 때문에 탈진한 느낌이 드시나요?', type: 'likert5', axis: 'interpersonal' },
    { id: 17, text: '사람들에게 충분히 줄 수 없다고 느끼시나요?', type: 'likert5', axis: 'interpersonal' },
    { id: 18, text: '사람들과 함께 일하는 것에 더 이상 인내심이 없다고 느끼시나요?', type: 'likert5', axis: 'interpersonal' },
    { id: 19, text: '사람들을 대할 때 불편함을 느끼시나요?', type: 'likert5', axis: 'interpersonal' },
  ],
  scoring: {
    type: 'score-range',
    ranges: [
      {
        min: 0,
        max: 25,
        label: '번아웃 없음',
        description: '번아웃 증상이 거의 없는 건강한 상태입니다. 현재의 균형을 잘 유지하고 계십니다.',
        recommendation: '지금처럼 건강한 생활 패턴을 유지하세요. 정기적인 휴식과 취미 활동이 번아웃 예방에 도움이 됩니다.',
      },
      {
        min: 26,
        max: 50,
        label: '경미한 번아웃',
        description: '일부 번아웃 증상이 나타나고 있습니다. 적절한 휴식과 스트레스 관리가 필요한 시점입니다.',
        recommendation: '업무와 여가의 균형을 점검하고, 스트레스 해소 방법을 찾아보세요.',
      },
      {
        min: 51,
        max: 75,
        label: '중등도 번아웃',
        description: '상당한 번아웃 상태입니다. 적극적인 회복 조치가 필요합니다.',
        recommendation: '가능하면 일정 기간 충분한 휴식을 취하고, 필요하다면 전문 상담을 받아보세요.',
      },
      {
        min: 76,
        max: 100,
        label: '심각한 번아웃',
        description: '심각한 번아웃 상태입니다. 즉각적인 조치와 전문가 도움이 필요합니다.',
        recommendation: '즉시 업무 부담을 줄이고 정신건강의학과 또는 심리상담 전문가에게 도움을 요청하세요.',
      },
    ],
  },
}
