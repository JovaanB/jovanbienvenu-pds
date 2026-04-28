import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import CreationSiteTemplate from "@/components/CreationSiteTemplate";

const ville = getVilleBySlug("hirson")!;

export const metadata: Metadata = buildMetadata({
  title: `Création de site internet à Hirson (02) - 590€ tout inclus`,
  description: ville.metaDescription,
  path: "/creation-site-internet-hirson",
});

export default function CreationSiteHirsonPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <CreationSiteTemplate ville={ville} />
    </main>
  );
}
