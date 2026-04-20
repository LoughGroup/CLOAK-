import type { CSSProperties } from 'react'
import Link from 'next/link'

const logoStyle: CSSProperties = {
  fontFamily: 'Syne, sans-serif',
  fontWeight: 800,
  fontSize: 20,
  letterSpacing: '0.15em',
  color: 'var(--color-bg-card)',
  textDecoration: 'none',
}

const linkStyle: CSSProperties = {
  display: 'block',
  fontSize: 'var(--font-size-sm)',
  color: 'rgb(var(--color-white-rgb) / 0.65)',
  textDecoration: 'none',
  marginBottom: 8,
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgb(var(--color-white-rgb) / 0.1)',
        padding: '48px 24px 32px',
        marginTop: 80,
        background: 'var(--color-navy)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 32,
            flexWrap: 'wrap',
            marginBottom: 40,
          }}
        >
          <div>
            <Link href="/" style={logoStyle}>
              CLO<span style={{ color: 'var(--color-teal-light)' }}>A</span>K
            </Link>
            <p
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'rgb(var(--color-white-rgb) / 0.65)',
                maxWidth: 260,
                lineHeight: 1.6,
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              Practical recovery steps for Australians — from stolen phones to identity incidents.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', marginLeft: 'auto' }}>
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-bg-card)',
                  marginBottom: 12,
                  marginTop: 0,
                }}
              >
                Guides
              </p>
              <Link href="/emergency" style={linkStyle} className="footer-link">
                Get Help Now
              </Link>
              <Link href="/guides" style={linkStyle} className="footer-link">
                Review Guides
              </Link>
              <Link href="/stories" style={{ ...linkStyle, marginBottom: 0 }} className="footer-link">
                About
              </Link>
            </div>
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-bg-card)',
                  marginBottom: 12,
                  marginTop: 0,
                }}
              >
                Company
              </p>
              <Link href="/about" style={linkStyle} className="footer-link">
                How it works
              </Link>
              <Link href="/tools" style={linkStyle} className="footer-link">
                Trusted Tools & Products
              </Link>
              <a href="mailto:CLOAKAPP@outlook.com" style={{ ...linkStyle, marginBottom: 0 }} className="footer-link">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid rgb(var(--color-white-rgb) / 0.1)',
            paddingTop: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            fontSize: 'var(--font-size-sm)',
            color: 'rgb(var(--color-white-rgb) / 0.65)',
          }}
        >
          <p style={{ margin: 0, maxWidth: 560, lineHeight: 1.6 }}>
            CLOAK does not provide legal, financial, or medical advice. In an emergency call 000.
          </p>
          <p style={{ margin: 0, color: 'rgb(var(--color-white-rgb) / 0.65)' }}>
            © {new Date().getFullYear()} CLOAK. All rights reserved.
          </p>
        </div>
      </div>
      <style>{`
        .footer-link:hover {
          color: var(--color-bg-card);
        }
      `}</style>
    </footer>
  )
}
