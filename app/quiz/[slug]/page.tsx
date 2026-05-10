import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getTestBySlug, getAllSlugs } from '@/lib/test-loader'
import QuizEngine from '@/components/test/QuizEngine'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: false, follow: false },
  }
}

export default async function QuizPage({ params }: Props) {
  const test = await getTestBySlug(params.slug)
  if (!test) notFound()

  return <QuizEngine test={test} />
}
