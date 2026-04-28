import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import ReferencementLocalTemplate from "@/components/ReferencementLocalTemplate";

const ville = getVilleBySlug("avesnes-sur-helpe")!;

export const metadata: Metadata = buildMetadata({
  title: `Google My Business à Avesnes-sur-Helpe (59) - Référencement local 280€`,
  description: ville.metaDescriptionGmb,
  path: "/referencement-local-google-avesnes-sur-helpe",
});

export default function ReferencementLocalAvesnesPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />
      <ReferencementLocalTemplate ville={ville} />
    </main>
  );
}
