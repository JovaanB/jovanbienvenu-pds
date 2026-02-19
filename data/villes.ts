/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                    PAGES SEO LOCALES — VILLES                   ║
 * ║  Modifier ce fichier pour ajouter/modifier une zone desservie.  ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

export type VilleSEO = {
  /** Slug utilisé dans l'URL, ex: "fourmies" → /creation-site-internet-fourmies */
  slug: string;
  /** Nom court, ex: "Fourmies" */
  nom: string;
  /** Nom avec code postal, ex: "Fourmies (59610)" */
  nomComplet: string;
  /** Code postal */
  codePostal: string;
  /** Département */
  departement: string;
  /** Région */
  region: string;
  /** Paragraphe d'accroche personnalisé pour la page ville */
  paragrapheIntro: string;
  /** Description meta (150-160 car.) */
  metaDescription: string;
};

export const villes: VilleSEO[] = [
  {
    slug: "fourmies",
    nom: "Fourmies",
    nomComplet: "Fourmies (59610)",
    codePostal: "59610",
    departement: "Nord",
    region: "Hauts-de-France",
    paragrapheIntro:
      "Basé à Fourmies, je suis votre développeur web de proximité dans le Nord. Je connais parfaitement le tissu économique local et accompagne artisans, commerçants et TPE fourmisiennes dans leur transformation numérique. Pas de rendez-vous téléphonique anonyme : je me déplace chez vous, à Fourmies ou dans vos locaux.",
    metaDescription:
      "Création de site internet à Fourmies (59) — 590 € clé en main + fiche Google My Business offerte. Développeur web local, devis gratuit sous 24h.",
  },
  {
    slug: "avesnes-sur-helpe",
    nom: "Avesnes-sur-Helpe",
    nomComplet: "Avesnes-sur-Helpe (59440)",
    codePostal: "59440",
    departement: "Nord",
    region: "Hauts-de-France",
    paragrapheIntro:
      "Sous-préfecture de l'Avesnois, Avesnes-sur-Helpe compte de nombreuses entreprises et artisans qui méritent une présence en ligne à la hauteur de leur savoir-faire. J'interviens sur place pour créer votre site vitrine et optimiser votre visibilité sur Google.",
    metaDescription:
      "Création de site internet à Avesnes-sur-Helpe (59) — 590 € tout inclus + fiche GMB offerte. Développeur web Avesnois, devis gratuit en 24h.",
  },
  {
    slug: "hirson",
    nom: "Hirson",
    nomComplet: "Hirson (02500)",
    codePostal: "02500",
    departement: "Aisne",
    region: "Hauts-de-France",
    paragrapheIntro:
      "Côté Aisne mais à deux pas de l'Avesnois, Hirson fait pleinement partie de mon périmètre d'intervention. Je me déplace chez vous pour discuter de votre projet de site internet et vous proposer une solution adaptée à votre budget et à votre activité locale.",
    metaDescription:
      "Création de site internet à Hirson (02) — 590 € clé en main + fiche Google offerte. Développeur web proche Avesnois, devis gratuit sous 24h.",
  },
  {
    slug: "maubeuge",
    nom: "Maubeuge",
    nomComplet: "Maubeuge (59600)",
    codePostal: "59600",
    departement: "Nord",
    region: "Hauts-de-France",
    paragrapheIntro:
      "Ville dynamique du Nord, Maubeuge regorge d'artisans et de commerçants qui méritent une vitrine digitale professionnelle. J'accompagne les entrepreneurs maubeugeois à conquérir le marché local grâce à un site performant et un référencement Google optimisé.",
    metaDescription:
      "Création de site internet à Maubeuge (59) — 590 € tout inclus + fiche GMB offerte. Développeur web local Avesnois, devis gratuit rapide.",
  },
  {
    slug: "glageon",
    nom: "Glageon",
    nomComplet: "Glageon (59132)",
    codePostal: "59132",
    departement: "Nord",
    region: "Hauts-de-France",
    paragrapheIntro:
      "Nichée au cœur de l'Avesnois, Glageon et ses environs comptent de nombreuses petites entreprises qui peinent à se démarquer en ligne. Je vous propose une solution clé en main, pensée pour les budgets TPE locales, avec un accompagnement humain et de proximité.",
    metaDescription:
      "Création de site internet à Glageon (59) — 590 € clé en main + fiche Google My Business offerte. Développeur web Avesnois, devis sous 24h.",
  },
];

export function getVilleBySlug(slug: string): VilleSEO | undefined {
  return villes.find((v) => v.slug === slug);
}
