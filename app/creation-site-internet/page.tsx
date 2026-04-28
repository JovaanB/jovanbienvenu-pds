import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import CreationSiteTemplate from "@/components/CreationSiteTemplate";

export const metadata: Metadata = buildMetadata({
  title: "Création de site internet Avesnois - 590€ tout inclus",
  description:
    "Site vitrine + fiche Google à 590€ tout inclus. Développeur web local basé à Fourmies, livraison en 2 semaines. Devis gratuit sous 24h.",
  path: "/creation-site-internet",
});

export default function CreationSiteInternetPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <CreationSiteTemplate />
    </main>
  );
}
