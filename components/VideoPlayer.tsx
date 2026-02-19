'use client'

import { useEffect, useRef } from 'react'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
}

/**
 * Wrapper HTML5 <video> pour le fichier MP4 local (motion design).
 * Lazy loading via IntersectionObserver : la vidéo ne commence à charger
 * que lorsqu'elle entre dans le viewport → zéro impact sur le LCP initial.
 */
export default function VideoPlayer({ src, poster, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        // Injecter le src uniquement quand la vidéo est visible
        const source = video.querySelector('source')
        if (source && !source.src) {
          source.src = source.dataset.src ?? ''
          video.load()
          video.play().catch(() => {
            // Autoplay bloqué par le navigateur → pas d'erreur silencieuse
          })
        }
        observer.disconnect()
      },
      { rootMargin: '200px' } // Précharge 200px avant l'entrée dans le viewport
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-surface-dark ${className}`}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={poster}
        preload="none"
        className="w-full h-full object-cover"
      >
        {/* data-src au lieu de src : le navigateur ne fait aucune requête avant le scroll */}
        <source data-src={src} type="video/mp4" />
        <p className="text-slate-400 text-sm p-4">
          Votre navigateur ne supporte pas la lecture vidéo.{' '}
          <a href={src} className="text-primary underline" download>
            Télécharger la vidéo
          </a>
        </p>
      </video>
    </div>
  )
}
