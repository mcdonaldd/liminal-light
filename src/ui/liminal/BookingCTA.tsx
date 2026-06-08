import ArcTransition from './ArcTransition'

export default function BookingCTA() {
  return (
    <section
      id="booking-cta"
      style={{
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-2px',
        backgroundColor: 'var(--color-bg-dark)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      {/* Arc out to Substack */}
      <ArcTransition variant="bottom" fill="#EAD4A8" offset={0.38} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 'var(--container-xl)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'var(--space-12)',
          alignItems: 'center',
        }}
      >
        {/* Copy */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-teal)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Free consultation
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-5xl))',
              lineHeight: 'var(--leading-tight)',
              color: 'var(--color-text-on-dark)',
              marginBottom: 'var(--space-6)',
            }}
          >
            Not sure where to start?
            <br />
            Start with a conversation.
          </h2>

          <p
            style={{
              fontWeight: 300,
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-on-dark-muted)',
              maxWidth: '50ch',
            }}
          >
            A free 15-minute call. No pitch, no pressure. Just a chance to find out if this work is
            right for you.
          </p>
        </div>

        {/* Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          {/* TODO: replace href with booking platform URL */}
          <a href="#booking-placeholder" className="btn-primary" style={{ fontSize: 'var(--text-base)', padding: 'var(--space-4) var(--space-10)' }}>
            Book free call
          </a>
        </div>
      </div>
    </section>
  )
}
