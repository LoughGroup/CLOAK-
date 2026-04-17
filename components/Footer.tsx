import Link from 'next/link'

const logoStyle: React.CSSProperties = {
  fontFamily: 'Syne, sans-serif',
  fontWeight: 800,
  fontSize: 20,
  letterSpacing: '0.15em',
  color: '#F1F5F9',
  textDecoration: 'none',
}

const linkStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  color: '#94A3B8',
  textDecoration: 'none',
  marginBottom: 8,
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '48px 24px 32px', marginTop: 80 }}>
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
              CLO<span style={{ color: '#2DD4BF' }}>A</span>K
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', maxWidth: 260, lineHeight: 1.6, marginTop: 8, marginBottom: 0 }}>
              Practical recovery steps for Australians — from stolen phones to identity incidents.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#F1F5F9',
                  marginBottom: 12,
                  marginTop: 0,
                }}
              >
                Guides
              </p>
              <Link href="/guides" style={linkStyle}>
                Emergency guides
              </Link>
              <Link href="/calculator" style={linkStyle}>
                Cost calculator
              </Link>
              <Link href="/stories" style={{ ...linkStyle, marginBottom: 0 }}>
                Real incidents
              </Link>
            </div>
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#F1F5F9',
                  marginBottom: 12,
                  marginTop: 0,
                }}
              >
                Company
              </p>
              <Link href="/about" style={linkStyle}>
                How it works
              </Link>
              <Link href="/tools" style={linkStyle}>
                Trusted tools
              </Link>
              <a href="mailto:CLOAKAPP@outlook.com" style={{ ...linkStyle, marginBottom: 0 }}>
                Contact
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 8,
            fontSize: 12,
            color: '#94A3B8',
          }}
        >
          <p style={{ margin: 0, maxWidth: 560, lineHeight: 1.6 }}>
            CLOAK does not provide legal, financial, or medical advice. In an emergency call 000.
          </p>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} CLOAK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
