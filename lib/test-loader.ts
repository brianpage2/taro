import type { TestData } from '@/types/test'

const testModules: Record<string, () => Promise<{ default?: TestData; [key: string]: unknown }>> = {
  mbti: () => import('@/data/tests/mbti').then((m) => ({ default: m.mbti })),
  depression: () => import('@/data/tests/phq9').then((m) => ({ default: m.phq9 })),
  burnout: () => import('@/data/tests/cbi').then((m) => ({ default: m.cbi })),
  adhd: () => import('@/data/tests/asrs').then((m) => ({ default: m.asrs })),
  psychopath: () => import('@/data/tests/psychopath').then((m) => ({ default: m.psychopath })),
  narcissist: () => import('@/data/tests/narcissist').then((m) => ({ default: m.narcissist })),
  big5: () => import('@/data/tests/big5').then((m) => ({ default: m.big5 })),
  enneagram: () => import('@/data/tests/enneagram').then((m) => ({ default: m.enneagram })),
  'enneagram-short': () => import('@/data/tests/enneagram-short').then((m) => ({ default: m.enneagramShort })),
  'animal-personality': () => import('@/data/tests/animal-personality').then((m) => ({ default: m.animalPersonality })),
  iq: () => import('@/data/tests/iq').then((m) => ({ default: m.iq })),
  'mbti-short': () => import('@/data/tests/mbti-short').then((m) => ({ default: m.mbtiShort })),
  'big5-short': () => import('@/data/tests/big5-short').then((m) => ({ default: m.big5Short })),
  attachment: () => import('@/data/tests/attachment').then((m) => ({ default: m.attachment })),
  'self-esteem': () => import('@/data/tests/selfesteem').then((m) => ({ default: m.selfEsteem })),
  anxiety: () => import('@/data/tests/anxiety').then((m) => ({ default: m.anxiety })),
  stress: () => import('@/data/tests/stress').then((m) => ({ default: m.stress })),
  perfectionism: () => import('@/data/tests/perfectionism').then((m) => ({ default: m.perfectionism })),
}

export async function getTestBySlug(slug: string): Promise<TestData | null> {
  const loader = testModules[slug]
  if (!loader) return null
  const mod = await loader()
  return (mod.default as TestData) ?? null
}

export function getAllSlugs(): string[] {
  return Object.keys(testModules)
}
