import Link from "next/link";
import { Code2, Linkedin, Heart, MapPin } from "lucide-react";
import { siteInfo, externalLinks, footerCta } from "@/lib/site";
import { villes } from "@/data/villes";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-background-dark">
      {/* Final CTA band */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-20 px-6">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            {footerCta.headline}
          </h2>
          <p className="text-lg text-slate-300 mb-8 font-light">
            {footerCta.subline}
            <br className="hidden md:block" />
            {footerCta.freeAuditLine}{" "}
            <span className="text-primary font-semibold">
              {footerCta.freeWord}
            </span>
            .
          </p>
          <Link href={footerCta.ctaHref} className="relative inline-flex group">
            <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-primary to-purple-600 rounded-xl blur opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            <span className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gray-950 rounded-xl focus:outline-none hover:bg-gray-900 transition-colors">
              {footerCta.ctaLabel}
            </span>
          </Link>
        </div>
      </div>

      {/* Footer main */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white group mb-4"
            >
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                {siteInfo.name}
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Développeur web freelance basé à Fourmies. Je crée des sites
              internet et optimise la visibilité locale des artisans et
              commerçants de l'Avesnois.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                {
                  href: "/creation-site-internet",
                  label: "Création de site internet",
                },
                {
                  href: "/referencement-local-google",
                  label: "Référencement local GMB",
                },
                { href: "/realisations", label: "Mes réalisations" },
                { href: "/contact", label: "Demander un devis" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones desservies */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                Zones desservies
              </span>
            </h3>
            <ul className="space-y-2.5">
              {villes.map((ville) => (
                <li key={ville.slug}>
                  <Link
                    href={`/creation-site-internet-${ville.slug}`}
                    className="text-slate-500 text-sm hover:text-white transition-colors duration-200"
                  >
                    {ville.nomComplet}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Legal links */}
          <div className="flex items-center gap-5 text-sm text-slate-500">
            <Link
              href={externalLinks.mentionsLegales}
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
            <span className="w-px h-4 bg-slate-700" />
            <Link
              href={externalLinks.politiqueConfidentialite}
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>

          <p className="text-xs text-slate-600 flex items-center gap-1.5 order-last md:order-none">
            Fait avec <Heart size={11} className="text-red-400 fill-red-400" />{" "}
            à Fourmies &mdash; © {year} {footerCta.copyrightName}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={externalLinks.linkedin}
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
