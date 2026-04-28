import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Star,
  MapPin,
  Search,
  TrendingUp,
  BarChart2,
  RefreshCw,
  Package,
  ShieldCheck,
  Phone as PhoneIcon,
  Map,
} from "lucide-react";
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
  { value: "×3", unit: "en moyenne", label: "De vues sur la fiche après optimisation" },
  { value: "0€", unit: "de pub", label: "Le trafic vient sans payer par clic" },
];

const gmbFeatures = [
  { Icon: PhoneIcon, label: "Appel direct", desc: "Le client appelle d'un clic depuis Google" },
  { Icon: Star, label: "Avis clients", desc: "Les avis s'affichent directement sur Google" },
  { Icon: Map, label: "Itinéraire GPS", desc: "Un clic suffit pour vous trouver" },
];

const whyNow = [
  {
    Icon: Search,
    titre: "76% des recherches locales",
    desc: "finissent par un appel ou une visite en boutique le jour même. Votre fiche Google, c'est votre vitrine numéro 1.",
  },
  {
    Icon: MapPin,
    titre: "Le pack local Google",
    desc: "Les 3 premières fiches captent plus de 70% des clics. En dessous, presque personne ne vous voit.",
  },
  {
    Icon: TrendingUp,
    titre: "Trafic 100% gratuit",
    desc: "Contrairement à Google Ads, une fiche bien optimisée génère des appels sans payer par clic. Un investissement unique, des résultats durables.",
  },
];

const trustItems = [
  {
    Icon: MapPin,
    titre: "Je me déplace chez vous",
    desc: "Je viens chez vous pour les photos et les échanges. Vous parlez à une vraie personne - pas à une agence qui sous-traite.",
  },
  {
    Icon: BarChart2,
    titre: "Rapport avant/après",
    desc: "Je vous fournis un rapport de positionnement avant et après l'optimisation pour constater les progrès concrets.",
  },
  {
    Icon: RefreshCw,
    titre: "Sans abonnement obligatoire",
    desc: "Une fois votre fiche optimisée, vous êtes autonome. Je vous forme et reste disponible. Suivi mensuel en option.",
  },
  {
    Icon: Package,
    titre: "Incluse dans le Pack Visibilité",
    desc: "Avec le Pack à 590 €, l'optimisation de votre fiche Google est incluse - site internet + fiche Google, tout en un.",
  },
  {
    Icon: Clock,
    titre: "Premiers résultats en 4 à 8 semaines",
    desc: "Les premières remontées sur Google Maps sont visibles rapidement. Une position top 3 solide se consolide sur 2 à 3 mois.",
  },
];

interface ReferencementLocalTemplateProps {
  ville: VilleSEO;
}

