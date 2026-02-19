import type { Metadata } from 'next'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema, SITE_URL } from '@/lib/metadata'
import { siteInfo } from '@/lib/site'
import ContactForm from '@/components/ContactForm'
import FadeIn from '@/components/FadeIn'
import SchemaOrg from '@/components/SchemaOrg'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: "Contact — Devis gratuit création site internet Avesnois",
  description:
    "Demandez votre devis gratuit pour la création de votre site internet ou l'optimisation de votre fiche Google My Business dans l'Avesnois. Réponse sous 24h.",
  path: '/contact',
})

const schema = buildLocalBusinessSchema({ url: `${SITE_URL}/contact` })

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact — Jovan Bienvenu, Développeur Web Avesnois",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Jovan — Développeur Web Avesnois",
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
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", url: SITE_URL },
  { name: "Contact", url: `${SITE_URL}/contact` },
])

const infos = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: siteInfo.phoneDisplay,
    href: `tel:${siteInfo.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteInfo.email,
    href: `mailto:${siteInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: 'Fourmies, Avesnes-sur-Helpe, Hirson, Maubeuge, Glageon',
    href: null,
  },
  {
    icon: Clock,
    label: 'Disponibilité',
    value: 'Lun-Sam · 9h00 - 19h00 · Réponse sous 24h',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <main className="relative">
      <SchemaOrg schema={schema} />
      <SchemaOrg schema={contactPointSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Parlons de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                votre projet
              </span>
            </h1>
            <p className="text-slate-400">
              Remplissez le formulaire ou appelez-moi directement. Je vous réponds sous 24h —
              souvent dans la journée.
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
              <h2 className="text-white font-bold text-xl">Informations de contact</h2>

              {infos.map((info) => {
                const Icon = info.icon
                return (
                  <div key={info.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white text-sm hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mt-6">
                <p className="text-amber-300 text-sm font-semibold mb-1">
                  🎁 Premier audit offert
                </p>
                <p className="text-amber-400/70 text-xs leading-relaxed">
                  Je commence toujours par un audit gratuit de votre présence en ligne. Pas
                  d'engagement, juste un état des lieux honnête.
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
  )
}
