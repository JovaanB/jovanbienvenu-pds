import { Phone, ChevronDown } from "lucide-react";
import { siteInfo, hero } from "@/lib/site";

/** Split subheadline around the highlighted word */
function HighlightedSubheadline() {
  const [before, after] = hero.subheadline.split(hero.subheadlineHighlight);
  return (
    <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
      {before}
      <span className="text-white font-medium">
        {hero.subheadlineHighlight}
      </span>
      {after}
    </p>
  );
}

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 z-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
          <span className="block text-gradient">{hero.headline1}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
            {hero.headline2}
          </span>
        </h1>

        <HighlightedSubheadline />

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href={hero.cta.primary.href}
            className="flex items-center justify-center gap-2 h-12 px-8 bg-primary rounded-full text-white font-bold transition-all duration-200 hover:bg-primary-hover hover:shadow-[0_0_32px_-6px_rgba(19,91,236,0.7)] active:scale-95"
          >
            {hero.cta.primary.label}
          </a>
          <a
            href={`tel:${siteInfo.phone}`}
            className="flex items-center gap-2 h-12 px-8 border border-white/20 rounded-full text-white font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-200 active:scale-95"
          >
            <Phone size={16} className="text-primary" />
            {hero.cta.secondary.label}
          </a>
        </div>

        {/* Mini-stats */}
        <div className="flex items-stretch mt-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden divide-x divide-white/10">
          {hero.stats.map(({ value, label }) => {
            const num = value.replace("%", "").replace("+", "");
            const suffix = value.includes("%")
              ? "%"
              : value.includes("+")
                ? "+"
                : "";
            return (
              <div key={label} className="flex flex-col items-center justify-center px-10 py-5 gap-1">
                <span className="text-4xl font-bold leading-none text-white">
                  {num}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                    {suffix}
                  </span>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 text-center">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
