import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
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
  title: "Création de site internet à Fourmies — 590€",
  description:
    "Création de site internet à Fourmies — votre site ramène des clients pendant que vous travaillez. 590€, livré en 2-3 semaines. Pour tous les pros de l'Avesnois. Devis gratuit sous 24h.",
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

      {/* Ambient background glows — fixed so they follow scroll */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[20%] left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <Hero />
      <TrustBanner />
      <Services />
      <WhyMe />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
      <WhatsAppButton />
    </main>
  );
}
