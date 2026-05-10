import type { MetadataRoute } from 'next'
import { TEST_REGISTRY } from '@/data/index'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taro.codedanswer.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const testPages: MetadataRoute.Sitemap = TEST_REGISTRY.map((test) => ({
    url: `${BASE_URL}/${test.slug}`,
    lastModified: new Date(test.lastModified),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...testPages,
  ]
}
