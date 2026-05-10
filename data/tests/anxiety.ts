import type { TestData } from '@/types/test'

export const anxiety: TestData = {
  slug: 'anxiety',
  title: '불안장애 테스트 (GAD-7)',
  shortTitle: '불안 테스트',
  description:
    'GAD-7 범불안장애 자가진단 테스트입니다. 7문항으로 지난 2주간의 불안 증상을 체크하여 불안 수준을 무료로 확인하세요.',
  keywords: [
    '불안 테스트',
    '불안장애 테스트',
    '불안증 자가진단',
    'GAD-7',
    '범불안장애 테스트',
    '불안 자가진단',
    '불안증 테스트',
    '불안 수준 측정',
    '불안장애 증상 체크',
    '불안 자가테스트 무료',
  ],
  category: '임상',
  questionCount: 7,
  estimatedMinutes: 2,
  ogImage: '/og/anxiety.png',
  lastModified: '2025-05-09',
  canonical: 'https://taro.codedanswer.com/anxiety',
  disclaimer:
    '이 테스트는 의학적 진단을 대체하지 않습니다. 점수가 높게 나온 경우 정신건강의학과 전문의 상담을 받으시기 바랍니다.',
  longDescription: `GAD-7(Generalized Anxiety Disorder-7)은 세계보건기구(WHO) 및 전 세계 임상 현장에서 범불안장애 선별에 사용되는 공개도메인 자가진단 척도입니다. Robert Spitzer 등이 2006년에 개발하였으며, 국내 정신건강 임상에서도 널리 쓰입니다.

7개 문항으로 지난 2주 동안 경험한 불안 증상의 빈도를 측정합니다. 총점은 0~21점이며, 최소(0~4점) · 경미(5~9점) · 중등도(10~14점) · 심각(15~21점)으로 분류됩니다.

불안은 누구나 경험하는 자연스러운 감정이지만, 지속적이고 통제하기 어려울 경우 전문적인 도움이 필요합니다. 이 테스트를 통해 자신의 불안 수준을 파악하고, 필요하다면 전문가와 상담하세요.`,
  sourceCredit: 'Spitzer RL 등 (2006). GAD-7 — 공개도메인',
  faqs: [
    {
      question: 'GAD-7 점수가 높으면 반드시 불안장애인가요?',
      answer:
        'GAD-7은 자가진단 도구이므로 높은 점수가 반드시 불안장애를 의미하지는 않습니다. 정확한 진단은 정신건강의학과 전문의가 임상 면담을 통해 내립니다. 점수가 10점 이상이라면 전문가 상담을 권장합니다.',
    },
    {
      question: '불안과 공황장애는 어떻게 다른가요?',
      answer:
        '범불안장애(GAD)는 일상의 여러 상황에서 지속적이고 과도한 걱정이 특징입니다. 공황장애는 갑작스럽고 강렬한 공황 발작이 반복 발생하는 것이 특징입니다. 두 가지가 함께 나타나는 경우도 있으며, 전문가 진단이 필요합니다.',
    },
    {
      question: '불안을 스스로 완화하는 방법이 있나요?',
      answer:
        '규칙적인 유산소 운동, 명상, 횡격막 호흡(복식호흡), 충분한 수면, 카페인·알코올 감소가 불안 완화에 도움이 됩니다. 인지행동치료(CBT)는 불안장애에 효과가 입증된 심리치료법입니다.',
    },
    {
      question: '불안장애는 약을 먹어야 하나요?',
      answer: '경미한 불안은 심리치료만으로도 개선 가능합니다. 중등도 이상의 불안장애에는 항불안제나 항우울제 처방이 효과적입니다. 정신건강의학과 전문의와 상담 후 개인 상황에 맞는 치료법을 선택하세요.',
    },
    {
      question: '불안장애가 있으면 일상생활이 힘든가요?',
      answer: '치료 없이는 일상 기능에 지장을 줄 수 있지만, 적절한 치료를 받으면 대부분 증상이 크게 호전됩니다. 조기에 발견하고 치료받을수록 예후가 좋습니다.',
    },
  ],
  questions: [
    {
      id: 1,
      text: '초조하거나 불안하거나 조마조마하게 느껴진다.',
      type: 'frequency4',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '며칠', value: 1 },
        { label: '절반 이상', value: 2 },
        { label: '거의 매일', value: 3 },
      ],
    },
    {
      id: 2,
      text: '걱정하는 것을 멈추거나 조절할 수가 없다.',
      type: 'frequency4',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '며칠', value: 1 },
        { label: '절반 이상', value: 2 },
        { label: '거의 매일', value: 3 },
      ],
    },
    {
      id: 3,
      text: '여러 가지 것들에 대해 지나치게 걱정한다.',
      type: 'frequency4',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '며칠', value: 1 },
        { label: '절반 이상', value: 2 },
        { label: '거의 매일', value: 3 },
      ],
    },
    {
      id: 4,
      text: '편안하게 있기가 어렵다.',
      type: 'frequency4',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '며칠', value: 1 },
        { label: '절반 이상', value: 2 },
        { label: '거의 매일', value: 3 },
      ],
    },
    {
      id: 5,
      text: '안절부절못해서 가만히 있기가 힘들다.',
      type: 'frequency4',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '며칠', value: 1 },
        { label: '절반 이상', value: 2 },
        { label: '거의 매일', value: 3 },
      ],
    },
    {
      id: 6,
      text: '쉽게 짜증이 나거나 신경질이 난다.',
      type: 'frequency4',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '며칠', value: 1 },
        { label: '절반 이상', value: 2 },
        { label: '거의 매일', value: 3 },
      ],
    },
    {
      id: 7,
      text: '마치 끔찍한 일이 일어날 것처럼 두렵게 느껴진다.',
      type: 'frequency4',
      options: [
        { label: '전혀 없음', value: 0 },
        { label: '며칠', value: 1 },
        { label: '절반 이상', value: 2 },
        { label: '거의 매일', value: 3 },
      ],
    },
  ],
  scoring: {
    type: 'score-range',
    ranges: [
      {
        min: 0,
        max: 4,
        label: '최소 불안',
        description:
          '현재 불안 수준이 매우 낮습니다. 일상적인 범위 내에서의 걱정이나 긴장을 경험하고 있을 수 있습니다. 충분한 휴식과 스트레스 관리를 통해 현재 상태를 유지하세요.',
        recommendation:
          '규칙적인 운동과 충분한 수면으로 심리적 균형을 유지하세요.',
      },
      {
        min: 5,
        max: 9,
        label: '경미한 불안',
        description:
          '경미한 수준의 불안 증상이 있습니다. 일상에 큰 지장을 주지는 않지만, 스트레스가 누적되면 심해질 수 있습니다. 이완 기법이나 마음챙김 연습이 도움이 될 수 있습니다.',
        recommendation:
          '명상, 복식호흡, 규칙적인 운동 등 이완 방법을 꾸준히 실천해보세요.',
      },
      {
        min: 10,
        max: 14,
        label: '중등도 불안',
        description:
          '중등도의 불안 증상이 있습니다. 일상생활이나 직장, 학교에서 어느 정도 영향을 받을 수 있습니다. 전문가와 상담하거나 인지행동치료(CBT)를 고려해보는 것이 도움이 될 수 있습니다.',
        recommendation:
          '정신건강 전문가 상담을 권장합니다. 인지행동치료(CBT)가 불안 장애에 효과적입니다.',
      },
      {
        min: 15,
        max: 21,
        label: '심각한 불안',
        description:
          '심각한 수준의 불안 증상이 있습니다. 일상생활에 상당한 영향을 미치고 있을 가능성이 높습니다. 정신건강의학과 전문의 진료를 적극적으로 권장합니다.',
        recommendation:
          '정신건강의학과 전문의 진료를 받으시기 바랍니다. 치료를 통해 충분히 개선될 수 있습니다.',
      },
    ],
  },
}
