import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Shield } from "lucide-react";
import { buildMetadata, buildBreadcrumbSchema, SITE_URL } from "@/lib/metadata";
import { siteInfo, pricingTiers, faqs, faqsGmb } from "@/lib/site";
import { villes } from "@/data/villes";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title:
    "Tarifs création site internet & référencement local — Fourmies",
  description:
    "Prix transparents : site internet à 590€ + fiche Google incluse, ou optimisation Google My Business à 280€. Forfaits clés en main pour les professionnels de l'Avesnois. Devis gratuit 24h.",
  path: "/tarifs",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", url: SITE_URL },
  { name: "Tarifs", url: `${SITE_URL}/tarifs` },
]);

const pricingFaq = [
  ...faqs.slice(2, 3),
  ...faqsGmb.slice(3, 4),
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: "Oui. Je propose des facilités de paiement adaptées aux petites entreprises — par exemple un acompte à la commande et le solde à la livraison. On en discute ensemble lors du premier échange.",
  },
  {
    q: "Y a-t-il des frais cachés après la livraison ?",
    a: "Non. L'hébergement et le nom de domaine sont inclus la première année. À partir de la 2e année, le renouvellement est à votre charge (environ 80-120€/an selon l'hébergeur). Je vous explique tout clairement avant de commencer.",
  },
];

export default function TarifsPage() {
  return (
    <main className="relative">
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] -right-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              Tarifs
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Des prix clairs,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                sans surprise
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Deux forfaits pensés pour les professionnels de
              l&apos;Avesnois. Vous savez exactement ce que vous payez et ce que
              vous obtenez — avant même de signer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── GRILLE TARIFS ── */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingTiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 150}>
                <div
                  className={`relative rounded-2xl p-8 border flex flex-col h-full ${tier.bgClass} ${tier.borderClass}`}
                >
                  {/* Badge populaire */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-600/30">
                        ✦ {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-4 pt-2">
                    <h2 className="text-xl font-bold text-white mb-1">
                      {tier.name}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="text-[11px] text-slate-500 uppercase tracking-widest">
                      {tier.billing}
                    </span>
                    <div className="flex items-end gap-1 mt-1">
                      <span className="text-5xl font-bold text-white leading-none">
                        {tier.price}
                      </span>
                      <span
                        className={`text-lg font-semibold mb-1 ${tier.accentClass}`}
                      >
                        {tier.unit}
                      </span>
                    </div>
                  </div>

                  {/* Garantie sur l'offre GMB */}
                  {!tier.highlight && (
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 mb-5">
                      <Shield
                        size={14}
                        className="text-green-400 shrink-0 mt-0.5"
                      />
                      <p className="text-green-300 text-xs leading-relaxed">
                        <span className="font-semibold">
                          Garantie résultats
                        </span>{" "}
                        — Pas de progression en 8 semaines ? Je retravaille la
                        fiche sans frais.
                      </p>
                    </div>
                  )}

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle
                          size={16}
                          className={`flex-shrink-0 mt-0.5 ${tier.checkClass}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.href}
                    className={`flex items-center justify-center gap-2 w-full h-12 rounded-full font-bold transition-all duration-200 hover:scale-[1.02] active:scale-95 ${tier.ctaClass}`}
                  >
                    {tier.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mention devis sur-mesure */}
          <FadeIn delay={300}>
            <p className="text-center text-slate-500 text-sm mt-10">
              Besoin d&apos;un projet sur-mesure (e-commerce, site multipage,
              pack complet) ?{" "}
              <Link
                href="/contact"
                className="text-primary hover:text-blue-300 underline underline-offset-4 transition-colors"
              >
                Demandez un devis personnalisé →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── COMPARATIF ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                Comparatif
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quelle offre choisir ?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Les deux services sont complémentaires. Voici comment choisir
                selon votre situation.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="space-y-4">
              {[
                {
                  situation: "Vous n'avez pas de site internet",
                  conseil: "Pack Visibilité à 590€",
                  detail:
                    "Site vitrine + fiche Google incluse. La solution complète pour exister en ligne dès le départ.",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10 border-purple-500/20",
                },
                {
                  situation: "Vous avez un site mais pas de fiche Google",
                  conseil: "Optimisation GMB à 280€",
                  detail:
                    "Une fiche Google bien optimisée génère souvent plus de contacts qu'un site seul sur une zone locale.",
                  color: "text-primary",
                  bg: "bg-primary/10 border-primary/20",
                },
                {
                  situation: "Vous avez déjà une fiche Google peu visible",
                  conseil: "Optimisation GMB à 280€",
                  detail:
                    "L'audit révèle les points faibles. Une fiche existante optimisée monte souvent plus vite qu'une création from scratch.",
                  color: "text-primary",
                  bg: "bg-primary/10 border-primary/20",
                },
                {
                  situation: "Vous partez de zéro (ni site, ni fiche)",
                  conseil:
                    "Pack Visibilité à 590€ — le meilleur rapport qualité/prix",
                  detail:
                    "Site + fiche Google pour 590€ au lieu de 590€ + 280€ séparément. La fiche est offerte dans le pack.",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10 border-amber-500/20",
                },
              ].map((item) => (
                <div
                  key={item.situation}
                  className={`p-5 rounded-2xl border ${item.bg} flex flex-col sm:flex-row sm:items-start gap-4`}
                >
                  <div className="flex-1">
                    <p className="text-slate-400 text-sm mb-1">
                      <span className="font-medium text-white">
                        Situation :{" "}
                      </span>
                      {item.situation}
                    </p>
                    <p className={`font-bold text-sm ${item.color}`}>
                      → {item.conseil}
                    </p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ZONES ── */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                Zones desservies — mêmes tarifs partout
              </p>
              <div className="flex flex-wrap gap-3">
                {villes.map((ville) => (
                  <span
                    key={ville.slug}
                    className="text-sm text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    📍 {ville.nom}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 text-xs mt-4">
                Aucun frais de déplacement pour les communes de l&apos;Avesnois.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ TARIFS ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions sur les tarifs
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {pricingFaq.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 60}>
                <details className="group rounded-xl border border-white/10 bg-surface-dark overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:text-primary transition-colors list-none gap-4">
                    <span>{faq.q}</span>
                    <span className="text-slate-500 group-open:text-primary transition-colors text-xl shrink-0 leading-none">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/10 to-surface-dark p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Un devis gratuit sous 24h
              </h2>
              <p className="text-slate-400 mb-8">
                Décrivez votre activité et votre besoin — je reviens vers vous
                rapidement avec une proposition adaptée à votre situation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_-6px_rgba(19,91,236,0.7)] active:scale-95"
                >
                  Demander mon devis gratuit
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                >
                  <Phone size={16} className="text-primary" />
                  {siteInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
