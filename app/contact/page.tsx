import type { Metadata } from "next";
import {
  buildMetadata,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
  SITE_URL,
} from "@/lib/metadata";
import { siteInfo } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";
import { Phone, Mail, MapPin, Clock, Gift } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact - Devis gratuit création site internet Avesnois",
  description:
    "Demandez votre devis gratuit pour la création de votre site internet ou l'optimisation de votre fiche Google My Business dans l'Avesnois. Réponse sous 24h.",
  path: "/contact",
});

const schema = buildLocalBusinessSchema({ url: `${SITE_URL}/contact` });

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact - Jovan Bienvenu, Développeur Web Avesnois",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Jovan - Développeur Web Avesnois",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33788962157",
      email: "contact@jovanbienvenu.com",
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "French",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    },
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", url: SITE_URL },
  { name: "Contact", url: `${SITE_URL}/contact` },
]);

const infos = [
  {
    icon: Phone,
    label: "Téléphone",
    value: siteInfo.phoneDisplay,
    href: `tel:${siteInfo.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteInfo.email,
    href: `mailto:${siteInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: "Fourmies, Avesnes-sur-Helpe, Hirson, Maubeuge, Glageon",
    href: null,
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "Lun-Sam · 9h00 - 19h00 · Réponse sous 24h",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="relative">
      <SchemaOrg schema={schema} />
      <SchemaOrg schema={contactPointSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <div className="ambient-bg" />

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="pill-badge mb-4 inline-flex">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight mt-3">
              Parlons de{" "}
              <span className="text-gradient-primary">votre projet</span>
            </h1>
            <p className="text-ink-3">
              Remplissez le formulaire ou appelez-moi directement. Je vous
              réponds sous 24h - souvent dans la journée.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Infos contact */}
          <FadeIn className="lg:col-span-2" delay={0}>
            <div className="space-y-6">
              <h2 className="text-ink font-bold text-xl">
                Informations de contact
              </h2>

              {infos.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-ink-4 text-xs font-medium uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-ink text-sm hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-ink text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 mt-6">
                <div className="flex items-center gap-2 mb-1">
                  <Gift size={14} className="text-primary flex-shrink-0" />
                  <p className="text-primary text-sm font-semibold">
                    Premier audit offert
                  </p>
                </div>
                <p className="text-ink-3 text-xs leading-relaxed ml-5">
                  Je commence toujours par un audit gratuit de votre présence en
                  ligne. Pas d&apos;engagement, juste un état des lieux honnête.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Formulaire */}
          <FadeIn className="lg:col-span-3" delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
