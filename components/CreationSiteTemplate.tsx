import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Clock, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import VideoPlayer from "@/components/VideoPlayer";
import SchemaOrg from "@/components/SchemaOrg";
import {
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
  SITE_URL,
} from "@/lib/metadata";
import { siteInfo, faqs } from "@/lib/site";
import { villes, type VilleSEO } from "@/data/villes";
import WhatsAppButton from "@/components/WhatsAppButton";

const livrables = [
  "Un design qui inspire confiance dès le premier regard",
  "Jusqu'à 5 pages (Accueil, À propos, Services, Galerie, Contact)",
  "Parfait sur tous les écrans — vos clients naviguent partout",
  "Vos clients vous contactent directement depuis le site",
  "Hébergement inclus — rien à payer en plus la 1ère année",
  "Votre adresse web .com ou .fr offerte la 1ère année",
  "Optimisé pour Google dès le lancement — vous existez en ligne",
  "Besoin d'une mise à jour après livraison ? Je suis disponible",
  "Votre fiche Google optimisée offerte — double présence locale 🎁",
];

const etapes = [
  {
    num: "01",
    titre: "Échange & cadrage",
    desc: "On se retrouve (en personne ou en visio) pour comprendre votre activité, vos clients et vos objectifs. Je vous pose les bonnes questions.",
  },
  {
    num: "02",
    titre: "Conception & design",
    desc: "Je vous propose une maquette sur-mesure. On itère ensemble jusqu'à ce que vous soyez 100 % satisfait avant de coder quoi que ce soit.",
  },
  {
    num: "03",
    titre: "Développement",
    desc: "Je développe votre site avec les meilleures technologies. Rapide, sécurisé, optimisé SEO dès le départ.",
  },
  {
    num: "04",
    titre: "Livraison",
    desc: "Mise en ligne, création de votre fiche GMB. Vous êtes autonome et je reste disponible pour la suite.",
  },
];

interface CreationSiteTemplateProps {
  /** Si fourni : version page ville. Si absent : version générique Avesnois */
  ville?: VilleSEO;
}

