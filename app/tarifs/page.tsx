import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Shield, MapPin } from "lucide-react";
import { buildMetadata, buildBreadcrumbSchema, SITE_URL } from "@/lib/metadata";
import { siteInfo, pricingTiers, faqs, faqsGmb } from "@/lib/site";
import { villes } from "@/data/villes";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Tarifs création site internet & référencement local - Fourmies",
  description:
    "Site internet à 590€ + fiche Google incluse, ou optimisation Google My Business à 280€. Forfait unique, sans abonnement. Devis gratuit sous 24h.",
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
    a: "Oui. Je propose des facilités de paiement adaptées aux petites entreprises - par exemple un acompte à la commande et le solde à la livraison. On en discute ensemble lors du premier échange.",
  },
  {
    q: "Y a-t-il des frais cachés après la livraison ?",
    a: "Non. L'hébergement et le nom de domaine sont inclus la première année. À partir de la 2e année, le renouvellement est à votre charge (environ 80-120€/an selon l'hébergeur). Je vous explique tout clairement avant de commencer.",
  },
];

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TarifsPage() {
  return (
    <main className="relative">
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={pricingFaqSchema} />
      <div className="ambient-bg" />

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="pill-badge mb-4 inline-flex">Tarifs</span>
            <h1 className="text-4xl md:text-6xl font-bold text-ink mb-6 leading-tight tracking-tight mt-3">
              Des prix clairs,{" "}
              <span className="text-gradient-primary">sans surprise</span>
            </h1>
            <p className="text-ink-3 text-lg max-w-2xl mx-auto leading-relaxed">
              Deux forfaits pensés pour les professionnels de l&apos;Avesnois.
              Vous savez exactement ce que vous payez et ce que vous obtenez -
              avant même de signer.
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
                  className={`relative rounded-2xl p-8 border flex flex-col h-full ${tier.bgClass} ${tier.borderClass} shadow-card`}
                >
                  {/* Badge populaire */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className={`mb-4 ${tier.badge ? "pt-4" : ""}`}>
                    <h2 className="text-xl font-bold text-ink mb-1">{tier.name}</h2>
                    <p className="text-ink-3 text-sm leading-relaxed">{tier.desc}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-[11px] text-ink-4 uppercase tracking-widest">
                      {tier.billing}
                    </span>
                    <div className="flex items-end gap-1 mt-1">
                      <span className="text-5xl font-bold text-ink leading-none">{tier.price}</span>
                      <span className={`text-lg font-semibold mb-1 ${tier.accentClass}`}>
                        {tier.unit}
                      </span>
                    </div>
                  </div>

                  {/* Garantie sur chaque offre */}
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 mb-5">
                    <Shield size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-emerald-700 text-xs leading-relaxed">
                      {tier.highlight ? (
                        <>
                          <span className="font-semibold">Livraison garantie en 3 semaines</span>{" "}
                          - ou je continue jusqu&apos;à ce que votre site soit parfait.
                        </>
                      ) : (
                        <>
                          <span className="font-semibold">Garantie résultats</span>{" "}
                          - Pas de progression en 8 semaines ? Je retravaille la fiche sans frais.
                        </>
                      )}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-ink-2">
                        <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${tier.checkClass}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.href}
                    className={`group flex items-center justify-center gap-2 w-full h-12 rounded-full font-bold transition-all duration-200 hover:scale-[1.02] active:scale-95 ${tier.ctaClass}`}
                  >
                    {tier.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mention devis sur-mesure */}
          <FadeIn delay={300}>
            <p className="text-center text-ink-4 text-sm mt-10">
              Besoin d&apos;un projet sur-mesure (e-commerce, site multipage, pack complet) ?{" "}
              <Link href="/contact" className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors">
                Obtenir un devis personnalisé →
              </Link>
            </p>
            <p className="text-center text-ink-4 text-xs mt-4">
              En savoir plus :{" "}
              <Link href="/creation-site-internet" className="hover:text-ink underline underline-offset-4 transition-colors">
                Création de site internet
              </Link>{" "}
              ·{" "}
              <Link href="/referencement-local-google" className="hover:text-ink underline underline-offset-4 transition-colors">
                Référencement local Google
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── COMPARATIF ── */}
      <section className="relative z-10 py-20 px-6 bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="pill-badge mb-4 inline-flex">Comparatif</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
                Quelle offre choisir ?
              </h2>
              <p className="text-ink-3 max-w-xl mx-auto">
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
                  detail: "Site vitrine + fiche Google incluse. Vous êtes visible et crédible dès le premier jour.",
                  color: "text-primary",
                  bg: "bg-primary/5 border-primary/20",
                },
                {
                  situation: "Vous avez un site mais pas de fiche Google",
                  conseil: "Fiche Google à 280€",
                  detail: "Une fiche Google bien optimisée génère souvent plus de contacts qu'un site seul sur une zone locale.",
                  color: "text-primary",
                  bg: "bg-primary/5 border-primary/20",
                },
                {
                  situation: "Vous avez déjà une fiche Google peu visible",
                  conseil: "Fiche Google à 280€",
                  detail: "L'audit révèle les points faibles. Une fiche existante optimisée remonte plus vite qu'une fiche créée de zéro.",
                  color: "text-primary",
                  bg: "bg-primary/5 border-primary/20",
                },
                {
                  situation: "Vous partez de zéro (ni site, ni fiche)",
                  conseil: "Pack Visibilité à 590€ - le meilleur rapport qualité/prix",
                  detail: "Site + fiche Google pour 590€ au lieu de 870€ séparément. La fiche est offerte dans le pack.",
                  color: "text-primary font-bold",
                  bg: "bg-violet-50 border-primary/25",
                },
              ].map((item) => (
                <div
                  key={item.situation}
                  className={`p-5 rounded-2xl border ${item.bg} flex flex-col sm:flex-row sm:items-start gap-4`}
                >
                  <div className="flex-1">
                    <p className="text-ink-3 text-sm mb-1">
                      <span className="font-medium text-ink">Situation : </span>
                      {item.situation}
                    </p>
                    <p className={`text-sm ${item.color}`}>→ {item.conseil}</p>
                    <p className="text-ink-4 text-xs mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ZONES ── */}
      <section className="relative z-10 py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border border-border-warm bg-bg-base p-6">
              <p className="text-ink-4 text-xs font-bold uppercase tracking-widest mb-4">
                Zones desservies — mêmes tarifs partout
              </p>
              <div className="flex flex-wrap gap-3">
                {villes.map((ville) => (
                  <Link
                    key={ville.slug}
                    href={`/creation-site-internet-${ville.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-ink-3 hover:text-primary border border-border-warm hover:border-primary/30 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <MapPin size={10} />
                    {ville.nom}
                  </Link>
                ))}
              </div>
              <p className="text-ink-4 text-xs mt-4">
                Aucun frais de déplacement pour les communes de l&apos;Avesnois.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ TARIFS ── */}
      <section className="relative z-10 py-20 px-6 bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="pill-badge mb-4 inline-flex">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
                Vos questions — réponses directes
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {pricingFaq.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 60}>
                <details className="group rounded-xl border border-border-warm bg-white overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-ink font-medium hover:text-primary transition-colors list-none gap-4">
                    <span>{faq.q}</span>
                    <span className="text-ink-4 group-open:text-primary transition-colors text-xl shrink-0 leading-none font-bold">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-ink-3 text-sm leading-relaxed border-t border-border-soft pt-4">
                    {faq.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-b from-violet-50 to-white p-10 md:p-16 shadow-card">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Votre devis en 24h — sans engagement
              </h2>
              <p className="text-ink-3 mb-8">
                Dites-moi ce que vous faites et où vous êtes - je vous reviens
                avec une proposition claire, taillée pour votre activité.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group btn-cta inline-flex items-center gap-2 h-12 px-8 rounded-full font-bold text-sm"
                >
                  Obtenir mon devis gratuit
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="inline-flex items-center gap-2 h-12 px-8 border border-border-warm rounded-full text-ink font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-200 bg-white shadow-card"
                >
                  <Phone size={15} className="text-primary" />
                  {siteInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <WhatsAppButton message="Bonjour Jovan, j'aimerais en savoir plus sur vos tarifs et demander un devis." />
    </main>
  );
}
