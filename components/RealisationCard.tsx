import Image from "next/image";
import { ExternalLink, MapPin, Monitor, TrendingUp } from "lucide-react";
import type { Realisation } from "@/data/realisations";

const typeColors: Record<string, string> = {
  "Site Vitrine": "bg-white text-primary border-primary/25 shadow-sm",
  "SEO Local":    "bg-white text-primary border-primary/25 shadow-sm",
  "Site + SEO":   "bg-white text-primary border-primary/25 shadow-sm",
};

interface RealisationCardProps {
  realisation: Realisation;
}

export default function RealisationCard({ realisation }: RealisationCardProps) {
  const { titre, client, secteur, ville, type, description, resultat, image, url } = realisation;

  return (
    <div className="h-full flex flex-col rounded-2xl border border-border-warm bg-white overflow-hidden card-hover shadow-card">
      {/* Image / placeholder */}
      <div className="relative h-48 bg-stone-50 border-b border-border-soft flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={`${client} - ${titre}`}
            fill
            className="object-contain p-3"
          />
        ) : (
          <div className="text-center flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center">
              <Monitor size={22} className="text-ink-4" />
            </div>
            <p className="text-ink-4 text-xs">Aperçu bientôt disponible</p>
          </div>
        )}

        {/* Type badge */}
        <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${typeColors[type] ?? "bg-stone-100 text-stone-600 border-stone-200"}`}>
          {type}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-ink font-bold text-lg leading-tight">{client}</h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs text-ink-4">{secteur}</span>
            <span className="w-1 h-1 rounded-full bg-border-warm" />
            <span className="flex items-center gap-1 text-xs text-ink-4">
              <MapPin size={10} />
              {ville}
            </span>
          </div>
        </div>

        <p className="text-sm text-ink-3 leading-relaxed mb-4 flex-1">{description}</p>

        {/* Result */}
        <div className="p-3 rounded-xl bg-primary/5 border border-primary/15 mb-4 flex items-start gap-2">
          <TrendingUp size={13} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-primary text-xs font-medium">{resultat}</p>
        </div>

        {/* External link */}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover transition-colors font-medium"
          >
            Voir le site <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}
