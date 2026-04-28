import { trustItems } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

export default function TrustBanner() {
  return (
    <section className="relative z-10 border-y border-border-warm bg-white">
      <div className="max-w-7xl mx-auto px-6 py-7">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-0 lg:divide-x divide-border-warm">
            {trustItems.map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4 lg:justify-center lg:px-10">
                <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={19} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink leading-tight">{label}</p>
                  <p className="text-xs text-ink-3 mt-0.5 font-medium">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
