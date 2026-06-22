import RevealOnScroll from './RevealOnScroll'

export default function NarrativeBridge() {
  return (
    <section
      id="story"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-surface)',
        paddingTop: 'var(--space-24)',
        paddingBottom: 'calc(var(--space-24) + 48px)',
        paddingInline: 'var(--space-6)',
      }}
    >
      <div style={{ maxWidth: '65ch', margin: '0 auto' }}>

        <RevealOnScroll>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(var(--text-2xl), 3vw, var(--text-3xl))',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-8)',
            }}
          >
            You've probably been in your head for a long time.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            Not because something is wrong with you. Because you've been navigating things that required it. The pressure to perform, to manage, to hold it together. The quiet exhaustion that lives below the surface even when life looks fine from the outside.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={140}>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            That kind of weight doesn't resolve through more thinking. It needs somewhere to land.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-10)',
            }}
          >
            This work is a space for that. A place to stop managing and start listening. To drop out of the part of you that is always prepared, always solving, and let the body say what it knows. There is something underneath all that noise that hasn't been heard in a while. We go there together, slowly, at the pace that's right for you.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={260}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(var(--text-xl), 2.5vw, var(--text-2xl))',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-primary)',
            }}
          >
            You don't have to arrive with answers. You just have to arrive.
          </p>
        </RevealOnScroll>

      </div>
    </section>
  )
}
