import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  priceLabel?: string
  features: string[]
  ctaLabel: string
  href: string
  badge?: string
  highlighted?: boolean
}

export default function ServiceCard({
  title,
  description,
  price,
  priceLabel = 'forfait unique',
  features,
  ctaLabel,
  href,
  badge,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 card-hover ${
        highlighted
          ? 'border-primary/40 bg-gradient-to-b from-primary/10 to-surface-dark shadow-lg shadow-primary/10'
          : 'border-white/10 bg-surface-dark'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          {badge}
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold ${highlighted ? 'text-primary' : 'text-white'}`}>
            {price}
          </span>
          <span className="text-slate-400 text-sm">{priceLabel}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle
              size={16}
              className={`mt-0.5 shrink-0 ${highlighted ? 'text-primary' : 'text-emerald-400'}`}
            />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`group inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 ${
          highlighted
            ? 'bg-primary hover:bg-primary-hover text-white hover:shadow-[0_0_24px_-4px_rgba(19,91,236,0.6)]'
            : 'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20'
        }`}
      >
        {ctaLabel}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
