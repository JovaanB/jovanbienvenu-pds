import { temoignages } from "@/data/temoignages";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="pill-badge mb-4 inline-flex"><Star size={13} />Témoignages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 mt-3">
              Ils me font confiance.
            </h2>
            <p className="text-ink-3 max-w-xl mx-auto">
              Des retours clients réels, de l&apos;Avesnois — pas des avis générés.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {temoignages.map((t, i) => (
            <FadeIn key={t.id} delay={i * 80} className="h-full">
              <TestimonialCard temoignage={t} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
