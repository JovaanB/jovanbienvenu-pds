import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Clock, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";
import {
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
  SITE_URL,
} from "@/lib/metadata";
import { siteInfo, faqsGmb } from "@/lib/site";
import { villes, type VilleSEO } from "@/data/villes";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  { value: "0€", unit: "de pub", label: "Le trafic vient sans payer par clic" },
];

interface ReferencementLocalTemplateProps {
  ville: VilleSEO;
}

export default function ReferencementLocalTemplate({
  ville,
}: ReferencementLocalTemplateProps) {
  const pageUrl = `${SITE_URL}/referencement-local-google-${ville.slug}`;

  const schema = buildLocalBusinessSchema({
    addressLocality: ville.nom,
    postalCode: ville.codePostal,
    url: pageUrl,
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
      name: "Référencement local Google",
      url: `${SITE_URL}/referencement-local-google`,
    },
    { name: `Référencement local à ${ville.nom}`, url: pageUrl },
  ]);

  return (
    <>
      <SchemaOrg schema={schema} />
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-4">
              Référencement local - {ville.nom}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Soyez{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">
                top 3 sur Google
              </span>{" "}
              à {ville.nom}
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
              {ville.paragrapheIntroGmb}
            </p>
            <p className="text-slate-500 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              {ville.contextEconomique}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://audit.jovanbienvenu.com/visibilite"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all duration-200 hover:shadow-[0_0_32px_-6px_rgba(147,51,234,0.6)] active:scale-95"
              >
                Diagnostic gratuit de ma fiche
                <ArrowRight size={18} />
              </a>
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
            <div className="grid grid-cols-3 gap-6 border border-white/10 rounded-2xl bg-surface-dark p-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {s.value}
                    </span>
                    <span className="text-purple-400 text-sm font-semibold">
                      {s.unit}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── C'EST QUOI GMB ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-3">
              Google Business Profile
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              C&apos;est quoi une fiche Google My Business ?
            </h2>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed mb-8">
              <p>
                Google My Business (aujourd&apos;hui appelé{" "}
                <strong className="text-white">Google Business Profile</strong>)
                est la fiche qui apparaît quand un client cherche votre activité
                sur Google Maps ou dans les résultats de recherche. Elle affiche
                votre nom, téléphone, horaires, photos, avis et localisation -
                avant même votre site internet.
              </p>
              <p>
                C&apos;est la première chose que voit un prospect local avant de
                vous appeler. Une fiche absente ou mal renseignée, c&apos;est
                votre concurrent qui décroche l&apos;appel à votre place.
              </p>
              <p className="text-slate-300">{ville.contextEconomique}</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  icon: "📞",
                  label: "Appel direct",
                  desc: "Le client appelle d'un clic depuis Google",
                },
                {
                  icon: "⭐",
                  label: "Avis clients",
                  desc: "Les avis s'affichent directement sur Google",
                },
                {
                  icon: "🗺️",
                  label: "Itinéraire GPS",
                  desc: "Un clic suffit pour vous trouver",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 rounded-xl border border-white/8 bg-surface-dark"
                >
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <p className="text-white text-xs font-semibold mb-1">
                    {item.label}
                  </p>
                  <p className="text-slate-500 text-xs leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── POURQUOI ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-3">
                Pourquoi agir maintenant
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Votre fiche Google, c&apos;est votre vitrine numéro 1
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                À {ville.nom}, quand un client cherche un artisan sur Google, il
                voit d&apos;abord Google Maps - pas les sites. Sans fiche
                optimisée, c&apos;est votre concurrent qui décroche le
                téléphone.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                titre: "76% des recherches locales",
                desc: "finissent par un appel ou une visite en boutique le jour même. Votre fiche Google, c'est votre vitrine numéro 1.",
              },
              {
                icon: "📍",
                titre: "Le pack local Google",
                desc: `Les 3 premières fiches qui apparaissent sur Google Maps à ${ville.nom} captent plus de 70% des clics. En dessous, presque personne ne vous voit.`,
              },
              {
                icon: "💶",
                titre: "Trafic 100% gratuit",
                desc: "Contrairement à Google Ads, une fiche bien optimisée génère des appels et des visites sans payer par clic. Un investissement unique, des résultats durables.",
              },
            ].map((item) => (
              <FadeIn key={item.titre}>
                <div className="p-6 rounded-2xl border border-white/10 bg-surface-dark h-full">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-white font-bold mb-2">{item.titre}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFRE ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-3">
                L&apos;offre
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Votre fiche Google au top à {ville.nom} - 280€
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Un investissement unique. Des clients qui appellent chaque
                semaine. Sans payer un centime de pub.
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
                  <span className="text-green-400 text-base shrink-0 mt-0.5">
                    🛡️
                  </span>
                  <p className="text-green-300 text-xs leading-relaxed">
                    <span className="font-semibold">Garantie résultats</span> -
                    Pas de progression visible en 8 semaines ? Je retravaille la
                    fiche sans frais supplémentaires.
                  </p>
                </div>

                <a
                  href="https://audit.jovanbienvenu.com/visibilite"
                  className="group w-full flex items-center justify-center gap-2 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_-4px_rgba(147,51,234,0.5)] active:scale-95"
                >
                  Diagnostic gratuit de ma fiche à {ville.nom}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <p className="text-center text-xs text-slate-600 mt-4">
                  Audit de votre visibilité actuelle offert avant toute décision
                </p>
              </div>
            </FadeIn>

            {/* Trust items */}
            <FadeIn delay={200}>
              <div className="space-y-5">
                {[
                  {
                    icon: "📍",
                    titre: `Je me déplace à ${ville.nom}`,
                    desc: `Je viens chez vous pour les photos et les échanges. Vous parlez à une vraie personne - pas à une agence qui sous-traite.`,
                  },
                  {
                    icon: "📊",
                    titre: "Rapport avant/après",
                    desc: "Je vous fournis un rapport de positionnement avant et après l'optimisation pour constater les progrès concrets.",
                  },
                  {
                    icon: "🔄",
                    titre: "Sans abonnement obligatoire",
                    desc: "Une fois votre fiche optimisée, vous êtes autonome. Je vous forme et reste disponible. Suivi mensuel en option.",
                  },
                  {
                    icon: "📦",
                    titre: "Incluse dans le Pack Visibilité",
                    desc: "Avec le Pack à 590 €, l'optimisation de votre fiche Google est incluse - site internet + fiche Google, tout en un.",
                  },
                  {
                    icon: "⏱️",
                    titre: "Premiers résultats en 4 à 8 semaines",
                    desc: "Les premières remontées sur Google Maps sont visibles rapidement. Une position top 3 solide se consolide sur 2 à 3 mois.",
                  },
                ].map((item) => (
                  <div key={item.titre} className="flex gap-4">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {item.titre}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── UPSELL PACK VISIBILITÉ ── */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-purple-900/10 p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">
                  Offre combinée
                </p>
                <h3 className="text-white font-bold text-lg mb-2">
                  Site internet + fiche Google à {ville.nom}
                </h3>
                <p className="text-slate-400 text-sm">
                  Le Pack Visibilité à 590 € inclut la création de votre site
                  vitrine ET l&apos;optimisation de votre fiche Google - la
                  combinaison la plus efficace pour dominer les résultats
                  locaux.
                </p>
              </div>
              <Link
                href={`/creation-site-internet-${ville.slug}`}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all duration-200 text-sm"
              >
                Voir le Pack 590€
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
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
                Tout savoir sur le référencement local à {ville.nom}
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
                  Comment apparaître dans le top 3 Google dans l&apos;Avesnois ?
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-purple-400 transition-colors mt-auto">
                  Lire l&apos;article <ArrowRight size={12} />
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
                  Site vitrine ou fiche Google My Business - que choisir ?
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-purple-400 transition-colors mt-auto">
                  Lire l&apos;article <ArrowRight size={12} />
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE VILLES ── */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                Je travaille aussi à
              </p>
              <div className="flex flex-wrap gap-3">
                {villes
                  .filter((v) => v.slug !== ville.slug)
                  .map((v) => (
                    <Link
                      key={v.slug}
                      href={`/referencement-local-google-${v.slug}`}
                      className="text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
                    >
                      📍 Référencement local {v.nom}
                    </Link>
                  ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
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
                Votre fiche Google optimisée à {ville.nom} - on commence quand ?
              </h2>
              <p className="text-slate-400 mb-8">
                Je commence par un audit gratuit de votre visibilité actuelle -
                sans engagement, sans jargon.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://audit.jovanbienvenu.com/visibilite"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all duration-200 active:scale-95"
                >
                  Diagnostic gratuit de ma fiche
                  <ArrowRight size={18} />
                </a>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock size={14} className="text-purple-400" />
                  Réponse sous 24h · Lun-Sam
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <WhatsAppButton message="Bonjour Jovan, je souhaite un audit gratuit de ma fiche Google My Business." />
    </>
  );
}
