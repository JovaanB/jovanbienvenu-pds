import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, CheckCircle } from "lucide-react";
import {
  buildMetadata,
  buildBreadcrumbSchema,
  SITE_URL,
  SITE_NAME,
} from "@/lib/metadata";
import { formatDate } from "@/lib/blog";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";

const SLUG = "site-vitrine-vs-fiche-google-my-business";
const DATE = "2026-02-05";
const TITLE = "Site vitrine ou fiche Google My Business : que choisir ?";
const DESCRIPTION =
  "Différences, avantages et cas d'usage de chaque outil. Quand commencer par l'un ou l'autre — et pourquoi les deux ensemble sont imbattables.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: `/blog/${SLUG}`,
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}/blog/${SLUG}`,
  datePublished: DATE,
  dateModified: DATE,
  author: { "@type": "Person", name: "Jovan Bienvenu", url: SITE_URL },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  inLanguage: "fr-FR",
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", url: SITE_URL },
  { name: "Blog", url: `${SITE_URL}/blog` },
  { name: TITLE, url: `${SITE_URL}/blog/${SLUG}` },
]);

export default function ArticleSiteVitrineVsGMB() {
  return (
    <main className="relative">
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] right-[15%] w-[400px] h-[400px] bg-amber-900/8 rounded-full blur-[120px]" />
      </div>

      <article className="relative z-10">
        {/* Hero */}
        <header className="pt-36 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href="/blog"
                  className="text-slate-500 text-sm hover:text-white transition-colors"
                >
                  ← Blog
                </Link>
                <span className="text-slate-700">/</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300">
                  Stratégie
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {TITLE}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {DESCRIPTION}
              </p>
              <div className="flex items-center gap-5 text-slate-500 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {formatDate(DATE)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> 7 min de lecture
                </span>
                <span>
                  Par <span className="text-slate-300">Jovan Bienvenu</span>
                </span>
              </div>
            </FadeIn>
          </div>
        </header>

        {/* Content */}
        <div className="px-6 pb-24">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Intro */}
            <FadeIn>
              <p className="text-slate-300 text-base leading-relaxed">
                C'est la question que me posent le plus souvent les artisans
                avec un budget limité :{" "}
                <strong className="text-white">
                  « Dois-je d'abord créer un site internet ou optimiser ma fiche
                  Google ? »
                </strong>
                . La réponse dépend de votre situation — mais une chose est sûre
                : les deux outils ne s'opposent pas, ils se complètent. Voici
                comment choisir.
              </p>
            </FadeIn>

            {/* Comparaison côte à côte */}
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Site vitrine */}
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/8 to-surface-dark p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🌐</span>
                    <h2 className="text-white font-bold text-lg">
                      Le site vitrine
                    </h2>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Votre propre espace sur internet — vous en êtes propriétaire
                    à 100 %. Il vit à votre adresse (ex: monentreprise.com) et
                    contient tout ce que vous voulez : vos services, vos photos,
                    vos tarifs, votre histoire.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Vous êtes propriétaire (personne ne peut le supprimer)",
                      "Contenu illimité et personnalisable",
                      "Idéal pour le référencement naturel sur le long terme",
                      "Crédibilité professionnelle forte",
                      "Catalogue, galerie, prise de rendez-vous...",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle
                          size={13}
                          className="text-primary mt-0.5 shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/8">
                    <p className="text-slate-500 text-xs">
                      Coût : à partir de{" "}
                      <strong className="text-slate-300">590 €</strong> tout
                      inclus
                    </p>
                    <p className="text-slate-500 text-xs">
                      Délai : résultats en{" "}
                      <strong className="text-slate-300">2-6 mois</strong>
                    </p>
                  </div>
                </div>

                {/* Fiche GMB */}
                <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-900/10 to-surface-dark p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">📍</span>
                    <h2 className="text-white font-bold text-lg">
                      La fiche Google My Business
                    </h2>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Votre carte de visite sur Google Maps et dans les résultats
                    locaux. Gratuite, elle appartient à Google — mais c'est le
                    levier le plus puissant pour être trouvé par les clients
                    proches de vous.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Gratuite à créer et à gérer",
                      "Résultats visibles en 4 à 8 semaines",
                      "Apparaît en premier sur les recherches locales",
                      "Les avis clients sont directement visibles",
                      "Itinéraire, appel direct depuis Google",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle
                          size={13}
                          className="text-amber-400 mt-0.5 shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/8">
                    <p className="text-slate-500 text-xs">
                      Coût : <strong className="text-slate-300">280 €</strong>{" "}
                      (optimisation pro) ou gratuit en DIY
                    </p>
                    <p className="text-slate-500 text-xs">
                      Délai : résultats en{" "}
                      <strong className="text-slate-300">4 à 8 semaines</strong>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Différence clé */}
            <FadeIn>
              <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
                <h2 className="text-white font-bold text-xl mb-4">
                  La différence fondamentale
                </h2>
                <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
                  <p>
                    Un site vitrine répond à la question :{" "}
                    <strong className="text-white">
                      « Qui êtes-vous et que proposez-vous ? »
                    </strong>{" "}
                    C'est votre vitrine permanente sur internet. Les gens qui
                    arrivent sur votre site ont souvent déjà entendu parler de
                    vous, ou vous cherchent spécifiquement.
                  </p>
                  <p>
                    La fiche Google My Business répond à la question :{" "}
                    <strong className="text-white">
                      « Qui est disponible près de moi maintenant ? »
                    </strong>{" "}
                    C'est là qu'un client cherche{" "}
                    <Link href="/referencement-local-google-fourmies" className="text-slate-300 underline decoration-slate-600 hover:text-amber-300 transition-colors">« plombier urgence Fourmies »</Link> à 20h. Il veut un
                    numéro de téléphone, des avis, et savoir si vous êtes ouvert
                    — pas lire 5 pages de contenu.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Quand choisir quoi */}
            <FadeIn>
              <div>
                <h2 className="text-white font-bold text-2xl mb-6">
                  Quand commencer par quoi ?
                </h2>
                <div className="space-y-4">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <span className="text-primary">→</span> Commencez par le
                      site vitrine si…
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      {[
                        "Vous avez une activité nationale ou régionale (pas seulement locale)",
                        "Vous proposez des services complexes qui demandent à être expliqués",
                        "Vous voulez vendre en ligne (e-commerce)",
                        "Vous avez besoin d'un portfolio détaillé (photographe, architecte, etc.)",
                        "Vous avez un budget suffisant pour les deux",
                      ].map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">✓</span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-amber-500/20 bg-amber-900/8 p-5">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <span className="text-amber-400">→</span> Commencez par la
                      fiche GMB si…
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      {[
                        "Vous êtes artisan, commerçant ou TPE avec une clientèle 100 % locale",
                        "Vous avez besoin de résultats rapides (4-8 semaines vs 3-6 mois)",
                        "Votre budget est limité à court terme",
                        "Vous n'avez aucune présence en ligne pour l'instant",
                        "Vous intervenez directement chez vos clients",
                      ].map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-amber-400">✓</span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Le duo gagnant */}
            <FadeIn>
              <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-900/10 to-surface-dark p-6 md:p-8">
                <h2 className="text-white font-bold text-xl mb-4">
                  Le duo gagnant : les deux ensemble
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  La vraie réponse, c'est{" "}
                  <strong className="text-white">les deux</strong>. Un site
                  vitrine renforce la crédibilité de votre fiche Google (Google
                  favorise les fiches avec un site web), et votre fiche Google
                  envoie du trafic local vers votre site. Ensemble, ils couvrent
                  tous les modes de recherche de vos futurs clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                  {[
                    {
                      emoji: "🔍",
                      label: "Recherche nationale",
                      result: "Votre site vitrine apparaît",
                    },
                    {
                      emoji: "📍",
                      label: "Recherche locale",
                      result: "Votre fiche GMB apparaît en premier",
                    },
                    {
                      emoji: "🤝",
                      label: "Crédibilité",
                      result: "Les deux se renforcent mutuellement",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="text-center p-4 rounded-xl bg-white/3 border border-white/5"
                    >
                      <p className="text-2xl mb-2">{s.emoji}</p>
                      <p className="text-slate-400 text-xs mb-1">{s.label}</p>
                      <p className="text-white text-xs font-semibold">
                        {s.result}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  C'est pourquoi le{" "}
                  <Link href="/tarifs" className="text-white font-semibold underline decoration-white/30 hover:decoration-white transition-colors">
                    Pack Visibilité à 590 €
                  </Link>{" "}
                  inclut les deux : création de site internet + fiche Google My
                  Business créée ou optimisée. Le meilleur rapport qualité/prix
                  pour une TPE ou un artisan local.
                </p>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn>
              <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8 text-center">
                <h2 className="text-white font-bold text-xl mb-2">
                  Pas sûr(e) de ce qui vous convient ?
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Je commence toujours par un audit gratuit de votre présence en
                  ligne actuelle. En 15 minutes, je vous dis exactement ce dont
                  vous avez besoin — sans engagement.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-colors text-sm"
                  >
                    Audit gratuit de ma présence
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/creation-site-internet"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-slate-300 hover:text-white hover:border-white/30 font-medium rounded-xl transition-colors text-sm"
                  >
                    Voir le Pack Visibilité
                  </Link>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-2 mt-5 pt-5 border-t border-white/8">
                  <span className="text-slate-500 text-xs w-full text-center mb-1">Référencement local par ville :</span>
                  {[
                    { label: 'Fourmies', slug: 'fourmies' },
                    { label: 'Avesnes-sur-Helpe', slug: 'avesnes-sur-helpe' },
                    { label: 'Hirson', slug: 'hirson' },
                    { label: 'Maubeuge', slug: 'maubeuge' },
                    { label: 'Glageon', slug: 'glageon' },
                  ].map((v) => (
                    <Link
                      key={v.slug}
                      href={`/referencement-local-google-${v.slug}`}
                      className="text-xs px-3 py-1 rounded-full border border-white/15 text-slate-400 hover:border-white/30 hover:text-slate-300 transition-colors"
                    >
                      {v.label}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Lire aussi */}
            <FadeIn>
              <div className="border-t border-white/8 pt-10">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                  Lire aussi
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/blog/combien-coute-site-internet-artisan"
                    className="group rounded-xl border border-white/8 bg-surface-dark p-4 hover:border-white/20 transition-all"
                  >
                    <p className="text-white text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                      Combien coûte un site internet pour un artisan ?
                    </p>
                    <p className="text-primary text-xs mt-2 flex items-center gap-1">
                      Lire <ArrowRight size={11} />
                    </p>
                  </Link>
                  <Link
                    href="/blog/top-3-google-maps-avesnois"
                    className="group rounded-xl border border-white/8 bg-surface-dark p-4 hover:border-white/20 transition-all"
                  >
                    <p className="text-white text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                      Comment apparaître dans le top 3 Google dans l'Avesnois ?
                    </p>
                    <p className="text-primary text-xs mt-2 flex items-center gap-1">
                      Lire <ArrowRight size={11} />
                    </p>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </article>
    </main>
  );
}
