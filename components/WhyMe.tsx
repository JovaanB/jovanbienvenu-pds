import { whyItems } from "@/lib/site";
import FadeIn from "@/components/FadeIn";
import { CheckCircle } from "lucide-react";

export default function WhyMe() {
  return (
    <section className="py-28 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="pill-badge mb-4 inline-flex"><CheckCircle size={13} />Pourquoi me choisir</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight mt-3">
                Ce qui fait <br className="hidden md:block" />la différence
              </h2>
            </div>
            <p className="text-ink-3 max-w-sm leading-relaxed text-sm md:text-base">
              Pas une agence anonyme. Un professionnel local engagé, transparent, et accessible.
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyItems.map(({ Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 90}>
              <div className="group relative p-7 rounded-2xl bg-bg-base border border-border-warm hover:border-primary/25 transition-all duration-300 h-full flex flex-col gap-5 card-hover cursor-default">

                {/* Large number watermark */}
                <div className="absolute -top-1 -right-1 font-extrabold text-[5rem] text-ink/[0.025] leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Icon size={21} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2.5 flex-1">
                  <h3 className="text-base font-bold text-ink leading-tight">{title}</h3>
                  <p className="text-ink-3 text-sm leading-relaxed">{desc}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
