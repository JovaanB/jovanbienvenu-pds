'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { realisations, categoriesPortfolio } from '@/data/realisations'
import FadeIn from '@/components/FadeIn'

const typeColors: Record<string, string> = {
  'Site Vitrine': 'bg-blue-500/20 text-blue-300',
  'SEO Local': 'bg-purple-500/20 text-purple-300',
  'Site + SEO': 'bg-amber-500/20 text-amber-300',
}

export default function Portfolio() {
  const [active, setActive] = useState('Tous')

  const filtered =
    active === 'Tous' ? realisations : realisations.filter((r) => r.categorie === active)

  return (
    <section id="portfolio" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12 gap-3">
            <p className="text-primary font-bold tracking-widest uppercase text-xs">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Réalisations Récentes</h2>
            <p className="text-slate-400 max-w-md">
              Des exemples concrets de ce que je peux réaliser pour votre activité.
            </p>
            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {categoriesPortfolio.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === f
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'bg-transparent border border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, i) => (
            <FadeIn key={r.id} delay={i * 100}>
              <div className="group rounded-2xl overflow-hidden bg-surface-dark border border-white/5 card-hover h-full flex flex-col">
                {/* Image area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  {r.image ? (
                    <Image
                      src={r.image}
                      alt={`${r.client} — ${r.titre}`}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
                          backgroundSize: '32px 32px',
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl mb-2 opacity-40">🖥️</span>
                        <span className="text-slate-600 text-xs font-medium uppercase tracking-widest">
                          Aperçu projet
                        </span>
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${typeColors[r.type] ?? 'bg-white/10 text-slate-300'}`}>
                      {r.type}
                    </span>
                    <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-300">
                      {r.secteur}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{r.client}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">{r.description}</p>
                  <p className="text-xs font-semibold text-emerald-400 mb-4">{r.resultat}</p>
                  <div className="flex items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-blue-300 transition-colors group/link"
                    >
                      Projet similaire ?
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    {r.url && (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                      >
                        Voir le site <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
