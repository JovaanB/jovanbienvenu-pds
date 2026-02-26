"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Menu, X } from "lucide-react";
import { siteInfo, navLinks } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu mobile au changement de route
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-50 px-6 py-3 transition-all duration-300 ${
        mobileOpen
          ? "rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40"
          : scrolled
            ? "rounded-full glass-panel shadow-xl shadow-black/30"
            : "rounded-full bg-white/[0.03] border border-white/5"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-white group">
          <img src="/logo.png" alt={siteInfo.name} className="w-6 h-6" />
          <span className="text-lg font-bold tracking-tight">
            {siteInfo.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-primary after:-bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
                  isActive
                    ? "text-white after:w-full"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center justify-center h-9 px-5 bg-white text-gray-950 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
        >
          Devis gratuit
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors px-1 ${
                  isActive ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-10 px-5 bg-white text-gray-950 rounded-full text-xs font-bold uppercase tracking-wider mt-2"
          >
            Devis gratuit
          </Link>
        </div>
      )}
    </nav>
  );
}
