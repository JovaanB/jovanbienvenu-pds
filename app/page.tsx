import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import TrustBanner from '@/components/TrustBanner'
import Services from '@/components/Services'
import WhyMe from '@/components/WhyMe'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import SchemaOrg from '@/components/SchemaOrg'
import { buildLocalBusinessSchema, buildMetadata, SITE_URL } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: "Jovan — Développeur web Freelance | Création de sites internet Avesnois",
  description:
    "Création de sites internet et référencement local Google My Business pour artisans et commerçants dans l'Avesnois (Fourmies, Hirson, Maubeuge). Devis gratuit.",
  path: '/',
})

const schema = buildLocalBusinessSchema({ url: SITE_URL })

export default function Home() {
  return (
    <main className="relative">
      <SchemaOrg schema={schema} />

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
  )
}
