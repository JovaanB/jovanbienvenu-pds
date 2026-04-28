import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteInfo } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales - Jovan Bienvenu, Développeur Web Avesnois",
  description: `Mentions légales du site ${siteInfo.siteUrl}: informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.`,
  path: "/mentions-legales",
});

const sections = [
  {
    title: "1. Éditeur du site",
    content: [
      { label: "Raison sociale", value: "Jovan Bienvenu" },
      {
        label: "Statut juridique",
        value: "Auto-entrepreneur (Entreprise Individuelle)",
      },
      { label: "SIRET", value: siteInfo.siret },
      { label: "Code APE / NAF", value: "6201Z - Programmation informatique" },
      {
        label: "Siège social",
        value: `Fourmies, ${siteInfo.location.split(",")[1]?.trim() ?? "Nord (59)"}`,
      },
      { label: "Email", value: siteInfo.email },
      { label: "Téléphone", value: siteInfo.phoneDisplay },
    ],
  },
  {
    title: "2. Directeur de la publication",
    content: [
      { label: "Responsable", value: "Jovan Bienvenu" },
      { label: "Contact", value: siteInfo.email },
    ],
  },
  {
    title: "3. Hébergement",
    content: [
      { label: "Hébergeur", value: "Vercel Inc." },
      { label: "Site web", value: "vercel.com" },
    ],
  },
];

const textSections = [
  {
    title: "4. Propriété intellectuelle",
    paragraphs: [
      `L'ensemble des contenus présents sur le site ${siteInfo.siteUrl} (textes, images, logos, vidéos, code source) est la propriété exclusive de Jovan Bienvenu, sauf mention contraire.`,
      "Toute reproduction, distribution, modification ou utilisation, même partielle, de ces contenus sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.",
    ],
  },
  {
    title: "5. Limitation de responsabilité",
    paragraphs: [
      "Jovan Bienvenu s'efforce de maintenir les informations du site à jour et exactes. Cependant, il ne peut être tenu responsable des erreurs ou omissions, des interruptions de service, ni des dommages directs ou indirects liés à l'utilisation du site.",
      "Les liens hypertextes présents sur le site peuvent renvoyer vers des sites tiers. Jovan Bienvenu décline toute responsabilité quant au contenu de ces sites externes.",
    ],
  },
  {
    title: "6. Droit applicable",
    paragraphs: [
      "Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
    ],
  },
  {
    title: "7. Contact",
    paragraphs: [
      `Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter par email à l'adresse ${siteInfo.email} ou par téléphone au ${siteInfo.phoneDisplay}.`,
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <main className="relative">
      <div className="ambient-bg" />

      {/* Hero */}
      <section className="relative z-10 pt-36 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="pill-badge mb-4 inline-flex">Légal</span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight mt-3">
              Mentions{" "}
              <span className="text-gradient-primary">légales</span>
            </h1>
            <p className="text-ink-3 text-sm">
              Conformément à la loi n° 2004-575 du 21 juin 2004 pour la
              Confiance dans l&apos;Économie Numérique (LCEN).
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 pb-24 px-6 bg-bg-alt">
        <div className="max-w-3xl mx-auto space-y-6 pt-12">
          {/* Tableau sections */}
          {sections.map((section) => (
            <FadeIn key={section.title}>
              <div className="rounded-2xl border border-border-warm bg-white shadow-card p-6 md:p-8">
                <h2 className="text-ink font-bold text-lg mb-5">
                  {section.title}
                </h2>
                <dl className="space-y-3">
                  {section.content.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col sm:flex-row sm:gap-4 py-2 border-b border-border-soft last:border-0"
                    >
                      <dt className="text-ink-4 text-sm font-medium w-48 shrink-0">
                        {item.label}
                      </dt>
                      <dd className="text-ink-2 text-sm mt-0.5 sm:mt-0">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>
          ))}

          {/* Sections textuelles */}
          {textSections.map((section) => (
            <FadeIn key={section.title}>
              <div className="rounded-2xl border border-border-warm bg-white shadow-card p-6 md:p-8">
                <h2 className="text-ink font-bold text-lg mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-ink-3 text-sm leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn>
            <p className="text-center text-ink-4 text-xs pb-8">
              Dernière mise à jour : février 2026
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
