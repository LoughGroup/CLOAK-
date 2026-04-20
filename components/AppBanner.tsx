type AppBannerProps = {
  headline?: string
  subline?: string
}

export default function AppBanner({
  headline = 'Handle your whole incident in the CLOAK app',
  subline = 'Checklists, contacts, and secure notes — built for stressful moments.',
}: AppBannerProps) {
  const storeButtonStyle: React.CSSProperties = {
    background: 'var(--color-bg-card)',
    border: '1px solid var(--color-border)',
    borderRadius: 8,
    padding: '10px 20px',
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--color-text-primary)',
    cursor: 'pointer',
    fontFamily: 'DM Sans, sans-serif',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <section id="app" className="section-pad-y section-inset-x" style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div
        style={{
          background: 'var(--color-teal-muted)',
          border: '1px solid var(--color-teal-border)',
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
              color: 'var(--color-text-primary)',
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            {headline}
          </h2>
          {subline ? (
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', fontWeight: 300, margin: 0, maxWidth: 480, lineHeight: 1.6 }}>
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
