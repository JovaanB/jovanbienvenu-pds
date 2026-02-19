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
    nom: "Marie L.",
    ville: "Fourmies",
    metier: "Boulangère",
    note: 5,
    texte:
      "Jovan a créé mon site en moins de 2 semaines. Depuis la mise en ligne, j'ai des appels de nouveaux clients tous les jours. Très à l'écoute, il a su comprendre mon activité et le résultat est exactement ce que j'espérais. Je recommande vivement !",
    date: "Novembre 2024",
  },
  {
    id: 2,
    nom: "Christophe D.",
    ville: "Avesnes-sur-Helpe",
    metier: "Plombier",
    note: 5,
    texte:
      "Grâce à l'optimisation de ma fiche Google, je suis passé de la 3ème à la 1ère page en 6 semaines. Mon carnet de commandes est plein et je reçois des demandes chaque semaine depuis Google. Vraiment efficace et pro.",
    date: "Octobre 2024",
  },
  {
    id: 3,
    nom: "Sylvie M.",
    ville: "Maubeuge",
    metier: "Esthéticienne",
    note: 5,
    texte:
      "Un travail sérieux, un vrai suivi dans la durée. Jovan prend le temps d'expliquer et ne vous abandonne pas après la livraison. Mon site est parfait, mes clientes me disent souvent qu'elles m'ont trouvée sur Google.",
    date: "Décembre 2024",
  },
  {
    id: 4,
    nom: "Patrick V.",
    ville: "Hirson",
    metier: "Électricien",
    note: 5,
    texte:
      "Très professionnel et disponible. Le site est rapide, beau sur mobile et bien référencé localement. Exactement ce que je cherchais pour mon activité. Le rapport qualité/prix est imbattable pour la région.",
    date: "Janvier 2025",
  },
];
