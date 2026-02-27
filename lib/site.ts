/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                  FICHIER DE CONFIGURATION CENTRAL               ║
 * ║  Toutes les informations personnelles, textes, tarifs et liens  ║
 * ║  sont ici. Modifier ce fichier suffit à mettre à jour le site.  ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import {
  ShieldCheck,
  MapPin,
  MessageCircle,
  TrendingUp,
  Users,
  BarChart2,
  Monitor,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 1. INFOS PERSONNELLES
// ─────────────────────────────────────────────────────────────────────────────
export const siteInfo = {
  /** Prénom / nom affiché dans le logo et le footer */
  name: "Jovan",

  /** Numéro de téléphone (format international, utilisé pour href="tel:") */
  phone: "+33788962157",

  /** Numéro affiché lisiblement dans le bouton "Appeler maintenant" */
  phoneDisplay: "07 88 96 21 57",

  /** Numéro WhatsApp (format international sans +, ex: 33612345678) */
  whatsapp: "33788962157",

  /** Adresse email de contact */
  email: "contact@jovanbienvenu.com",

  /** URL du site en production */
  siteUrl: "https://jovanbienvenu.com",

  /** SIRET — affiché dans le bandeau de confiance */
  siret: "893 883 157 00024",

  /** Ville et département */
  location: "Fourmies, Nord (59)",

  /** Région cible (utilisée dans le texte accroche héro) */
  region: "l'Avesnois",

  /** Année de début d'activité */
  experienceSince: 2018,
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. LIENS SOCIAUX & LÉGAUX
// ─────────────────────────────────────────────────────────────────────────────
export const externalLinks = {
  linkedin: "https://www.linkedin.com/in/jovanbienvenu",
  mentionsLegales: "/mentions-legales",
  politiqueConfidentialite: "/politique-de-confidentialite",
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. SEO — MÉTADONNÉES
// ─────────────────────────────────────────────────────────────────────────────
export const seoMetadata = {
  title: "Création de site internet à Fourmies — 590€ | Jovan",
  description:
    "Création de site internet à Fourmies — votre site ramène des clients pendant que vous travaillez. 590€, livré en 2-3 semaines. Pour tous les pros de l'Avesnois. Devis gratuit sous 24h.",
  keywords: [
    "création site internet Fourmies",
    "création site web Fourmies",
    "développeur web Fourmies",
    "référencement local Fourmies",
    "Google My Business Fourmies",
    "création site internet Maubeuge",
    "SEO local Avesnois",
    "site internet artisan Nord",
    "site internet kiné Avesnois",
    "site internet profession libérale Nord",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/creation-site-internet", label: "Création de site" },
  { href: "/referencement-local-google", label: "Référencement local" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. HERO
// ─────────────────────────────────────────────────────────────────────────────
export const hero = {
  headline1: "Votre prochain client,",
  headline2: "est déjà sur Google.",

  /**
   * Sous-titre complet. Le mot défini dans `subheadlineHighlight`
   * sera automatiquement mis en valeur (couleur blanche / gras).
   */
  subheadline:
    "Pendant que vous travaillez, votre site ramène des clients. Je crée des sites et des fiches Google qui transforment les recherches locales en appels — pour tous les professionnels de l'Avesnois. Devis gratuit sous 24h.",
  subheadlineHighlight: "l'Avesnois",

  cta: {
    primary: { label: "Demander un devis gratuit", href: "/contact" },
    secondary: { label: "Appeler maintenant" }, // href construit depuis siteInfo.phone
    gmb: {
      label: "Je cherche à optimiser ma fiche Google",
      href: "/referencement-local-google",
    },
  },

  /** Mini-stats affichées sous les boutons CTA */
  stats: [
    { value: "10+", label: "Clients accompagnés" },
    { value: "Top 3", label: "Google atteint" },
    { value: "24h", label: "Devis gratuit" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. BANDEAU DE CONFIANCE
// ─────────────────────────────────────────────────────────────────────────────
export type TrustItem = { Icon: LucideIcon; label: string; sub: string };

export const trustItems: TrustItem[] = [
  {
    Icon: MessageCircle,
    label: "Devis gratuit en 24h",
    sub: "Sans engagement, du lundi au samedi",
  },
  {
    Icon: TrendingUp,
    label: "Livraison en 2-3 semaines",
    sub: "Planning précis fourni dès le début",
  },
  {
    Icon: ShieldCheck,
    label: "Satisfaction garantie",
    sub: "On retravaille jusqu'à ce que vous soyez satisfait",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. SERVICES
// ─────────────────────────────────────────────────────────────────────────────
export const services = {
  web: {
    Icon: Monitor,
    title: "Création de site internet",
    description:
      "Sites vitrines modernes, ultra-rapides et parfaitement adaptés aux mobiles. Design unique pour captiver votre audience dès la première seconde et convertir les visiteurs en clients.",
    features: [
      "Site vitrine & e-commerce",
      "Parfait sur mobile, tablette et PC — 70% de vos clients naviguent sur téléphone",
      "Site ultra-rapide — un client qui attend part chez le concurrent",
      "Hébergement & nom de domaine inclus",
      "Maintenance optionnelle après livraison",
      "Optimisé pour Google dès la mise en ligne — vos clients vous trouvent",
    ],
    cta: {
      label: "Découvrir l'offre complète",
      href: "/creation-site-internet",
    },
  },
  seo: {
    Icon: MapPin,
    title: "Référencement local / Google My Business",
    description:
      "Soyez le premier choix dans votre ville. J'optimise votre fiche Google Business Profile pour que les clients locaux vous trouvent avant vos concurrents — sans pub.",
    features: [
      "Audit de visibilité locale",
      "Création & optimisation fiche Google Business Profile",
      "Optimisation des mots-clés locaux",
      "Gestion et réponse aux avis clients",
      "Publication de posts et photos réguliers",
      "Rapport mensuel de performance",
    ],
    cta: {
      label: "Découvrir l'offre complète",
      href: "/referencement-local-google",
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. POURQUOI ME CHOISIR
// ─────────────────────────────────────────────────────────────────────────────
export type WhyItem = {
  Icon: LucideIcon;
  gradient: string;
  title: string;
  desc: string;
};

export const whyItems: WhyItem[] = [
  {
    Icon: MapPin,
    gradient: "",
    title: "Pas une agence. Un voisin.",
    desc: "Je connais l'Avesnois, ses professionnels, ses quartiers. On se voit en vrai si besoin. Et vous savez exactement qui appeler — pas un ticket de support.",
  },
  {
    Icon: TrendingUp,
    gradient: "",
    title: "Un prix fixe, zéro surprise",
    desc: "Vous savez ce que vous payez avant de commencer. Facilités de paiement disponibles selon votre situation. Pas d'abonnement forcé, pas de frais cachés.",
  },
  {
    Icon: Users,
    gradient: "",
    title: "Toujours disponible, jamais un bot",
    desc: "Pas de ticket de support, pas de FAQ. Vous m'appelez directement. Je réponds en moins d'une journée, souvent dans l'heure.",
  },
  {
    Icon: BarChart2,
    gradient: "",
    title: "Des chiffres, pas des promesses",
    desc: "Chaque mois, vous voyez combien de personnes ont visité votre site, cliqué pour appeler, cherché votre adresse. Rien de flou — que des résultats mesurables.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 9. PORTFOLIO → données dans data/realisations.ts (source unique)
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// 10. TARIFS
// ─────────────────────────────────────────────────────────────────────────────
export type PricingTier = {
  name: string;
  badge: string | null;
  price: string;
  unit: string;
  billing: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  highlight: boolean;
  accentClass: string;
  ctaClass: string;
  checkClass: string;
  borderClass: string;
  bgClass: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Pack Visibilité",
    badge: "Le plus populaire",
    price: "590",
    unit: "€",
    billing: "forfait unique",
    desc: "Création de site internet + fiche Google (création ou optimisation). Tout ce qu'il faut pour être trouvé en ligne.",
    features: [
      "Un design qui inspire confiance dès le premier regard",
      "Jusqu'à 5 pages (Accueil, À propos, Services, Galerie, Contact)",
      "Parfait sur tous les écrans — vos clients naviguent partout",
      "Vos clients vous contactent directement depuis le site",
      "Hébergement inclus — rien à payer en plus la 1ère année",
      "Votre adresse web .com ou .fr offerte la 1ère année",
      "Optimisé pour Google dès le lancement — vous existez en ligne",
      "Besoin d'une mise à jour après livraison ? Je suis disponible",
      "Votre fiche Google optimisée offerte — double présence locale 🎁",
    ],
    cta: "Demander un devis",
    href: "/contact",
    highlight: true,
    accentClass: "text-purple-400",
    ctaClass: "bg-purple-600 hover:bg-purple-500 text-white",
    checkClass: "text-purple-400",
    borderClass: "border-purple-500/30",
    bgClass: "bg-gradient-to-b from-purple-900/20 to-surface-dark",
  },
  {
    name: "Optimisation fiche Google",
    badge: null,
    price: "280",
    unit: "€",
    billing: "forfait unique",
    desc: "Optimisation complète de votre fiche Google My Business pour apparaître en tête des résultats locaux.",
    features: [
      "Audit de votre fiche existante",
      "Création ou optimisation fiche Google Business Profile",
      "Optimisation mots-clés locaux ciblés",
      "Sélection et ajout de photos professionnelles",
      "Mise à jour des horaires, catégories et services",
      "Conseils pour obtenir et gérer les avis clients",
    ],
    cta: "Demander un devis",
    href: "/contact",
    highlight: false,
    accentClass: "text-primary",
    ctaClass: "bg-primary hover:bg-primary-hover text-white",
    checkClass: "text-primary",
    borderClass: "border-white/10",
    bgClass: "bg-surface-dark",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 11. FAQ
// ─────────────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "Combien de temps faut-il pour créer un site internet ?",
    a: "En général, entre 2 et 4 semaines selon la complexité. Un site vitrine simple peut être livré en 10 jours ouvrés. Dès le début de notre collaboration, je vous fournis un planning précis avec chaque étape.",
  },
  {
    q: "Est-ce que vous intervenez sur place dans l'Avesnois ?",
    a: "Oui, absolument ! Je suis basé à Fourmies et me déplace volontiers chez vous (Fourmies, Hirson, Avesnes-sur-Helpe, Maubeuge et alentours). Les échanges peuvent aussi se faire par visio ou téléphone selon vos préférences.",
  },
  {
    q: "Je n'ai pas de grand budget, pouvez-vous m'aider ?",
    a: "C'est justement ma mission ! Mes tarifs sont pensés pour les artisans et petites entreprises locales. Je peux adapter les prestations à votre budget, proposer des facilités de paiement (en plusieurs fois), ou commencer par l'essentiel et évoluer progressivement.",
  },
  {
    q: "Quelle différence entre un site vitrine et une fiche Google My Business ?",
    a: 'Un site vitrine est votre "adresse" personnelle sur internet — vous en êtes propriétaire. La fiche Google My Business (Google Maps) permet aux clients proches de vous trouver rapidement dans les résultats locaux. Les deux sont complémentaires !',
  },
  {
    q: "Que se passe-t-il après la livraison de mon site ?",
    a: "Je ne vous abandonne pas après la mise en ligne ! Je reste disponible pour vos questions, et propose une maintenance mensuelle optionnelle.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 12. FAQ — RÉFÉRENCEMENT LOCAL / GOOGLE MY BUSINESS
// ─────────────────────────────────────────────────────────────────────────────
export const faqsGmb = [
  {
    q: "Qu'est-ce qu'une fiche Google My Business (Google Business Profile) ?",
    a: 'C\'est votre carte de visite sur Google Maps et dans les résultats locaux. Quand un client cherche "plombier Fourmies" ou "boulangerie près de chez moi", Google affiche en priorité les fiches GMB optimisées. C\'est le levier SEO local le plus puissant pour une petite entreprise.',
  },
  {
    q: "Combien de temps faut-il pour apparaître en 1ère page ?",
    a: "Avec une optimisation sérieuse, les premiers résultats sont visibles en 4 à 8 semaines sur des mots-clés locaux. La position 1 sur Google Maps peut être atteinte en 2 à 3 mois selon la concurrence dans votre secteur.",
  },
  {
    q: "J'ai déjà une fiche, pouvez-vous l'optimiser ?",
    a: "Absolument ! J'effectue un audit complet de votre fiche existante, puis j'identifie les points d'amélioration : photos, catégories, description, avis, publications régulières. L'optimisation d'une fiche existante fonctionne souvent mieux et plus vite que la création from scratch.",
  },
  {
    q: "Quelle différence avec la publicité Google Ads ?",
    a: "La fiche Google My Business génère du trafic organique (gratuit). Vous n'avez rien à payer à chaque clic. C'est un investissement une fois fait, qui travaille pour vous 24h/24 — contrairement à Google Ads qui s'arrête dès que vous coupez le budget.",
  },
  {
    q: "Dois-je m'occuper de la fiche après votre intervention ?",
    a: "Je vous livre la fiche optimisée clé en main et vous forme à sa gestion. Des actions simples régulières (répondre aux avis, publier des photos) maintiennent votre position. Je propose aussi un suivi mensuel si vous préférez déléguer entièrement.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 13. FORMULAIRE DE CONTACT
// ─────────────────────────────────────────────────────────────────────────────
export const contactConfig = {
  sectionTitle: "Parlons de votre projet",
  sectionSubtitle:
    "Remplissez le formulaire et je vous réponds sous 24h — souvent bien moins.",
  successTitle: "Votre demande a bien été envoyée !",
  successMessage:
    "Je vous répondrai dans les 24 heures (généralement sous 2h en semaine).",
  privacyNote:
    "Vos données sont traitées de manière confidentielle — aucun spam, jamais.",
  submitLabel: "Envoyer ma demande",
  serviceOptions: [
    { value: "site-vitrine", label: "Création de site internet" },
    { value: "seo-local", label: "Référencement local / Google My Business" },
    { value: "pack-complet", label: "Pack complet (site + SEO local)" },
    { value: "autre", label: "Autre / Simple renseignement" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 14. CTA FINAL (Footer)
// ─────────────────────────────────────────────────────────────────────────────
export const footerCta = {
  headline: "Prêt à transformer votre activité ?",
  subline: "Discutons de vos objectifs autour d'un café (ou en visio).",
  freeAuditLine: "Le premier audit de votre présence en ligne est",
  freeWord: "offert",
  ctaLabel: "Lancer mon projet maintenant 🚀",
  ctaHref: "/contact",
  copyrightName: "Jovan",
};
