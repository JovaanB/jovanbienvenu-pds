import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Star,
  MapPin,
  Package,
  BarChart2,
  RefreshCw,
  Users,
  ShieldCheck,
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
  title: "Référencement local Google My Business Avesnois - 280€",
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
  { value: "×3", unit: "en moyenne", label: "De vues sur la fiche après optimisation" },
  { value: "1ère", unit: "page", label: "Position Google visée" },
];

const whyItems = [
  {
    Icon: Package,
    titre: "Incluse dans le Pack Visibilité",
    desc: "Avec le Pack Visibilité (site internet + fiche Google) à 590 €, la création ou optimisation de la fiche est incluse.",
  },
  {
    Icon: BarChart2,
    titre: "Résultats mesurables",
    desc: "Je vous fournis un rapport de positionnement avant/après pour constater les progrès.",
  },
  {
    Icon: RefreshCw,
    titre: "Sans abonnement obligatoire",
    desc: "Une fois votre fiche optimisée, vous êtes autonome. Suivi mensuel en option.",
  },
  {
    Icon: Users,
    titre: "Intervention locale",
    desc: "Je me déplace chez vous pour les photos et l'échange si besoin.",
  },
];

export default function ReferencementLocalPage() {
  return (
    <main className="relative">
      <SchemaOrg schema={schema} />
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <div className="ambient-bg" />

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="pill-badge mb-4 inline-flex">Référencement local</span>
            <h1 className="text-4xl md:text-6xl font-bold text-ink mb-6 leading-tight tracking-tight mt-3">
              Soyez{" "}
              <span className="text-gradient-primary">top 3</span>{" "}
              sur Google
            </h1>
            <p className="text-ink-3 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              J&apos;optimise votre fiche Google My Business pour que les clients
              locaux vous trouvent dans les résultats de recherche - avant vos
              concurrents, et sans payer de publicité.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://audit.jovanbienvenu.com/visibilite"
                className="group btn-cta inline-flex items-center gap-2 h-12 px-8 rounded-full font-bold text-sm"
              >
                Diagnostic gratuit de ma fiche
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${siteInfo.phone}`}
                className="inline-flex items-center gap-2 h-12 px-8 border border-border-warm rounded-full text-ink font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-200 bg-white shadow-card"
              >
                <Phone size={15} className="text-primary" />
                {siteInfo.phoneDisplay}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 py-12 px-6 bg-bg-alt">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border border-border-warm rounded-2xl bg-white p-8 shadow-card">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="flex items-baseline justify-center gap-1 mb-1 flex-wrap">
                    <span className="text-4xl font-bold text-ink">{s.value}</span>
                    <span className="text-primary text-sm font-semibold">{s.unit}</span>
                  </div>
                  <p className="text-ink-4 text-sm leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── OFFRE ── */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="pill-badge mb-4 inline-flex">L&apos;offre</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
                Optimisation GMB complète — 280€
              </h2>
              <p className="text-ink-3 max-w-xl mx-auto">
                Un investissement unique qui génère un flux régulier de nouveaux
                clients locaux, sans publicité payante.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Price card */}
            <FadeIn delay={100}>
              <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-b from-violet-50 to-white p-8 shadow-card-hover">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-ink leading-none">280</span>
                    <span className="text-primary text-2xl font-bold">€</span>
                    <span className="text-ink-4 text-sm">prestation unique</span>
                  </div>
                  <p className="text-ink-4 text-sm mt-2">
                    Tarif tout inclus, sans abonnement. Résultats durables.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {inclus.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-2">
                      <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 mb-4">
                  <ShieldCheck size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-emerald-700 text-xs leading-relaxed">
                    <span className="font-semibold">Garantie résultats</span> —
                    Pas de progression visible en 8 semaines ? Je retravaille la
                    fiche sans frais supplémentaires.
                  </p>
                </div>

                <a
                  href="https://audit.jovanbienvenu.com/visibilite"
                  className="group btn-cta w-full flex items-center justify-center gap-2 h-12 rounded-full font-bold text-sm"
                >
                  Diagnostic gratuit de ma fiche
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-center text-xs text-ink-4 mt-4">
                  Audit de votre visibilité actuelle offert avant toute décision
                </p>
              </div>
            </FadeIn>

            {/* Zones + trust */}
            <FadeIn delay={200}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-ink font-bold text-lg mb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    Zones desservies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {villesData.map((ville) => (
                      <Link
                        key={ville.slug}
                        href={`/referencement-local-google-${ville.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-ink-3 hover:text-primary border border-border-warm hover:border-primary/30 px-3 py-1.5 rounded-full transition-all duration-200"
                      >
                        <MapPin size={10} />
                        {ville.nom}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border-soft" />

                <div className="space-y-4">
                  {whyItems.map(({ Icon, titre, desc }) => (
                    <div key={titre} className="flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-violet-50 border border-violet-200 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-ink font-semibold text-sm">{titre}</h4>
                        <p className="text-ink-3 text-sm leading-relaxed">{desc}</p>
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
      <section className="relative z-10 py-20 px-6 bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="pill-badge mb-4 inline-flex">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
                Tout savoir sur le référencement local
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {faqsGmb.map((faq, i) => (
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

      {/* ── GUIDES BLOG ── */}
      <section className="relative z-10 py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="pill-badge mb-4 inline-flex">Nos guides</span>
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3 mt-3">
                Pour aller plus loin sur le SEO local
              </h2>
              <p className="text-ink-4 text-sm">
                Des ressources pour comprendre et maximiser votre visibilité Google.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FadeIn delay={80}>
              <Link
                href="/blog/top-3-google-maps-avesnois"
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-border-warm bg-bg-base hover:border-primary/30 hover:shadow-card transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Guide</span>
                <h3 className="text-ink font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                  Comment apparaître dans le top 3 Google dans l&apos;Avesnois ?
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-ink-4 group-hover:text-primary transition-colors mt-auto">
                  Lire l&apos;article <ArrowRight size={12} />
                </span>
              </Link>
            </FadeIn>
            <FadeIn delay={160}>
              <Link
                href="/blog/site-vitrine-vs-fiche-google-my-business"
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-border-warm bg-bg-base hover:border-primary/30 hover:shadow-card transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Guide</span>
                <h3 className="text-ink font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                  Site vitrine ou fiche Google My Business - que choisir ?
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-ink-4 group-hover:text-primary transition-colors mt-auto">
                  Lire l&apos;article <ArrowRight size={12} />
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 py-20 px-6 bg-bg-alt">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-b from-violet-50 to-white p-10 md:p-16 shadow-card">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Prêt à dominer Google ?
              </h2>
              <p className="text-ink-3 mb-8">
                Je commence par un audit gratuit de votre visibilité actuelle -
                sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://audit.jovanbienvenu.com/visibilite"
                  className="group btn-cta inline-flex items-center gap-2 h-12 px-8 rounded-full font-bold text-sm"
                >
                  Diagnostic gratuit de ma fiche
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center gap-2 text-ink-4 text-sm">
                  <Clock size={14} className="text-primary" />
                  Réponse sous 24h · Lun-Sam
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <WhatsAppButton message="Bonjour Jovan, je souhaite un audit gratuit de ma fiche Google My Business." />
    </main>
  );
}
