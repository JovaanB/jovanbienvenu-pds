import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, MapPin } from "lucide-react";
import {
  buildMetadata,
  buildBreadcrumbSchema,
  SITE_URL,
  SITE_NAME,
} from "@/lib/metadata";
import { formatDate } from "@/lib/blog";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";

const SLUG = "top-3-google-maps-avesnois";
const DATE = "2026-02-12";
const TITLE = "Comment apparaître dans le top 3 Google dans l'Avesnois ?";
const DESCRIPTION =
  'Les 5 facteurs clés pour entrer dans le "local pack" Google et capter les clients qui cherchent votre activité à Fourmies, Hirson ou Maubeuge.';

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
  image: `${SITE_URL}/og.png`,
  author: { "@type": "Person", name: "Jovan Bienvenu", url: SITE_URL },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  },
  inLanguage: "fr-FR",
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", url: SITE_URL },
  { name: "Blog", url: `${SITE_URL}/blog` },
  { name: TITLE, url: `${SITE_URL}/blog/${SLUG}` },
]);

const facteurs = [
  {
    num: "01",
    titre: "Une fiche Google complète à 100 %",
    desc: "Google favorise les fiches sans zone vide. Nom exact, catégorie principale bien choisie, horaires à jour, description rédigée avec vos mots-clés locaux, site web renseigné - chaque champ compte. Une fiche incomplète est une fiche pénalisée.",
    tip: "Vérifiez votre score de complétude directement dans Google Business Profile.",
  },
  {
    num: "02",
    titre: "La bonne catégorie principale",
    desc: "La catégorie principale est le signal le plus fort que vous envoyez à Google. « Plombier » est meilleur que « Plombier chauffagiste rénovation » - soyez précis mais simple. Vous pouvez ajouter jusqu'à 9 catégories secondaires.",
    tip: "Regardez la catégorie utilisée par le concurrent qui apparaît en top 1 sur votre requête cible.",
  },
  {
    num: "03",
    titre: "Des avis clients nombreux et récents",
    desc: "Le volume et la fraîcheur des avis sont des signaux majeurs. Un client satisfait laisse rarement un avis spontanément - demandez-le simplement, en personne ou par message. Répondez à TOUS vos avis, positifs comme négatifs.",
    tip: "Envoyez le lien direct vers votre fiche GMB par SMS à vos clients après une intervention.",
  },
  {
    num: "04",
    titre: "Des photos professionnelles et régulières",
    desc: "Les fiches avec photos reçoivent 42 % de demandes d'itinéraires en plus. Ajoutez des photos de votre travail, de votre équipe, de vos locaux. Renouvelez-les régulièrement - Google valorise l'activité récente.",
    tip: "Minimum 10 photos au lancement, puis 1 à 2 nouvelles par mois.",
  },
  {
    num: "05",
    titre: "Des publications régulières (posts GMB)",
    desc: "Comme un réseau social, Google Business Profile vous permet de publier des actualités, offres, événements. Ces publications montrent à Google que votre fiche est active. Une publication par semaine suffit.",
    tip: "Partagez vos chantiers récents, promotions saisonnières, nouveaux services.",
  },
];

