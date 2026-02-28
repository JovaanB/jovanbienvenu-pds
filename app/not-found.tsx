import Link from 'next/link'
import { ArrowRight, Home, Phone } from 'lucide-react'
import { siteInfo } from '@/lib/site'
import FadeIn from '@/components/FadeIn'

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] bg-purple-900/12 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">

        {/* 404 */}
        <FadeIn>
          <p className="text-[140px] md:text-[180px] font-bold leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/3 mb-0">
            404
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={80}>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 -mt-2 leading-tight tracking-tight">
            Cette page est introuvable.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Un peu comme un artisan local sans site internet —<br className="hidden sm:block" />
            on sait qu&apos;il existe, mais personne ne le trouve.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={160}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-all duration-200 hover:shadow-[0_0_32px_-6px_rgba(19,91,236,0.7)] active:scale-95"
            >
              <Home size={16} />
              Retour à l&apos;accueil
            </Link>
            <a
              href={`tel:${siteInfo.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              <Phone size={16} className="text-primary" />
              {siteInfo.phoneDisplay}
            </a>
          </div>
        </FadeIn>

        {/* Quick nav */}
        <FadeIn delay={240}>
          <div className="border-t border-white/8 pt-8">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-5">
              Pages principales
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/creation-site-internet', label: 'Création de site' },
                { href: '/referencement-local-google', label: 'Référencement local' },
                { href: '/tarifs', label: 'Tarifs' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
                >
                  {link.label}
                  <ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  )
}
