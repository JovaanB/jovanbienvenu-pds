import { CheckCircle } from 'lucide-react'
import { services } from '@/lib/site'
import FadeIn from '@/components/FadeIn'

export default function Services() {
  const cards = [
    {
      data: services.web,
      accentIcon: 'text-primary',
      accentBg: 'bg-primary/15',
      accentBorder: 'border-primary/20',
      checkColor: 'text-primary',
      ctaColor: 'text-primary hover:text-blue-300',
    },
    {
      data: services.seo,
      accentIcon: 'text-purple-400',
      accentBg: 'bg-purple-500/15',
      accentBorder: 'border-purple-500/20',
      checkColor: 'text-purple-400',
      ctaColor: 'text-purple-400 hover:text-purple-300',
    },
  ]

  return (
    <section id="services" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
              Ce que je propose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Mes Services</h2>
            <p className="text-slate-400 max-w-md">
              Des solutions sur-mesure pour dominer votre marché local.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map(({ data, accentIcon, accentBg, accentBorder, checkColor, ctaColor }, i) => (
            <FadeIn key={data.title} delay={i * 120}>
              <div className="group relative bg-surface-dark border border-white/5 rounded-2xl p-8 md:p-12 overflow-hidden card-hover h-full">
                {/* Decorative background icon */}
                <div className="absolute top-4 right-4 opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-500 pointer-events-none">
                  <data.Icon size={110} className={`${accentIcon} rotate-6`} />
                </div>
                {/* Hover border glow */}
                <div
                  className={`absolute inset-0 border-2 border-transparent rounded-2xl group-hover:${accentBorder} transition-colors duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col gap-8">
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl ${accentBg} flex items-center justify-center ${accentIcon} mb-6`}
                    >
                      <data.Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{data.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{data.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {data.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle size={16} className={`${checkColor} flex-shrink-0 mt-0.5`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={data.cta.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${ctaColor}`}
                  >
                    {data.cta.label} →
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
