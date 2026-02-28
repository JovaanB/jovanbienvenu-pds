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
  /** Contexte économique local — enrichit le contenu unique des pages villes */
  contextEconomique: string;
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
    contextEconomique:
      "Fourmies est une ville de 12 000 habitants au cœur de l'Avesnois, marquée par un tissu de TPE et d'artisans actifs : plombiers, électriciens, coiffeurs, boulangers, garages automobiles. La concurrence digitale y reste faible — la plupart des professionnels locaux n'ont pas encore de site ou ont une fiche Google non optimisée. C'est une fenêtre d'opportunité rare pour prendre de l'avance.",
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
    contextEconomique:
      "Sous-préfecture du Nord avec environ 5 000 habitants, Avesnes-sur-Helpe concentre administrations, professions libérales, artisans du bâtiment et commerces de proximité. Son rôle de centre administratif de l'Avesnois en fait un bassin de clientèle stable. La plupart des professionnels locaux n'ont pas de présence digitale sérieuse — une opportunité directe pour se démarquer sur Google.",
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
    contextEconomique:
      "Hirson (environ 9 000 habitants, Aisne) est un pôle de services pour les communes rurales du Thiérache. Artisans du bâtiment, commerces de bouche, professions médicales et PME industrielles constituent l'essentiel du tissu économique. Ville frontière avec la Belgique, elle bénéficie d'une clientèle transfrontalière. La présence digitale des acteurs locaux reste très en retard — le potentiel SEO est intact.",
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
    contextEconomique:
      "Avec ses 30 000 habitants, Maubeuge est la plus grande ville de la zone d'intervention. Elle abrite un tissu économique dense : restaurateurs, coiffeurs, professionnels de santé, garages, artisans du BTP et commerces de centre-ville. La concurrence sur Google Maps y est plus forte qu'ailleurs dans l'Avesnois — mais les fiches concurrentes sont rarement bien optimisées, ce qui laisse une vraie marge de progression.",
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
    contextEconomique:
      "Glageon et son bassin (Bavaisis) regroupent artisans ruraux, exploitations agricoles, gîtes et petits commerces de proximité. La concurrence digitale y est quasi inexistante : une fiche Google ou un site vitrine bien conçu permet de dominer les résultats locaux en quelques semaines. Idéal pour les professionnels qui veulent capter une clientèle locale et frontalière belge sans budget publicitaire.",
  },
];

export function getVilleBySlug(slug: string): VilleSEO | undefined {
  return villes.find((v) => v.slug === slug);
}
