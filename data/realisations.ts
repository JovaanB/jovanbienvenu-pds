/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                     PROJETS - PORTFOLIO                         ║
 * ║  Ajouter / modifier les réalisations ici.                       ║
 * ║  image : chemin relatif depuis /public, null si pas d'image.    ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

export type TypeProjet = "Site Vitrine" | "SEO Local" | "Site + SEO";

export type Realisation = {
  id: number;
  /** Titre affiché sur la card */
  titre: string;
  /** Nom du client (peut être anonymisé) */
  client: string;
  /** Secteur d'activité */
  secteur: string;
  /** Catégorie pour le filtre */
  categorie: "Commerce" | "Bâtiment" | "Tourisme" | "Services" | "Restauration";
  /** Ville du client */
  ville: string;
  /** Type de prestation */
  type: TypeProjet;
  /** Description courte du projet */
  description: string;
  /** Résultat mesurable */
  resultat: string;
  /** Chemin vers l'image depuis /public, ex: "/images/realisations/boulangerie.jpg" */
  image: string | null;
  /** URL du site en ligne, null si confidentiel */
  url: string | null;
};

export const realisations: Realisation[] = [
  {
    id: 1,
    titre: "Site vitrine ferronnerie artisanale",
    client: "Ferronnerie Chimacienne",
    secteur: "Ferronnerie & Métallurgie",
    categorie: "Bâtiment",
    ville: "Chimay",
    type: "Site Vitrine",
    description:
      "Site vitrine pour un ferronnier artisan basé à Chimay (Belgique). Présentation des créations sur-mesure - portails, clôtures, garde-corps, mobilier - avec formulaire de contact intégré.",
    resultat:
      "Référencé sur Google en moins de 2 semaines - clients belges et frontaliers captés via Google Maps.",
    image: "/realisations/ferronnerie-chimacienne.png",
    url: "https://ferronnerie-chimacienne.be",
  },
  {
    id: 4,
    titre: "Site vitrine électricien",
    client: "Elecluminance",
    secteur: "Électricité & Énergie",
    categorie: "Bâtiment",
    ville: "Outreau",
    type: "Site Vitrine",
    description:
      "Site vitrine pour un électricien basé à Outreau. Présentation des services - installations électriques, éclairage, domotique - avec galerie photo et formulaire de contact.",
    resultat:
      "Visible sur Google Search et Google Maps pour les recherches « électricien Outreau » dès la mise en ligne.",
    image: "/realisations/elecluminance.png",
    url: "https://elecluminance.fr",
  },
  {
    id: 2,
    titre: "Site vitrine Steel Dream",
    client: "Steel Dream",
    secteur: "Ferronnerie & Métallurgie",
    categorie: "Bâtiment",
    ville: "Fourmies",
    type: "Site Vitrine",
    description:
      "Site vitrine pour une entreprise de ferronnerie basée à Fourmies. Présentation des services - portails, garde-corps, mobilier sur-mesure - avec galerie photo et formulaire de contact.",
    resultat:
      "Top 1 Google Maps à Fourmies pour « métallier » en moins de 5 jours après lancement.",
    image: "/realisations/steeldream.png",
    url: "https://steeldream.fr",
  },
  {
    id: 3,
    titre: "Site vitrine gîte rural",
    client: "Bienvenue du côté de chez nous",
    secteur: "Tourisme & Hébergement",
    categorie: "Tourisme",
    ville: "Wignehies",
    type: "Site Vitrine",
    description:
      "Site vitrine pour un gîte dans l'Avesnois. Galerie photo, présentation des équipements, formulaire de réservation. Visible sur Google pour les recherches locales.",
    resultat:
      "Référencé sur Google Maps et moteurs de recherche - réservations directes via le site sans intermédiaire.",
    image: "/realisations/bienvenueducotedecheznous.png",
    url: "https://bienvenueducotedecheznous.fr",
  },
];

/** Catégories disponibles pour le filtre du portfolio */
export const categoriesPortfolio = ["Tous", "Tourisme", "Bâtiment"] as const;
