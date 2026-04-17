type AppBannerProps = {
  headline?: string
  subline?: string
}

export default function AppBanner({
  headline = 'Handle your whole incident in the CLOAK app',
  subline = 'Checklists, contacts, and secure notes — built for stressful moments.',
}: AppBannerProps) {
  const storeButtonStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    padding: '10px 20px',
    fontSize: 13,
    fontWeight: 500,
    color: '#F1F5F9',
    cursor: 'pointer',
    fontFamily: 'DM Sans, sans-serif',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <section id="app" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 60px' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(45,212,191,0.08) 0%, rgba(30,40,64,0.5) 100%)',
          border: '1px solid rgba(45,212,191,0.25)',
          borderRadius: 16,
          padding: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap'
        }}
      >
        <div style={{ minWidth: 0, flex: '1 1 280px' }}>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 22,
              color: '#F1F5F9',
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            {headline}
          </h2>
          {subline ? (
            <p style={{ fontSize: 14, color: '#94A3B8', fontWeight: 300, margin: 0, maxWidth: 480, lineHeight: 1.6 }}>
              {subline}
            </p>
          ) : null}
        </div>
        <div style={{ display: 'flex', gap: 10, flexShrink: 0, flexWrap: 'wrap' }}>
          <a
            href="https://apps.apple.com/app/cloak"
            target="_blank"
            rel="noopener noreferrer"
            style={storeButtonStyle}
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=au.cloak.app"
            target="_blank"
            rel="noopener noreferrer"
            style={storeButtonStyle}
          >
            Google Play
          </a>
        </div>
      </div>
    </section>
  )
}
