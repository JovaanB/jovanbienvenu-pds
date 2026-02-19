/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                     PROJETS — PORTFOLIO                         ║
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
    titre: "Site vitrine métallerie sur-mesure",
    client: "Steel Dream",
    secteur: "Métallerie artisanale",
    categorie: "Bâtiment",
    ville: "Fourmies",
    type: "Site Vitrine",
    description:
      "Site vitrine sur-mesure pour un artisan métallier à Fourmies. Galerie de réalisations (portails, garde-corps, fer forgé, découpe laser), formulaire de devis intégré et zone d'intervention couvrant l'Avesnois et la Belgique frontalière.",
    resultat:
      "Formulaire de devis en ligne opérationnel — nouvelle source de contacts directs.",
    image: "/images/realisations/steeldream.png",
    url: "https://steeldream.fr",
  },
  {
    id: 2,
    titre: "Site vitrine gîte rural PMR",
    client: "Bienvenue du côté de chez nous",
    secteur: "Tourisme & Hébergement",
    categorie: "Tourisme",
    ville: "Wignehies",
    type: "Site Vitrine",
    description:
      "Site vitrine avec système de réservation intégré pour un gîte rural labellisé Gîtes de France dans l'Avesnois. Galerie photo immersive, présentation des équipements.",
    resultat: "4,85 / 5 — 97 avis clients sur Gîtes de France.",
    image: "/images/realisations/bienvenue-du-cote-de-chez-nous.png",
    url: "https://bienvenueducotedecheznous.fr",
  },
];

/** Catégories disponibles pour le filtre du portfolio */
export const categoriesPortfolio = ["Tous", "Bâtiment", "Tourisme"] as const;
