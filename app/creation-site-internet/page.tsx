import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import CreationSiteTemplate from "@/components/CreationSiteTemplate";

export const metadata: Metadata = buildMetadata({
  title: "Création de site internet Avesnois — 590€ tout inclus",
  description:
    "Pack Visibilité à 590 € : création de site internet + fiche Google incluse (création ou optimisation). Livré en 2 semaines, développeur web local basé à Fourmies. Devis gratuit sous 24h.",
  path: "/creation-site-internet",
});

export default function CreationSiteInternetPage() {
  return (
    <main className="relative">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[60%] -right-[10%] w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-[100px]" />
      </div>

      <CreationSiteTemplate />
    </main>
  );
}
