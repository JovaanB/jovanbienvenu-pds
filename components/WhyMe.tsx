import { whyItems } from '@/lib/site'
import FadeIn from '@/components/FadeIn'

export default function WhyMe() {
  return (
    <section className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                Pourquoi me choisir
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Ce qui fait <br className="hidden md:block" />
                la différence
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm md:text-base">
              Pas une agence anonyme. Un professionnel local engagé, transparent,
              et accessible.
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyItems.map(({ Icon, gradient, title, desc }, i) => (
            <FadeIn key={title} delay={i * 90}>
              <div className="group relative p-7 rounded-2xl bg-surface-dark border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 h-full flex flex-col gap-5 hover:-translate-y-1.5 cursor-default">
                {/* Icon — single brand color */}
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <Icon size={21} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2.5 flex-1">
                  <h3 className="text-base font-bold text-white leading-tight">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>

                {/* Subtle bottom accent line */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
