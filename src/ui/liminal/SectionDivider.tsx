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
          width: 40,
          height: 1,
          backgroundColor: 'var(--color-accent-gold)',
          opacity: 0.4,
        }}
      />
      <div
        style={{
          width: 5,
          height: 5,
          backgroundColor: 'var(--color-accent-gold)',
          transform: 'rotate(45deg)',
          flexShrink: 0,
          opacity: 0.8,
        }}
      />
      <div
        style={{
          width: 40,
          height: 1,
          backgroundColor: 'var(--color-accent-gold)',
          opacity: 0.4,
        }}
      />
    </div>
  )
}
