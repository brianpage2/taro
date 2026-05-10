import type { TestData } from '@/types/test'

export const mbtiShort: TestData = {
  slug: 'mbti-short',
  title: 'MBTI 간단 테스트 (32문항)',
  shortTitle: 'MBTI 간단',
  description: '빠르게 알아보는 MBTI 성격유형! 32문항으로 16가지 성격 유형을 확인하세요. 전체 버전보다 빠르고 간단합니다.',
  keywords: [
    'MBTI 간단 테스트', 'MBTI 빠른 테스트', 'MBTI 단축 버전', 'MBTI 32문항',
    '간단한 MBTI', '빠른 MBTI', 'MBTI 무료 간단', '성격유형 간단 테스트',
    'MBTI 짧은 버전', '5분 MBTI',
  ],
  category: '성격',
  questionCount: 32,
  estimatedMinutes: 6,
  ogImage: '/og/mbti-short.png',
  lastModified: '2025-05-01',
  canonical: 'https://taro.codedanswer.com/mbti-short',
  sourceCredit: 'OpenJung (Open Jungian Type Scales) 기반 — CC 라이선스, 2만5천명 검증',
  sourceCreditUrl: 'https://openpsychometrics.org/tests/OJTS/',
  longDescription: `바쁜 일상 속에서 나의 성격 유형을 빠르게 파악하고 싶은 분들을 위한 간단 MBTI 테스트입니다.

OpenJung(Open Jungian Type Scales)을 기반으로 한 32문항 단축형 테스트로, 2만5천 명 이상의 참가자를 대상으로 검증된 신뢰할 수 있는 척도입니다. E/I(외향/내향), S/N(감각/직관), T/F(사고/감정), J/P(판단/인식) 4가지 차원에서 각 8문항씩 측정합니다.

약 6분 내외로 완료할 수 있으며, 더 정확한 결과를 원하신다면 60문항 전체 버전을 이용하세요.`,
  faqs: [
    {
      question: '32문항 간단 버전과 60문항 전체 버전 중 어떤 것이 더 정확한가요?',
      answer: '60문항 전체 버전이 더 정확합니다. 단, 32문항 버전도 2만5천명 이상을 대상으로 검증된 신뢰할 수 있는 결과를 제공합니다. 시간이 부족할 때는 간단 버전을, 정확한 결과를 원할 때는 전체 버전을 이용하세요.',
    },
    {
      question: '결과가 전체 버전과 다르게 나올 수 있나요?',
      answer: '문항 수가 적을수록 미묘한 성격 차이를 잡아내기 어려울 수 있습니다. 두 버전의 결과가 다르다면, 해당 차원에서 경계선에 가깝다는 의미일 수 있습니다.',
    },
  ],
  questions: [
    // E/I 차원 (8문항)
    { id: 1, text: '파티나 모임에서 새로운 사람들과 이야기하는 것이 즐겁다', type: 'likert5', axis: 'E' },
    { id: 2, text: '혼자 있는 시간이 사람들과 함께하는 시간보다 더 편안하다', type: 'likert5', axis: 'I' },
    { id: 3, text: '처음 만난 사람과도 편하게 대화를 시작한다', type: 'likert5', axis: 'E' },
    { id: 4, text: '사람들과 있을 때 에너지가 소모된다고 느낀다', type: 'likert5', axis: 'I' },
    { id: 5, text: '여러 사람과 함께하는 활동에 에너지가 생긴다', type: 'likert5', axis: 'E' },
    { id: 6, text: '자신의 생각과 감정을 혼자 처리하는 편이다', type: 'likert5', axis: 'I' },
    { id: 7, text: '그룹 토론에서 적극적으로 의견을 제시한다', type: 'likert5', axis: 'E' },
    { id: 8, text: '조용하고 차분한 환경에서 더 잘 집중된다', type: 'likert5', axis: 'I' },
    // S/N 차원 (8문항)
    { id: 9, text: '구체적인 사실과 세부사항에 주목한다', type: 'likert5', axis: 'S' },
    { id: 10, text: '패턴과 가능성을 탐색하는 것을 즐긴다', type: 'likert5', axis: 'N' },
    { id: 11, text: '실용적이고 현실적인 해결책을 선호한다', type: 'likert5', axis: 'S' },
    { id: 12, text: '미래의 가능성과 잠재력에 흥미를 느낀다', type: 'likert5', axis: 'N' },
    { id: 13, text: '경험을 통해 검증된 방법을 신뢰한다', type: 'likert5', axis: 'S' },
    { id: 14, text: '새로운 아이디어와 개념을 탐구하는 것을 즐긴다', type: 'likert5', axis: 'N' },
    { id: 15, text: '현재의 현실에 집중하는 편이다', type: 'likert5', axis: 'S' },
    { id: 16, text: '이론적이거나 추상적인 주제에 관심이 많다', type: 'likert5', axis: 'N' },
    // T/F 차원 (8문항)
    { id: 17, text: '논리와 객관적인 분석을 바탕으로 결정한다', type: 'likert5', axis: 'T' },
    { id: 18, text: '결정을 내릴 때 사람들의 감정을 많이 고려한다', type: 'likert5', axis: 'F' },
    { id: 19, text: '갈등 상황에서 공정성과 일관성을 중시한다', type: 'likert5', axis: 'T' },
    { id: 20, text: '다른 사람의 감정에 쉽게 공감한다', type: 'likert5', axis: 'F' },
    { id: 21, text: '개인적 관계보다 원칙과 기준을 우선시한다', type: 'likert5', axis: 'T' },
    { id: 22, text: '조화로운 분위기를 유지하는 것이 중요하다', type: 'likert5', axis: 'F' },
    { id: 23, text: '장단점을 분석해 결론을 내리는 편이다', type: 'likert5', axis: 'T' },
    { id: 24, text: '사람들이 어떻게 느끼는지가 결정에 큰 영향을 준다', type: 'likert5', axis: 'F' },
    // J/P 차원 (8문항)
    { id: 25, text: '계획을 세우고 그대로 따르는 것을 좋아한다', type: 'likert5', axis: 'J' },
    { id: 26, text: '유연하게 즉흥적으로 상황에 대응하는 편이다', type: 'likert5', axis: 'P' },
    { id: 27, text: '일을 미리 계획하고 준비하는 편이다', type: 'likert5', axis: 'J' },
    { id: 28, text: '마감 시간 전까지 선택을 열어두는 것을 선호한다', type: 'likert5', axis: 'P' },
    { id: 29, text: '정해진 루틴과 구조 속에서 안정감을 느낀다', type: 'likert5', axis: 'J' },
    { id: 30, text: '새로운 정보가 생기면 계획을 바꾸는 것이 자연스럽다', type: 'likert5', axis: 'P' },
    { id: 31, text: '할 일 목록을 만들고 완료하는 것이 만족스럽다', type: 'likert5', axis: 'J' },
    { id: 32, text: '계획 없이도 잘 적응하는 편이다', type: 'likert5', axis: 'P' },
  ],
  scoring: {
    type: 'type-description',
    typeMap: {
      INTJ: { id: 'INTJ', label: '전략가 (INTJ)', description: 'INTJ는 독립적이고 결단력 있는 전략적 사상가입니다. 높은 지적 호기심과 체계적인 사고력을 바탕으로 복잡한 문제를 분석하고 장기적인 계획을 수립하는 데 탁월합니다.\n\n목표 지향적이고 효율을 중시하며, 자신의 능력과 지식을 끊임없이 발전시키려는 강한 내적 동기를 가지고 있습니다.', traits: ['전략적 사고', '독립적', '결단력', '지식 추구', '높은 기준', '목표 지향'], compatibleWith: ['ENFP', 'ENTP'] },
      INTP: { id: 'INTP', label: '논리술사 (INTP)', description: 'INTP는 분석적이고 객관적인 사상가로, 복잡한 이론과 아이디어를 탐구하는 것을 즐깁니다. 논리적 일관성을 추구하며 지식의 정확성과 심층적 이해를 중요시합니다.', traits: ['분석적', '객관적', '창의적', '논리적', '독립적 사고', '지적 호기심'], compatibleWith: ['ENTJ', 'ENFJ'] },
      ENTJ: { id: 'ENTJ', label: '지휘관 (ENTJ)', description: 'ENTJ는 타고난 리더십과 전략적 사고를 겸비한 지휘관 유형입니다. 목표를 설정하고 팀을 이끌어 결과를 만들어내는 데 탁월한 능력을 발휘합니다.', traits: ['리더십', '전략적', '결단력', '효율 추구', '자신감', '목표 지향'], compatibleWith: ['INTP', 'INFP'] },
      ENTP: { id: 'ENTP', label: '변론가 (ENTP)', description: 'ENTP는 독창적이고 기발한 아이디어를 가진 혁신가입니다. 지적인 토론을 즐기고 기존의 관념에 도전하며 새로운 가능성을 탐구하는 것을 좋아합니다.', traits: ['창의적', '논쟁을 즐김', '혁신적', '호기심 많음', '기발한 아이디어', '적응력'], compatibleWith: ['INFJ', 'INTJ'] },
      INFJ: { id: 'INFJ', label: '옹호자 (INFJ)', description: 'INFJ는 깊은 통찰력과 강한 원칙을 가진 이상주의적 사상가입니다. 타인의 감정과 동기를 예리하게 파악하며, 더 나은 세상을 만들기 위해 헌신합니다.', traits: ['깊은 통찰력', '이상주의', '공감 능력', '헌신적', '원칙적', '진정성 추구'], compatibleWith: ['ENTP', 'ENFP'] },
      INFP: { id: 'INFP', label: '중재자 (INFP)', description: 'INFP는 풍부한 내면 세계와 깊은 가치관을 가진 이상주의자입니다. 진정성과 개인의 성장을 중요시하며, 자신의 가치와 일치하는 삶을 추구합니다.', traits: ['공감 능력', '이상주의', '창의적', '진정성', '적응력', '개방적'], compatibleWith: ['ENTJ', 'ENFJ'] },
      ENFJ: { id: 'ENFJ', label: '선도자 (ENFJ)', description: 'ENFJ는 카리스마 있고 따뜻한 리더로, 타인의 성장과 발전을 돕는 것에서 큰 보람을 느낍니다. 탁월한 공감 능력과 통찰력으로 사람들을 하나로 모읍니다.', traits: ['카리스마', '공감 능력', '리더십', '타인 지향', '조화 추구', '열정적'], compatibleWith: ['INFP', 'INTP'] },
      ENFP: { id: 'ENFP', label: '활동가 (ENFP)', description: 'ENFP는 열정적이고 창의적인 자유로운 영혼입니다. 새로운 아이디어와 가능성에 열광하며, 사람들과의 진정한 연결을 통해 에너지를 얻습니다.', traits: ['열정적', '창의적', '공감적', '자유로운 영혼', '호기심', '낙관적'], compatibleWith: ['INTJ', 'INFJ'] },
      ISTJ: { id: 'ISTJ', label: '현실주의자 (ISTJ)', description: 'ISTJ는 책임감 있고 신뢰할 수 있는 현실주의자입니다. 사실과 세부사항에 주의를 기울이며, 일관성 있게 의무를 이행합니다.', traits: ['책임감', '신뢰성', '체계적', '세부사항 지향', '전통 존중', '근면'], compatibleWith: ['ESFP', 'ENFP'] },
      ISFJ: { id: 'ISFJ', label: '수호자 (ISFJ)', description: 'ISFJ는 따뜻하고 헌신적인 수호자입니다. 사랑하는 사람들을 보살피고 지원하는 것에서 깊은 보람을 느끼며, 주변 환경의 조화를 유지하려 합니다.', traits: ['헌신적', '따뜻함', '세심함', '신뢰성', '실용적', '겸손'], compatibleWith: ['ESTP', 'ENFP'] },
      ESTJ: { id: 'ESTJ', label: '경영자 (ESTJ)', description: 'ESTJ는 실용적이고 단호한 조직가입니다. 질서와 구조를 중시하며, 공동의 목표를 달성하기 위해 팀을 효율적으로 이끕니다.', traits: ['조직적', '리더십', '책임감', '실용적', '단호함', '전통 존중'], compatibleWith: ['ISFP', 'INTP'] },
      ESFJ: { id: 'ESFJ', label: '집정관 (ESFJ)', description: 'ESFJ는 사교적이고 배려심이 깊은 돌봄의 유형입니다. 사람들 사이의 조화를 유지하고 모두가 편안하도록 환경을 만들어갑니다.', traits: ['사교적', '배려심', '책임감', '전통 존중', '실용적', '타인 지향'], compatibleWith: ['ISFP', 'INFP'] },
      ISTP: { id: 'ISTP', label: '만능재주꾼 (ISTP)', description: 'ISTP는 실용적이고 논리적인 문제 해결사입니다. 어떻게 사물이 작동하는지 이해하고, 실질적인 방식으로 문제를 해결하는 것을 즐깁니다.', traits: ['논리적', '실용적', '독립적', '침착함', '분석적', '적응력'], compatibleWith: ['ESTJ', 'ESFJ'] },
      ISFP: { id: 'ISFP', label: '모험가 (ISFP)', description: 'ISFP는 조용하고 감각적인 예술가입니다. 현재 순간의 아름다움과 감각적 경험을 즐기며, 자신만의 가치와 미적 감각을 표현하는 것을 좋아합니다.', traits: ['예술적', '공감적', '현재 중심', '진정성', '적응력', '따뜻함'], compatibleWith: ['ESTJ', 'ENFJ'] },
      ESTP: { id: 'ESTP', label: '사업가 (ESTP)', description: 'ESTP는 에너지 넘치고 행동 지향적인 사업가입니다. 즉각적인 문제 해결과 현실적인 도전을 즐기며, 직접적이고 실용적인 방식으로 세상과 상호작용합니다.', traits: ['행동 지향', '실용적', '사교적', '즉흥적', '위험 감수', '현실주의'], compatibleWith: ['ISFJ', 'INFJ'] },
      ESFP: { id: 'ESFP', label: '연예인 (ESFP)', description: 'ESFP는 활기차고 즉흥적인 연예인 유형입니다. 현재 순간을 충실히 즐기며, 사람들과 함께 할 때 가장 빛납니다.', traits: ['활기참', '즉흥적', '사교적', '현재 중심', '실용적', '따뜻함'], compatibleWith: ['ISTJ', 'INFJ'] },
    },
  },
}
