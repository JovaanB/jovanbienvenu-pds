import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getVilleBySlug } from "@/data/villes";
import ReferencementLocalTemplate from "@/components/ReferencementLocalTemplate";

const ville = getVilleBySlug("maubeuge")!;

export const metadata: Metadata = buildMetadata({
  title: `Google My Business à Maubeuge (59) — Référencement local 280€`,
  description: ville.metaDescriptionGmb,
  path: "/referencement-local-google-maubeuge",
});

export default function ReferencementLocalMaubeugePage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] right-[10%] w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[5%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
      </div>
      <ReferencementLocalTemplate ville={ville} />
    </main>
  );
}
