import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  buildMetadata,
  buildBreadcrumbSchema,
  SITE_URL,
  SITE_NAME,
} from "@/lib/metadata";
import { formatDate } from "@/lib/blog";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";

const SLUG = "combien-coute-site-internet-artisan";
const DATE = "2026-02-19";
const TITLE = "Combien coûte un site internet pour un artisan ?";
const DESCRIPTION =
  "Prix, pièges à éviter et ce qu'inclut vraiment un bon site vitrine. Tour d'horizon des tarifs en 2026 pour les TPE et artisans.";

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

const tiers = [
  {
    label: "DIY — Wix, Squarespace, Jimdo",
    price: "0 – 30 €/mois",
    pros: ["Pas de coût initial", "Rapide à lancer"],
    cons: [
      "Design générique, peu différenciant",
      "SEO limité",
      "Vous perdez du temps sur votre cœur de métier",
      "Dépendant de la plateforme",
    ],
    color: "border-slate-700",
  },
  {
    label: "Template acheté sur ThemeForest",
    price: "50 – 300 € (unique)",
    pros: ["Moins cher qu'un sur-mesure", "Rendu souvent propre"],
    cons: [
      "Installation et personnalisation à votre charge",
      "Mises à jour à gérer",
      "Pas adapté à votre activité précise",
    ],
    color: "border-slate-700",
  },
  {
    label: "Freelance local",
    price: "400 – 1 500 €",
    pros: [
      "Sur-mesure et optimisé pour votre activité",
      "SEO intégré dès la conception",
      "Interlocuteur unique, disponible",
      "Rapport qualité/prix optimal pour les TPE",
    ],
    cons: ["Coût initial plus élevé que le DIY"],
    color: "border-primary/40",
    highlight: true,
  },
  {
    label: "Agence web",
    price: "2 000 – 15 000 €+",
    pros: ["Équipe pluridisciplinaire", "Adapté aux projets complexes"],
    cons: [
      "Sur-dimensionné pour une TPE ou un artisan",
      "Interlocuteur qui change, suivi impersonnel",
      "Délais souvent longs",
    ],
    color: "border-slate-700",
  },
];

