import ArcTransition from './ArcTransition'
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
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>

        <RevealOnScroll>
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
            In Nathan's words
          </p>
          {/* Thin ember accent bar — a breath before the words begin */}
          <div
            aria-hidden="true"
            style={{
              width: 32,
              height: 2,
              backgroundColor: 'var(--color-accent-ember)',
              borderRadius: 2,
              opacity: 0.65,
              marginBottom: 'var(--space-10)',
            }}
          />
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-8)',
            }}
          >
            There is a specific kind of exhaustion that comes from navigating fast-paced, high-pressure systems. I know that world intimately because I spent over a decade leading AI and machine learning innovation at companies like Nike and Amazon, carrying the mental noise and the weight of holding everything together.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(var(--text-xl), 2.5vw, var(--text-2xl))',
              lineHeight: 1.5,
              color: 'var(--color-text-primary)',
              margin: '0 0 var(--space-8) 0',
              fontStyle: 'normal',
            }}
          >
            But that pressure is rarely just about work. It echoes in our families, our relationships, and the quiet patterns that keep us stuck. It manifests as a knot in the chest, a heaviness in the limbs, or the feeling of being an outsider in your own life.{' '}
            <em style={{ color: 'var(--color-accent-teal)' }}>Underneath it all</em>{' '}
            is often the quiet, unspoken weariness of always needing to have the answers, to fix, and to manage.
          </blockquote>
        </RevealOnScroll>

        <RevealOnScroll delay={240}>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            My path through those analytical spaces eventually required me to step back and look inward, returning to healing practices rooted in the body, energy, and ceremony.
          </p>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-secondary)',
            }}
          >
            Today, Liminal Light is a conduit for that return. Whether you are navigating a threshold in your career, carrying the fatigue of family dynamics, or simply looking for a safe space where you don't have to carry the weight alone, this is a soft, grounded place to land. Together, we quiet the noise, drop out of the mind, and{' '}
            <em style={{ color: 'var(--color-accent-ember)' }}>gently clear a path forward.</em>
          </p>
        </RevealOnScroll>

      </div>

      <ArcTransition variant="bottom" fill="#181510" offset={0.52} />
    </section>
  )
}
