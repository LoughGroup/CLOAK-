import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export function Card({
  children,
  variant = 'default',
  className,
  style,
  ...rest
}: {
  children: ReactNode
  variant?: 'default' | 'teal' | 'amber' | 'flat'
  className?: string
  style?: CSSProperties
} & Omit<HTMLAttributes<HTMLDivElement>, 'style'>) {
  const borderColor = {
    default: 'var(--color-border)',
    teal: 'var(--color-border-teal)',
    amber: 'var(--color-amber)',
    flat: 'var(--color-border)',
  }[variant]

  const background =
    variant === 'amber'
      ? 'var(--color-amber-light)'
      : variant === 'teal'
        ? 'var(--color-teal-muted)'
        : 'var(--color-bg-card)'

  return (
    <div
      style={{
        background,
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-lg)',
        padding: '20px 24px',
        boxShadow: variant === 'flat' ? 'none' : 'var(--shadow-card)',
        ...style,
      }}
      className={className}
      {...rest}
    >
      {children}
    </div>
  )
}
