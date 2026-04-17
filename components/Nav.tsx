'use client'

import type { CSSProperties } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/emergency', label: 'Get Help Now' },
  { href: '/guides', label: 'Review Guides' },
  { href: '/about', label: 'How it works' },
  { href: '/stories', label: 'About' },
  { href: '/tools', label: 'Trusted Tools & Products' },
] as const

const navCtaStyle: CSSProperties = {
  background: 'var(--color-teal)',
  color: 'var(--color-bg-card)',
  fontWeight: 600,
  padding: '8px 20px',
  borderRadius: 'var(--radius-md)',
  border: 'none',
  fontSize: 'var(--font-size-sm)',
  cursor: 'pointer',
  fontFamily: 'DM Sans, sans-serif',
  textDecoration: 'none',
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--color-navy)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: '0.15em',
            color: 'var(--color-bg-card)',
            textDecoration: 'none',
          }}
        >
          CLO<span style={{ color: 'var(--color-teal-light)' }}>A</span>K
        </Link>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <a href="#app" style={navCtaStyle}>
            Get the app
          </a>
        </div>

        <button
          type="button"
          className="nav-menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            borderRadius: 'var(--radius-md)',
            padding: 8,
            color: 'var(--color-bg-card)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      {open ? (
        <div
          style={{
            background: 'var(--color-navy)',
            padding: 0,
          }}
        >
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
                padding: '16px 24px',
                borderBottom: i < links.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
              }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <a
              href="#app"
              style={{
                ...navCtaStyle,
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
              }}
              onClick={() => setOpen(false)}
            >
              Get the app
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
