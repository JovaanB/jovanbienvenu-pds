import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema, SITE_URL } from '@/lib/metadata'
import { realisations } from '@/data/realisations'
import RealisationCard from '@/components/RealisationCard'
import FadeIn from '@/components/FadeIn'
import SchemaOrg from '@/components/SchemaOrg'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = buildMetadata({
  title: "Mes réalisations — Sites internet et SEO local dans l'Avesnois",
  description:
    "Découvrez mes projets de création de sites internet et de référencement local Google réalisés pour des professionnels de l'Avesnois. Résultats mesurables.",
  path: '/realisations',
})

const schema = buildLocalBusinessSchema({ url: `${SITE_URL}/realisations` })
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Accueil', url: SITE_URL },
  { name: 'Mes réalisations', url: `${SITE_URL}/realisations` },
])

export default function RealisationsPage() {
  return (
    <main className="relative">
      <SchemaOrg schema={schema} />
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-[30%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mes{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                réalisations
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Des sites internet et des optimisations SEO qui produisent des résultats concrets pour
              des professionnels de l'Avesnois.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── GRILLE PROJETS ── */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((r, i) => (
              <FadeIn key={r.id} delay={i * 80} className="h-full">
                <RealisationCard realisation={r} />
              </FadeIn>
            ))}
          </div>

          {realisations.length === 0 && (
            <div className="text-center py-24">
              <p className="text-slate-500">Les projets arrivent bientôt…</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">
              Votre projet sera le prochain ?
            </h2>
            <p className="text-slate-400 mb-8">
              Devis gratuit sous 24h — je me déplace dans tout l'Avesnois.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_-6px_rgba(19,91,236,0.6)] active:scale-95"
            >
              Lancer mon projet
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
      <WhatsAppButton message="Bonjour Jovan, j'ai vu vos réalisations et souhaite discuter d'un projet similaire." />
    </main>
  )
}
