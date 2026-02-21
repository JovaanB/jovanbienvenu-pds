import { Star } from 'lucide-react'
import type { Temoignage } from '@/data/temoignages'

interface TestimonialCardProps {
  temoignage: Temoignage
}

export default function TestimonialCard({ temoignage }: TestimonialCardProps) {
  const { nom, ville, metier, note, texte, date } = temoignage

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-surface-dark p-6 card-hover h-full">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: note }).map((_, i) => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Testimonial text */}
      <blockquote className="text-slate-300 text-sm leading-relaxed flex-1">
        &ldquo;{texte}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="border-t border-white/5 pt-4">
        <p className="text-white font-semibold text-sm">{nom}</p>
        <p className="text-slate-500 text-xs mt-1">
          {metier} · {ville} · {date}
        </p>
      </div>
    </div>
  )
}
