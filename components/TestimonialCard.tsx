import { Star } from 'lucide-react'
import type { Temoignage } from '@/data/temoignages'

interface TestimonialCardProps {
  temoignage: Temoignage
}

export default function TestimonialCard({ temoignage }: TestimonialCardProps) {
  const { nom, ville, metier, note, texte, date } = temoignage

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border-warm bg-white p-6 card-hover h-full shadow-card">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: note }).map((_, i) => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Text */}
      <blockquote className="text-ink-2 text-sm leading-relaxed flex-1">
        &ldquo;{texte}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="border-t border-border-soft pt-4">
        <p className="text-ink font-semibold text-sm">{nom}</p>
        <p className="text-ink-4 text-xs mt-1">{metier} · {ville} · {date}</p>
      </div>
    </div>
  )
}
