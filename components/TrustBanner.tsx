import { trustItems } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

export default function TrustBanner() {
  return (
    <section className="border-y border-white/5 bg-black/30 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 lg:divide-x divide-white/10">
            {trustItems.map(({ Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-4 lg:justify-center px-4 sm:px-6"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">
                    {label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
