import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import { pricingTiers } from '@/lib/site'
import FadeIn from '@/components/FadeIn'

export default function Pricing() {
  return (
    <section id="tarifs" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">Tarifs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Des prix adaptés aux artisans
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Des forfaits clairs, sans surprise. Vous savez exactement ce que vous payez et ce
              que vous obtenez.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 150}>
              <div
                className={`relative rounded-2xl p-8 md:p-10 border card-hover h-full flex flex-col ${tier.bgClass} ${tier.borderClass}`}
              >
                {/* Popular badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-600/30">
                      <Sparkles size={12} />
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Name & description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tier.desc}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-[11px] text-slate-500 uppercase tracking-widest">
                    {tier.billing}
                  </span>
                  <div className="flex items-end gap-1 mt-1">
                    <span className="text-5xl font-bold text-white leading-none">{tier.price}</span>
                    <span className={`text-lg font-semibold mb-1 ${tier.accentClass}`}>
                      {tier.unit}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${tier.checkClass}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={tier.href}
                  className={`flex items-center justify-center gap-2 w-full h-12 rounded-full font-bold transition-all duration-200 hover:scale-[1.02] active:scale-95 ${tier.ctaClass}`}
                >
                  {tier.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Custom quote mention */}
        <FadeIn delay={300}>
          <p className="text-center text-slate-500 text-sm mt-10">
            Besoin d&apos;un projet sur-mesure (e-commerce, site multipage, pack complet) ?{' '}
            <a
              href="#contact"
              className="text-primary hover:text-blue-300 underline underline-offset-4 transition-colors"
            >
              Demandez un devis personnalisé →
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
