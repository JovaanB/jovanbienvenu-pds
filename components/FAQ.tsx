'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/site'
import FadeIn from '@/components/FadeIn'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-28 relative z-10 bg-black/10">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Questions fréquentes</h2>
            <p className="text-slate-400 mt-4">
              Toutes les réponses aux questions que se posent les artisans et commerçants.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="border border-white/8 rounded-2xl bg-surface-dark/40 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm md:text-base font-semibold text-white leading-relaxed">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 mt-0.5 text-slate-400 group-hover:text-primary transition-all duration-300 ${
                      open === i ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === i ? 'max-h-80' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
