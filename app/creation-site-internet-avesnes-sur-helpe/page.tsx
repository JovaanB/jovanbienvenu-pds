import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { getVilleBySlug } from '@/data/villes'
import CreationSiteTemplate from '@/components/CreationSiteTemplate'

const ville = getVilleBySlug('avesnes-sur-helpe')!

export const metadata: Metadata = buildMetadata({
  title: `Création de site internet à Avesnes-sur-Helpe (59) — 590€ tout inclus | Jovan`,
  description: ville.metaDescription,
  path: '/creation-site-internet-avesnes-sur-helpe',
})

export default function CreationSiteAvesnesPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
      </div>
      <CreationSiteTemplate ville={ville} />
    </main>
  )
}
