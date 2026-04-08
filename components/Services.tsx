import { CheckCircle, ArrowRight } from 'lucide-react'
import { services } from '@/lib/site'
import FadeIn from '@/components/FadeIn'

export default function Services() {
  const cards = [
    {
      data: services.web,
      accentIcon: 'text-primary',
      accentBg: 'bg-primary/15',
      accentBorder: 'border-primary/25',
      checkColor: 'text-primary',
      ctaColor: 'text-primary hover:text-blue-300',
      glowColor: 'from-primary/0 via-primary/10 to-primary/0',
      badge: '590€ · Forfait unique',
      badgeClass: 'bg-primary/10 text-primary border-primary/20',
    },
    {
      data: services.seo,
      accentIcon: 'text-primary',
      accentBg: 'bg-primary/15',
      accentBorder: 'border-primary/25',
      checkColor: 'text-primary',
      ctaColor: 'text-primary hover:text-blue-300',
      glowColor: 'from-primary/0 via-primary/10 to-primary/0',
      badge: '280€ · Forfait unique',
      badgeClass: 'bg-primary/10 text-primary border-primary/20',
    },
  ]

  return (
    <section id="services" className="py-28 relative z-10 bg-surface-dark/20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
              Ce que je propose
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Mes services
              </h2>
              <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                Des solutions sur-mesure pour dominer votre marché local —
                livrées clé en main.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {cards.map(({ data, accentIcon, accentBg, accentBorder, checkColor, ctaColor, glowColor, badge, badgeClass }, i) => (
            <FadeIn key={data.title} delay={i * 120}>
              <div className={`group relative bg-surface-dark border border-white/[0.06] hover:${accentBorder} rounded-2xl p-8 md:p-10 overflow-hidden card-hover h-full transition-all duration-300`}>

                {/* Background icon watermark */}
                <div className="absolute top-4 right-4 opacity-[0.04] group-hover:opacity-[0.09] transition-opacity duration-500 pointer-events-none">
                  <data.Icon size={130} className={`${accentIcon} rotate-6`} />
                </div>

                {/* Top glow on hover */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10 flex flex-col gap-7">
                  {/* Badge + Icon row */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${accentBg} flex items-center justify-center ${accentIcon} border ${accentBorder}`}>
                      <data.Icon size={24} />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${badgeClass} uppercase tracking-wide`}>
                      {badge}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">
                      {data.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{data.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {data.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle size={15} className={`${checkColor} flex-shrink-0 mt-0.5`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={data.cta.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 ${ctaColor} group/link`}
                  >
                    {data.cta.label}
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
