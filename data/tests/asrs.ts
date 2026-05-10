import type { TestData } from '@/types/test'

export const asrs: TestData = {
  slug: 'adhd',
  title: 'ADHD 자가진단 테스트 (성인용)',
  shortTitle: 'ADHD',
  description: 'WHO ASRS-v1.1 기반 성인 ADHD 자가진단 테스트입니다. 18문항으로 주의력결핍·과잉행동장애 증상을 무료로 확인하세요.',
  keywords: [
    'ADHD 자가진단', 'ADHD 테스트', '성인 ADHD', 'ADHD 증상 체크',
    'ADHD 자가테스트', 'WHO ASRS', '주의력결핍 테스트', '과잉행동장애',
    'ADHD 성인 자가진단', '집중력 테스트',
  ],
  category: '임상',
  questionCount: 18,
  estimatedMinutes: 5,
  ogImage: '/og/adhd.png',
  lastModified: '2025-05-01',
  canonical: 'https://taro.codedanswer.com/adhd',
  disclaimer: '이 테스트는 의학적 진단을 대체하지 않습니다. ADHD 진단은 전문 의료기관에서 종합적인 평가를 통해 이루어집니다.',
  sourceCredit: 'WHO ASRS-v1.1 (Adult ADHD Self-Report Scale) — World Health Organization / Harvard Medical School',
  sourceCreditUrl: 'https://www.hcp.med.harvard.edu/ncs/asrs.php',
  longDescription: `WHO ASRS-v1.1(Adult ADHD Self-Report Scale)은 세계보건기구(WHO)와 하버드 의대가 공동 개발한 성인 ADHD 자가보고 척도입니다. DSM-IV-TR의 ADHD 진단 기준 18개 증상을 직접 반영하며, 전 세계 임상 현장에서 성인 ADHD 선별 도구로 공식 채택되었습니다.

18개 문항은 주의력 결핍(Inattention) 9문항과 과잉행동·충동성(Hyperactivity-Impulsivity) 9문항으로 구성됩니다. Part A(문항 1-6)의 점수가 특히 중요하며, Part A에서 4개 이상에 해당되면 ADHD 증상이 유의미한 것으로 해석합니다.

성인 ADHD는 아동기보다 증상이 덜 뚜렷하게 나타나는 경우가 많아 진단이 늦어지는 경향이 있습니다. 이 테스트는 자가 선별 목적으로, 실제 진단은 정신건강의학과 전문의의 종합 평가가 필요합니다.`,
  faqs: [
    {
      question: 'ADHD는 어른에게도 있나요?',
      answer: 'ADHD는 아동기에만 나타나는 것이 아닙니다. 아동의 약 60-70%는 성인기까지 증상이 지속되며, 성인에서 처음 진단받는 경우도 많습니다. 성인 ADHD는 집중력 저하, 충동성, 시간 관리 어려움 등으로 직장·대인관계에 영향을 줄 수 있습니다.',
    },
    {
      question: 'ASRS 점수가 높게 나왔어요. ADHD인가요?',
      answer: 'ASRS는 선별 도구일 뿐 진단 도구가 아닙니다. 높은 점수는 전문적인 평가가 필요하다는 신호입니다. 정신건강의학과 전문의의 면담, 신경심리검사, 병력 조사 등 종합적인 평가를 통해야 확진이 가능합니다.',
    },
    {
      question: '성인 ADHD는 치료가 가능한가요?',
      answer: '네, 성인 ADHD는 약물치료(메틸페니데이트 등)와 인지행동치료를 통해 효과적으로 관리할 수 있습니다. 전문 치료를 통해 증상 개선과 삶의 질 향상이 가능합니다.',
    },
    {
      question: 'ADHD와 단순 집중력 부족의 차이는 무엇인가요?',
      answer: 'ADHD는 단순 집중력 부족과 달리, 어린 시절부터 지속되며 여러 환경(가정·직장·학교)에서 나타나고 일상 기능에 심각한 지장을 줍니다. 일시적인 집중 어려움과는 구분됩니다.',
    },
    {
      question: 'ADHD가 있으면 지능이 낮은 건가요?',
      answer: '아닙니다. ADHD는 지능과 무관합니다. 오히려 ADHD를 가진 사람 중 높은 창의력과 문제해결 능력을 보이는 경우가 많습니다. ADHD는 주의력 조절의 어려움이지 능력의 문제가 아닙니다.',
    },
  ],
  questions: [
    { id: 1, text: '어떤 일의 어려운 부분은 끝내 놓고, 그 일을 마무리 짓지 못해 곤란을 겪은 적이 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 2, text: '체계가 필요한 일을 해야 할 때 순서대로 정리하기가 어려운 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 3, text: '약속이나 해야 할 일을 기억하는 데 어려움이 있었던 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 4, text: '골치 아픈 일을 피하거나 미루는 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 5, text: '오래 앉아 있어야 할 때 손발을 꼼지락거리거나 몸을 비트는 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 6, text: '마치 무언가에 쫓기는 것처럼 과도하게 혹은 멈출 수 없이 활동적으로 느낀 적이 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 7, text: '지루하거나 어려운 일을 할 때 부주의한 실수를 한 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 8, text: '직접적으로 말을 걸어도 듣지 못하는 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 9, text: '물건을 어디에 두었는지 잊어버리거나 물건을 찾을 수 없었던 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 10, text: '외부 소음이나 움직임으로 인해 주의가 산만해진 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 11, text: '회의나 다른 상황에서 자리를 지키는 것이 어려웠던 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 12, text: '차례를 기다리는 것이 어려운 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 13, text: '다른 사람이 바쁠 때 끼어들거나 방해한 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 14, text: '긴장을 풀기가 어렵거나 혼자만의 시간을 갖는 것이 어려웠던 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 15, text: '사회적 상황에서 너무 많이 말하는 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 16, text: '대화할 때 상대방이 말을 끝내기도 전에 끼어들었던 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 17, text: '집중해야 할 때 집중하는 데 어려움이 있었던 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
    { id: 18, text: '앉아 있어야 하는 상황에서 자리에서 일어난 경우가 얼마나 자주 있었습니까?', type: 'frequency4' },
  ],
  scoring: {
    type: 'score-range',
    ranges: [
      {
        min: 0,
        max: 13,
        label: 'ADHD 증상 낮음',
        description: 'Part A 기준으로 ADHD 증상이 유의미한 수준이 아닙니다. 현재 일상생활에 큰 지장이 없는 상태입니다.',
        recommendation: '현재 상태를 유지하시고, 증상이 심해지거나 일상에 지장이 생기면 전문가 상담을 고려하세요.',
      },
      {
        min: 14,
        max: 36,
        label: 'ADHD 증상 의심',
        description: 'ADHD와 관련된 증상들이 상당 수준 나타나고 있습니다. 전문의 상담을 권장합니다.',
        recommendation: '정신건강의학과 전문의 상담을 받아보세요. ADHD는 치료를 통해 충분히 관리 가능합니다.',
      },
      {
        min: 37,
        max: 72,
        label: 'ADHD 증상 높음',
        description: '높은 수준의 ADHD 관련 증상이 있습니다. 빠른 시일 내 전문가 평가를 권장합니다.',
        recommendation: '정신건강의학과를 방문해 종합적인 ADHD 평가를 받아보시기 바랍니다.',
      },
    ],
  },
}
