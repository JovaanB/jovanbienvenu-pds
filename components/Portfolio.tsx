"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Briefcase, Monitor } from "lucide-react";
import { realisations } from "@/data/realisations";
import FadeIn from "@/components/FadeIn";

const typeColors: Record<string, string> = {
  "Site Vitrine": "bg-primary/8 text-primary border-primary/20",
  "SEO Local": "bg-primary/8 text-primary border-primary/20",
  "Site + SEO": "bg-primary/8 text-primary border-primary/20",
};

export default function Portfolio() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? realisations
      : realisations.filter((r) => r.categorie === active);

  return (
    <section id="portfolio" className="py-28 relative z-10 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12 gap-3">
            <span className="pill-badge">
              <Briefcase size={13} />
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-ink mt-1">
              Projets récents
            </h2>
            <p className="text-ink-3 max-w-md">
              Des projets réels, des résultats mesurables — pour des artisans de
              l&apos;Avesnois.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, i) => (
            <FadeIn key={r.id} delay={i * 100}>
              <div className="group rounded-2xl overflow-hidden bg-white border border-border-warm card-hover h-full flex flex-col shadow-card">
                {/* Image area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-stone-100 to-stone-50">
                  {r.image ? (
                    <Image
                      src={r.image}
                      alt={`${r.client} - ${r.titre} - ${r.secteur} à ${r.ville}`}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-60"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgb(28 25 23 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(28 25 23 / 0.04) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <Monitor size={32} className="text-ink-4 opacity-30" />
                        <span className="text-ink-4 text-xs font-medium uppercase tracking-widest">
                          Aperçu projet
                        </span>
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className={`px-2 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${typeColors[r.type] ?? "bg-stone-50 text-stone-600 border-stone-200"}`}
                    >
                      {r.type}
                    </span>
                    <span className="px-2 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider bg-stone-50 text-stone-600 border-stone-200">
                      {r.secteur}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {r.client}
                  </h3>
                  <p className="text-ink-3 text-sm leading-relaxed mb-3 flex-1">
                    {r.description}
                  </p>
                  <p className="text-xs font-semibold text-primary mb-4">
                    {r.resultat}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover transition-colors group/link"
                    >
                      Même résultat pour vous ?
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                    {r.url && (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-ink-4 hover:text-ink transition-colors"
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
  );
}
