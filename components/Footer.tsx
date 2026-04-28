import Link from "next/link";
import { Linkedin, Heart, MapPin } from "lucide-react";
import { siteInfo, externalLinks, footerCta } from "@/lib/site";
import { villes } from "@/data/villes";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-background-dark">
      {/* Final CTA band */}
      <div className="relative overflow-hidden py-20 px-6 border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[200px] bg-amber-400/5 blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            {footerCta.headline}
          </h2>
          <p className="text-lg text-stone-400 mb-8 font-light">
            {footerCta.subline}
            <br className="hidden md:block" />
            {footerCta.freeAuditLine}{" "}
            <span className="text-white font-semibold">{footerCta.freeWord}</span>.
          </p>
          <Link
            href={footerCta.ctaHref}
            className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-full"
          >
            {footerCta.ctaLabel}
          </Link>
        </div>
      </div>

      {/* Footer main */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-white group mb-4">
              <img src="/logo.png" alt={siteInfo.name} className="w-7 h-7" />
              <span className="text-lg font-bold tracking-tight">{siteInfo.name}</span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-4">
              Basé à Fourmies. Je crée des sites internet et des fiches Google
              pour les artisans et commerçants de l&apos;Avesnois.
            </p>
            <div>
              <p className="text-stone-600 text-xs font-bold uppercase tracking-widest mb-2">
                Zones desservies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {villes.map((ville) => (
                  <span
                    key={ville.slug}
                    className="text-xs text-stone-500 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded-full"
                  >
                    {ville.nom}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/creation-site-internet", label: "Création de site internet" },
                { href: "/referencement-local-google", label: "Référencement local GMB" },
                { href: "/realisations", label: "Mes réalisations" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Obtenir un devis gratuit" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-500 text-sm hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Création de site par ville */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                Création de site
              </span>
            </h3>
            <ul className="space-y-2.5">
              {villes.map((ville) => (
                <li key={ville.slug}>
                  <Link href={`/creation-site-internet-${ville.slug}`} className="text-stone-500 text-sm hover:text-white transition-colors duration-200">
                    {ville.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Référencement local par ville */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-400" />
                Référencement local
              </span>
            </h3>
            <ul className="space-y-2.5">
              {villes.map((ville) => (
                <li key={ville.slug}>
                  <Link href={`/referencement-local-google-${ville.slug}`} className="text-stone-500 text-sm hover:text-white transition-colors duration-200">
                    {ville.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5 text-sm text-stone-500">
            <Link href={externalLinks.mentionsLegales} className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <span className="w-px h-4 bg-stone-700" />
            <Link href={externalLinks.politiqueConfidentialite} className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>

          <p className="text-xs text-stone-600 flex items-center gap-1.5 order-last md:order-none">
            Fait avec <Heart size={11} className="text-red-400 fill-red-400" /> à Fourmies &mdash; © {year} {footerCta.copyrightName}
          </p>

          <div className="flex items-center gap-3">
            <a
              href={externalLinks.linkedin}
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
