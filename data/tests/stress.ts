import type { TestData } from '@/types/test'

export const stress: TestData = {
  slug: 'stress',
  title: '스트레스 테스트 (PSS-10)',
  shortTitle: '스트레스',
  description:
    'PSS-10 지각된 스트레스 척도입니다. 10문항으로 지난 한 달간의 스트레스 수준을 무료로 자가진단하세요.',
  keywords: [
    '스트레스 테스트',
    '스트레스 자가진단',
    '스트레스 측정',
    'PSS 스트레스',
    '스트레스 수준 테스트',
    '스트레스 테스트 무료',
    '스트레스 자가검사',
    '만성 스트레스 테스트',
    '스트레스 지수 테스트',
    '직장 스트레스 테스트',
  ],
  category: '임상',
  questionCount: 10,
  estimatedMinutes: 3,
  ogImage: '/og/stress.png',
  lastModified: '2025-05-09',
  canonical: 'https://taro.codedanswer.com/stress',
  disclaimer:
    '이 테스트는 교육 및 참고 목적이며 의학적 진단을 대체하지 않습니다. 심각한 스트레스가 지속된다면 전문가 상담을 권장합니다.',
  longDescription: `PSS(Perceived Stress Scale)는 Sheldon Cohen 등이 1983년에 개발한 공개도메인 스트레스 자가진단 척도입니다. 10문항으로 구성된 PSS-10은 전 세계에서 가장 널리 사용되는 스트레스 측정 도구 중 하나입니다.

이 테스트는 지난 한 달 동안 얼마나 자주 스트레스를 받았는지, 그리고 스스로 얼마나 통제할 수 있다고 느끼는지를 측정합니다. 단순히 스트레스 사건의 수가 아니라, 자신의 삶이 통제 불가능하고 과부하 상태라고 느끼는 정도를 평가합니다.

총점 0~40점이며, 낮을수록 스트레스를 적게 지각함을 의미합니다. 한국 성인 평균은 약 18~22점 수준으로 알려져 있습니다.`,
  sourceCredit: 'Cohen S 등 (1983). PSS-10 — 공개도메인',
  faqs: [
    {
      question: '스트레스가 높으면 건강에 어떤 영향을 미치나요?',
      answer:
        '만성적인 높은 스트레스는 면역력 저하, 수면 장애, 소화 문제, 두통, 고혈압 등의 신체 증상과 불안, 우울, 번아웃 등의 심리적 문제로 이어질 수 있습니다. 스트레스 관리는 장기적인 건강 유지에 매우 중요합니다.',
    },
    {
      question: '스트레스를 줄이는 효과적인 방법은 무엇인가요?',
      answer:
        '규칙적인 유산소 운동(주 3회 이상), 충분한 수면(7~8시간), 마음챙김 명상, 사회적 지지망 강화, 시간 관리 기술 향상이 스트레스 감소에 효과적입니다. 필요한 경우 심리상담도 큰 도움이 됩니다.',
    },
    {
      question: 'PSS 점수가 높아도 정상인 경우가 있나요?',
      answer:
        '중요한 시험이나 직장 변화, 이사 등 큰 생활 변화가 있을 때 일시적으로 스트레스 점수가 높아지는 것은 자연스럽습니다. 그러나 특별한 이유 없이 지속적으로 높은 점수가 나온다면 전문가 상담을 권장합니다.',
    },
  ],
  questions: [
    {
      id: 1,
      text: '지난 한 달간, 예상치 못한 일이 생겨서 기분이 좋지 않았던 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '거의 없음', value: 1 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 3 },
        { label: '매우 자주', value: 4 },
      ],
    },
    {
      id: 2,
      text: '지난 한 달간, 삶의 중요한 일들을 통제할 수 없다고 느낀 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '거의 없음', value: 1 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 3 },
        { label: '매우 자주', value: 4 },
      ],
    },
    {
      id: 3,
      text: '지난 한 달간, 신경이 예민해지거나 스트레스를 받는다고 느낀 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '거의 없음', value: 1 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 3 },
        { label: '매우 자주', value: 4 },
      ],
    },
    {
      id: 4,
      text: '지난 한 달간, 개인적인 문제들을 잘 처리할 수 있다는 자신감을 느낀 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 4 },
        { label: '거의 없음', value: 3 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 1 },
        { label: '매우 자주', value: 0 },
      ],
    },
    {
      id: 5,
      text: '지난 한 달간, 일이 뜻대로 잘 되어간다고 느낀 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 4 },
        { label: '거의 없음', value: 3 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 1 },
        { label: '매우 자주', value: 0 },
      ],
    },
    {
      id: 6,
      text: '지난 한 달간, 해야 할 일들을 모두 처리할 수 없다고 느낀 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '거의 없음', value: 1 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 3 },
        { label: '매우 자주', value: 4 },
      ],
    },
    {
      id: 7,
      text: '지난 한 달간, 짜증나는 일들을 잘 조절할 수 있었던 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 4 },
        { label: '거의 없음', value: 3 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 1 },
        { label: '매우 자주', value: 0 },
      ],
    },
    {
      id: 8,
      text: '지난 한 달간, 모든 일을 잘 처리하고 있다고 느낀 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 4 },
        { label: '거의 없음', value: 3 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 1 },
        { label: '매우 자주', value: 0 },
      ],
    },
    {
      id: 9,
      text: '지난 한 달간, 내가 통제할 수 없는 일들 때문에 화가 난 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '거의 없음', value: 1 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 3 },
        { label: '매우 자주', value: 4 },
      ],
    },
    {
      id: 10,
      text: '지난 한 달간, 어려운 일들이 너무 많이 쌓여서 도저히 해결할 수 없다고 느낀 적이 얼마나 있었나요?',
      type: 'likert5',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '거의 없음', value: 1 },
        { label: '때때로', value: 2 },
        { label: '자주', value: 3 },
        { label: '매우 자주', value: 4 },
      ],
    },
  ],
  scoring: {
    type: 'score-range',
    ranges: [
      {
        min: 0,
        max: 13,
        label: '낮은 스트레스',
        description:
          '현재 스트레스 수준이 낮습니다. 삶의 어려움을 비교적 잘 통제하고 있으며 전반적으로 안정적인 상태입니다. 현재의 건강한 생활 습관을 유지하세요.',
        recommendation:
          '꾸준한 운동, 충분한 수면, 사회적 연결을 통해 현재 상태를 유지하세요.',
      },
      {
        min: 14,
        max: 26,
        label: '중등도 스트레스',
        description:
          '중간 수준의 스트레스를 경험하고 있습니다. 한국 성인 평균 범위에 해당하지만, 관리하지 않으면 높아질 수 있습니다. 스트레스 원인을 파악하고 이완 기법을 적극적으로 활용하세요.',
        recommendation:
          '명상, 규칙적인 운동, 충분한 수면을 통해 스트레스를 관리하세요. 주 1회 이상 여가 활동을 즐기세요.',
      },
      {
        min: 27,
        max: 40,
        label: '높은 스트레스',
        description:
          '높은 수준의 스트레스를 경험하고 있습니다. 신체적, 심리적 건강에 영향을 미칠 수 있는 수준입니다. 스트레스 원인을 해결하고 전문가 도움을 고려하는 것이 좋습니다.',
        recommendation:
          '심리 상담, 직장 환경 개선, 사회적 지지 강화를 적극적으로 추구하세요. 혼자 해결하려 하지 마세요.',
      },
    ],
  },
}
