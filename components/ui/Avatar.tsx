export function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-full)',
        background: 'var(--color-avatar-bg)',
        color: 'var(--color-avatar-text)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 600,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  )
}
