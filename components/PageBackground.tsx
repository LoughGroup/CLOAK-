'use client'

import { useEffect, useRef } from 'react'

const ICONS = [
  '📱', '👛', '🛂', '🔑', '💳', '🚗', '💻',
  '🎒', '✉️', '🐶', '🪪', '📦', '🔐', '🏠', '📷',
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  icon: string
  size: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

type PageBackgroundProps = {
  /** When true, fills the nearest positioned ancestor instead of the viewport. */
  contained?: boolean
}

export default function PageBackground({ contained = false }: PageBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let tealStroke = '#1A9E8F'

    const readTealFromTokens = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue('--color-teal').trim()
      if (v) tealStroke = v
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      readTealFromTokens()
    }

    const init = () => {
      particles = Array.from({ length: 28 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        size: Math.random() * 10 + 18,
        opacity: Math.random() * 0.3 + 0.18,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.008,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotationSpeed

        const pad = 40
        if (p.x < -pad) p.x = canvas.width + pad
        if (p.x > canvas.width + pad) p.x = -pad
        if (p.y < -pad) p.y = canvas.height + pad
        if (p.y > canvas.height + pad) p.y = -pad

        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.font = `${p.size}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(p.icon, 0, 0)
        ctx.restore()
      })

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / 140) * 0.06
            ctx.strokeStyle = tealStroke
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationId = requestAnimationFrame(draw)
    }

    readTealFromTokens()
    resize()
    init()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: contained ? 'absolute' : 'fixed',
        top: 0,
        left: 0,
        width: contained ? '100%' : '100vw',
        height: contained ? '100%' : '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
