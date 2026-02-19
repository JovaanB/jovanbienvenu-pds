import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";
import type { Realisation } from "@/data/realisations";

const typeColors: Record<string, string> = {
  "Site Vitrine": "bg-blue-950/85 text-blue-300 border-blue-500/30 backdrop-blur-sm",
  "SEO Local": "bg-purple-950/85 text-purple-300 border-purple-500/30 backdrop-blur-sm",
  "Site + SEO": "bg-amber-950/85 text-amber-300 border-amber-500/30 backdrop-blur-sm",
};

interface RealisationCardProps {
  realisation: Realisation;
}

export default function RealisationCard({ realisation }: RealisationCardProps) {
  const {
    titre,
    client,
    secteur,
    ville,
    type,
    description,
    resultat,
    image,
    url,
  } = realisation;

  return (
    <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-surface-dark overflow-hidden card-hover">
      {/* Image / placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 border-b border-white/5 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={`${client} — ${titre}`}
            fill
            className="object-contain p-3"
          />
        ) : (
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🖥️</span>
            </div>
            <p className="text-slate-600 text-xs">Aperçu bientôt disponible</p>
          </div>
        )}

        {/* Type badge */}
        <span
          className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${typeColors[type] ?? "bg-white/10 text-slate-300 border-white/10"}`}
        >
          {type}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-white font-bold text-lg leading-tight">
            {client}
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs text-slate-500">{secteur}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin size={10} />
              {ville}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Result */}
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
          <p className="text-emerald-400 text-xs font-medium">✅ {resultat}</p>
        </div>

        {/* External link */}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-blue-300 transition-colors font-medium"
          >
            Voir le site <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}
