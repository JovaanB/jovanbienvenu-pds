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
    nom: "Steel Dream",
    ville: "Fourmies",
    metier: "",
    note: 5,
    texte:
      "Je tenais à te remercier sincèrement pour la qualité du travail que tu as réalisé sur mon site internet et ma fiche Google My Business. Le résultat est à la hauteur de mes attentes, et je suis pleinement satisfait du rendu final. Tu as su faire preuve d’écoute, de professionnalisme et de réactivité tout au long du projet. J’ai particulièrement apprécié ta capacité à comprendre mes besoins et à les traduire en un site à la fois moderne, clair et performant. Merci pour ton engagement, ton sérieux et ton accompagnement. Ce fut un réel plaisir de collaborer avec toi, et je n’hésiterai pas à te recommander autour de moi. Encore un grand merci.",
    date: "Janvier 2026",
  },
  {
    id: 2,
    nom: "Séverine L.",
    ville: "Wignehies",
    metier: "",
    note: 5,
    texte:
      "Je connais Jovan depuis plusieurs années et j’ai suivi son parcours en boxe. Je n’ai pas hésité à lui faire confiance pour la création et la gestion de mon site internet ainsi que de ma page Google concernant mes deux gîtes. C’est une personne qui a su, du début à la fin, répondre exactement à ce que je souhaitais. Très à l’écoute de nos attentes, je le recommande vivement pour tous vos besoins. Un grand merci à lui, et je n’hésiterai pas à le contacter à nouveau si nécessaire.",
    date: "Février 2026",
  },
];
