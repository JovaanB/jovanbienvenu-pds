'use client'

import { useState } from 'react'
import { Send, CheckCircle, RotateCcw, Loader2 } from 'lucide-react'
import { contactConfig } from '@/lib/site'
import { trackEvent } from '@/lib/gtag'

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // Validation côté client
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
      <div className="bg-surface-dark border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center gap-5 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
          <CheckCircle size={36} className="text-green-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{contactConfig.successTitle}</h3>
          <p className="text-slate-400 text-sm">{contactConfig.successMessage}</p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-blue-300 transition-colors mt-2"
        >
          <RotateCcw size={14} />
          Envoyer une autre demande
        </button>
      </div>
    )
  }

  return (
    <div className="bg-surface-dark border border-white/10 rounded-2xl p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Nom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Prénom <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="prenom"
              required
              placeholder="Jean"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Nom <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="nom"
              required
              placeholder="Dupont"
              className={inputClass}
            />
          </div>
        </div>

        {/* Email + Téléphone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="jean@exemple.fr"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Téléphone <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              name="telephone"
              required
              placeholder="06 XX XX XX XX"
              className={inputClass}
            />
          </div>
        </div>

        {/* Ville + Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Votre ville</label>
            <input
              type="text"
              name="ville"
              placeholder="Fourmies, Maubeuge…"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Service souhaité <span className="text-primary">*</span>
            </label>
            <select
              name="service"
              required
              defaultValue=""
              className={`${inputClass} cursor-pointer`}
            >
              <option value="" disabled className="bg-gray-900 text-slate-500">
                Choisissez un service…
              </option>
              {contactConfig.serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-gray-900">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Votre message <span className="text-primary">*</span>
          </label>
          <textarea
            name="message"
            required
            minLength={10}
            rows={5}
            placeholder="Décrivez votre projet, votre activité, vos besoins…"
            className={`${inputClass} resize-none`}
          />
          <p className="text-xs text-slate-600 mt-1">Minimum 10 caractères.</p>
        </div>

        {/* Error */}
        {status === 'error' && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 text-sm">{errorMsg}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group w-full flex items-center justify-center gap-2 py-4 px-8 bg-primary hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed rounded-xl text-white font-bold transition-all duration-200 hover:shadow-[0_0_32px_-6px_rgba(19,91,236,0.7)] active:scale-95"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Envoi en cours…
            </>
          ) : (
            <>
              <Send
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
              {contactConfig.submitLabel}
            </>
          )}
        </button>

        {/* RGPD */}
        <p className="text-center text-xs text-slate-600 leading-relaxed">
          {contactConfig.privacyNote}
          <br />
          Conformément au RGPD, vos données ne sont pas revendues et peuvent être supprimées sur
          simple demande.
        </p>
      </form>
    </div>
  )
}
