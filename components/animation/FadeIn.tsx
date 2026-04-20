'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  style?: CSSProperties
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
  style,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

