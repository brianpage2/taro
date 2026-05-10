import type { TestData } from '@/types/test'

export const iq: TestData = {
  slug: 'iq',
  title: 'IQ 테스트 (지능 측정)',
  shortTitle: 'IQ 테스트',
  description: '무료 IQ 테스트입니다. 30문항의 논리·패턴·수열 문제로 지적 능력을 무료로 측정하세요. 결과는 참고용입니다.',
  keywords: [
    'IQ 테스트', 'IQ 테스트 무료', '지능 테스트', '아이큐 검사 무료',
    'IQ 측정', '논리 테스트', '지능지수 테스트', '패턴 추론 테스트',
    '무료 IQ 테스트', 'IQ 자가진단',
  ],
  category: '인지',
  questionCount: 30,
  estimatedMinutes: 15,
  ogImage: '/og/iq.png',
  lastModified: '2025-05-01',
  canonical: 'https://taro.codedanswer.com/iq',
  disclaimer: '이 테스트는 참고용이며 공식적으로 표준화된 IQ 검사가 아닙니다. 공식 IQ 측정은 전문 심리 기관에서 받으시기 바랍니다.',
  longDescription: `IQ(Intelligence Quotient, 지능지수)는 논리적 추론, 패턴 인식, 언어적 이해, 수리적 사고 등 다양한 인지 능력을 측정하는 지표입니다. 평균 IQ는 100이며, 표준편차 15를 기준으로 분포합니다.

이 테스트는 수열 추론, 논리적 사고, 공간 추론, 수리적 패턴 인식 등의 문항으로 구성된 30문항 자가 측정 도구입니다. 모든 문항은 독자적으로 제작되었으며 저작권 문제가 없습니다.

IQ는 단일 테스트로 완전히 측정될 수 없으며, 현재 컨디션, 교육 배경, 문화적 차이 등 다양한 요인의 영향을 받습니다. 이 테스트의 결과는 자신의 논리적 사고력을 가늠하는 재미있는 참고 자료로만 활용하세요.`,
  faqs: [
    {
      question: 'IQ 테스트 결과가 실제 IQ와 같나요?',
      answer: '이 테스트는 공식적으로 표준화된 IQ 검사가 아닙니다. 실제 IQ 측정은 K-WAIS, K-WISC 등 전문 심리 기관에서 시행하는 표준화 검사를 통해 이루어집니다. 이 결과는 논리적 사고 능력의 대략적인 참고치로만 활용하세요.',
    },
    {
      question: 'IQ는 높을수록 좋은 건가요?',
      answer: 'IQ는 여러 인지 능력 중 하나를 측정하는 지표일 뿐입니다. 감정 지능(EQ), 창의력, 사회적 능력, 실행 능력 등 IQ로 측정되지 않는 다양한 능력들도 삶의 성공과 행복에 중요한 역할을 합니다.',
    },
    {
      question: 'IQ는 향상시킬 수 있나요?',
      answer: '꾸준한 독서, 논리 퍼즐 풀기, 수학적 사고 연습, 충분한 수면, 규칙적인 운동 등이 인지 능력 향상에 도움이 된다는 연구 결과가 있습니다. 지속적인 학습과 자기계발이 중요합니다.',
    },
    {
      question: '멘사 가입 기준 IQ는 얼마인가요?',
      answer: '멘사는 IQ 상위 2%(IQ 130 이상)를 기준으로 합니다. 한국 멘사에 가입하려면 공식 멘사 테스트를 응시해야 하며, 이 온라인 테스트 결과로는 가입 신청이 불가합니다.',
    },
    {
      question: '평균 IQ는 얼마인가요?',
      answer: '평균 IQ는 국제적으로 100을 기준으로 하며, 85~115 범위가 전체 인구의 약 68%를 차지합니다. 한국인 평균 IQ는 약 106~108로 세계적으로 높은 편으로 알려져 있습니다.',
    },
  ],
  questions: [
    {
      id: 1,
      text: '수열에서 다음 숫자는? 2, 4, 8, 16, __',
      type: 'mcq',
      options: [
        { label: '24', value: 0 },
        { label: '32', value: 1 },
        { label: '28', value: 0 },
        { label: '20', value: 0 },
      ],
    },
    {
      id: 2,
      text: '다음 중 나머지 셋과 다른 것은?',
      type: 'mcq',
      options: [
        { label: '사과', value: 0 },
        { label: '바나나', value: 0 },
        { label: '당근', value: 1 },
        { label: '딸기', value: 0 },
      ],
    },
    {
      id: 3,
      text: '수열에서 다음 숫자는? 1, 1, 2, 3, 5, 8, __',
      type: 'mcq',
      options: [
        { label: '11', value: 0 },
        { label: '12', value: 0 },
        { label: '13', value: 1 },
        { label: '14', value: 0 },
      ],
    },
    {
      id: 4,
      text: '시계가 3:15를 가리킬 때 시침과 분침이 이루는 각도는?',
      type: 'mcq',
      options: [
        { label: '0도', value: 0 },
        { label: '7.5도', value: 1 },
        { label: '15도', value: 0 },
        { label: '22.5도', value: 0 },
      ],
    },
    {
      id: 5,
      text: '5명이 악수를 한 번씩 나누면 총 몇 번 악수를 하는가?',
      type: 'mcq',
      options: [
        { label: '5번', value: 0 },
        { label: '8번', value: 0 },
        { label: '10번', value: 1 },
        { label: '15번', value: 0 },
      ],
    },
    {
      id: 6,
      text: '수열에서 다음 문자는? A, C, E, G, __',
      type: 'mcq',
      options: [
        { label: 'H', value: 0 },
        { label: 'I', value: 1 },
        { label: 'J', value: 0 },
        { label: 'K', value: 0 },
      ],
    },
    {
      id: 7,
      text: '어떤 수의 3배에서 6을 빼면 21이다. 이 수는?',
      type: 'mcq',
      options: [
        { label: '7', value: 0 },
        { label: '8', value: 0 },
        { label: '9', value: 1 },
        { label: '10', value: 0 },
      ],
    },
    {
      id: 8,
      text: '책이 독자에게, 음악이 ( )에게?',
      type: 'mcq',
      options: [
        { label: '악보', value: 0 },
        { label: '청중', value: 1 },
        { label: '음표', value: 0 },
        { label: '작곡가', value: 0 },
      ],
    },
    {
      id: 9,
      text: '수열에서 다음 숫자는? 100, 50, 25, 12.5, __',
      type: 'mcq',
      options: [
        { label: '5', value: 0 },
        { label: '6', value: 0 },
        { label: '6.25', value: 1 },
        { label: '7.5', value: 0 },
      ],
    },
    {
      id: 10,
      text: '정사각형 한 변의 길이가 4라면, 대각선의 길이는?',
      type: 'mcq',
      options: [
        { label: '4', value: 0 },
        { label: '4√2', value: 1 },
        { label: '8', value: 0 },
        { label: '16', value: 0 },
      ],
    },
    {
      id: 11,
      text: '다음 수열의 규칙은? 3, 6, 12, 24, 48. 다음 수는?',
      type: 'mcq',
      options: [
        { label: '72', value: 0 },
        { label: '84', value: 0 },
        { label: '96', value: 1 },
        { label: '100', value: 0 },
      ],
    },
    {
      id: 12,
      text: '의사가 환자에게, 변호사가 ( )에게?',
      type: 'mcq',
      options: [
        { label: '피고인', value: 0 },
        { label: '의뢰인', value: 1 },
        { label: '판사', value: 0 },
        { label: '검사', value: 0 },
      ],
    },
    {
      id: 13,
      text: '어떤 물건을 20% 할인해서 8만원에 샀다. 원래 가격은?',
      type: 'mcq',
      options: [
        { label: '9만원', value: 0 },
        { label: '9만6천원', value: 0 },
        { label: '10만원', value: 1 },
        { label: '10만4천원', value: 0 },
      ],
    },
    {
      id: 14,
      text: '수열에서 빈칸은? 2, 5, 10, 17, 26, __',
      type: 'mcq',
      options: [
        { label: '35', value: 0 },
        { label: '36', value: 0 },
        { label: '37', value: 1 },
        { label: '38', value: 0 },
      ],
    },
    {
      id: 15,
      text: '물고기가 물에게, 새가 ( )에게?',
      type: 'mcq',
      options: [
        { label: '하늘', value: 0 },
        { label: '나무', value: 0 },
        { label: '공기', value: 1 },
        { label: '구름', value: 0 },
      ],
    },
    {
      id: 16,
      text: '어떤 수에 4를 곱하면 그 수보다 36이 많다. 이 수는?',
      type: 'mcq',
      options: [
        { label: '10', value: 0 },
        { label: '12', value: 1 },
        { label: '14', value: 0 },
        { label: '16', value: 0 },
      ],
    },
    {
      id: 17,
      text: '세 자리 숫자 중 각 자리의 합이 9이고 백의 자리가 일의 자리의 2배인 수는?',
      type: 'mcq',
      options: [
        { label: '261', value: 0 },
        { label: '432', value: 0 },
        { label: '414', value: 1 },
        { label: '321', value: 0 },
      ],
    },
    {
      id: 18,
      text: '수열의 다음 수는? 1, 4, 9, 16, 25, __',
      type: 'mcq',
      options: [
        { label: '30', value: 0 },
        { label: '36', value: 1 },
        { label: '42', value: 0 },
        { label: '49', value: 0 },
      ],
    },
    {
      id: 19,
      text: '속도가 60km/h인 자동차가 150km를 가는 데 걸리는 시간은?',
      type: 'mcq',
      options: [
        { label: '2시간', value: 0 },
        { label: '2시간 30분', value: 1 },
        { label: '3시간', value: 0 },
        { label: '2시간 15분', value: 0 },
      ],
    },
    {
      id: 20,
      text: '칼이 요리사에게, 붓이 ( )에게?',
      type: 'mcq',
      options: [
        { label: '미술관', value: 0 },
        { label: '물감', value: 0 },
        { label: '화가', value: 1 },
        { label: '캔버스', value: 0 },
      ],
    },
    {
      id: 21,
      text: '원의 반지름이 3일 때 넓이는? (π ≈ 3.14)',
      type: 'mcq',
      options: [
        { label: '18.84', value: 0 },
        { label: '28.26', value: 1 },
        { label: '37.68', value: 0 },
        { label: '9.42', value: 0 },
      ],
    },
    {
      id: 22,
      text: '다음 수열에서 빠진 수는? 1, 2, 4, __, 16, 32',
      type: 'mcq',
      options: [
        { label: '6', value: 0 },
        { label: '7', value: 0 },
        { label: '8', value: 1 },
        { label: '10', value: 0 },
      ],
    },
    {
      id: 23,
      text: '20명 중 40%가 안경을 쓴다면, 안경을 쓰지 않는 사람은?',
      type: 'mcq',
      options: [
        { label: '8명', value: 0 },
        { label: '10명', value: 0 },
        { label: '12명', value: 1 },
        { label: '14명', value: 0 },
      ],
    },
    {
      id: 24,
      text: '뜨거운 것이 차가운 것에게, 빠른 것이 ( )에게?',
      type: 'mcq',
      options: [
        { label: '움직이는', value: 0 },
        { label: '느린', value: 1 },
        { label: '정지한', value: 0 },
        { label: '빠른', value: 0 },
      ],
    },
    {
      id: 25,
      text: '수열에서 다음 수는? 1, 3, 7, 15, 31, __',
      type: 'mcq',
      options: [
        { label: '47', value: 0 },
        { label: '55', value: 0 },
        { label: '63', value: 1 },
        { label: '62', value: 0 },
      ],
    },
    {
      id: 26,
      text: '삼각형의 세 각의 합은 180도이다. 두 각이 70도와 60도라면 나머지 각은?',
      type: 'mcq',
      options: [
        { label: '40도', value: 0 },
        { label: '50도', value: 1 },
        { label: '60도', value: 0 },
        { label: '70도', value: 0 },
      ],
    },
    {
      id: 27,
      text: '4명이 어떤 일을 완성하는 데 6일 걸린다. 같은 일을 3명이 하면 몇 일?',
      type: 'mcq',
      options: [
        { label: '6일', value: 0 },
        { label: '7일', value: 0 },
        { label: '8일', value: 1 },
        { label: '9일', value: 0 },
      ],
    },
    {
      id: 28,
      text: '다음 중 나머지와 관계없는 단어는?',
      type: 'mcq',
      options: [
        { label: '장미', value: 0 },
        { label: '튤립', value: 0 },
        { label: '국화', value: 0 },
        { label: '소나무', value: 1 },
      ],
    },
    {
      id: 29,
      text: '어떤 수에서 15를 빼고 3으로 나누면 7이다. 그 수는?',
      type: 'mcq',
      options: [
        { label: '34', value: 0 },
        { label: '36', value: 1 },
        { label: '38', value: 0 },
        { label: '40', value: 0 },
      ],
    },
    {
      id: 30,
      text: '글쓰기가 작가에게, 연기가 ( )에게?',
      type: 'mcq',
      options: [
        { label: '관객', value: 0 },
        { label: '감독', value: 0 },
        { label: '배우', value: 1 },
        { label: '무대', value: 0 },
      ],
    },
  ],
  scoring: {
    type: 'score-range',
    ranges: [
      {
        min: 0,
        max: 9,
        label: '70 이하 (참고치)',
        description: '이번 테스트에서 낮은 점수가 나왔습니다. 컨디션이나 시간 부족이 영향을 미쳤을 수 있습니다.',
        recommendation: '충분한 휴식 후 다시 도전해보세요. IQ는 단일 테스트로 확정되지 않습니다.',
      },
      {
        min: 10,
        max: 16,
        label: '85~100 (보통, 참고치)',
        description: '평균 범위의 논리적 사고력을 보입니다. 대부분의 사람들이 이 범위에 속합니다.',
        recommendation: '퍼즐, 수학 문제, 독서 등으로 논리적 사고력을 지속적으로 발전시키세요.',
      },
      {
        min: 17,
        max: 22,
        label: '110~125 (평균 이상, 참고치)',
        description: '평균보다 높은 수준의 논리적 사고력을 보입니다.',
        recommendation: '강점인 논리적 사고력을 더욱 발전시키고 다양한 인지적 도전을 즐겨보세요.',
      },
      {
        min: 23,
        max: 30,
        label: '130 이상 (높음, 참고치)',
        description: '이번 테스트에서 매우 높은 점수를 획득했습니다. 뛰어난 논리적 사고력을 보입니다.',
        recommendation: '공식 IQ 검사를 통해 정확한 측정을 받아보는 것도 좋습니다. 멘사 등 관련 기관에 문의해보세요.',
      },
    ],
  },
}
