export default function BookingCTA() {
  return (
    <section
      id="booking-cta"
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ember glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 100%, rgba(194,86,42,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 'var(--container-md)',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Lime eyebrow */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-wider)',
            textTransform: 'uppercase',
            color: 'var(--color-accent-lime)',
            marginBottom: 'var(--space-3)',
          }}
        >
          No commitment. No pressure.
        </p>

        {/* Gold sub-label */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-wider)',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: 'var(--space-6)',
          }}
        >
          Free Consultation
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-on-dark)',
            marginBottom: 'var(--space-6)',
          }}
        >
          [PLACEHOLDER — Booking CTA headline, e.g. "Start with a conversation."]
        </h2>

        <p
          style={{
            fontWeight: 300,
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'var(--color-text-on-dark-muted)',
            maxWidth: '50ch',
            margin: '0 auto var(--space-10)',
          }}
        >
          [PLACEHOLDER — Booking CTA body: 1–2 sentences about what to expect from the free consult.]
        </p>

        {/* CTA — href TBD */}
        <a
          href="#"
          className="btn-primary"
          style={{ fontSize: 'var(--text-base)', padding: 'var(--space-4) var(--space-10)' }}
          aria-label="Book a free 15-minute consultation (opens booking platform)"
        >
          Book Your Free 15-Minute Call
        </a>
      </div>
    </section>
  )
}
