"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteInfo, navLinks } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    /*
      Wrapper div : gère le positionnement fixe + centrage CSS.
      motion.nav : gère uniquement l'animation d'entrée (y + opacity).
      Séparation nécessaire car Framer Motion écrase transform CSS
      quand il anime y, ce qui casse -translate-x-1/2.
    */
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[1160px] z-50">
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full px-5 py-3 transition-all duration-300 ${
          mobileOpen
            ? "rounded-2xl bg-white border border-border-warm shadow-float"
            : scrolled
            ? "rounded-full glass-panel shadow-float"
            : "rounded-full bg-white/80 border border-border-soft backdrop-blur-sm shadow-card"
        }`}
      >
        {/* ── Desktop ── */}
        <div className="relative hidden lg:flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <span className="text-base font-extrabold tracking-tight font-heading text-ink">
              {siteInfo.name}
            </span>
          </Link>

          {/* Liens centrés absolument */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-[13px] font-medium transition-colors duration-200 relative whitespace-nowrap ${
                    isActive ? "text-primary" : "text-ink-3 hover:text-ink"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center justify-center h-11 px-5 rounded-full text-[12px] font-bold uppercase tracking-wider flex-shrink-0"
          >
            Devis gratuit
          </Link>
        </div>

        {/* ── Mobile ── */}
        <div className="flex lg:hidden items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <span className="text-base font-extrabold tracking-tight font-heading text-ink">
              {siteInfo.name}
            </span>
          </Link>
          <button
            className="text-ink-2 p-2.5 -mr-1 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 pb-3 border-t border-border-soft pt-4 flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-sm font-medium px-2 py-2.5 -mx-2 rounded-lg transition-colors ${
                        isActive ? "text-primary" : "text-ink-3 hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="btn-cta inline-flex items-center justify-center h-10 px-5 rounded-full text-xs font-bold uppercase tracking-wider mt-2"
                >
                  Devis gratuit
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
