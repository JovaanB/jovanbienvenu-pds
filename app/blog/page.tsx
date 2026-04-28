import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { buildMetadata, buildBreadcrumbSchema, SITE_URL } from "@/lib/metadata";
import { articles, formatDate } from "@/lib/blog";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = buildMetadata({
  title: "Blog - Conseils création de site internet et SEO local pour artisans",
  description:
    "Guides pratiques et conseils SEO pour les professionnels de l'Avesnois : prix site internet, Google, visibilité locale. Par Jovan, développeur web à Fourmies.",
  path: "/blog",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", url: SITE_URL },
  { name: "Blog", url: `${SITE_URL}/blog` },
]);

export default function BlogPage() {
  return (
    <main className="relative">
      <SchemaOrg schema={breadcrumbSchema} />
      <div className="ambient-bg" />

      {/* Hero */}
      <section className="relative z-10 pt-36 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="pill-badge mb-4 inline-flex">Ressources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight mt-3">
              Conseils &{" "}
              <span className="text-gradient-primary">guides pratiques</span>
            </h1>
            <p className="text-ink-3">
              Tout ce qu&apos;un professionnel indépendant doit savoir pour gagner en
              visibilité en ligne - sans jargon, sans prise de tête.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles grid */}
      <section className="relative z-10 pb-24 px-6 bg-bg-alt">
        <div className="max-w-5xl mx-auto pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 100}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-border-warm bg-white hover:border-primary/30 hover:shadow-card transition-all duration-300 overflow-hidden"
                >
                  {/* Category banner */}
                  <div className="h-1.5 bg-gradient-to-r from-primary to-violet-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${article.categoryColor}`}
                      >
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-ink-4 text-xs">
                        <Clock size={11} />
                        {article.readTime} min
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-ink font-bold text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-ink-3 text-sm leading-relaxed flex-1 mb-4">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border-soft">
                      <span className="flex items-center gap-1.5 text-ink-4 text-xs">
                        <Calendar size={11} />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                        Lire
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn>
            <div className="mt-16 text-center p-8 rounded-2xl border border-border-warm bg-white shadow-card">
              <p className="text-ink font-bold text-lg mb-2">Un projet en tête ?</p>
              <p className="text-ink-3 text-sm mb-6">
                Ces guides vous ont donné des idées ? Discutons de votre
                situation concrète - c&apos;est gratuit.
              </p>
              <Link
                href="/contact"
                className="group btn-cta inline-flex items-center gap-2 h-11 px-6 rounded-full font-bold text-sm"
              >
                Obtenir mon devis gratuit
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