export default function ReferencementLocalTemplate({ ville }: ReferencementLocalTemplateProps) {
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
    { name: "Référencement local Google", url: `${SITE_URL}/referencement-local-google` },
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
            <span className="pill-badge mb-4 inline-flex">Référencement local — {ville.nom}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-ink mb-6 leading-tight tracking-tight mt-3">
              Soyez{" "}
              <span className="text-gradient-primary">top 3 sur Google</span>{" "}
              à {ville.nom}
            </h1>
            <p className="text-ink-3 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
              {ville.paragrapheIntroGmb}
            </p>
            <p className="text-ink-4 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              {ville.contextEconomique}
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
            <div className="grid grid-cols-3 gap-6 border border-border-warm rounded-2xl bg-white p-8 shadow-card">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-3xl md:text-4xl font-bold text-ink">{s.value}</span>
                    <span className="text-primary text-sm font-semibold">{s.unit}</span>
                  </div>
                  <p className="text-ink-4 text-xs leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── C'EST QUOI GMB ── */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="pill-badge mb-4 inline-flex">Google Business Profile</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight mt-3">
              C&apos;est quoi une fiche Google My Business ?
            </h2>
            <div className="space-y-4 text-ink-3 text-sm leading-relaxed mb-8">
              <p>
                Google My Business (aujourd&apos;hui appelé{" "}
                <strong className="text-ink">Google Business Profile</strong>)
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
              <p className="text-ink-2">{ville.contextEconomique}</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {gmbFeatures.map(({ Icon, label, desc }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-xl border border-border-warm bg-bg-base"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <p className="text-ink text-xs font-semibold mb-1">{label}</p>
                  <p className="text-ink-4 text-xs leading-tight">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── POURQUOI ── */}
      <section className="relative z-10 py-20 px-6 bg-bg-alt">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="pill-badge mb-4 inline-flex">Pourquoi agir maintenant</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
                Votre fiche Google, c&apos;est votre vitrine numéro 1
              </h2>
              <p className="text-ink-3 max-w-2xl mx-auto">
                À {ville.nom}, quand un client cherche un artisan sur Google, il
                voit d&apos;abord Google Maps - pas les sites. Sans fiche
                optimisée, c&apos;est votre concurrent qui décroche le téléphone.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyNow.map(({ Icon, titre, desc }, i) => (
              <FadeIn key={titre} delay={i * 100}>
                <div className="p-6 rounded-2xl border border-border-warm bg-white h-full card-hover">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-ink font-bold mb-2">{titre}</h3>
                  <p className="text-ink-3 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFRE ── */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="pill-badge mb-4 inline-flex">L&apos;offre</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
                Votre fiche Google au top à {ville.nom} — 280€
              </h2>
              <p className="text-ink-3 max-w-xl mx-auto">
                Un investissement unique. Des clients qui appellent chaque
                semaine. Sans payer un centime de pub.
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
                  Diagnostic gratuit de ma fiche à {ville.nom}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-center text-xs text-ink-4 mt-4">
                  Audit de votre visibilité actuelle offert avant toute décision
                </p>
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

      {/* ── UPSELL PACK VISIBILITÉ ── */}
      <section className="relative z-10 py-12 px-6 bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-violet-50 to-white p-8 flex flex-col md:flex-row items-center gap-6 shadow-card">
              <div className="flex-1">
                <span className="pill-badge mb-2 inline-flex text-[11px]">Offre combinée</span>
                <h3 className="text-ink font-bold text-lg mb-2 mt-2">
                  Site internet + fiche Google à {ville.nom}
                </h3>
                <p className="text-ink-3 text-sm">
                  Le Pack Visibilité à 590 € inclut la création de votre site
                  vitrine ET l&apos;optimisation de votre fiche Google - la
                  combinaison la plus efficace pour dominer les résultats locaux.
                </p>
              </div>
              <Link
                href={`/creation-site-internet-${ville.slug}`}
                className="shrink-0 group btn-cta inline-flex items-center gap-2 h-11 px-6 rounded-full font-bold text-sm"
              >
                Voir le Pack 590€
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="pill-badge mb-4 inline-flex">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
                Tout savoir sur le référencement local à {ville.nom}
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {faqsGmb.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 60}>
                <details className="group rounded-xl border border-border-warm bg-bg-base overflow-hidden">
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
      <section className="relative z-10 py-16 px-6 bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="pill-badge mb-4 inline-flex">Nos guides</span>
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3 mt-3">
                Pour aller plus loin sur le SEO local
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FadeIn delay={80}>
              <Link
                href="/blog/top-3-google-maps-avesnois"
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-border-warm bg-white hover:border-primary/30 hover:shadow-card transition-all duration-200"
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
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-border-warm bg-white hover:border-primary/30 hover:shadow-card transition-all duration-200"
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
      <section className="relative z-10 py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl border border-border-warm bg-bg-base p-6">
              <p className="text-ink-4 text-xs font-bold uppercase tracking-widest mb-4">
                Je travaille aussi à
              </p>
              <div className="flex flex-wrap gap-3">
                {villes
                  .filter((v) => v.slug !== ville.slug)
                  .map((v) => (
                    <Link
                      key={v.slug}
                      href={`/referencement-local-google-${v.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-ink-3 hover:text-primary border border-border-warm hover:border-primary/30 px-4 py-2 rounded-full transition-all duration-200"
                    >
                      <MapPin size={11} />
                      Référencement local {v.nom}
                    </Link>
                  ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
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
                Votre fiche Google optimisée à {ville.nom} - on commence quand ?
              </h2>
              <p className="text-ink-3 mb-8">
                Je commence par un audit gratuit de votre visibilité actuelle -
                sans engagement, sans jargon.
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
    </>
  );
}
