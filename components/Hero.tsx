import { Phone, ArrowRight, Check } from "lucide-react";
import { siteInfo, hero } from "@/lib/site";

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-2.5 h-2.5 ${filled ? "fill-yellow-400" : "fill-gray-200"}`}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function GoogleLocalPackMockup() {
  return (
    <div className="relative w-full max-w-[360px] mx-auto">
      {/* Ambient glow behind card */}
      <div className="absolute inset-0 bg-primary/15 blur-[70px] rounded-full scale-90 translate-y-8 pointer-events-none" />

      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/40 overflow-hidden text-gray-900 text-sm ring-1 ring-black/5">
        {/* Search bar */}
        <div className="bg-gray-50 border-b border-gray-200 px-3 py-2.5 flex items-center gap-2">
          <div className="flex-1 bg-white border border-gray-300 rounded-full px-3 py-1.5 text-[11px] text-gray-500 flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0">
              <path
                fill="#4285f4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34a853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#fbbc05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#ea4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            plombier fourmies
          </div>
        </div>

        {/* Local pack header */}
        <div className="px-3 pt-2.5 pb-1">
          <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-widest">
            Résultats locaux · Fourmies, Nord
          </p>
        </div>

        {/* Result 1 – featured */}
        <div className="mx-3 mb-2 bg-blue-50 border border-blue-200 rounded-xl p-3 shadow-sm">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-[7px] font-extrabold flex-shrink-0">
                  1
                </span>
                <p className="text-[12px] font-bold text-gray-900 truncate">
                  Plomberie Martin
                </p>
              </div>
              <div className="flex items-center gap-1 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled />
                  ))}
                </div>
                <span className="text-[9px] text-gray-600 font-medium">
                  4.9 (47 avis)
                </span>
              </div>
              <p className="text-[9px] text-green-600 font-semibold">
                ● Ouvert · Ferme à 18h
              </p>
            </div>
            <div className="flex flex-col gap-1 flex-shrink-0">
              <button className="bg-green-600 text-white text-[9px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                Appeler
              </button>
              <button className="bg-white border border-gray-300 text-gray-600 text-[9px] px-2 py-1 rounded-full whitespace-nowrap">
                Itinéraire
              </button>
            </div>
          </div>
        </div>

        {/* Result 2 */}
        <div className="mx-3 mb-2 bg-white border border-gray-100 rounded-xl p-3 opacity-55">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[7px] font-extrabold flex-shrink-0">
              2
            </span>
            <p className="text-[11px] font-semibold text-gray-700 truncate">
              Plomberie Dupont
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} filled />
              ))}
              <StarIcon filled={false} />
            </div>
            <span className="text-[9px] text-gray-500">4.1 (12)</span>
          </div>
        </div>

        {/* Result 3 */}
        <div className="mx-3 mb-3 bg-white border border-gray-100 rounded-xl p-3 opacity-30">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-white text-[7px] font-extrabold flex-shrink-0">
              3
            </span>
            <p className="text-[11px] font-semibold text-gray-600 truncate">
              Plomberie Leroy
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <StarIcon key={i} filled />
              ))}
              {[...Array(2)].map((_, i) => (
                <StarIcon key={i} filled={false} />
              ))}
            </div>
            <span className="text-[9px] text-gray-500">3.2 (5)</span>
          </div>
        </div>

        {/* Map */}
        <div className="mx-3 mb-3 h-[72px] bg-gradient-to-br from-green-100 to-blue-100 rounded-xl overflow-hidden relative flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />
          <div className="relative flex flex-col items-center gap-0.5">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <span className="text-[8px] text-gray-600 font-semibold bg-white px-1.5 py-0.5 rounded shadow-sm">
              Fourmies
            </span>
          </div>
        </div>
      </div>

      {/* Static badge overlays - neutral, don't compete with hero CTA */}
      <div className="absolute -left-5 top-8 bg-slate-800 border border-white/15 text-slate-200 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
        ✓ Top 3 Google
      </div>
      <div className="absolute -right-3 bottom-12 bg-slate-800 border border-white/15 text-slate-200 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
        +47 avis 5 ★
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 z-10">
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left column ── */}
          <div className="flex flex-col items-start gap-7">
            {/* H1 */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.04]">
              <span className="block">Votre prochain</span>
              <span className="block">client cherche</span>
              <span className="block">sur Google.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
              Je crée des{" "}
              <span className="text-white font-semibold">sites internet</span>{" "}
              et des{" "}
              <span className="text-white font-semibold">fiches Google</span>{" "}
              qui transforment les recherches locales en appels - pour les
              artisans et professionnels de l&apos;Avesnois.
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5">
              {[
                "Site vitrine livré en 2 à 3 semaines",
                "Fiche Google dans le Top 3 local",
                "Devis gratuit répondu sous 24h",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Check size={11} className="text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 bg-cta rounded-full text-white font-bold text-sm transition-all duration-200 hover:bg-cta-hover hover:shadow-[0_0_36px_-8px_rgba(249,115,22,0.7)] active:scale-95"
              >
                Devis gratuit en 24h
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <a
                href={`tel:${siteInfo.phone}`}
                className="inline-flex items-center gap-2 h-12 px-7 border border-white/15 rounded-full text-white font-medium text-sm hover:border-white/35 hover:bg-white/[0.04] transition-all duration-200 active:scale-95"
              >
                <Phone size={15} className="text-primary" />
                {siteInfo.phoneDisplay}
              </a>
            </div>

            {/* Stats row */}
            <div className="w-full pt-2 border-t border-white/[0.06]">
              <div className="flex items-center gap-8 mb-3">
                {hero.stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-2xl font-extrabold text-white leading-none">
                      {value}
                    </span>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              {/* Trust signal */}
              <p className="text-[11px] text-slate-600 flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-700 flex items-center justify-center text-[8px] text-slate-400">
                  ✓
                </span>
                Auto-entrepreneur · SIRET {siteInfo.siret} · Fourmies, Nord
              </p>
            </div>
          </div>

          {/* ── Right column – Google mockup ── */}
          <div className="hidden lg:flex items-center justify-center py-8">
            <GoogleLocalPackMockup />
          </div>
        </div>
      </div>
    </header>
  );
}
