import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import CreationSiteTemplate from "@/components/CreationSiteTemplate";

const ville = getVilleBySlug("maubeuge")!;

export const metadata: Metadata = buildMetadata({
  title: `Création de site internet à Maubeuge (59) - 590€ tout inclus`,
  description: ville.metaDescription,
  path: "/creation-site-internet-maubeuge",
});

export default function CreationSiteMaubeugePage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <CreationSiteTemplate ville={ville} />
    </main>
  );
}