export default function ArticleTop3GoogleMaps() {
  return (
    <main className="relative">
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <div className="ambient-bg" />

      <article className="relative z-10">
        {/* Hero */}
        <header className="pt-36 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href="/blog"
                  className="text-ink-4 text-sm hover:text-ink transition-colors"
                >
                  ← Blog
                </Link>
                <span className="text-ink-3">/</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  SEO Local
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                {TITLE}
              </h1>
              <p className="text-ink-3 text-lg leading-relaxed mb-6">
                {DESCRIPTION}
              </p>
              <div className="flex items-center gap-5 text-ink-4 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {formatDate(DATE)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> 5 min de lecture
                </span>
                <span>
                  Par <span className="text-ink-2">Jovan Bienvenu</span>
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
              <p className="text-ink-2 text-base leading-relaxed">
                Quand quelqu&apos;un cherche{" "}
                <strong className="text-ink">« plombier Fourmies »</strong> ou{" "}
                <strong className="text-ink">« boulangerie Maubeuge »</strong>{" "}
                sur Google, il voit trois résultats dans un encadré en haut de
                page - avant même les sites web classiques. C&apos;est ce qu&apos;on
                appelle le <strong className="text-ink">local pack</strong> ou
                top 3 Google Maps. Apparaître là, c&apos;est capter 70 % des clics
                sur cette recherche.
              </p>
            </FadeIn>

            {/* Stat box */}
            <FadeIn>
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    val: "70 %",
                    label: "des clics vont aux 3 premiers résultats locaux",
                  },
                  {
                    val: "46 %",
                    label: "des recherches Google ont une intention locale",
                  },
                  {
                    val: "4-8",
                    label:
                      "semaines pour voir les premiers résultats avec une fiche optimisée",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border-soft bg-white p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-ink mb-1">
                      {s.val}
                    </p>
                    <p className="text-ink-4 text-xs leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Les 5 facteurs */}
            <FadeIn>
              <h2 className="text-ink font-bold text-2xl mb-6">
                Les 5 facteurs qui font la différence
              </h2>
              <div className="space-y-5">
                {facteurs.map((f) => (
                  <div
                    key={f.num}
                    className="rounded-2xl border border-border-soft bg-white p-6"
                  >
                    <div className="flex gap-4">
                      <span className="text-3xl font-bold text-ink/[0.06] leading-none shrink-0">
                        {f.num}
                      </span>
                      <div>
                        <h3 className="text-ink font-bold mb-2">{f.titre}</h3>
                        <p className="text-ink-3 text-sm leading-relaxed mb-3">
                          {f.desc}
                        </p>
                        <div className="flex items-start gap-2 bg-primary/5 border border-primary/15 rounded-lg p-3">
                          <span className="text-primary text-xs font-bold uppercase tracking-wider shrink-0 mt-0.5">
                            Astuce
                          </span>
                          <p className="text-ink-2 text-xs leading-relaxed">
                            {f.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Ce qui prend du temps */}
            <FadeIn>
              <div className="rounded-2xl border border-border-soft bg-white p-6 md:p-8">
                <h2 className="text-ink font-bold text-xl mb-5">
                  Rapide à faire vs long à obtenir
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-emerald-600 font-bold text-sm mb-3 flex items-center gap-2">
                      En quelques jours
                    </p>
                    <ul className="space-y-2 text-sm text-ink-3">
                      {[
                        "Compléter les champs de la fiche à 100 %",
                        "Choisir la bonne catégorie principale",
                        "Ajouter 10 photos de qualité",
                        "Rédiger une description optimisée",
                      ].map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-emerald-500">✓</span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-amber-600 font-bold text-sm mb-3 flex items-center gap-2">
                      Sur le long terme
                    </p>
                    <ul className="space-y-2 text-sm text-ink-3">
                      {[
                        "Accumuler des avis positifs récents",
                        "Maintenir l'activité avec des publications",
                        "Gagner en autorité locale",
                        "Dépasser les concurrents bien établis",
                      ].map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-amber-500">→</span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Cas concret Avesnois */}
            <FadeIn>
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-b from-violet-50 to-white p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-primary" />
                  <h2 className="text-ink font-bold text-xl">
                    Dans l&apos;Avesnois, la concurrence est faible
                  </h2>
                </div>
                <p className="text-ink-3 text-sm leading-relaxed mb-4">
                  Bonne nouvelle : sur des requêtes comme{" "}
                  <Link
                    href="/referencement-local-google-fourmies"
                    className="text-primary underline underline-offset-2 decoration-primary/30 hover:decoration-primary transition-colors"
                  >
                    « électricien Fourmies »
                  </Link>
                  ,{" "}
                  <Link
                    href="/referencement-local-google-avesnes-sur-helpe"
                    className="text-primary underline underline-offset-2 decoration-primary/30 hover:decoration-primary transition-colors"
                  >
                    « coiffeur Avesnes-sur-Helpe »
                  </Link>{" "}
                  ou{" "}
                  <Link
                    href="/referencement-local-google-hirson"
                    className="text-primary underline underline-offset-2 decoration-primary/30 hover:decoration-primary transition-colors"
                  >
                    « plombier Hirson »
                  </Link>
                  , la concurrence locale est souvent faible. Les fiches en
                  place sont rarement bien optimisées. Cela signifie qu&apos;une
                  fiche correctement travaillée peut atteindre le top 3 en{" "}
                  <strong className="text-ink">4 à 8 semaines</strong>, là où
                  il faudrait 6 mois dans une grande ville.
                </p>
                <p className="text-ink-3 text-sm leading-relaxed">
                  C&apos;est le meilleur moment pour prendre de l&apos;avance sur vos
                  concurrents avant qu&apos;ils n&apos;y pensent eux aussi.
                </p>
              </div>
            </FadeIn>

            {/* Par ville */}
            <FadeIn>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-ink-4 text-xs">
                  Voir l&apos;offre par ville :
                </span>
                {[
                  { label: "Fourmies", slug: "fourmies" },
                  { label: "Avesnes-sur-Helpe", slug: "avesnes-sur-helpe" },
                  { label: "Hirson", slug: "hirson" },
                  { label: "Maubeuge", slug: "maubeuge" },
                  { label: "Glageon", slug: "glageon" },
                ].map((v) => (
                  <Link
                    key={v.slug}
                    href={`/referencement-local-google-${v.slug}`}
                    className="text-xs px-3 py-1 rounded-full border border-border-warm text-ink-3 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {v.label}
                  </Link>
                ))}
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn>
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-violet-50 to-white p-6 md:p-8">
                <h2 className="text-ink font-bold text-xl mb-2">
                  Vous voulez intégrer le top 3 ?
                </h2>
                <p className="text-ink-3 text-sm leading-relaxed mb-5">
                  Je commence toujours par un audit gratuit de votre fiche
                  actuelle - sans engagement. Je vous dis exactement où vous en
                  êtes et ce qui peut être amélioré.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/referencement-local-google-fourmies"
                    className="group btn-cta inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
                  >
                    Voir l&apos;offre SEO local à Fourmies
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border-warm text-ink-2 hover:text-ink hover:border-primary/30 font-medium rounded-xl transition-colors text-sm"
                  >
                    Audit gratuit
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Lire aussi */}
            <FadeIn>
              <div className="border-t border-border-soft pt-10">
                <p className="text-ink-4 text-xs font-bold uppercase tracking-widest mb-4">
                  Lire aussi
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/blog/site-vitrine-vs-fiche-google-my-business"
                    className="group rounded-xl border border-border-soft bg-white p-4 hover:border-border-warm transition-all"
                  >
                    <p className="text-ink text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                      Site vitrine ou fiche Google My Business : que choisir ?
                    </p>
                    <p className="text-primary text-xs mt-2 flex items-center gap-1">
                      Lire <ArrowRight size={11} />
                    </p>
                  </Link>
                  <Link
                    href="/blog/combien-coute-site-internet-artisan"
                    className="group rounded-xl border border-border-soft bg-white p-4 hover:border-border-warm transition-all"
                  >
                    <p className="text-ink text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                      Combien coûte un site internet pour un artisan ?
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
