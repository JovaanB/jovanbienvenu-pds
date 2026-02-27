/**
 * Helper centralisé pour generateMetadata()
 * Utilisé par toutes les pages pour générer title, description, OG et canonical.
 */

import type { Metadata } from "next";
import { temoignages } from "@/data/temoignages";
import { externalLinks } from "@/lib/site";

export const SITE_URL = "https://jovanbienvenu.com";
export const SITE_NAME = "Jovan — Sites Internet & Référencement Local Avesnois";
/** Suffixe court utilisé dans le template <title> des pages */
export const SITE_BRAND = "Jovan";

interface MetadataOptions {
  title: string;
  description: string;
  /** Chemin de la page, ex: "/creation-site-internet" */
  path: string;
  /** Image OG optionnelle. Défaut: /images/og-default.jpg */
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/og.png",
}: MetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

/** Schema.org BreadcrumbList — items : tableau de { name, url } */
export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Schema.org ProfessionalService — étendu par chaque page */
export function buildLocalBusinessSchema(overrides?: {
  addressLocality?: string;
  /** Code postal de la ville ciblée. Défaut: "59610" (Fourmies) */
  postalCode?: string;
  url?: string;
}) {
  const ratingCount = temoignages.length;
  const ratingValue =
    temoignages.reduce((sum, t) => sum + t.note, 0) / ratingCount;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jovan Bienvenu",
    description:
      "Création de sites internet et référencement local Google My Business pour les professionnels de l'Avesnois.",
    url: overrides?.url ?? SITE_URL,
    telephone: "+33788962157",
    email: "contact@jovanbienvenu.com",
    image: `${SITE_URL}/og.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: overrides?.addressLocality ?? "Fourmies",
      postalCode: overrides?.postalCode ?? "59610",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR",
    },
    areaServed: [
      "Fourmies",
      "Avesnes-sur-Helpe",
      "Hirson",
      "Maubeuge",
      "Glageon",
    ],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount: String(ratingCount),
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    review: temoignages.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.nom,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.note),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: t.texte,
    })),
    sameAs: [externalLinks.linkedin],
  };
}
