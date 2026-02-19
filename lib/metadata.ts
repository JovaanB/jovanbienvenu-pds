/**
 * Helper centralisé pour generateMetadata()
 * Utilisé par toutes les pages pour générer title, description, OG et canonical.
 */

import type { Metadata } from "next";

export const SITE_URL = "https://jovanbienvenu.com";
export const SITE_NAME = "Jovan — Développeur Web Avesnois";

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
  ogImage = "/images/og-default.jpg",
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

/** Schema.org LocalBusiness de base — étendu par chaque page */
export function buildLocalBusinessSchema(overrides?: {
  addressLocality?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "Création de sites internet et référencement local Google My Business pour artisans et commerçants dans l'Avesnois.",
    url: overrides?.url ?? SITE_URL,
    telephone: "+33788962157", // ← Mettre à jour dans lib/site.ts > siteInfo.phone
    email: "contact@jovanbienvenu.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: overrides?.addressLocality ?? "Fourmies",
      postalCode: "59610",
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
    sameAs: [],
  };
}
