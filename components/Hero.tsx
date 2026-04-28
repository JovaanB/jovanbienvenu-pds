"use client";

import { Phone, ArrowRight, Check, BadgeCheck, Star as StarLucide } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteInfo, hero } from "@/lib/site";

function CheckBadge() {
  return <BadgeCheck size={11} className="flex-shrink-0" />;
}
function StarBadge() {
  return <StarLucide size={10} className="fill-white flex-shrink-0" />;
}

/* ─── Animated headline ─────────────────────────────────────── */
function AnimatedTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Stars ─────────────────────────────────────────────────── */
function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-2.5 h-2.5 ${filled ? "fill-amber-400" : "fill-stone-200"}`}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

/* ─── Floating Google Maps Mockup ────────────────────────────── */
function GoogleLocalPackMockup() {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className="relative w-full max-w-[360px] mx-auto"
      initial={{ opacity: 0, y: reduced ? 0 : 24, scale: reduced ? 1 : 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-violet-300/20 blur-[60px] rounded-full scale-90 translate-y-6 pointer-events-none" />

      {/* Floating card */}
      <motion.div
        animate={reduced ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-white rounded-2xl shadow-float overflow-hidden text-ink text-sm ring-1 ring-border-warm"
      >
        {/* Search bar */}
        <div className="bg-stone-50 border-b border-border-warm px-3 py-2.5 flex items-center gap-2">
          <div className="flex-1 bg-white border border-border-warm rounded-full px-3 py-1.5 text-[11px] text-ink-3 flex items-center gap-1.5 shadow-sm">
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
          <p className="text-[9px] text-ink-4 font-semibold uppercase tracking-widest">
            Résultats locaux · Fourmies, Nord
          </p>
        </div>

        {/* Result 1 – featured */}
        <div className="mx-3 mb-2 bg-violet-50 border border-violet-200 rounded-xl p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white text-[7px] font-extrabold flex-shrink-0">
                  1
                </span>
                <p className="text-[12px] font-bold text-ink truncate">
                  Plomberie Martin
                </p>
              </div>
              <div className="flex items-center gap-1 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled />
                  ))}
                </div>
                <span className="text-[9px] text-ink-3 font-medium">
                  4.9 (47 avis)
                </span>
              </div>
              <p className="text-[9px] text-emerald-600 font-semibold">
                ● Ouvert · Ferme à 18h
              </p>
            </div>
            <div className="flex flex-col gap-1 flex-shrink-0">
              <button className="bg-emerald-600 text-white text-[9px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                Appeler
              </button>
              <button className="bg-white border border-border-warm text-ink-3 text-[9px] px-2 py-1 rounded-full whitespace-nowrap">
                Itinéraire
              </button>
            </div>
          </div>
        </div>

        {/* Result 2 */}
        <div className="mx-3 mb-2 bg-white border border-border-soft rounded-xl p-3 opacity-50">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-4 h-4 bg-stone-300 rounded-full flex items-center justify-center text-white text-[7px] font-extrabold flex-shrink-0">
              2
            </span>
            <p className="text-[11px] font-semibold text-ink-2 truncate">
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
            <span className="text-[9px] text-ink-4">4.1 (12)</span>
          </div>
        </div>

        {/* Result 3 */}
        <div className="mx-3 mb-3 bg-white border border-border-soft rounded-xl p-3 opacity-25">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-4 h-4 bg-stone-200 rounded-full flex items-center justify-center text-ink-4 text-[7px] font-extrabold flex-shrink-0">
              3
            </span>
            <p className="text-[11px] font-semibold text-ink-3 truncate">
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
            <span className="text-[9px] text-ink-4">3.2 (5)</span>
          </div>
        </div>

        {/* Map */}
        <div className="mx-3 mb-3 h-[68px] rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-50 to-sky-100" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />
          <div className="relative flex flex-col items-center justify-center h-full gap-0.5">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <span className="text-[8px] text-ink font-semibold bg-white px-1.5 py-0.5 rounded shadow-sm">
              Fourmies
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating badge overlays */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute -left-5 top-8 bg-ink text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1"
      >
        <CheckBadge />Top 3 Google
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute -right-3 bottom-12 bg-ink text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1"
      >
        <StarBadge />47 avis · 5/5
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 z-10 overflow-hidden">
      {/* Ghost grid texture */}
      <div className="absolute inset-0 ghost-grid pointer-events-none opacity-60" />

      {/* Scattered ghost boxes */}
      <div className="absolute top-24 left-8 w-16 h-10 rounded-xl border border-stone-900/[0.05] pointer-events-none hidden md:block" />
      <div className="absolute top-40 left-24 w-10 h-6 rounded-lg border border-stone-900/[0.04] pointer-events-none hidden md:block" />
      <div className="absolute bottom-32 right-12 w-20 h-12 rounded-xl border border-stone-900/[0.05] pointer-events-none hidden md:block" />
      <div className="absolute bottom-48 right-32 w-12 h-8 rounded-lg border border-stone-900/[0.04] pointer-events-none hidden md:block" />
      <div className="absolute top-32 right-16 w-8 h-5 rounded-md border border-stone-900/[0.03] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* ── Left column ── */}
          <div className="flex flex-col items-start gap-7">
            {/* H1 — word-by-word */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-ink leading-[1.05]">
              <span className="block">
                <AnimatedTitle text="Trouvé sur Google." />
              </span>
              <span className="block">
                <AnimatedTitle
                  text="Sans payer de pub."
                  className="text-gradient-primary"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-ink-3 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              Je crée votre{" "}
              <span className="text-ink font-semibold">site internet</span> et
              votre <span className="text-ink font-semibold">fiche Google</span>{" "}
              pour que vos clients vous trouvent — sans pub, sans abonnement.
              Pour les artisans et commerçants de l&apos;Avesnois.{" "}
              <span className="text-primary font-semibold">
                590€, forfait unique.
              </span>
            </motion.p>

            {/* Checklist */}
            <motion.ul
              className="space-y-2.5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              {[
                "Vous payez une fois. Vous restez visible des années.",
                "Vos clients vous appellent directement depuis Google Maps",
                "Devis gratuit — réponse sous 24h",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-ink-2"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Check size={11} className="text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-3 pt-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
            >
              <a
                href="/contact"
                className="group btn-cta inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full font-bold text-sm"
              >
                Devis gratuit en 24h
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <a
                href={`tel:${siteInfo.phone}`}
                className="inline-flex items-center gap-2 h-12 px-7 border border-border-warm rounded-full text-ink font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-200 active:scale-95 bg-white shadow-card"
              >
                <Phone size={15} className="text-primary" />
                {siteInfo.phoneDisplay}
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="w-full pt-2 border-t border-border-warm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="flex items-center gap-8 mb-3">
                {hero.stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-2xl font-extrabold text-ink leading-none">
                      {value}
                    </span>
                    <span className="text-[11px] text-ink-4 uppercase tracking-wider font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-ink-4 flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-border-warm flex items-center justify-center flex-shrink-0">
                  <Check size={7} className="text-ink-3" />
                </span>
                Auto-entrepreneur · SIRET {siteInfo.siret} · Fourmies, Nord
              </p>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <div className="hidden lg:flex items-center justify-center py-8">
            <GoogleLocalPackMockup />
          </div>
        </div>
      </div>
    </header>
  );
}
