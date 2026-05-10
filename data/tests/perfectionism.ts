import type { TestData } from '@/types/test'

export const perfectionism: TestData = {
  slug: 'perfectionism',
  title: '완벽주의 성향 테스트',
  shortTitle: '완벽주의',
  description:
    '나는 완벽주의자일까요? 20문항으로 자기지향적·타인지향적 완벽주의 성향을 무료로 측정하세요.',
  keywords: [
    '완벽주의 테스트',
    '완벽주의 자가진단',
    '완벽주의 성향 테스트',
    '나는 완벽주의자',
    '완벽주의 무료 테스트',
    '완벽주의 심리테스트',
    '완벽주의 성격',
    '완벽주의 극복',
    '완벽주의 성향 체크',
    '완벽주의 성격 유형',
  ],
  category: '성격',
  questionCount: 20,
  estimatedMinutes: 5,
  ogImage: '/og/perfectionism.png',
  lastModified: '2025-05-09',
  canonical: 'https://taro.codedanswer.com/perfectionism',
  longDescription: `완벽주의(Perfectionism)는 자신과 타인에게 매우 높은 기준을 설정하고, 그 기준에 미치지 못하는 것을 용납하지 못하는 성향입니다. 완벽주의는 단순한 성실함이나 높은 목표 의식과는 다릅니다.

완벽주의는 크게 두 가지로 나뉩니다. 자기지향적 완벽주의는 자기 자신에게 완벽한 기준을 요구하는 성향으로, 적절한 수준이면 성취 동기를 높이지만 지나치면 자기비판과 번아웃으로 이어질 수 있습니다. 타인지향적 완벽주의는 주변 사람들에게도 높은 기준을 요구하는 성향으로, 대인관계에 긴장을 일으킬 수 있습니다.

완벽주의 자체는 문제가 아닙니다. 중요한 것은 완벽주의가 자신을 동기부여하는 긍정적 힘인지, 아니면 두려움과 실패 회피에서 비롯된 부정적 힘인지 파악하는 것입니다.`,
  faqs: [
    {
      question: '완벽주의는 나쁜 것인가요?',
      answer:
        '완벽주의 자체가 나쁜 것은 아닙니다. 높은 기준과 성취 지향성은 많은 성공한 사람들의 특징이기도 합니다. 문제는 완벽주의가 만성적인 불안, 자기비판, 미루기, 번아웃으로 이어질 때입니다. 건강한 완벽주의는 성장을 촉진하고, 건강하지 않은 완벽주의는 성장을 막습니다.',
    },
    {
      question: '완벽주의를 어떻게 완화할 수 있나요?',
      answer:
        '"충분히 좋은(good enough)" 기준을 의식적으로 설정하고, 결과보다 과정에 가치를 두는 연습을 해보세요. 실수를 배움의 기회로 재정의하고, 자기 자신에게도 타인에게 보내는 것처럼 따뜻한 말을 건네는 자기 자비(self-compassion) 연습이 도움이 됩니다.',
    },
    {
      question: '완벽주의와 강박장애(OCD)는 같은 건가요?',
      answer:
        '완벽주의 성향과 강박장애(OCD)는 다릅니다. OCD는 원치 않는 강박적 생각과 그 불안을 줄이기 위한 반복 행동이 특징인 임상 장애입니다. 완벽주의는 성격 성향으로, OCD의 위험 요인 중 하나일 수 있지만 완벽주의를 가진다고 해서 OCD는 아닙니다.',
    },
  ],
  questions: [
    {
      id: 1,
      text: '어떤 일을 할 때 완벽하게 해내지 못하면 한 것 자체가 의미 없다고 느낀다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 2,
      text: '실수를 하면 오랫동안 머릿속에서 떠나지 않고 반복해서 떠오른다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 3,
      text: '다른 사람들이 볼 때 내가 능력 있고 성공한 사람처럼 보여야 한다는 압박을 느낀다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 4,
      text: '제출하거나 공유하기 전에 같은 내용을 여러 번 확인한다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 5,
      text: '완벽하게 할 자신이 없으면 아예 시작하지 않으려는 경향이 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 6,
      text: '칭찬을 받아도 스스로 만족스럽지 않으면 기쁘지 않다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 7,
      text: '다른 사람들이 일을 대충 하는 것을 보면 이해하기 어렵다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 8,
      text: '중요한 일을 잘 마쳤을 때도 더 잘할 수 있었다는 생각이 먼저 든다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 9,
      text: '타인에게 내 약점이나 실수를 보이는 것이 매우 두렵다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 10,
      text: '내가 설정한 기준에 도달하지 못하면 실패했다는 기분이 든다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 11,
      text: '함께 일하는 사람이 내 기준보다 낮은 퀄리티로 일하면 불만스럽다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 12,
      text: '작업 중 오류를 발견하면 전체를 다시 하더라도 반드시 수정해야 한다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 13,
      text: '성공했을 때도 운이 좋았거나 아직 부족하다는 생각이 먼저 든다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 14,
      text: '규칙, 절차, 순서를 정확히 따르지 않으면 불안하거나 불편하다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 15,
      text: '비판이나 부정적인 피드백을 받으면 오랫동안 영향을 받는다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 16,
      text: '가족이나 친구들도 내 수준에 맞게 행동해야 한다고 생각한다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 17,
      text: '기한이 충분해도 결과물이 완벽하지 않을 것 같아 일을 미루는 경향이 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 18,
      text: '무엇이든 "충분히 좋다"는 기준으로 마무리하기가 어렵다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 19,
      text: '나 자신에 대한 기준이 다른 사람들의 기준보다 훨씬 높다고 생각한다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
    {
      id: 20,
      text: '실수에 대한 두려움이 새로운 도전을 방해할 때가 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1 },
        { label: '그렇지 않다', value: 2 },
        { label: '보통이다', value: 3 },
        { label: '그렇다', value: 4 },
        { label: '매우 그렇다', value: 5 },
      ],
    },
  ],
  scoring: {
    type: 'score-range',
    ranges: [
      {
        min: 20,
        max: 39,
        label: '낮은 완벽주의',
        description:
          '완벽주의 성향이 낮습니다. 실수와 불완전함을 자연스럽게 받아들이며, 결과보다 과정을 즐기는 편입니다. 유연한 사고 방식은 스트레스 저항력을 높여줍니다.',
        recommendation:
          '현재의 유연함을 유지하면서도, 중요한 일에서의 기준을 점검해 성장을 이끌어보세요.',
      },
      {
        min: 40,
        max: 59,
        label: '보통 수준의 완벽주의',
        description:
          '중간 수준의 완벽주의 성향을 가지고 있습니다. 높은 기준을 추구하지만, 대부분의 상황에서 균형을 유지하는 편입니다. 다만 스트레스가 높은 상황에서는 완벽주의 성향이 강해질 수 있습니다.',
        recommendation:
          '자기 자신에게도 타인에게 하듯 따뜻한 격려를 보내는 연습을 해보세요.',
      },
      {
        min: 60,
        max: 79,
        label: '높은 완벽주의',
        description:
          '높은 완벽주의 성향을 가지고 있습니다. 성취 지향성이 강하지만, 자기비판, 번아웃, 미루기의 위험이 높습니다. 완벽하지 않아도 충분히 가치 있음을 자신에게 상기시켜야 합니다.',
        recommendation:
          '"충분히 좋다(good enough)"는 기준을 의식적으로 설정하고, 성과보다 과정에 초점을 두는 연습이 필요합니다.',
      },
      {
        min: 80,
        max: 100,
        label: '매우 높은 완벽주의',
        description:
          '매우 높은 완벽주의 성향을 가지고 있습니다. 자신과 타인에게 극도로 높은 기준을 적용하는 경향이 있으며, 이로 인해 만성적 불안, 번아웃, 관계 긴장이 발생할 수 있습니다. 심리 상담을 통해 건강한 기준을 재설정하는 것을 권장합니다.',
        recommendation:
          '심리 상담을 통해 완벽주의의 근원을 탐색하고, 자기 자비(self-compassion) 기술을 배워보세요.',
      },
    ],
  },
}
