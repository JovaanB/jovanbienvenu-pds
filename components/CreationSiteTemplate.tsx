import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Star,
  Zap,
  MapPin,
  Lock,
  Users,
  Gift,
} from "lucide-react";
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
  "Parfait sur tous les écrans - 70% de vos clients naviguent sur mobile",
  "Vos clients vous contactent directement depuis le site",
  "Hébergement inclus - rien à payer en plus la 1ère année",
  "Votre adresse web .com ou .fr offerte la 1ère année",
  "Optimisé pour Google dès le lancement - vos clients vous trouvent",
  "Disponible après livraison pour toutes vos questions",
  "Votre fiche Google optimisée offerte — double présence locale",
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
    desc: "Je code votre site à la main - pas un template WordPress bricolé. Résultat : rapide, stable, optimisé pour Google dès le premier jour.",
  },
  {
    num: "04",
    titre: "Livraison",
    desc: "Mise en ligne, création de votre fiche GMB. Vous êtes autonome et je reste disponible pour la suite.",
  },
];

const trustItems = [
  {
    Icon: Zap,
    titre: "Livré en moins de 2 semaines",
    desc: "Un planning précis vous est fourni dès le départ. Sur mes dernières réalisations, la livraison tient en 10 jours ouvrés.",
  },
  {
    Icon: MapPin,
    titre: "Un voisin, pas une agence",
    desc: "Basé à Fourmies, je me déplace chez vous. Vous parlez à une vraie personne - pas à un ticket de support.",
  },
  {
    Icon: Lock,
    titre: "Site rapide & sécurisé",
    desc: "HTTPS, chargement en moins d'une seconde, hébergement fiable. Un site lent perd des clients - le vôtre les garde.",
  },
  {
    Icon: Users,
    titre: "Disponible après livraison",
    desc: "Questions, ajustements, évolutions - je reste disponible après la mise en ligne. Pas de ticket de support.",
  },
  {
    Icon: Clock,
    titre: "Réponse sous 24h",
    desc: "Du lundi au samedi. En pratique, je réponds généralement sous 2h en semaine.",
  },
];

interface CreationSiteTemplateProps {
  ville?: VilleSEO;
}

