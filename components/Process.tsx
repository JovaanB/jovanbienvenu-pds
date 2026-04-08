import { MessageCircle, Wrench, TrendingUp, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    label: "Étape 01",
    title: "On discute de votre projet",
    desc: "Un échange de 15 minutes - gratuit et sans engagement. Je comprends votre activité, vos objectifs, et vous conseille la meilleure approche pour votre budget.",
  },
  {
    number: "02",
    icon: Wrench,
    label: "Étape 02",
    title: "Je crée, vous validez",
    desc: "Site internet et/ou fiche Google optimisée livrés en 2 à 3 semaines. Vous suivez chaque étape, donnez votre avis, et je retravaille jusqu'à ce que vous soyez 100% satisfait.",
  },
  {
    number: "03",
    icon: TrendingUp,
    label: "Étape 03",
    title: "Vos clients vous trouvent",
    desc: "Votre téléphone commence à sonner. Chaque mois, je vous envoie un rapport clair : visites sur votre site, appels générés, positions Google. Des résultats mesurables.",
  },
];

export default function Process() {
  return (
    <section className="py-28 relative z-10 bg-surface-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
              Simple &amp; transparent
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
              De votre premier message à vos premiers clients - en 3 étapes
              claires. Pas de jargon, pas de surprise.
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map(({ number, icon: Icon, label, title, desc }, i) => (
            <FadeIn key={number} delay={i * 130}>
              <div className="relative p-8 rounded-2xl bg-surface-dark border border-white/[0.07] overflow-hidden group hover:-translate-y-1.5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col gap-6">
                {/* Large background number */}
                <div className="absolute -top-2 -right-2 font-extrabold text-[7rem] text-white/[0.025] leading-none select-none pointer-events-none">
                  {number}
                </div>

                <div className="relative z-10 flex flex-col gap-5 flex-1">
                  {/* Step label - single accent color */}
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                    {label}
                  </span>

                  {/* Icon - single color */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Arrow to next (desktop) */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-2 border border-white/10 items-center justify-center text-slate-500 z-20 hidden lg:flex">
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
              className="group inline-flex items-center gap-2.5 h-12 px-8 bg-cta rounded-full text-white font-bold text-sm transition-all duration-200 hover:bg-cta-hover hover:shadow-[0_0_36px_-8px_rgba(249,115,22,0.6)] active:scale-95"
            >
              Démarrer mon projet gratuitement
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <p className="text-xs text-slate-600">
              Sans engagement · Réponse garantie sous 24h
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
