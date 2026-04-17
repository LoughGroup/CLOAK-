'use client'

import { useEffect, useRef } from 'react'

const ICONS = [
  '📱', // phone
  '👛', // wallet
  '🛂', // passport
  '🔑', // keys
  '💳', // card
  '🚗', // car
  '💻', // laptop
  '🎒', // bag
  '✉️', // mail
  '🐶', // pet
  '🪪', // licence
  '📦', // parcel
  '🔐', // security
  '🏠', // house
  '📷', // camera
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

export default function FloatingIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const init = () => {
      particles = Array.from({ length: 28 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        size: Math.random() * 10 + 20,
        opacity: Math.random() * 0.35 + 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        // Move
        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotationSpeed

        // Wrap edges with padding
        const pad = 40
        if (p.x < -pad) p.x = canvas.width + pad
        if (p.x > canvas.width + pad) p.x = -pad
        if (p.y < -pad) p.y = canvas.height + pad
        if (p.y > canvas.height + pad) p.y = -pad

        // Draw icon
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

      // Draw subtle connection lines between nearby icons
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / 120) * 0.04
            ctx.strokeStyle = '#2DD4BF'
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

    resize()
    init()
    draw()

    const handleResize = () => {
      resize()
      init()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
