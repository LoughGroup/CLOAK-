'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/guides', label: 'Emergency guides' },
  { href: '/calculator', label: 'Cost calculator' },
  { href: '/about', label: 'How it works' },
  { href: '/stories', label: 'Real incidents' },
  { href: '/tools', label: 'Trusted tools' },
] as const

const linkBaseColor = '#94A3B8'
const linkHoverColor = '#F1F5F9'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(11,15,26,0.97)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
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
            color: '#F1F5F9',
            textDecoration: 'none',
          }}
        >
          CLO<span style={{ color: '#2DD4BF' }}>A</span>K
        </Link>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: 14, color: linkBaseColor, textDecoration: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = linkHoverColor
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = linkBaseColor
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#app"
            style={{
              background: '#2DD4BF',
              color: '#0B0F1A',
              fontWeight: 600,
              padding: '8px 18px',
              borderRadius: 8,
              border: 'none',
              fontSize: 14,
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              textDecoration: 'none',
            }}
          >
            Get the app
          </a>
        </div>

        <button
          type="button"
          className="nav-menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            borderRadius: 8,
            padding: 8,
            color: '#F1F5F9',
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
            borderTop: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(17,24,39,0.98)',
            padding: '16px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: 14, color: linkBaseColor, textDecoration: 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = linkHoverColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = linkBaseColor
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#app"
              style={{
                background: '#2DD4BF',
                color: '#0B0F1A',
                fontWeight: 600,
                padding: '8px 18px',
                borderRadius: 8,
                border: 'none',
                fontSize: 14,
                cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
                textDecoration: 'none',
                width: 'fit-content',
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
