import { CheckCircle, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { pricingTiers } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

export default function Pricing() {
  return (
    <section id="tarifs" className="py-28 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="pill-badge mb-4 inline-flex"><Sparkles size={13} />Tarifs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 mt-3">
              Des prix adaptés aux artisans
            </h2>
            <p className="text-ink-3 max-w-xl mx-auto leading-relaxed">
              Des forfaits clairs, sans surprise. Vous savez exactement ce que
              vous payez avant même de commencer.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 150}>
              <div
                className={`relative rounded-2xl p-8 md:p-10 border card-hover h-full flex flex-col ${
                  tier.highlight
                    ? "bg-gradient-to-b from-violet-50 to-white border-primary/30 shadow-card-hover"
                    : "bg-white border-border-warm shadow-card"
                }`}
              >
                {/* Popular badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                      <Sparkles size={11} />
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Top accent line */}
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                )}

                {/* Name & description */}
                <div className={`mb-6 ${tier.badge ? "mt-4" : ""}`}>
                  <h3 className="text-xl font-extrabold text-ink mb-2">{tier.name}</h3>
                  <p className="text-ink-3 text-sm leading-relaxed">{tier.desc}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-[11px] text-ink-4 uppercase tracking-widest font-semibold">
                    {tier.billing}
                  </span>
                  <div className="flex items-end gap-1 mt-1">
                    <span className="text-5xl font-extrabold text-ink leading-none">{tier.price}</span>
                    <span className="text-xl font-bold mb-1 text-primary">{tier.unit}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-2">
                      <CheckCircle size={15} className="flex-shrink-0 mt-0.5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Guarantee line */}
                <div className="flex items-center gap-2 mb-5 text-xs text-ink-4">
                  <ShieldCheck size={14} className="flex-shrink-0 text-ink-3" />
                  <span>Satisfaction garantie · Retouches illimitées jusqu&apos;à validation</span>
                </div>

                {/* CTA */}
                <a
                  href={tier.href}
                  className="group btn-cta flex items-center justify-center gap-2 w-full h-12 rounded-full font-bold transition-all duration-200 hover:scale-[1.02] active:scale-95"
                >
                  {tier.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Custom quote mention */}
        <FadeIn delay={320}>
          <p className="text-center text-ink-3 text-sm mt-12">
            Besoin d&apos;un projet sur-mesure (e-commerce, site multipage, pack complet) ?{" "}
            <a
              href="#contact"
              className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors font-medium"
            >
              Demandez un devis personnalisé →
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
