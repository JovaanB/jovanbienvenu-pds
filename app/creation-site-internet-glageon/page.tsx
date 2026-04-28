import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import CreationSiteTemplate from "@/components/CreationSiteTemplate";

const ville = getVilleBySlug("glageon")!;

export const metadata: Metadata = buildMetadata({
  title: `Création de site internet à Glageon (59) - 590€ tout inclus`,
  description: ville.metaDescription,
  path: "/creation-site-internet-glageon",
});

export default function CreationSiteGlageonPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <CreationSiteTemplate ville={ville} />
    </main>
  );
}
