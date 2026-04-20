'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

interface FadeUpProps {
  children: ReactNode
  delay?: number // stagger delay in seconds e.g. 0.1, 0.2, 0.3
  duration?: number // animation duration, default 0.5
  className?: string
  style?: CSSProperties
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  className,
  style,
}: FadeUpProps) {
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