export default function ArticleCoutSiteInternet() {
  return (
    <main className="relative">
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
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
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300">
                  Conseils
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
                  <Clock size={13} /> 6 min de lecture
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
            <FadeIn>
              <div className="prose-custom">
                <p className="text-slate-300 text-base leading-relaxed">
                  C'est souvent la première question que me posent les artisans
                  et commerçants de l'Avesnois :{" "}
                  <strong className="text-white">
                    « Combien ça coûte, un site internet ? »
                  </strong>
                  . La réponse honnête : ça dépend. Mais pas de façon arbitraire
                  — il existe des fourchettes claires selon ce que vous
                  cherchez. Voici le tour complet, sans langue de bois.
                </p>
              </div>
            </FadeIn>

            {/* Tiers section */}
            <FadeIn>
              <div>
                <h2 className="text-white font-bold text-2xl mb-6">
                  Les 4 grandes catégories de prix
                </h2>
                <div className="space-y-4">
                  {tiers.map((tier) => (
                    <div
                      key={tier.label}
                      className={`rounded-2xl border ${tier.color} ${tier.highlight ? "bg-primary/5" : "bg-surface-dark"} p-6`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <h3 className="text-white font-bold">{tier.label}</h3>
                        <span
                          className={`text-sm font-bold px-3 py-1 rounded-full shrink-0 ${tier.highlight ? "bg-primary/20 text-primary" : "bg-white/8 text-slate-300"}`}
                        >
                          {tier.price}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          {tier.pros.map((pro) => (
                            <p
                              key={pro}
                              className="flex items-start gap-2 text-sm text-slate-300 mb-1.5"
                            >
                              <CheckCircle
                                size={13}
                                className="text-emerald-400 mt-0.5 shrink-0"
                              />
                              {pro}
                            </p>
                          ))}
                        </div>
                        <div>
                          {tier.cons.map((con) => (
                            <p
                              key={con}
                              className="flex items-start gap-2 text-sm text-slate-400 mb-1.5"
                            >
                              <XCircle
                                size={13}
                                className="text-red-400/70 mt-0.5 shrink-0"
                              />
                              {con}
                            </p>
                          ))}
                        </div>
                      </div>
                      {tier.highlight && (
                        <p className="text-primary text-xs font-semibold mt-3">
                          ★ Option recommandée pour les TPE et artisans locaux
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Ce qui fait varier */}
            <FadeIn>
              <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
                <h2 className="text-white font-bold text-2xl mb-5">
                  Ce qui fait vraiment varier le prix
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      factor: "Nombre de pages",
                      detail:
                        "Un site 5 pages (Accueil, Services, À propos, Galerie, Contact) coûte moins cher qu'un site 15 pages. Mais pour un artisan, 5 pages bien faites suffisent largement.",
                    },
                    {
                      factor: "E-commerce ou non",
                      detail:
                        "Ajouter une boutique en ligne multiplie facilement le prix par 2 ou 3. Pour la plupart des artisans locaux, un simple formulaire de contact est bien plus efficace.",
                    },
                    {
                      factor: "Design sur-mesure vs template",
                      detail:
                        "Un template bien adapté peut être très efficace. Un design 100% sur-mesure prend plus de temps donc coûte plus cher — mais il est unique.",
                    },
                    {
                      factor: "SEO inclus ou en option",
                      detail:
                        "Un site sans optimisation SEO, c'est une vitrine dans une rue sans passants. Assurez-vous que le SEO de base est inclus : balises, métadonnées, Core Web Vitals.",
                    },
                    {
                      factor: "Hébergement et domaine",
                      detail:
                        "Certains prestataires facturent l'hébergement et le domaine en supplément. Vérifiez bien ce qui est inclus avant de signer.",
                    },
                  ].map((item) => (
                    <div
                      key={item.factor}
                      className="flex gap-4 py-3 border-b border-white/5 last:border-0"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">
                          {item.factor}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Pièges */}
            <FadeIn>
              <div>
                <h2 className="text-white font-bold text-2xl mb-5">
                  3 pièges à éviter absolument
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      titre: 'Le "gratuit" qui revient cher',
                      desc: "Wix ou Squarespace semblent gratuits, mais vous perdez des heures à bricoler un outil qui n'est pas votre métier. Le coût réel, c'est votre temps — qui vaut cher.",
                    },
                    {
                      num: "02",
                      titre:
                        "L'agence qui propose un devis à 5 000 € pour un site vitrine simple",
                      desc: "Pour un artisan local avec 5 pages, c'est souvent 3 à 5 fois le prix du marché. Un freelance local fera le même résultat, voire mieux, pour moins cher.",
                    },
                    {
                      num: "03",
                      titre: "L'hébergement caché en abonnement",
                      desc: 'Certains prestataires proposent un prix bas à la création, mais facturent 50-100€/mois d\'hébergement "premium". Lisez toujours les conditions.',
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="rounded-xl border border-white/8 bg-surface-dark p-5 flex gap-4"
                    >
                      <span className="text-3xl font-bold text-white/10 shrink-0 leading-none">
                        {item.num}
                      </span>
                      <div>
                        <p className="text-white font-semibold mb-1">
                          {item.titre}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Mon offre */}
            <FadeIn>
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/8 to-surface-dark p-6 md:p-8">
                <h2 className="text-white font-bold text-2xl mb-2">
                  Ce qu'inclut le Pack Visibilité à 590 €
                </h2>
                <p className="text-slate-400 text-sm mb-5">
                  Pour les artisans et commerçants de l'Avesnois, je propose un
                  forfait tout-inclus sans surprise.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Design professionnel sur-mesure",
                    "Jusqu'à 5 pages (Accueil, Services, À propos, Galerie, Contact)",
                    "Responsive mobile, tablette & desktop",
                    "SEO de base optimisé (balises, Core Web Vitals)",
                    "Hébergement 1 an inclus",
                    "Nom de domaine offert (1 an)",
                    "Option maintenance mensuelle disponible",
                    "Fiche Google My Business créée ou optimisée 🎁",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle
                        size={14}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-colors text-sm"
                >
                  Demander un devis gratuit
                  <ArrowRight size={15} />
                </Link>
                <div className="flex flex-wrap items-center gap-2 mt-5 pt-5 border-t border-white/8">
                  <span className="text-slate-500 text-xs w-full mb-1">Site internet par ville :</span>
                  {[
                    { label: 'Fourmies', slug: 'fourmies' },
                    { label: 'Avesnes-sur-Helpe', slug: 'avesnes-sur-helpe' },
                    { label: 'Hirson', slug: 'hirson' },
                    { label: 'Maubeuge', slug: 'maubeuge' },
                    { label: 'Glageon', slug: 'glageon' },
                  ].map((v) => (
                    <Link
                      key={v.slug}
                      href={`/creation-site-internet-${v.slug}`}
                      className="text-xs px-3 py-1 rounded-full border border-white/15 text-slate-400 hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {v.label}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Articles suivants */}
            <FadeIn>
              <div className="border-t border-white/8 pt-10">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                  Lire aussi
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/blog/site-vitrine-vs-fiche-google-my-business"
                    className="group rounded-xl border border-white/8 bg-surface-dark p-4 hover:border-white/20 transition-all"
                  >
                    <p className="text-white text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                      Site vitrine ou fiche Google My Business : que choisir ?
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
