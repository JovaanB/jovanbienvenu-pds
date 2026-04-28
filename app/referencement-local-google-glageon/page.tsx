import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import ReferencementLocalTemplate from "@/components/ReferencementLocalTemplate";

const ville = getVilleBySlug("glageon")!;

export const metadata: Metadata = buildMetadata({
  title: `Google My Business à Glageon (59) - Référencement local 280€`,
  description: ville.metaDescriptionGmb,
  path: "/referencement-local-google-glageon",
});

export default function ReferencementLocalGlageonPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <ReferencementLocalTemplate ville={ville} />
    </main>
  );
}
