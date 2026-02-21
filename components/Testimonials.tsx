import { temoignages } from "@/data/temoignages";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
              Témoignages
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ce que disent mes clients
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Des artisans et commerçants de l'Avesnois qui ont fait confiance à
              mon travail.
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
