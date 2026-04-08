import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'
import { villes } from '@/data/villes'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/creation-site-internet`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/referencement-local-google`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tarifs`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/realisations`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/combien-coute-site-internet-artisan`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${SITE_URL}/blog/top-3-google-maps-avesnois`,
      lastModified: new Date('2026-02-12'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${SITE_URL}/blog/site-vitrine-vs-fiche-google-my-business`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/politique-de-confidentialite`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  const cityPagesSite: MetadataRoute.Sitemap = villes.map((ville) => ({
    url: `${SITE_URL}/creation-site-internet-${ville.slug}`,
    lastModified: new Date('2026-04-08'),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const cityPagesGmb: MetadataRoute.Sitemap = villes.map((ville) => ({
    url: `${SITE_URL}/referencement-local-google-${ville.slug}`,
    lastModified: new Date('2026-04-08'),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...cityPagesSite, ...cityPagesGmb]
}
