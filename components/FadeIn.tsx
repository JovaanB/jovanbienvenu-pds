'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: FadeInProps) {
  const reduced = useReducedMotion()

  const offset = reduced
    ? { y: 0, x: 0 }
    : {
        up:    { y: 22, x: 0 },
        down:  { y: -22, x: 0 },
        left:  { y: 0, x: 24 },
        right: { y: 0, x: -24 },
        none:  { y: 0, x: 0 },
      }[direction]

  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: reduced ? 0 : 0.6,
        delay: reduced ? 0 : delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
