/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                      TÉMOIGNAGES CLIENTS                        ║
 * ║  Ajouter / modifier les témoignages ici.                        ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

export type Temoignage = {
  id: number;
  nom: string;
  ville: string;
  metier: string;
  /** Note sur 5 */
  note: number;
  texte: string;
  /** Mois et année d'affichage, ex: "Novembre 2024" */
  date: string;
};

export const temoignages: Temoignage[] = [
  {
    id: 1,
    nom: "Yohan L.",
    ville: "Fourmies",
    metier: "",
    note: 5,
    texte:
      "Jovan a créé mon site en moins de 2 semaines. Depuis la mise en ligne, j'ai des appels de nouveaux clients tous les jours. Très à l'écoute, il a su comprendre mon activité et le résultat est exactement ce que j'espérais. Je recommande vivement !",
    date: "Janvier 2026",
  },
  {
    id: 2,
    nom: "Séverine L.",
    ville: "Wignehies",
    metier: "Gîte",
    note: 5,
    texte:
      "Grâce à l'optimisation de ma fiche Google pour mon gîte, je suis passé de la 3ème à la 1ère page en 4 semaines. Mon carnet de réservation est plein et je reçois des demandes chaque semaine depuis Google. Vraiment efficace et pro.",
    date: "Janvier 2026",
  },
];
