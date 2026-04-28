import { MessageCircle, Wrench, TrendingUp, ArrowRight, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "On discute de votre projet",
    desc: "Un échange de 15 minutes - gratuit et sans engagement. Je comprends votre activité, vos objectifs, et vous conseille la meilleure approche pour votre budget.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Je crée, vous validez",
    desc: "Site internet et/ou fiche Google optimisée livrés en 2 à 3 semaines. Vous suivez chaque étape, donnez votre avis, et je retravaille jusqu'à ce que vous soyez 100% satisfait.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Vos clients vous trouvent",
    desc: "Votre site et votre fiche Google sont en ligne. Les premières positions sur Google Maps apparaissent en 4 à 8 semaines. Chaque mois, un rapport clair : visites, appels, positions.",
  },
];

export default function Process() {
  return (
    <section className="py-28 relative z-10 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="pill-badge mb-4 inline-flex"><Zap size={13} />Simple &amp; transparent</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 mt-3">
              Visible sur Google en 3 semaines
            </h2>
            <p className="text-ink-3 max-w-lg mx-auto leading-relaxed">
              De votre premier message à vos premiers appels - en 3 étapes claires.
              Pas de jargon, pas de surprise.
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map(({ number, icon: Icon, title, desc }, i) => (
            <FadeIn key={number} delay={i * 130}>
              <div className="relative p-8 rounded-2xl bg-white border border-border-warm group hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col gap-6 card-hover">

                {/* Large background number */}
                <div className="absolute -top-2 -right-2 font-extrabold text-[7rem] text-ink/[0.03] leading-none select-none pointer-events-none">
                  {number}
                </div>

                <div className="relative z-10 flex flex-col gap-5 flex-1">
                  {/* Step number badge */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-primary bg-primary/8 border border-primary/20 px-3 py-1 rounded-full w-fit">
                    Étape {number}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-violet-50 border border-violet-200 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-bold text-ink leading-tight">{title}</h3>
                    <p className="text-ink-3 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>

                {/* Arrow connector (desktop) */}
                {i < steps.length - 1 && (
                  <div aria-hidden="true" className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-border-warm items-center justify-center text-ink-4 z-20 shadow-card hidden lg:flex">
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={420}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <a
              href="/contact"
              className="group btn-cta inline-flex items-center gap-2.5 h-12 px-8 rounded-full font-bold text-sm"
            >
              Démarrer mon projet gratuitement
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-ink-4">Sans engagement · Réponse garantie sous 24h</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
