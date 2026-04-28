'use client'

import { useState } from 'react'
import { Send, CheckCircle, RotateCcw, Loader2 } from 'lucide-react'
import { contactConfig } from '@/lib/site'
import { trackEvent } from '@/lib/gtag'

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-white border border-border-warm text-ink placeholder-ink-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors duration-200'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    if (!data.service || (data.service as string).trim() === '') {
      setErrorMsg('Veuillez sélectionner un service.')
      setStatus('error')
      return
    }
    if (!data.telephone || (data.telephone as string).trim() === '') {
      setErrorMsg('Veuillez renseigner votre numéro de téléphone.')
      setStatus('error')
      return
    }
    if (!data.message || (data.message as string).trim().length < 10) {
      setErrorMsg('Votre message doit contenir au moins 10 caractères.')
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        trackEvent('generate_lead', { method: 'contact_form' })
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json()
        setErrorMsg(json.error ?? 'Une erreur est survenue.')
        setStatus('error')
      }
    } catch {
      setErrorMsg("Impossible d'envoyer le formulaire. Veuillez réessayer.")
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white border border-border-warm rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center gap-5 py-16 text-center shadow-card">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
          <CheckCircle size={36} className="text-emerald-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-ink mb-2">{contactConfig.successTitle}</h3>
          <p className="text-ink-3 text-sm">{contactConfig.successMessage}</p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors mt-2"
        >
          <RotateCcw size={14} />
          Envoyer une autre demande
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-border-warm rounded-2xl p-8 md:p-10 shadow-card">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Nom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-ink-2 mb-2">
              Prénom <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="prenom"
              type="text"
              name="prenom"
              required
              autoComplete="given-name"
              placeholder="Jean"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-ink-2 mb-2">
              Nom <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="nom"
              type="text"
              name="nom"
              required
              autoComplete="family-name"
              placeholder="Dupont"
              className={inputClass}
            />
          </div>
        </div>

        {/* Email + Téléphone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink-2 mb-2">
              Email <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="jean@exemple.fr"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-ink-2 mb-2">
              Téléphone <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="telephone"
              type="tel"
              name="telephone"
              required
              autoComplete="tel"
              placeholder="06 XX XX XX XX"
              className={inputClass}
            />
          </div>
        </div>

        {/* Ville + Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="ville" className="block text-sm font-medium text-ink-2 mb-2">Votre ville</label>
            <input
              id="ville"
              type="text"
              name="ville"
              autoComplete="address-level2"
              placeholder="Fourmies, Maubeuge…"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-ink-2 mb-2">
              Service souhaité <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={`${inputClass} cursor-pointer`}
            >
              <option value="" disabled>Choisissez un service…</option>
              {contactConfig.serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink-2 mb-2">
            Votre message <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={5}
            placeholder="Décrivez votre projet, votre activité, vos besoins…"
            className={`${inputClass} resize-none`}
          />
          <p className="text-xs text-ink-4 mt-1">Minimum 10 caractères.</p>
        </div>

        {/* Error */}
        {status === 'error' && (
          <div role="alert" className="p-3 rounded-xl bg-red-50 border border-red-200">
            <p className="text-red-600 text-sm">{errorMsg}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group btn-cta w-full flex items-center justify-center gap-2 py-4 px-8 disabled:opacity-60 disabled:cursor-not-allowed rounded-full font-bold"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              <span>Envoi en cours…</span>
            </>
          ) : (
            <>
              <Send
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
              {contactConfig.submitLabel}
            </>
          )}
        </button>

        {/* RGPD */}
        <p className="text-center text-xs text-ink-4 leading-relaxed">
          {contactConfig.privacyNote}
          <br />
          Conformément au RGPD, vos données ne sont pas revendues et peuvent être supprimées sur
          simple demande.
        </p>
      </form>
    </div>
  )
}
