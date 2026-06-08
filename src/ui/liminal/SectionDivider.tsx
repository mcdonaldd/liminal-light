export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-3)',
        marginBlock: 'var(--space-16)',
      }}
    >
      <div
        style={{
          width: 64,
          height: 1,
          backgroundColor: 'var(--color-accent-gold)',
          opacity: 0.7,
        }}
      />
      <div
        style={{
          width: 6,
          height: 6,
          backgroundColor: 'var(--color-accent-gold)',
          transform: 'rotate(45deg)',
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: 64,
          height: 1,
          backgroundColor: 'var(--color-accent-gold)',
          opacity: 0.7,
        }}
      />
    </div>
  )
}
