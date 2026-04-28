import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import CreationSiteTemplate from "@/components/CreationSiteTemplate";

const ville = getVilleBySlug("fourmies")!;

export const metadata: Metadata = buildMetadata({
  title: `Création de site internet à Fourmies (59) - 590€ tout inclus`,
  description: ville.metaDescription,
  path: "/creation-site-internet-fourmies",
});

export default function CreationSiteFourmiесPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <CreationSiteTemplate ville={ville} />
    </main>
  );
}
