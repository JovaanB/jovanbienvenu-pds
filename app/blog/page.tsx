import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { buildMetadata, buildBreadcrumbSchema, SITE_URL } from "@/lib/metadata";
import { articles, formatDate } from "@/lib/blog";
import FadeIn from "@/components/FadeIn";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Conseils création de site internet et SEO local pour artisans",
  description:
    "Guides pratiques et conseils SEO pour artisans et commerçants de l'Avesnois : prix site internet, Google, visibilité locale. Par Jovan, développeur web à Fourmies.",
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

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-purple-900/8 rounded-full blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-36 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              Ressources
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Conseils &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                guides pratiques
              </span>
            </h1>
            <p className="text-slate-400">
              Tout ce qu'un artisan ou commerçant doit savoir pour gagner en
              visibilité en ligne — sans jargon, sans prise de tête.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles grid */}
      <section className="relative z-10 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 100}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-white/8 bg-surface-dark hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Category banner */}
                  <div className="h-1.5 bg-gradient-to-r from-primary to-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${article.categoryColor}`}
                      >
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 text-xs">
                        <Clock size={11} />
                        {article.readTime} min
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <Calendar size={11} />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                        Lire
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn>
            <div className="mt-16 text-center p-8 rounded-2xl border border-white/8 bg-surface-dark">
              <p className="text-white font-bold text-lg mb-2">
                Un projet en tête ?
              </p>
              <p className="text-slate-400 text-sm mb-6">
                Ces guides vous ont donné des idées ? Discutons de votre
                situation concrète — c'est gratuit.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-colors text-sm"
              >
                Demander un audit gratuit
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
