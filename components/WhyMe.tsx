import { whyItems } from '@/lib/site'
import FadeIn from '@/components/FadeIn'

export default function WhyMe() {
  return (
    <section className="py-28 relative z-10 bg-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
              Pourquoi me choisir
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ce qui fait la différence
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyItems.map(({ Icon, gradient, title, desc }, i) => (
            <FadeIn key={title} delay={i * 80}>
              <div className="group p-8 rounded-2xl bg-surface-dark/50 border border-white/5 hover:bg-surface-dark transition-colors duration-300 h-full">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
