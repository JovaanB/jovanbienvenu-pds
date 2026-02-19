/**
 * Helper GA4 — fire un event uniquement si gtag est chargé.
 * Ne fait rien en local (tant que NEXT_PUBLIC_GA_ID est le placeholder).
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', name, params)
  }
}
