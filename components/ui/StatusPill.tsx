export function StatusPill({
  status,
  detail,
}: {
  status: 'recovered' | 'ongoing' | 'contained'
  detail?: string
}) {
  const color =
    status === 'recovered'
      ? 'var(--color-teal)'
      : status === 'contained'
        ? 'var(--color-amber)'
        : 'var(--color-text-muted)'

  const label =
    status === 'recovered' ? 'Recovered' : status === 'contained' ? 'Contained' : 'Ongoing'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: 'var(--radius-full)',
          background: color,
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color }}>{label}</span>
      {detail ? (
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
          {' · '}
          {detail}
        </span>
      ) : null}
    </div>
  )
}