export default function CreationSiteTemplate({
  ville,
}: CreationSiteTemplateProps) {
  const nomVille = ville ? `à ${ville.nom}` : "dans l'Avesnois";
  const pageUrl = ville
    ? `${SITE_URL}/creation-site-internet-${ville.slug}`
    : `${SITE_URL}/creation-site-internet`;

  const schema = buildLocalBusinessSchema({
    addressLocality: ville?.nom ?? "Fourmies",
    postalCode: ville?.codePostal ?? "59610",
    url: pageUrl,
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbItems = [
    { name: "Accueil", url: SITE_URL },
    {
      name: "Création de site internet",
      url: `${SITE_URL}/creation-site-internet`,
    },
    ...(ville
      ? [{ name: `Création de site internet à ${ville.nom}`, url: pageUrl }]
      : []),
  ];
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SchemaOrg schema={schema} />
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              Création de site internet
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Création de site internet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                {nomVille}
              </span>
            </h1>

            {ville && (
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                {ville.paragrapheIntro}
              </p>
            )}
            {!ville && (
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Artisan, commerçant ou indépendant dans l'Avesnois ? Je crée votre site
                vitrine professionnel clé en main — design moderne,
                ultra-rapide, optimisé pour Google et livré en moins de 3
                semaines.
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-all duration-200 hover:shadow-[0_0_32px_-6px_rgba(19,91,236,0.7)] active:scale-95"
              >
                Demander un devis gratuit
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
          </FadeIn>
        </div>
      </section>

      {/* ── VIDÉO MOTION DESIGN ── */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-3xl pointer-events-none" />
              <VideoPlayer
                src="/video/presentation.mp4"
                poster="/images/poster-video.jpg"
                className="relative aspect-video shadow-2xl shadow-black/50 border border-white/10"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── OFFRE ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                L'offre
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Un site complet à 590€ — tout inclus
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Pas de surprise, pas de frais cachés. Un forfait unique qui
                couvre tout ce dont votre entreprise a besoin pour exister en
                ligne.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Price card */}
            <FadeIn delay={100}>
              <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-surface-dark p-8">
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Offre la plus choisie
                  </span>
                </div>
                <div className="mb-6 pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-white">590</span>
                    <span className="text-primary text-2xl font-bold">€</span>
                    <span className="text-slate-400 text-sm">
                      forfait unique
                    </span>
                  </div>
                </div>

                {/* Highlight: GMB incluse */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6">
                  <p className="text-amber-300 text-sm font-semibold">
                    🎁 Fiche Google incluse — création ou optimisation
                  </p>
                  <p className="text-amber-400/70 text-xs mt-1">
                    Incluse dans le pack à 590 € — pas de supplément
                  </p>
                </div>

                <ul className="space-y-3">
                  {livrables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle
                        size={15}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group mt-8 w-full flex items-center justify-center gap-2 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_-4px_rgba(19,91,236,0.6)] active:scale-95"
                >
                  Demander un devis gratuit
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </FadeIn>

            {/* Trust items */}
            <FadeIn delay={200}>
              <div className="space-y-5">
                {[
                  {
                    icon: "⚡",
                    titre: "Livré en moins de 2 semaines",
                    desc: "Délai moyen constaté sur mes dernières réalisations. Pas d'attente interminable.",
                  },
                  {
                    icon: "📍",
                    titre: "Développeur local de proximité",
                    desc: `Basé à Fourmies, je me déplace chez vous ${nomVille} pour les échanges importants.`,
                  },
                  {
                    icon: "🔒",
                    titre: "Site sécurisé & performant",
                    desc: "HTTPS, chargement ultra-rapide, hébergé sur une infrastructure fiable — vos visiteurs ne repartent pas.",
                  },
                  {
                    icon: "🤝",
                    titre: "Accompagnement après livraison",
                    desc: "Je ne disparais pas après la mise en ligne. Je suis disponible pour vos questions.",
                  },
                  {
                    icon: "⏱️",
                    titre: "Réponse sous 24h",
                    desc: "Du lundi au samedi, je réponds rapidement — souvent le jour même.",
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

      {/* ── PROCESSUS ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                Comment ça marche
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                De l'idée à la mise en ligne en 4 étapes
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, i) => (
              <FadeIn key={etape.num} delay={i * 100}>
                <div className="relative p-6 rounded-2xl border border-white/10 bg-surface-dark h-full">
                  {i < etapes.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 z-10">
                      <ArrowRight size={16} className="text-slate-600" />
                    </div>
                  )}
                  <span className="text-4xl font-bold text-white/10 mb-4 block">
                    {etape.num}
                  </span>
                  <h3 className="text-white font-bold mb-2">{etape.titre}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {etape.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions fréquentes
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
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

      {/* ── GUIDES BLOG ── */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                Nos guides
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Tout savoir avant de vous lancer
              </h2>
              <p className="text-slate-400 text-sm">
                Des articles pour vous aider à prendre les bonnes décisions.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FadeIn delay={80}>
              <Link
                href="/blog/combien-coute-site-internet-artisan"
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-white/10 bg-surface-dark hover:border-primary/30 transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Guide
                </span>
                <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-blue-300 transition-colors">
                  Combien coûte un site internet pour un artisan ?
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-primary transition-colors mt-auto">
                  Lire l'article <ArrowRight size={12} />
                </span>
              </Link>
            </FadeIn>
            <FadeIn delay={160}>
              <Link
                href="/blog/site-vitrine-vs-fiche-google-my-business"
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-white/10 bg-surface-dark hover:border-primary/30 transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Guide
                </span>
                <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-blue-300 transition-colors">
                  Site vitrine ou fiche Google My Business — que choisir ?
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-primary transition-colors mt-auto">
                  Lire l'article <ArrowRight size={12} />
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
                  .filter((v) => v.slug !== ville?.slug)
                  .map((v) => (
                    <Link
                      key={v.slug}
                      href={`/creation-site-internet-${v.slug}`}
                      className="text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
                    >
                      📍 Création site internet {v.nom}
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
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/10 to-surface-dark p-10 md:p-16">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-2xl pointer-events-none" />
              <div className="relative">
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
                  Prêt à lancer votre projet {nomVille} ?
                </h2>
                <p className="text-slate-400 mb-8">
                  Devis gratuit et sans engagement sous 24h. Je réponds souvent
                  dans la journée.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_-6px_rgba(19,91,236,0.7)] active:scale-95"
                  >
                    Demander mon devis gratuit
                    <ArrowRight size={18} />
                  </Link>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Clock size={14} className="text-primary" />
                    Réponse sous 24h · Lun-Sam
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}
