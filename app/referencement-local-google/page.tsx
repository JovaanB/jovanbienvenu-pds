import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Star,
  MapPin,
} from "lucide-react";
import {
  buildMetadata,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
  SITE_URL,
} from "@/lib/metadata";
import { siteInfo, faqsGmb } from "@/lib/site";
import { villes as villesData } from "@/data/villes";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Référencement local Google My Business Avesnois — 280€",
  description:
    "Optimisation fiche Google My Business dans l'Avesnois à 280€. Apparaissez en 1ère page Google à Fourmies, Maubeuge, Hirson. Résultats en 4 à 8 semaines.",
  path: "/referencement-local-google",
});

const schema = buildLocalBusinessSchema({
  url: `${SITE_URL}/referencement-local-google`,
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsGmb.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", url: SITE_URL },
  {
    name: "Référencement local Google My Business",
    url: `${SITE_URL}/referencement-local-google`,
  },
]);

const inclus = [
  "Audit complet de votre visibilité locale actuelle",
  "Création ou reprise de la fiche Google Business Profile",
  "Optimisation de toutes les catégories et attributs",
  "Rédaction de la description optimisée SEO local",
  "Ajout et optimisation de photos professionnelles",
  "Sélection des mots-clés locaux stratégiques",
  "Mise en place de réponses-types aux avis clients",
  "Option maintenance mensuelle disponible",
  "Rapport de positionnement avant/après",
];

const stats = [
  { value: "4-8", unit: "semaines", label: "Pour voir les premiers résultats" },
  {
    value: "×3",
    unit: "en moyenne",
    label: "De vues sur la fiche après optimisation",
  },
  { value: "1ère", unit: "page", label: "Position Google visée" },
];

export default function ReferencementLocalPage() {
  return (
    <main className="relative">
      <SchemaOrg schema={schema} />
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] right-[10%] w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[5%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-4">
              Référencement local
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Soyez{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">
                top 3
              </span>{" "}
              sur Google
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              J'optimise votre fiche Google My Business pour que les clients
              locaux vous trouvent dans les résultats de recherche — avant vos
              concurrents, et sans payer de publicité.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all duration-200 hover:shadow-[0_0_32px_-6px_rgba(147,51,234,0.6)] active:scale-95"
              >
                Demander un audit gratuit
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${siteInfo.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                <Phone size={16} className="text-purple-400" />
                {siteInfo.phoneDisplay}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border border-white/10 rounded-2xl bg-surface-dark p-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="flex items-baseline justify-center gap-1 mb-1 flex-wrap">
                    <span className="text-4xl font-bold text-white">
                      {s.value}
                    </span>
                    <span className="text-purple-400 text-sm font-semibold">
                      {s.unit}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── OFFRE ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-3">
                L'offre
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Optimisation GMB complète — 280€
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Un investissement unique qui génère un flux régulier de nouveaux
                clients locaux, sans publicité payante.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Price card */}
            <FadeIn delay={100}>
              <div className="relative rounded-2xl border border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-surface-dark p-8">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-white">280</span>
                    <span className="text-purple-400 text-2xl font-bold">
                      €
                    </span>
                    <span className="text-slate-400 text-sm">
                      prestation unique
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mt-2">
                    Tarif tout inclus, sans abonnement. Résultats durables.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {inclus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle
                        size={15}
                        className="text-purple-400 mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-green-500/10 border border-green-500/20 mb-4">
                  <span className="text-green-400 text-base shrink-0 mt-0.5">🛡️</span>
                  <p className="text-green-300 text-xs leading-relaxed">
                    <span className="font-semibold">Garantie résultats</span> — Pas de progression visible en 8 semaines ? Je retravaille la fiche sans frais supplémentaires.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="group w-full flex items-center justify-center gap-2 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_-4px_rgba(147,51,234,0.5)] active:scale-95"
                >
                  Demander mon audit gratuit
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <p className="text-center text-xs text-slate-600 mt-4">
                  Audit de votre visibilité actuelle offert avant toute décision
                </p>
              </div>
            </FadeIn>

            {/* Why GMB */}
            <FadeIn delay={200}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-purple-400" />
                    Zones desservies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {villesData.map((ville) => (
                      <Link
                        key={ville.slug}
                        href={`/referencement-local-google-${ville.slug}`}
                        className="text-sm text-slate-300 bg-white/5 border border-white/10 hover:border-purple-500/40 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200"
                      >
                        📍 {ville.nom}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                <div className="space-y-4">
                  {[
                    {
                      icon: "📦",
                      titre: "Incluse dans le Pack Visibilité",
                      desc: "Avec le Pack Visibilité (site internet + fiche Google) à 590 €, la création ou optimisation de la fiche est incluse.",
                    },
                    {
                      icon: "📊",
                      titre: "Résultats mesurables",
                      desc: "Je vous fournis un rapport de positionnement avant/après pour constater les progrès.",
                    },
                    {
                      icon: "🔄",
                      titre: "Sans abonnement obligatoire",
                      desc: "Une fois votre fiche optimisée, vous êtes autonome. Suivi mensuel en option.",
                    },
                    {
                      icon: "🤝",
                      titre: "Intervention locale",
                      desc: "Je me déplace chez vous pour les photos et l'échange si besoin.",
                    },
                  ].map((item) => (
                    <div key={item.titre} className="flex gap-3">
                      <span className="text-xl shrink-0">{item.icon}</span>
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {item.titre}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tout savoir sur le référencement local
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqsGmb.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 60}>
                <details className="group rounded-xl border border-white/10 bg-surface-dark overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:text-purple-300 transition-colors list-none gap-4">
                    <span>{faq.q}</span>
                    <span className="text-slate-500 group-open:text-purple-400 transition-colors text-xl shrink-0 leading-none">
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

      {/* ── GUIDES BLOG ── */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <p className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-3">
                Nos guides
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Pour aller plus loin sur le SEO local
              </h2>
              <p className="text-slate-400 text-sm">
                Des ressources pour comprendre et maximiser votre visibilité
                Google.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FadeIn delay={80}>
              <Link
                href="/blog/top-3-google-maps-avesnois"
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-white/10 bg-surface-dark hover:border-purple-500/30 transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Guide
                </span>
                <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-purple-300 transition-colors">
                  Comment apparaître dans le top 3 Google dans l'Avesnois ?
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-purple-400 transition-colors mt-auto">
                  Lire l'article <ArrowRight size={12} />
                </span>
              </Link>
            </FadeIn>
            <FadeIn delay={160}>
              <Link
                href="/blog/site-vitrine-vs-fiche-google-my-business"
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-white/10 bg-surface-dark hover:border-purple-500/30 transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Guide
                </span>
                <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-purple-300 transition-colors">
                  Site vitrine ou fiche Google My Business — que choisir ?
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-purple-400 transition-colors mt-auto">
                  Lire l'article <ArrowRight size={12} />
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-900/15 to-surface-dark p-10 md:p-16">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à dominer Google ?
              </h2>
              <p className="text-slate-400 mb-8">
                Je commence par un audit gratuit de votre visibilité actuelle —
                sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all duration-200 active:scale-95"
                >
                  Demander mon audit gratuit
                  <ArrowRight size={18} />
                </Link>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock size={14} className="text-purple-400" />
                  Réponse sous 24h · Lun-Sam
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <WhatsAppButton />
    </main>
  );
}
