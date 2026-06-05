export default function SubstackSection() {
  return (
    <section
      id="substack"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-accent-gold) 12%, var(--color-bg-primary))',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-md)',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p className="label-caps" style={{ marginBottom: 'var(--space-4)' }}>
          [PLACEHOLDER — Substack section eyebrow label, e.g. "Writing"]
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'var(--text-4xl)',
            lineHeight: 'var(--leading-snug)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-6)',
          }}
        >
          [PLACEHOLDER — Substack section heading, e.g. "Words on the threshold."]
        </h2>

        <p
          style={{
            fontWeight: 300,
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'var(--color-text-secondary)',
            maxWidth: '55ch',
            margin: '0 auto var(--space-10)',
          }}
        >
          [PLACEHOLDER — Substack pitch: 1–2 sentences about what Nathan writes about and why readers should subscribe.]
        </p>

        {/* TODO: replace href with Nathan's Substack URL */}
        <a
          href="#"
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read Nathan's Substack (opens in new tab)"
        >
          Read on Substack →
        </a>
      </div>
    </section>
  )
}
