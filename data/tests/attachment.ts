import type { TestData } from '@/types/test'

export const attachment: TestData = {
  slug: 'attachment',
  title: '연애 유형 테스트 (애착 유형)',
  shortTitle: '연애 유형',
  description:
    '나의 연애 유형은 안정형, 불안형, 회피형, 혼란형 중 어떤 유형일까요? 20문항으로 나의 애착 유형을 무료로 알아보세요.',
  keywords: [
    '연애 유형 테스트',
    '애착 유형 테스트',
    '연애 스타일 테스트',
    '불안형 회피형',
    '안정형 애착',
    '연애 테스트 무료',
    '애착 유형 자가진단',
    '나의 연애 유형',
    '애착 유형 검사',
    '회피형 연애',
  ],
  category: '성격',
  questionCount: 20,
  estimatedMinutes: 5,
  ogImage: '/og/attachment.png',
  lastModified: '2025-05-08',
  canonical: 'https://taro.codedanswer.com/attachment',
  longDescription: `애착 이론(Attachment Theory)은 존 볼비(John Bowlby)와 메리 에인스워스(Mary Ainsworth)가 정립한 심리학 이론으로, 사람이 가까운 타인과 관계 맺는 방식을 설명합니다. 성인기의 연애 관계에서도 이 애착 패턴은 강하게 드러납니다.

성인 애착 유형은 크게 네 가지로 나뉩니다. 안정형은 친밀감과 독립성을 균형 있게 유지하며, 불안형은 연인의 사랑과 관심에 대해 지속적인 불안을 느낍니다. 회피형은 감정적 친밀감을 부담스러워하며 거리를 두려 하고, 혼란형은 친밀감을 원하면서도 두려워하는 복잡한 패턴을 보입니다.

자신의 애착 유형을 이해하면 연애에서 반복되는 패턴의 원인을 파악하고, 더 건강한 관계를 만들어 가는 데 도움이 됩니다.`,
  faqs: [
    {
      question: '애착 유형은 바꿀 수 있나요?',
      answer:
        '네, 애착 유형은 고정된 것이 아닙니다. 건강한 연인이나 친구와의 꾸준한 관계 경험, 심리 상담, 자기 인식 향상을 통해 불안형이나 회피형에서 점차 안정형에 가까워질 수 있습니다.',
    },
    {
      question: '왜 연애할 때마다 같은 패턴이 반복될까요?',
      answer:
        '애착 유형은 어린 시절 양육자와의 관계에서 형성되어 성인기 연애에도 반복되는 경향이 있습니다. 자신의 패턴을 인식하는 것이 변화의 첫 단계입니다.',
    },
    {
      question: '안정형 애착이 아니면 나쁜 건가요?',
      answer:
        '아닙니다. 모든 애착 유형은 특정 환경에서 형성된 적응 방식입니다. 전 세계 성인의 약 40~45%는 불안형, 회피형, 혼란형 중 하나에 속합니다. 자신의 유형을 이해하고 성장하는 것이 중요합니다.',
    },
  ],
  questions: [
    {
      id: 1,
      text: '연인에게 솔직하게 내 감정을 표현하는 것이 편하다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'S' },
        { label: '그렇지 않다', value: 2, key: 'S' },
        { label: '보통이다', value: 3, key: 'S' },
        { label: '그렇다', value: 4, key: 'S' },
        { label: '매우 그렇다', value: 5, key: 'S' },
      ],
    },
    {
      id: 2,
      text: '연인이 나에게 화가 났을 때도 대화로 잘 해결할 수 있다고 믿는다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'S' },
        { label: '그렇지 않다', value: 2, key: 'S' },
        { label: '보통이다', value: 3, key: 'S' },
        { label: '그렇다', value: 4, key: 'S' },
        { label: '매우 그렇다', value: 5, key: 'S' },
      ],
    },
    {
      id: 3,
      text: '혼자만의 시간을 즐기면서도 연인과의 친밀함을 잘 유지할 수 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'S' },
        { label: '그렇지 않다', value: 2, key: 'S' },
        { label: '보통이다', value: 3, key: 'S' },
        { label: '그렇다', value: 4, key: 'S' },
        { label: '매우 그렇다', value: 5, key: 'S' },
      ],
    },
    {
      id: 4,
      text: '연인에게 도움이 필요할 때 자연스럽게 요청할 수 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'S' },
        { label: '그렇지 않다', value: 2, key: 'S' },
        { label: '보통이다', value: 3, key: 'S' },
        { label: '그렇다', value: 4, key: 'S' },
        { label: '매우 그렇다', value: 5, key: 'S' },
      ],
    },
    {
      id: 5,
      text: '연인을 기본적으로 신뢰하며 특별한 이유 없이 크게 걱정하지 않는다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'S' },
        { label: '그렇지 않다', value: 2, key: 'S' },
        { label: '보통이다', value: 3, key: 'S' },
        { label: '그렇다', value: 4, key: 'S' },
        { label: '매우 그렇다', value: 5, key: 'S' },
      ],
    },
    {
      id: 6,
      text: '연인에게 연락이 없으면 나에게 화가 난 건지, 다른 사람에게 관심이 생긴 건지 걱정된다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'A' },
        { label: '그렇지 않다', value: 2, key: 'A' },
        { label: '보통이다', value: 3, key: 'A' },
        { label: '그렇다', value: 4, key: 'A' },
        { label: '매우 그렇다', value: 5, key: 'A' },
      ],
    },
    {
      id: 7,
      text: '연인이 나를 충분히 사랑하지 않는 것 같다는 느낌이 자주 든다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'A' },
        { label: '그렇지 않다', value: 2, key: 'A' },
        { label: '보통이다', value: 3, key: 'A' },
        { label: '그렇다', value: 4, key: 'A' },
        { label: '매우 그렇다', value: 5, key: 'A' },
      ],
    },
    {
      id: 8,
      text: '연인이 다른 이성과 친하게 지내는 것을 보면 강한 불안이나 질투를 느낀다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'A' },
        { label: '그렇지 않다', value: 2, key: 'A' },
        { label: '보통이다', value: 3, key: 'A' },
        { label: '그렇다', value: 4, key: 'A' },
        { label: '매우 그렇다', value: 5, key: 'A' },
      ],
    },
    {
      id: 9,
      text: '버려질까 봐 두려워 연인의 관심을 확인하거나 더 집착하게 될 때가 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'A' },
        { label: '그렇지 않다', value: 2, key: 'A' },
        { label: '보통이다', value: 3, key: 'A' },
        { label: '그렇다', value: 4, key: 'A' },
        { label: '매우 그렇다', value: 5, key: 'A' },
      ],
    },
    {
      id: 10,
      text: '상대가 나를 덜 좋아하는 것 같으면 더 잘 보이려 하거나 매달리게 된다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'A' },
        { label: '그렇지 않다', value: 2, key: 'A' },
        { label: '보통이다', value: 3, key: 'A' },
        { label: '그렇다', value: 4, key: 'A' },
        { label: '매우 그렇다', value: 5, key: 'A' },
      ],
    },
    {
      id: 11,
      text: '누군가가 나에게 너무 가까이 다가오려 하면 불편함이나 부담감을 느낀다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'AV' },
        { label: '그렇지 않다', value: 2, key: 'AV' },
        { label: '보통이다', value: 3, key: 'AV' },
        { label: '그렇다', value: 4, key: 'AV' },
        { label: '매우 그렇다', value: 5, key: 'AV' },
      ],
    },
    {
      id: 12,
      text: '연애 관계에서 감정적으로 깊이 의존하거나 의존받는 것이 두렵다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'AV' },
        { label: '그렇지 않다', value: 2, key: 'AV' },
        { label: '보통이다', value: 3, key: 'AV' },
        { label: '그렇다', value: 4, key: 'AV' },
        { label: '매우 그렇다', value: 5, key: 'AV' },
      ],
    },
    {
      id: 13,
      text: '연인이 내 감정 표현을 요구하거나 더 많은 시간을 바라면 부담스럽다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'AV' },
        { label: '그렇지 않다', value: 2, key: 'AV' },
        { label: '보통이다', value: 3, key: 'AV' },
        { label: '그렇다', value: 4, key: 'AV' },
        { label: '매우 그렇다', value: 5, key: 'AV' },
      ],
    },
    {
      id: 14,
      text: '갈등이 생기면 대화보다 혼자만의 시간을 가지며 정리하고 싶다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'AV' },
        { label: '그렇지 않다', value: 2, key: 'AV' },
        { label: '보통이다', value: 3, key: 'AV' },
        { label: '그렇다', value: 4, key: 'AV' },
        { label: '매우 그렇다', value: 5, key: 'AV' },
      ],
    },
    {
      id: 15,
      text: '연인이 없어도 충분히 행복하며, 친밀한 관계 자체가 없어도 크게 상관없다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'AV' },
        { label: '그렇지 않다', value: 2, key: 'AV' },
        { label: '보통이다', value: 3, key: 'AV' },
        { label: '그렇다', value: 4, key: 'AV' },
        { label: '매우 그렇다', value: 5, key: 'AV' },
      ],
    },
    {
      id: 16,
      text: '누군가에게 가까이 다가가고 싶으면서도 동시에 멀리하고 싶은 충동을 느낄 때가 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'D' },
        { label: '그렇지 않다', value: 2, key: 'D' },
        { label: '보통이다', value: 3, key: 'D' },
        { label: '그렇다', value: 4, key: 'D' },
        { label: '매우 그렇다', value: 5, key: 'D' },
      ],
    },
    {
      id: 17,
      text: '연인에 대해 매우 좋은 감정과 매우 나쁜 감정이 빠르게 번갈아 들 때가 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'D' },
        { label: '그렇지 않다', value: 2, key: 'D' },
        { label: '보통이다', value: 3, key: 'D' },
        { label: '그렇다', value: 4, key: 'D' },
        { label: '매우 그렇다', value: 5, key: 'D' },
      ],
    },
    {
      id: 18,
      text: '상처받을 것 같으면서도 그 관계를 포기하지 못해 힘든 상황을 반복할 때가 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'D' },
        { label: '그렇지 않다', value: 2, key: 'D' },
        { label: '보통이다', value: 3, key: 'D' },
        { label: '그렇다', value: 4, key: 'D' },
        { label: '매우 그렇다', value: 5, key: 'D' },
      ],
    },
    {
      id: 19,
      text: '친밀한 관계에서 예측할 수 없는 나 자신의 행동이나 반응에 스스로 놀랄 때가 있다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'D' },
        { label: '그렇지 않다', value: 2, key: 'D' },
        { label: '보통이다', value: 3, key: 'D' },
        { label: '그렇다', value: 4, key: 'D' },
        { label: '매우 그렇다', value: 5, key: 'D' },
      ],
    },
    {
      id: 20,
      text: '연애를 원하지만 막상 관계가 깊어지면 불안과 혼란을 동시에 느낀다.',
      type: 'likert5',
      options: [
        { label: '전혀 그렇지 않다', value: 1, key: 'D' },
        { label: '그렇지 않다', value: 2, key: 'D' },
        { label: '보통이다', value: 3, key: 'D' },
        { label: '그렇다', value: 4, key: 'D' },
        { label: '매우 그렇다', value: 5, key: 'D' },
      ],
    },
  ],
  scoring: {
    type: 'type-axis',
    typeMap: {
      S: {
        id: 'S',
        label: '안정형 애착',
        description: `안정형 애착 유형은 연인과의 관계에서 친밀감과 독립성을 균형 있게 유지합니다. 상대방을 기본적으로 신뢰하며, 갈등이 생겨도 대화로 해결할 수 있다고 믿습니다.

안정형은 자신의 감정을 건강하게 표현하고 상대방의 필요도 잘 인식합니다. 혼자 있는 시간도 편안하게 즐길 수 있으며, 연인에게 필요 이상으로 매달리거나 거리를 두지 않습니다.

전 세계 성인의 약 55~60%가 안정형 애착을 가진 것으로 알려져 있습니다. 안정형이라도 완벽한 것은 아니며, 상황에 따라 불안이나 회피 성향이 나타날 수 있습니다.`,
        traits: ['높은 신뢰감', '균형 잡힌 친밀감', '대화로 갈등 해결', '건강한 독립성', '감정 표현 능숙'],
      },
      A: {
        id: 'A',
        label: '불안형 애착',
        description: `불안형 애착 유형은 연인에게 깊이 헌신하지만, 상대방이 자신을 충분히 사랑하지 않을까 지속적으로 걱정합니다. 연인의 반응에 매우 민감하고, 거절당하거나 버려질까 봐 두려워합니다.

불안형은 강한 친밀감을 원하지만, 그만큼 불안도 커집니다. 연인에게 잦은 확인이나 안심을 구하거나, 관심을 끌기 위한 행동을 할 수 있습니다.

이 패턴은 어린 시절 일관성 없는 양육 방식에서 비롯되는 경우가 많습니다. 자신의 가치를 연인의 반응에서 찾지 않고, 내면에서 찾는 연습이 도움이 됩니다.`,
        traits: ['강한 헌신', '관심·확인 욕구', '거절에 예민', '질투 경향', '상대 중심적'],
      },
      AV: {
        id: 'AV',
        label: '회피형 애착',
        description: `회피형 애착 유형은 독립성과 자율성을 매우 중요하게 여깁니다. 친밀한 관계 자체가 때로 부담스럽고, 상대방이 너무 가까이 다가오면 불편함을 느낍니다.

회피형은 감정 표현이 어렵고, 갈등 상황에서 대화보다 거리두기를 선택하는 경향이 있습니다. 혼자 있는 것을 선호하며, 연인에게 의존하는 것을 약함으로 볼 수 있습니다.

이 패턴은 어린 시절 감정적 거리감이 있는 양육 환경에서 형성되는 경우가 많습니다. 감정을 표현하는 것이 나약함이 아니라 용기임을 받아들이는 것이 성장의 시작입니다.`,
        traits: ['강한 독립성', '친밀감 불편', '감정 표현 어려움', '거리두기 경향', '자급자족 선호'],
      },
      D: {
        id: 'D',
        label: '혼란형 애착',
        description: `혼란형 애착 유형은 친밀한 관계에서 복잡하고 상충하는 감정을 경험합니다. 누군가와 가까워지고 싶으면서도 동시에 두렵고, 연인에 대해 극단적인 감정이 빠르게 변할 수 있습니다.

혼란형은 관계에서 안정감을 찾기 어렵고, 때로 자신의 행동이나 반응이 예측하기 어렵습니다. 상처받을 것을 알면서도 관계에서 벗어나지 못하는 패턴을 보일 수 있습니다.

이 패턴은 어린 시절 트라우마나 복잡한 가족 관계에서 비롯될 수 있습니다. 전문 상담을 통해 자신의 패턴을 이해하고 점차 안정형 애착으로 발전할 수 있습니다.`,
        traits: ['접근-회피 갈등', '감정 기복 심함', '예측 불가 반응', '관계에서 혼란', '두려운 친밀감'],
      },
    },
  },
}
