import { trustItems } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

export default function TrustBanner() {
  return (
    <section className="relative z-10 border-y border-white/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-violet-500/[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-7">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-0 lg:divide-x divide-white/[0.06]">
            {trustItems.map(({ Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-4 lg:justify-center lg:px-10"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={19} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">{label}</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
