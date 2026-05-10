import type { Metadata } from 'next'
import { Suspense } from 'react'
import ResultContent from './ResultContent'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

interface Props { params: { slug: string } }

export default function ResultPage({ params }: Props) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <p className="text-ink-faint" style={{ fontSize: '17px', letterSpacing: '-0.374px' }}>
          로딩 중…
        </p>
      </div>
    }>
      <ResultContent slug={params.slug} />
    </Suspense>
  )
}
