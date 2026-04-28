'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '@/lib/site'
import FadeIn from '@/components/FadeIn'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-28 relative z-10 bg-bg-alt">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="pill-badge mb-4 inline-flex"><HelpCircle size={13} />FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mt-3">Vos questions, mes réponses</h2>
            <p className="text-ink-3 mt-4">
              Ce que les artisans me demandent avant de démarrer — réponses directes.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className={`border rounded-2xl bg-white overflow-hidden transition-all duration-200 ${
                open === i ? 'border-primary/30 shadow-card-hover' : 'border-border-warm shadow-card'
              }`}>
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm md:text-base font-semibold text-ink leading-relaxed">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0 mt-0.5"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-colors duration-200 ${
                        open === i ? 'text-primary' : 'text-ink-4 group-hover:text-primary'
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border-soft pt-4">
                        <p className="text-ink-3 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
