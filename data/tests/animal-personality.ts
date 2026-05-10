import type { TestData } from '@/types/test'

export const animalPersonality: TestData = {
  slug: 'animal-personality',
  title: '동물 성격 테스트',
  shortTitle: '동물 성격',
  description: '나는 어떤 동물일까? 20문항으로 나의 성격과 가장 닮은 동물을 무료로 알아보세요. 사자, 여우, 고양이 등 8가지 동물 유형.',
  keywords: [
    '동물 성격 테스트', '나는 어떤 동물', '동물 유형 테스트', '동물 성격 유형',
    '동물 테스트', '내 성격 동물', '동물 mbti', '재미있는 성격 테스트',
    '동물 캐릭터 테스트', '무료 성격 테스트',
  ],
  category: '재미',
  questionCount: 20,
  estimatedMinutes: 5,
  ogImage: '/og/animal-personality.png',
  lastModified: '2025-05-01',
  canonical: 'https://taro.codedanswer.com/animal-personality',
  longDescription: `당신의 성격과 가장 닮은 동물은 무엇일까요? 우리의 성격과 행동 방식은 각각의 동물이 가진 고유한 특성과 놀랍도록 닮아있습니다.

20개의 간단한 질문에 답하면, 사자·여우·고양이·곰·펭귄·올빼미·강아지·토끼 중 당신의 성격과 가장 잘 맞는 동물을 알려드립니다.

단순한 오락을 넘어, 자신의 성격 특성을 재미있고 직관적으로 이해하는 계기가 될 수 있습니다. 가족, 친구들과 함께 해보며 결과를 공유해보세요!`,
  faqs: [
    {
      question: '8가지 동물 유형은 어떻게 결정되나요?',
      answer: '각 질문에 대한 응답이 점수로 계산되어 가장 높은 점수를 받은 동물 유형이 결과로 나옵니다. 각 동물은 독특한 성격 특성과 행동 패턴을 대표합니다.',
    },
    {
      question: '친구와 결과가 같게 나왔어요',
      answer: '같은 동물 유형이 나왔다면, 비슷한 성격 특성을 공유하고 있을 가능성이 높습니다. 다만 같은 유형 안에서도 세부적인 특성은 개인마다 다릅니다.',
    },
    {
      question: '원하는 동물이 안 나왔어요',
      answer: '결과는 응답을 기반으로 산출되므로, 평소 자신의 행동 패턴을 더 정직하게 반영해 다시 시도해보세요. 어떤 동물 유형이든 고유한 매력과 강점이 있습니다!',
    },
  ],
  questions: [
    { id: 1, text: '새로운 모임에서 나는?', type: 'mcq', options: [
      { label: '적극적으로 먼저 인사하며 친해진다', value: 1, key: 'lion' },
      { label: '상황을 관찰하다가 적절한 타이밍에 대화를 시작한다', value: 1, key: 'fox' },
      { label: '마음에 드는 사람 옆에만 있는다', value: 1, key: 'cat' },
      { label: '편안하게 있다가 누군가 다가오면 반갑게 인사한다', value: 1, key: 'dog' },
    ]},
    { id: 2, text: '주말에 나는 주로?', type: 'mcq', options: [
      { label: '친구들을 모아 활동적인 것을 한다', value: 1, key: 'lion' },
      { label: '나만의 취미나 프로젝트에 집중한다', value: 1, key: 'owl' },
      { label: '집에서 혼자 쉬거나 내가 좋아하는 것을 한다', value: 1, key: 'cat' },
      { label: '가족이나 친한 친구들과 조용히 시간을 보낸다', value: 1, key: 'bear' },
    ]},
    { id: 3, text: '어려운 상황에 처했을 때 나는?', type: 'mcq', options: [
      { label: '정면으로 맞서서 해결한다', value: 1, key: 'lion' },
      { label: '다양한 방법을 생각해 가장 영리한 방법을 찾는다', value: 1, key: 'fox' },
      { label: '혼자 조용히 해결 방법을 찾는다', value: 1, key: 'cat' },
      { label: '주변 사람들의 도움을 구한다', value: 1, key: 'penguin' },
    ]},
    { id: 4, text: '친구들이 나를 어떻게 표현할까?', type: 'mcq', options: [
      { label: '리더십 있고 카리스마 있는 사람', value: 1, key: 'lion' },
      { label: '똑똑하고 전략적인 사람', value: 1, key: 'fox' },
      { label: '독립적이고 미스터리한 사람', value: 1, key: 'cat' },
      { label: '따뜻하고 든든한 사람', value: 1, key: 'bear' },
    ]},
    { id: 5, text: '의사결정을 할 때 나는?', type: 'mcq', options: [
      { label: '과감하게 빠른 결정을 내린다', value: 1, key: 'lion' },
      { label: '여러 가지를 분석한 후 최선의 선택을 한다', value: 1, key: 'fox' },
      { label: '충분히 생각하고 신중하게 결정한다', value: 1, key: 'owl' },
      { label: '주변 사람들의 의견을 듣고 결정한다', value: 1, key: 'dog' },
    ]},
    { id: 6, text: '나의 에너지 충전 방법은?', type: 'mcq', options: [
      { label: '사람들과 어울리며 활동적으로 시간을 보낸다', value: 1, key: 'lion' },
      { label: '책이나 다큐멘터리 등으로 지식을 쌓는다', value: 1, key: 'owl' },
      { label: '집에서 혼자 완전히 쉰다', value: 1, key: 'cat' },
      { label: '자연 속에서 여유롭게 시간을 보낸다', value: 1, key: 'bear' },
    ]},
    { id: 7, text: '그룹 프로젝트에서 나는?', type: 'mcq', options: [
      { label: '자연스럽게 리더 역할을 맡는다', value: 1, key: 'lion' },
      { label: '전략과 계획을 세우는 역할을 맡는다', value: 1, key: 'fox' },
      { label: '팀 화합과 분위기를 챙기는 역할을 한다', value: 1, key: 'penguin' },
      { label: '맡은 부분을 성실하게 완수한다', value: 1, key: 'dog' },
    ]},
    { id: 8, text: '나는 어떤 환경에서 일할 때 가장 좋은가?', type: 'mcq', options: [
      { label: '경쟁적이고 도전적인 환경', value: 1, key: 'lion' },
      { label: '자유롭게 창의력을 발휘할 수 있는 환경', value: 1, key: 'fox' },
      { label: '체계적이고 조화로운 환경', value: 1, key: 'penguin' },
      { label: '조용하고 집중할 수 있는 환경', value: 1, key: 'owl' },
    ]},
    { id: 9, text: '나의 가장 큰 강점은?', type: 'mcq', options: [
      { label: '추진력과 리더십', value: 1, key: 'lion' },
      { label: '창의력과 문제 해결력', value: 1, key: 'fox' },
      { label: '공감 능력과 배려심', value: 1, key: 'dog' },
      { label: '분석력과 통찰력', value: 1, key: 'owl' },
    ]},
    { id: 10, text: '갈등 상황에서 나는?', type: 'mcq', options: [
      { label: '직접적으로 맞서 해결한다', value: 1, key: 'lion' },
      { label: '영리하게 상황을 조율한다', value: 1, key: 'fox' },
      { label: '갈등을 피하고 조화를 추구한다', value: 1, key: 'rabbit' },
      { label: '시간을 두고 상황이 자연스럽게 해결되길 기다린다', value: 1, key: 'bear' },
    ]},
    { id: 11, text: '나의 이상적인 휴가는?', type: 'mcq', options: [
      { label: '스릴 넘치는 모험 여행', value: 1, key: 'lion' },
      { label: '새로운 문화와 사람들을 탐험하는 여행', value: 1, key: 'fox' },
      { label: '조용한 자연 속에서 휴식', value: 1, key: 'bear' },
      { label: '가족이나 친구들과의 편안한 여행', value: 1, key: 'penguin' },
    ]},
    { id: 12, text: '내가 화가 났을 때 나는?', type: 'mcq', options: [
      { label: '즉각적으로 표현한다', value: 1, key: 'lion' },
      { label: '속으로 삭이면서 상황을 분석한다', value: 1, key: 'fox' },
      { label: '혼자 거리를 두며 진정한다', value: 1, key: 'cat' },
      { label: '신뢰하는 사람에게 털어놓는다', value: 1, key: 'dog' },
    ]},
    { id: 13, text: '처음 만난 사람과 나는?', type: 'mcq', options: [
      { label: '금방 친해지고 편하게 대화한다', value: 1, key: 'dog' },
      { label: '상대를 관찰하며 천천히 거리를 좁힌다', value: 1, key: 'fox' },
      { label: '마음을 여는 데 시간이 걸린다', value: 1, key: 'cat' },
      { label: '친절하게 대하지만 깊이 알려고 하진 않는다', value: 1, key: 'bear' },
    ]},
    { id: 14, text: '내가 가장 소중히 여기는 것은?', type: 'mcq', options: [
      { label: '성취와 인정', value: 1, key: 'lion' },
      { label: '자유와 독립', value: 1, key: 'cat' },
      { label: '가족과 친구', value: 1, key: 'penguin' },
      { label: '지식과 통찰', value: 1, key: 'owl' },
    ]},
    { id: 15, text: '나의 단점이라고 생각하는 것은?', type: 'mcq', options: [
      { label: '너무 고집이 세거나 지배적일 수 있다', value: 1, key: 'lion' },
      { label: '너무 계산적으로 보일 수 있다', value: 1, key: 'fox' },
      { label: '너무 소극적이거나 의존적일 수 있다', value: 1, key: 'rabbit' },
      { label: '너무 내향적이거나 냉담하게 보일 수 있다', value: 1, key: 'owl' },
    ]},
    { id: 16, text: '스트레스 상황에서 나는?', type: 'mcq', options: [
      { label: '더욱 적극적으로 문제를 해결하려 한다', value: 1, key: 'lion' },
      { label: '냉정하게 최선의 해결책을 찾는다', value: 1, key: 'fox' },
      { label: '먹거나 쉬면서 회복한다', value: 1, key: 'bear' },
      { label: '걱정이 늘고 불안해진다', value: 1, key: 'rabbit' },
    ]},
    { id: 17, text: '친구 관계에서 나는?', type: 'mcq', options: [
      { label: '많은 친구들과 넓은 인간관계를 유지한다', value: 1, key: 'lion' },
      { label: '소수의 깊은 우정을 더 중요시한다', value: 1, key: 'cat' },
      { label: '모두와 사이좋게 지내는 팀플레이어다', value: 1, key: 'penguin' },
      { label: '충성스럽게 친구들을 끝까지 지지한다', value: 1, key: 'dog' },
    ]},
    { id: 18, text: '새로운 아이디어나 계획이 생기면?', type: 'mcq', options: [
      { label: '바로 실행에 옮긴다', value: 1, key: 'lion' },
      { label: '신중하게 계획을 세운 후 실행한다', value: 1, key: 'fox' },
      { label: '오랫동안 혼자 생각하고 검토한다', value: 1, key: 'owl' },
      { label: '주변에 이야기하고 피드백을 받는다', value: 1, key: 'dog' },
    ]},
    { id: 19, text: '나에게 성공이란?', type: 'mcq', options: [
      { label: '목표를 달성하고 인정받는 것', value: 1, key: 'lion' },
      { label: '내가 원하는 삶을 자유롭게 사는 것', value: 1, key: 'cat' },
      { label: '사랑하는 사람들과 행복하게 지내는 것', value: 1, key: 'penguin' },
      { label: '깊은 지식과 지혜를 쌓는 것', value: 1, key: 'owl' },
    ]},
    { id: 20, text: '나는 어떤 유형의 친구라고 생각하나요?', type: 'mcq', options: [
      { label: '용기와 에너지를 주는 친구', value: 1, key: 'lion' },
      { label: '현명한 조언을 해주는 친구', value: 1, key: 'fox' },
      { label: '어떤 상황에서도 함께해주는 친구', value: 1, key: 'dog' },
      { label: '편안하고 안정감을 주는 친구', value: 1, key: 'bear' },
    ]},
  ],
  scoring: {
    type: 'image-character',
    characterMap: {
      lion: {
        id: 'lion',
        label: '사자 (Lion)',
        description: '당신은 사자형 성격입니다! 타고난 리더십과 강한 추진력을 가진 당신은 목표를 향해 과감하게 나아가는 성격입니다.\n\n자신감 넘치고 카리스마 있어 사람들이 자연스럽게 따르게 됩니다. 어떤 도전도 정면으로 맞서는 용기와 결단력은 큰 강점입니다. 때로는 지나치게 지배적이거나 타인의 의견을 간과할 수 있으니 주의하세요.',
        traits: ['리더십', '추진력', '자신감', '결단력', '카리스마', '용기'],
      },
      fox: {
        id: 'fox',
        label: '여우 (Fox)',
        description: '당신은 여우형 성격입니다! 영리하고 창의적인 당신은 어떤 상황에서도 최선의 방법을 찾아내는 전략가입니다.\n\n뛰어난 관찰력과 분석력으로 상황을 파악하고, 독창적인 해결책으로 문제를 해결합니다. 적응력이 뛰어나 어떤 환경에서도 잘 살아남습니다. 때로는 너무 계산적으로 보일 수 있으니 진정성을 보여주는 노력이 필요합니다.',
        traits: ['영리함', '전략적', '창의적', '관찰력', '적응력', '독립적'],
      },
      cat: {
        id: 'cat',
        label: '고양이 (Cat)',
        description: '당신은 고양이형 성격입니다! 독립적이고 자유로운 영혼인 당신은 자신만의 세계와 페이스를 소중히 합니다.\n\n조용하지만 강한 개성을 가지고 있으며, 마음을 열면 매우 따뜻하고 충성스러운 면이 있습니다. 혼자만의 시간이 필수적이고 강요받는 것을 싫어합니다. 신뢰하는 사람들에게는 깊은 유대감을 보입니다.',
        traits: ['독립적', '자유로운 영혼', '신비로움', '개성 강함', '예민함', '자기주도적'],
      },
      bear: {
        id: 'bear',
        label: '곰 (Bear)',
        description: '당신은 곰형 성격입니다! 온화하고 안정적인 당신은 주변에 편안함과 안정감을 주는 든든한 존재입니다.\n\n여유롭고 느긋한 성격으로 스트레스를 잘 받지 않으며, 소중한 것들을 지키려는 강한 보호 본능이 있습니다. 진정한 친구에게는 변함없는 충성을 보입니다. 가끔 게을러 보일 수 있지만, 필요할 때는 누구보다 강한 힘을 발휘합니다.',
        traits: ['온화함', '안정감', '느긋함', '보호 본능', '신뢰성', '인내심'],
      },
      penguin: {
        id: 'penguin',
        label: '펭귄 (Penguin)',
        description: '당신은 펭귄형 성격입니다! 의리 있고 협동적인 당신은 팀과 공동체를 소중히 여기는 따뜻한 존재입니다.\n\n사랑하는 사람들과 함께하는 것에서 행복을 느끼며, 위기 상황에서도 서로 돕고 지지하는 것을 중요시합니다. 규칙과 질서를 존중하고 팀 내에서 조화를 이루려 노력합니다. 혼자 있을 때보다 함께할 때 더 빛납니다.',
        traits: ['의리', '협동심', '팀워크', '따뜻함', '질서 존중', '가족 중심'],
      },
      owl: {
        id: 'owl',
        label: '올빼미 (Owl)',
        description: '당신은 올빼미형 성격입니다! 지혜롭고 통찰력 있는 당신은 깊이 생각하고 분석하는 것을 즐기는 지식인입니다.\n\n다양한 분야의 깊은 지식과 예리한 관찰력으로 주변에서 현명한 조언자로 인정받습니다. 조용하고 신중하게 행동하며, 충동적인 결정보다는 충분한 분석 후에 결론을 내립니다. 때로는 너무 내성적으로 보일 수 있습니다.',
        traits: ['지혜로움', '분석적', '통찰력', '신중함', '지식 추구', '내성적'],
      },
      dog: {
        id: 'dog',
        label: '강아지 (Dog)',
        description: '당신은 강아지형 성격입니다! 열정적이고 충성스러운 당신은 진정한 우정과 따뜻한 관계를 가장 소중히 여깁니다.\n\n밝은 에너지와 진심 어린 태도로 주변 사람들에게 기쁨을 줍니다. 새로운 사람을 쉽게 사귀고, 한번 친해지면 끝까지 함께하는 진실한 친구입니다. 때로는 너무 감정에 치우치거나 상처받기 쉬운 면도 있습니다.',
        traits: ['충성스러움', '열정적', '따뜻함', '사교적', '성실함', '진정성'],
      },
      rabbit: {
        id: 'rabbit',
        label: '토끼 (Rabbit)',
        description: '당신은 토끼형 성격입니다! 섬세하고 감수성이 풍부한 당신은 평화를 사랑하고 부드러운 마음씨를 가진 존재입니다.\n\n직관이 뛰어나고 주변 분위기를 잘 읽으며, 갈등보다는 조화로운 관계를 추구합니다. 예민한 감수성으로 예술적인 취미나 창의적인 활동을 즐기는 경우가 많습니다. 때로는 너무 조심스럽거나 불안해할 수 있으니 자신감을 키워보세요.',
        traits: ['섬세함', '감수성', '평화 추구', '직관력', '조심성', '창의성'],
      },
    },
  },
}
