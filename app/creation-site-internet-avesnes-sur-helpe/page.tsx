import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import CreationSiteTemplate from "@/components/CreationSiteTemplate";

const ville = getVilleBySlug("avesnes-sur-helpe")!;

export const metadata: Metadata = buildMetadata({
  title: `Création de site internet à Avesnes-sur-Helpe (59) - 590€ tout inclus`,
  description: ville.metaDescription,
  path: "/creation-site-internet-avesnes-sur-helpe",
});

export default function CreationSiteAvesnesPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <CreationSiteTemplate ville={ville} />
    </main>
  );
}