export default function CreationSiteTemplate({ ville }: CreationSiteTemplateProps) {
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
    { name: "Création de site internet", url: `${SITE_URL}/creation-site-internet` },
    ...(ville ? [{ name: `Création de site internet à ${ville.nom}`, url: pageUrl }] : []),
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
            <span className="pill-badge mb-4 inline-flex">Création de site internet</span>
            <h1 className="text-4xl md:text-6xl font-bold text-ink mb-6 leading-tight tracking-tight mt-3">
              Création de site internet{" "}
              <span className="text-gradient-primary">{nomVille}</span>
            </h1>

            {ville && (
              <>
                <p className="text-ink-3 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
                  {ville.paragrapheIntro}
                </p>
                <p className="text-ink-4 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                  {ville.contextEconomique}
                </p>
              </>
            )}
            {!ville && (
              <p className="text-ink-3 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Votre prochain client vous cherche sur Google en ce moment. Je
                crée votre site vitrine pour qu&apos;il vous appelle vous - pas
                votre concurrent. Clé en main, livré en moins de 3 semaines.
              </p>
            )}

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
          </FadeIn>
        </div>
      </section>

      {/* ── VIDÉO MOTION DESIGN ── */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-3xl pointer-events-none" />
              <VideoPlayer
                src="/video/presentation.mp4"
                poster="/images/poster-video.jpg"
                className="relative aspect-video shadow-card border border-border-warm rounded-2xl overflow-hidden"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── OFFRE ── */}
      <section className="relative z-10 py-20 px-6 bg-bg-alt">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="pill-badge mb-4 inline-flex">L&apos;offre</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
                Un site complet à 590€ - tout inclus
              </h2>
              <p className="text-ink-3 max-w-xl mx-auto">
                Pas de surprise, pas de frais cachés. Un forfait unique pour
                être visible, crédible et rentable en ligne - dès la première
                semaine.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Price card */}
            <FadeIn delay={100}>
              <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-b from-violet-50 to-white p-8 shadow-card-hover">
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Offre la plus choisie
                  </span>
                </div>
                <div className="mb-6 pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-ink leading-none">590</span>
                    <span className="text-primary text-2xl font-bold">€</span>
                    <span className="text-ink-4 text-sm">forfait unique</span>
                  </div>
                </div>

                {/* Highlight: GMB incluse */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Gift size={14} className="text-primary flex-shrink-0" />
                    <p className="text-primary text-sm font-semibold">
                      Fiche Google incluse - création ou optimisation
                    </p>
                  </div>
                  <p className="text-ink-4 text-xs mt-1 ml-5">
                    Incluse dans le pack à 590 € - pas de supplément
                  </p>
                  {ville && (
                    <Link
                      href={`/referencement-local-google-${ville.slug}`}
                      className="inline-flex items-center gap-1 text-primary hover:text-primary-hover text-xs mt-2 ml-5 transition-colors"
                    >
                      Voir l&apos;offre référencement local {ville.nom}
                      <ArrowRight size={11} />
                    </Link>
                  )}
                </div>

                <ul className="space-y-3">
                  {livrables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-2">
                      <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group btn-cta mt-8 w-full flex items-center justify-center gap-2 h-12 rounded-full font-bold text-sm"
                >
                  Obtenir mon devis gratuit
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            {/* Trust items */}
            <FadeIn delay={200}>
              <div className="space-y-5">
                {trustItems.map(({ Icon, titre, desc }) => (
                  <div key={titre} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-ink font-semibold text-sm mb-1">{titre}</h3>
                      <p className="text-ink-3 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ── */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="pill-badge mb-4 inline-flex">Comment ça marche</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
                Votre site en ligne en moins de 3 semaines
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, i) => (
              <FadeIn key={etape.num} delay={i * 100}>
                <div className="relative p-6 rounded-2xl border border-border-warm bg-bg-base h-full card-hover">
                  {i < etapes.length - 1 && (
                    <div aria-hidden="true" className="hidden lg:block absolute top-8 -right-3 z-10">
                      <ArrowRight size={16} className="text-ink-4" />
                    </div>
                  )}
                  <span className="text-4xl font-bold text-ink/[0.06] mb-4 block select-none">
                    {etape.num}
                  </span>
                  <h3 className="text-ink font-bold mb-2">{etape.titre}</h3>
                  <p className="text-ink-3 text-sm leading-relaxed">{etape.desc}</p>
                </div>
              </FadeIn>
            ))}
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
                Vos questions, réponses directes
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 60}>
                <details className="group rounded-xl border border-border-warm bg-white overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-ink font-medium hover:text-primary transition-colors list-none gap-4">
                    <span>{faq.q}</span>
                    <span className="text-ink-4 group-open:text-primary transition-colors text-xl shrink-0 leading-none font-bold">
                      +
                    </span>
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
                Tout savoir avant de vous lancer
              </h2>
              <p className="text-ink-4 text-sm">
                Des articles pour vous aider à prendre les bonnes décisions.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FadeIn delay={80}>
              <Link
                href="/blog/combien-coute-site-internet-artisan"
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-border-warm bg-bg-base hover:border-primary/30 hover:shadow-card transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Guide</span>
                <h3 className="text-ink font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                  Combien coûte un site internet pour un artisan ?
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

      {/* ── MAILLAGE INTERNE VILLES ── */}
      <section className="relative z-10 py-12 px-6 bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border border-border-warm bg-white p-6">
              <p className="text-ink-4 text-xs font-bold uppercase tracking-widest mb-4">
                Je travaille aussi à
              </p>
              <div className="flex flex-wrap gap-3">
                {villes
                  .filter((v) => v.slug !== ville?.slug)
                  .map((v) => (
                    <Link
                      key={v.slug}
                      href={`/creation-site-internet-${v.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-ink-3 hover:text-primary border border-border-warm hover:border-primary/30 px-4 py-2 rounded-full transition-all duration-200"
                    >
                      <MapPin size={11} />
                      Création site internet {v.nom}
                    </Link>
                  ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-b from-violet-50 to-white p-10 md:p-16 shadow-card">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Prêt à lancer votre projet {nomVille} ?
              </h2>
              <p className="text-ink-3 mb-8">
                Devis gratuit, sans engagement. Je vous réponds sous 24h -
                généralement sous 2h en semaine.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group btn-cta inline-flex items-center gap-2 h-12 px-8 rounded-full font-bold text-sm"
                >
                  Demander mon devis gratuit
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-2 text-ink-4 text-sm">
                  <Clock size={14} className="text-primary" />
                  Réponse sous 24h · Lun-Sam
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <WhatsAppButton message="Bonjour Jovan, je souhaite un devis pour la création de mon site internet." />
    </>
  );
}
