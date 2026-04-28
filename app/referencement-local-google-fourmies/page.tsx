import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import ReferencementLocalTemplate from "@/components/ReferencementLocalTemplate";

const ville = getVilleBySlug("fourmies")!;

export const metadata: Metadata = buildMetadata({
  title: `Google My Business à Fourmies (59) - Référencement local 280€`,
  description: ville.metaDescriptionGmb,
  path: "/referencement-local-google-fourmies",
});

export default function ReferencementLocalFourmiesPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <ReferencementLocalTemplate ville={ville} />
    </main>
  );
}
