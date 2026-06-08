const offerings = [
  {
    id: 1,
    topRuleColor: 'var(--color-accent-volt)',
    tagLabel: 'Energy',
    tagBg: 'var(--color-accent-volt)',
    tagColor: 'var(--color-text-primary)',
    title: 'In-Person Reiki & Vibrational Sound Therapy',
    body: 'A hands-on energy session combined with the resonant frequencies of metal Himalayan singing bowls. Reiki restores balance to your energetic system, while sound waves affect the body at a cellular level to promote healing and encourage a deep meditative state.',
    expect: 'A deeply restful, immersive sound and energy session in a quiet, grounded space. Custom plant and nature essences may be co-created during our time together to support your integration at home.',
    availability: 'Tuesdays & Thursdays',
    notice: null,
    ctaLabel: 'Book a session',
  },
  {
    id: 2,
    topRuleColor: 'var(--color-accent-teal)',
    tagLabel: 'Remote',
    tagBg: 'var(--color-accent-teal)',
    tagColor: 'var(--color-text-primary)',
    title: 'Remote Medicine Story & Guidance Sessions',
    body: 'Distance healing that bridges the physical divide to look at your life through a narrative and energetic lens. We walk through your Medicine Story — uncovering the root of current challenges — followed by a deep remote energy transmission to help you integrate clarity and emotional release.',
    expect: 'A collaborative phone or video consultation, a remote healing period where you rest at home, and a post-session check-in. Custom nature essences can be formulated and sent to you to support your ongoing alignment.',
    availability: null,
    notice: null,
    ctaLabel: 'Book a session',
  },
  {
    id: 3,
    topRuleColor: 'var(--color-accent-magenta)',
    tagLabel: 'Ceremony',
    tagBg: 'var(--color-accent-magenta)',
    tagColor: 'var(--color-text-on-dark)',
    title: 'Sacred Hapé Ceremony',
    body: 'A prayerful, intentional ceremony utilizing a sacred Amazonian plant blend administered through the breath to bring clarity to a specific, pressing life question. Hapé acts as a direct spiritual catalyst — cutting through intense mental noise to reveal a clear, grounded answer to a pertinent question, while purging stagnant energy from the body.',
    expect: 'A quiet, reverent ritual centered on your specific question, the administration of the medicine, and space for deep integration.',
    availability: null,
    notice: 'A brief consultation is required prior to booking. This ceremony may not be suitable for individuals with certain cardiovascular conditions, high blood pressure, pregnancy, or those taking specific medications.',
    ctaLabel: 'Request consultation',
  },
]

export default function OfferingsSection() {
  return (
    <section
      id="offerings"
      style={{
        position: 'relative',
        marginTop: '-2px',
        backgroundColor: 'var(--color-bg-primary)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: 'var(--space-12)', maxWidth: '55ch' }}>
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
            What we do together
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-4xl))',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-primary)',
            }}
          >
            The work meets you where you are.
          </h2>
        </div>

        {/* Card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-10)',
          }}
        >
          {offerings.map((offering) => (
            <article
              key={offering.id}
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
                borderTop: `3px solid ${offering.topRuleColor}`,
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Tag */}
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '2px var(--space-3)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: offering.tagBg,
                    color: offering.tagColor,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-wider)',
                    textTransform: 'uppercase',
                  }}
                >
                  {offering.tagLabel}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'var(--text-2xl)',
                  lineHeight: 'var(--leading-snug)',
                  color: 'var(--color-text-primary)',
                }}
              >
                {offering.title}
              </h3>

              {/* Body */}
              <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
                {offering.body}
              </p>

              {/* What to expect */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-wider)',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--space-1)',
                  }}
                >
                  What to expect
                </p>
                <p style={{ fontWeight: 300, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)', flex: 1 }}>
                  {offering.expect}
                </p>
              </div>

              {/* Availability */}
              {offering.availability && (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-wide)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {offering.availability}
                </p>
              )}

              {/* Notice */}
              {offering.notice && (
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 'var(--text-xs)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'var(--color-text-secondary)',
                    borderLeft: '2px solid var(--color-border)',
                    paddingLeft: 'var(--space-3)',
                  }}
                >
                  {offering.notice}
                </p>
              )}

              {/* CTA */}
              {/* TODO: replace href with booking platform URL */}
              <a href="#booking-placeholder" className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                {offering.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        {/* Free consultation callout */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-secondary)',
            textAlign: 'center',
          }}
        >
          Not sure which offering is right for you?{' '}
          <a
            href="#booking-cta"
            style={{
              color: 'var(--color-text-primary)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: 600,
            }}
          >
            Start with the free 15-minute call.
          </a>
        </p>
      </div>
    </section>
  )
}
