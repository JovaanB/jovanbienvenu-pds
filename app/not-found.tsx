import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";
import { siteInfo } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="ambient-bg" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 */}
        <FadeIn>
          <p className="text-[140px] md:text-[180px] font-bold leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-ink/10 to-ink/3 mb-0">
            404
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={80}>
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-5 -mt-2 leading-tight tracking-tight">
            Cette page est introuvable.
          </h1>
          <p className="text-ink-3 text-lg leading-relaxed mb-10">
            Un peu comme un artisan local sans site internet -
            <br className="hidden sm:block" />
            on sait qu&apos;il existe, mais personne ne le trouve.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={160}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="group btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-200 active:scale-95"
            >
              <Home size={16} />
              Retour à l&apos;accueil
            </Link>
            <a
              href={`tel:${siteInfo.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-border-warm text-ink font-medium rounded-full hover:border-primary/40 hover:text-primary transition-all duration-200 bg-white shadow-card"
            >
              <Phone size={16} className="text-primary" />
              {siteInfo.phoneDisplay}
            </a>
          </div>
        </FadeIn>

        {/* Quick nav */}
        <FadeIn delay={240}>
          <div className="border-t border-border-warm pt-8">
            <p className="text-ink-4 text-xs font-bold uppercase tracking-widest mb-5">
              Pages principales
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/creation-site-internet", label: "Création de site" },
                {
                  href: "/referencement-local-google",
                  label: "Référencement local",
                },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/realisations", label: "Réalisations" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm text-ink-3 hover:text-primary border border-border-warm hover:border-primary/30 px-4 py-2 rounded-full transition-all duration-200"
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
  );
}
