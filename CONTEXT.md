# taro 프로젝트 작업 컨텍스트

## 등록된 테스트 (19개)
| slug | 테스트명 | 카테고리 | 문항 |
|------|---------|---------|------|
| mbti | MBTI 성격유형검사 | 성격 | 60 |
| mbti-short | MBTI 간단 테스트 | 성격 | 32 |
| depression | 우울증 테스트 (PHQ-9) | 임상 | 9 |
| burnout | 번아웃 증후군 테스트 | 임상 | 19 |
| adhd | ADHD 자가진단 (ASRS) | 임상 | 18 |
| psychopath | 사이코패스 테스트 | 임상 | 26 |
| narcissist | 나르시시스트 테스트 | 임상 | 25 |
| big5 | Big 5 성격 테스트 | 성격 | 50 |
| big5-short | Big 5 간단 테스트 | 성격 | 20 |
| enneagram | 에니어그램 성격 테스트 | 성격 | 54 |
| enneagram-short | 에니어그램 간단 테스트 | 성격 | 27 |
| animal-personality | 동물 성격 테스트 | 재미 | 20 |
| iq | IQ 테스트 | 인지 | 30 |
| attachment | 연애 유형 테스트 | 성격 | 20 |
| self-esteem | 자존감 테스트 | 성격 | 20 |
| anxiety | 불안장애 테스트 (GAD-7) | 임상 | 7 |
| stress | 스트레스 테스트 (PSS-10) | 임상 | 10 |
| perfectionism | 완벽주의 성향 테스트 | 성격 | 20 |

## 간단 버전 매핑 (app/page.tsx SHORT_VERSION_MAP)
- mbti → mbti-short
- big5 → big5-short
- enneagram → enneagram-short
→ 메인 페이지에서 주 테스트 카드 바로 옆에 간단 버전 카드 표시
→ 랜딩 페이지(/mbti)에서 두 버전 선택 카드 표시 (현재 페이지 선택 강조)

## MBTI 이미지
- Gemini로 생성한 16개 유형별 카드 이미지
- 위치: `public/og/mbti-[TYPE].jpg` (예: mbti-INFJ.jpg)
- 원본: `image/mbti-[TYPE].jpg`
- 결과 화면, 퀴즈 유형 미리보기, MBTI 랜딩 페이지에 표시

## 결과 화면 규칙
- score-range: `X점` + `Y점 만점` (ScoreResultDisplay maxScore prop)
- IQ: `IQ: XX` 형식 (ResultContent에서 선형보간 계산, 점수 미표시)
- MBTI: `public/og/mbti-[TYPE].jpg` 이미지 + 유형명
- 동물 성격: 이모지 (🦁🦊🐱🐻🐧🦉🐶🐰) + 이름

## 퀴즈 UX
- likert 문항: 미선택 시 중간값(보통이다) 연하게 기본 표시 + (기본값) 레이블
- MCQ 문항(IQ): 미선택 시 아무것도 표시 안 함
- 다음 버튼: 미선택 시 중간값으로 저장
- 이전 버튼: 항상 사용 가능, 이전 선택값 복원
- 퀴즈 상단 우측: `결과 유형 보기` 버튼 + `처음부터` 버튼
- 결과 유형 보기 눌렀다가 돌아오면 `계속 풀기` 버튼

## 공유 기능 (components/test/ShareButtons.tsx)
- 모바일: 네이티브 공유 (카카오톡·이메일 등) — navigator.share()
- 데스크톱: Kakao SDK 공유 (NEXT_PUBLIC_KAKAO_JS_KEY 필요)
- 링크 복사, X(트위터) 공유, 이 사이트 공유
- 결과 공유 시 결과 레이블 포함 ("나의 MBTI 결과는 전략가 (INTJ)!")
- MBTI 결과는 유형별 이미지(/og/mbti-[TYPE].jpg)를 카카오 공유 이미지로 사용

## SEO
- 모든 결과·퀴즈 페이지: robots noindex
- robots.txt: /quiz/, /*/result 차단
- sitemap: 19개 테스트 + 홈/about/privacy
- JSON-LD: Quiz + BreadcrumbList + FAQPage (테스트 랜딩 공통)
- 홈페이지 전용 metadata export 있음

## 환경변수 (.env.local)
```
NEXT_PUBLIC_SITE_URL=https://taro.codedanswer.com
NEXT_PUBLIC_ADSENSE_ID=                  ← 미입력
NEXT_PUBLIC_GOOGLE_VERIFICATION=          ← 미입력
NEXT_PUBLIC_NAVER_VERIFICATION=           ← 미입력
NEXT_PUBLIC_KAKAO_JS_KEY=aab3f7f5b2fe6c5c760c4cd776a3d29c
```

## 설정
- `.claude/settings.local.json`: SessionStart 훅 — 세션 시작 시 npm run dev 자동 실행
- 카카오 앱: 타로 심리테스트 (ID: 1452725), 도메인: https://taro.codedanswer.com

## 배포 전 할 일
1. Vercel에 환경변수 입력 (ADSENSE_ID, GOOGLE_VERIFICATION, NAVER_VERIFICATION)
2. GitHub push → Vercel 자동 배포
3. Google Search Console에 sitemap.xml 제출
