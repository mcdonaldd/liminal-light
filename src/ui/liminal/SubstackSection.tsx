'use client'

export default function SubstackSection() {
  return (
    <section
      id="substack"
      style={{
        position: 'relative',
        marginTop: '-2px',
        backgroundColor: 'var(--color-bg-primary)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-xl)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'var(--space-12)',
          alignItems: 'center',
        }}
      >
        {/* Text */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 'var(--text-sm)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
              marginBottom: 'var(--space-4)',
            }}
          >
            The Writing
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-4xl))',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Where the thinking happens out loud.
          </h2>

          <p
            style={{
              fontWeight: 300,
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-secondary)',
              maxWidth: '55ch',
            }}
          >
            Essays on healing, identity, systems, and what it means to live in a body while working
            in tech. Published on Substack.
          </p>
        </div>

        {/* Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <a
            href="https://liminalight.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--space-3) var(--space-6)',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'transparent',
              border: '1.5px solid var(--color-accent-teal)',
              color: 'var(--color-accent-teal)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 'var(--text-sm)',
              letterSpacing: 'var(--tracking-wide)',
              textDecoration: 'none',
              transition: 'background-color var(--duration-fast) var(--ease-out)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.backgroundColor = 'rgba(63,182,201,0.08)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.backgroundColor = 'transparent'
            }}
          >
            Read on Substack →
          </a>
        </div>
      </div>
    </section>
  )
}
