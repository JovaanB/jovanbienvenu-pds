import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaOrg from "@/components/SchemaOrg";
import {
  buildLocalBusinessSchema,
  buildMetadata,
  SITE_URL,
} from "@/lib/metadata";
import { faqs } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Site internet & SEO local pour artisans - Avesnois, Nord 59",
  description:
    "Je crée des sites vitrines et fiches Google pour les artisans et commerçants de l'Avesnois. 590€ tout inclus, livré en 2-3 semaines. Devis gratuit sous 24h.",
  path: "/",
});

const schema = buildLocalBusinessSchema({ url: SITE_URL });

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <main className="relative">
      <SchemaOrg schema={schema} />
      <SchemaOrg schema={faqSchema} />

      {/* Ambient background */}
      <div className="ambient-bg" />

      <Hero />
      <TrustBanner />
      <Process />
      <Services />
      <WhyMe />
      <Testimonials />
      <Portfolio />
      <Pricing />
      <FAQ />
      <section id="contact" className="py-28 bg-white relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="pill-badge mb-4 inline-flex"><Mail size={13} />Contact</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mt-3 mb-3">
              Parlons de votre projet
            </h2>
            <p className="text-ink-3">
              Remplissez le formulaire — je vous réponds sous 24h.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <WhatsAppButton message="Bonjour Jovan, je souhaite un devis gratuit pour mon activité." />
    </main>
  );
}
