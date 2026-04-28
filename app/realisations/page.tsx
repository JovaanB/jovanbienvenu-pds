import type { Metadata } from "next";
import {
  buildMetadata,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
  SITE_URL,
} from "@/lib/metadata";
import { realisations } from "@/data/realisations";
import RealisationCard from "@/components/RealisationCard";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Mes réalisations - Sites internet et SEO local dans l'Avesnois",
  description:
    "Découvrez mes projets de création de sites internet et de référencement local Google réalisés pour des professionnels de l'Avesnois. Résultats mesurables.",
  path: "/realisations",
});

const schema = buildLocalBusinessSchema({ url: `${SITE_URL}/realisations` });
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", url: SITE_URL },
  { name: "Mes réalisations", url: `${SITE_URL}/realisations` },
]);

export default function RealisationsPage() {
  return (
    <main className="relative">
      <SchemaOrg schema={schema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <div className="ambient-bg" />

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="pill-badge mb-4 inline-flex">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-bold text-ink mb-6 leading-tight mt-3">
              Mes{" "}
              <span className="text-gradient-primary">réalisations</span>
            </h1>
            <p className="text-ink-3 text-lg max-w-2xl mx-auto">
              Des sites internet et des optimisations SEO qui produisent des
              résultats concrets pour des professionnels de l&apos;Avesnois.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── GRILLE PROJETS ── */}
      <section className="relative z-10 py-12 px-6 bg-bg-alt">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((r, i) => (
              <FadeIn key={r.id} delay={i * 80} className="h-full">
                <RealisationCard realisation={r} />
              </FadeIn>
            ))}
          </div>

          {realisations.length === 0 && (
            <div className="text-center py-24">
              <p className="text-ink-4">Les projets arrivent bientôt…</p>
            </div>
          )}
        </div>
      </section>

      <WhatsAppButton message="Bonjour Jovan, j'ai vu vos réalisations et souhaite discuter d'un projet similaire." />
    </main>
  );
}
