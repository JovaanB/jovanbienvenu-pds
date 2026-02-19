export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readTime: number; // minutes
  category: string;
  categoryColor: string;
};

export const articles: Article[] = [
  {
    slug: "combien-coute-site-internet-artisan",
    title: "Combien coûte un site internet pour un artisan ou commerçant ?",
    description:
      "Prix, pièges à éviter et ce qu'inclut vraiment un bon site vitrine. Tour d'horizon des tarifs en 2026 pour les TPE et artisans de l'Avesnois.",
    date: "2026-02-19",
    readTime: 6,
    category: "Conseils",
    categoryColor: "bg-blue-500/20 text-blue-300",
  },
  {
    slug: "top-3-google-maps-avesnois",
    title: "Comment apparaître dans le top 3 Google dans l'Avesnois ?",
    description:
      'Les 5 facteurs clés pour entrer dans le "local pack" Google et capter les clients qui cherchent votre activité à Fourmies, Hirson ou Maubeuge.',
    date: "2026-02-12",
    readTime: 5,
    category: "SEO Local",
    categoryColor: "bg-purple-500/20 text-purple-300",
  },
  {
    slug: "site-vitrine-vs-fiche-google-my-business",
    title: "Site vitrine ou fiche Google My Business : que choisir ?",
    description:
      "Différences, avantages et cas d'usage de chaque outil. Quand commencer par l'un ou l'autre — et pourquoi les deux ensemble sont imbattables.",
    date: "2026-02-05",
    readTime: 7,
    category: "Stratégie",
    categoryColor: "bg-amber-500/20 text-amber-300",
  },
];

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
