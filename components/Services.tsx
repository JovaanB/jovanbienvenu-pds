import { CheckCircle, ArrowRight, Layers } from "lucide-react";
import { services } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

const cards = [
  {
    data: services.web,
    badge: "590€ · Forfait unique",
    badgeClass: "bg-primary/8 text-primary border-primary/20",
    iconBg: "bg-violet-50 border-violet-200",
    iconColor: "text-primary",
    checkColor: "text-primary",
    ctaColor: "text-primary hover:text-primary-hover",
    accentClass: "hover:border-primary/30 hover:shadow-card-hover",
  },
  {
    data: services.seo,
    badge: "280€ · Forfait unique",
    badgeClass: "bg-primary/8 text-primary border-primary/20",
    iconBg: "bg-violet-50 border-violet-200",
    iconColor: "text-primary",
    checkColor: "text-primary",
    ctaColor: "text-primary hover:text-primary-hover",
    accentClass: "hover:border-primary/30 hover:shadow-card-hover",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative z-10 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <span className="pill-badge mb-4 inline-flex"><Layers size={13} />Ce que je propose</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-3">
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
                Ce que vous obtenez
              </h2>
              <p className="text-ink-3 max-w-sm text-sm leading-relaxed">
                Des solutions clé en main pour être visible là où vos clients vous cherchent.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {cards.map(({ data, badge, badgeClass, iconBg, iconColor, checkColor, ctaColor, accentClass }, i) => (
            <FadeIn key={data.title} delay={i * 120}>
              <div className={`group relative bg-white border border-border-warm rounded-2xl p-8 md:p-10 overflow-hidden card-hover h-full transition-all duration-300 ${accentClass}`}>

                {/* Background watermark */}
                <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                  <data.Icon size={130} className={`${iconColor} rotate-6`} />
                </div>

                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col gap-7">
                  {/* Badge + Icon row */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} border`}>
                      <data.Icon size={24} />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${badgeClass} uppercase tracking-wide`}>
                      {badge}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-extrabold text-ink mb-3 leading-tight">{data.title}</h3>
                    <p className="text-ink-3 leading-relaxed text-sm">{data.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {data.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-ink-2">
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
  );
}
