import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import ReferencementLocalTemplate from "@/components/ReferencementLocalTemplate";

const ville = getVilleBySlug("hirson")!;

export const metadata: Metadata = buildMetadata({
  title: `Google My Business à Hirson (02) - Référencement local 280€`,
  description: ville.metaDescriptionGmb,
  path: "/referencement-local-google-hirson",
});

export default function ReferencementLocalHirsonPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <ReferencementLocalTemplate ville={ville} />
    </main>
  );
}
