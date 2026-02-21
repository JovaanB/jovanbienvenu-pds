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
  /** Paragraphe d'accroche pour la page création de site ville */
  paragrapheIntro: string;
  /** Description meta création de site (150-160 car.) */
  metaDescription: string;
  /** Paragraphe d'accroche pour la page référencement local / GMB ville */
  paragrapheIntroGmb: string;
  /** Description meta référencement local (150-160 car.) */
  metaDescriptionGmb: string;
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
    paragrapheIntroGmb:
      "Artisan ou commerçant à Fourmies ? Je vous aide à apparaître dans le top 3 Google Maps pour que les clients locaux vous trouvent avant vos concurrents — sans payer de pub. Basé à Fourmies même, je me déplace chez vous pour comprendre votre activité et optimiser votre fiche Google Business Profile.",
    metaDescriptionGmb:
      "Optimisation Google My Business à Fourmies (59) — 280€. Top 3 Google Maps, résultats en 4-8 semaines. Audit gratuit. Développeur SEO local basé à Fourmies.",
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
    paragrapheIntroGmb:
      "Sous-préfecture de l'Avesnois, Avesnes-sur-Helpe regroupe de nombreuses TPE et artisans qui méritent une visibilité digitale à la hauteur de leur savoir-faire. J'optimise votre fiche Google My Business pour que les habitants d'Avesnes et des communes voisines vous trouvent en premier sur Google Maps.",
    metaDescriptionGmb:
      "Optimisation fiche Google My Business à Avesnes-sur-Helpe (59) — 280€. Top 3 Google Maps. Audit gratuit, résultats en 4-8 semaines. SEO local Avesnois.",
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
    paragrapheIntroGmb:
      "À Hirson et dans son bassin de vie, vos clients potentiels cherchent vos services sur Google Maps avant de vous appeler. Une fiche Google bien optimisée vous place devant eux au bon moment. Je me déplace depuis Fourmies pour vous accompagner — sans frais supplémentaires.",
    metaDescriptionGmb:
      "Optimisation Google My Business à Hirson (02) — 280€. Apparaissez top 3 Google Maps. Audit gratuit, résultats en 4-8 semaines. Développeur SEO local Avesnois.",
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
    paragrapheIntroGmb:
      "Avec sa population dense et son tissu économique actif, Maubeuge est un marché local très compétitif sur Google Maps. Apparaître dans le top 3 des résultats locaux peut transformer votre activité. J'interviens à Maubeuge pour optimiser votre fiche Google My Business et vous faire gagner des clients chaque semaine.",
    metaDescriptionGmb:
      "Optimisation fiche Google My Business à Maubeuge (59) — 280€. Top 3 Google Maps. Audit gratuit, résultats en 4-8 semaines. Référencement local Nord.",
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
    paragrapheIntroGmb:
      "Dans un village comme Glageon, la concurrence sur Google Maps est souvent moins féroce qu'en ville — ce qui signifie qu'une fiche bien optimisée peut vous hisser dans le top 3 plus rapidement. J'accompagne les entreprises de Glageon et du Bavaisis pour capter la clientèle locale avant les concurrents des villes voisines.",
    metaDescriptionGmb:
      "Optimisation Google My Business à Glageon (59) — 280€. Top 3 Google Maps local. Audit gratuit, résultats visibles rapidement. SEO local Avesnois.",
  },
];

export function getVilleBySlug(slug: string): VilleSEO | undefined {
  return villes.find((v) => v.slug === slug);
}
