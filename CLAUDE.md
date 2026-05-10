# taro.codedanswer.com — CLAUDE.md

## 프로젝트 개요
- URL: https://taro.codedanswer.com
- 목적: 한국어 무료 심리테스트 (구글 SEO 상위노출 최우선)
- Stack: Next.js 14 App Router, TypeScript, Tailwind CSS
- 개발 서버: http://localhost:3400 (`npm run dev`)
- GitHub: https://github.com/brianpage2/taro
- 배포: GitHub → Vercel (taro-mauve-alpha.vercel.app)

## 새 테스트 추가 (3단계)
1. `data/tests/[slug].ts` 생성 → `TestData` 인터페이스 만족
2. `data/index.ts` TEST_REGISTRY 배열에 `TestMeta` 추가
3. `lib/test-loader.ts` slug→module 맵에 항목 추가
→ 배포하면 sitemap, 정적 페이지, SEO 메타, OG 이미지 자동 생성
※ OG 이미지는 `app/og/route.tsx`에서 동적 생성 — 파일 추가 불필요

## SEO 규칙
- `lib/seo.ts` 팩토리 함수만 사용 (직접 Metadata 객체 작성 금지)
- 모든 테스트 랜딩(`app/[slug]/page.tsx`): Quiz + BreadcrumbList + FAQPage JSON-LD 필수
- `quiz/*` 페이지는 `robots: { index: false }` 적용 + sitemap 제외
- 새 페이지 canonical URL 반드시 설정

## 광고 규칙
- 자동광고: `app/layout.tsx`의 AdSense 스크립트로 처리 (NEXT_PUBLIC_ADSENSE_ID 필요)
- AdSense 승인: codedanswer.com 도메인 승인 완료 → 같은 Publisher ID로 taro 서브도메인 사용
- 자동광고 미작동 시: Vercel 환경변수에 NEXT_PUBLIC_ADSENSE_ID 입력 후 Redeploy
- 수동광고: `components/ads/AdSlot.tsx`만 사용 (직접 `<ins>` 작성 금지)
- 모든 AdSlot 주변에 버튼/링크 300px 이상 거리 유지
- 개발 환경에서는 placeholder 박스 자동 표시

## 환경변수 (Vercel + .env.local 동일하게 설정)
```
NEXT_PUBLIC_SITE_URL=https://taro.codedanswer.com
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX      ← codedanswer.com AdSense Publisher ID
NEXT_PUBLIC_GOOGLE_VERIFICATION=               ← Search Console 인증 토큰
NEXT_PUBLIC_NAVER_VERIFICATION=                ← 네이버 웹마스터 인증 토큰
```

## 채점 로직 (lib/scoring.ts)
- PHQ-9, ASRS, CBI, 사이코패스, 나르시시스트: `scoreBySum()`
- MBTI: `scoreMbti()`
- 에니어그램: `scoreByAxis()`
- Big5: `scoreMultiAxis()`
- 동물 성격: `scoreByCategory()`
- IQ: `scoreBySum()` → ResultContent에서 IQ 점수로 변환
- 번아웃(CBI) 특수: `scoreCbi()` (0-100 정규화)

## 문항 출처
| 테스트 | 출처 |
|--------|------|
| PHQ-9 (우울증) | WHO/Pfizer 완전 공개도메인 |
| ASRS (ADHD) | WHO/Harvard 공개 임상척도 |
| CBI (번아웃) | Copenhagen BI — 공개도메인 |
| MBTI | IPIP 완전 공개도메인 기반 자체 작성 |
| Big5 | IPIP 한국어 공식 번역본 |
| 에니어그램 | OEPS (CC BY-NC-SA 4.0) |
| 사이코패스 | LSRP/TriPM 기반 |
| 나르시시스트 | 자체 제작 |
| 동물 성격 | 자체 제작 |
| IQ | 자체 제작 |

## 배포 현황
- GitHub: https://github.com/brianpage2/taro
- Vercel: https://taro-mauve-alpha.vercel.app
- 운영 URL: https://taro.codedanswer.com
- Google Search Console: 인증 완료 (2026-05-10), sitemap 제출 완료
- AdSense: ca-pub-6449761611054213 (codedanswer.com 승인, 자동광고 활성)
- 네이버 웹마스터: 등록 완료 (2026-05-10)

## 금지사항
- `console.log` 프로덕션 코드에 남기지 않기
- 불필요한 주석 작성 금지
- `data/tests/` 파일에 로직 포함 금지 (데이터만)
- 16personalities.com 결과 설명 직접 복사 금지
