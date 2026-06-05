import { Energy, Ember, Air } from './icons'
import type { ComponentType } from 'react'

interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

const offerings: {
  id: number
  label: string
  title: string
  description: string
  duration: string
  format: string
  Glyph: ComponentType<GlyphProps>
  isFreeTier?: boolean
}[] = [
  {
    id: 1,
    label: 'Energy & Sound Healing',
    title: 'Reiki + Vibrational Sound Therapy',
    description: '[PLACEHOLDER — Short description of the combined Reiki + Vibrational Sound Therapy session: what it is, who it is for, and what to expect. 2–3 sentences.]',
    duration: '[PLACEHOLDER — Duration]',
    format: '[PLACEHOLDER — Format]',
    Glyph: Energy,
  },
  {
    id: 2,
    label: 'Ceremony',
    title: 'Rapé Ceremony',
    description: '[PLACEHOLDER — Short description of Rapé Ceremony: what it is, who it is for, and what to expect. 2–3 sentences.]',
    duration: '[PLACEHOLDER — Duration]',
    format: '[PLACEHOLDER — Format]',
    Glyph: Ember,
  },
  {
    id: 3,
    label: 'Free Consultation',
    title: 'Free 15-Minute Consultation',
    description: '[PLACEHOLDER — Short description of the free consult: what happens in the call, no pressure, exploratory. 2–3 sentences.]',
    duration: '15 min',
    format: '[PLACEHOLDER — Format]',
    Glyph: Air,
    isFreeTier: true,
  },
]

export default function OfferingsSection() {
  return (
    <section
      id="offerings"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: 'var(--space-12)', maxWidth: '55ch' }}>
          <p className="label-caps" style={{ marginBottom: 'var(--space-3)' }}>
            [PLACEHOLDER — Offerings section eyebrow]
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'var(--text-4xl)',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-4)',
            }}
          >
            [PLACEHOLDER — Offerings section heading]
          </h2>
          <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
            [PLACEHOLDER — Offerings section subheading / framing sentence]
          </p>
        </div>

        {/* Card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {offerings.map((offering) => (
            <article key={offering.id} className="card" style={{ position: 'relative' }}>
              {/* Glyph top-right of card */}
              <div style={{ position: 'absolute', top: 'var(--space-6)', right: 'var(--space-6)', color: 'var(--color-accent-gold)', opacity: 0.7 }}>
                <offering.Glyph size={24} color="var(--color-accent-gold)" />
              </div>

              {/* Magenta pill — free tier only */}
              {offering.isFreeTier && (
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '2px var(--space-3)',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-accent-magenta)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: 'var(--text-xs)',
                      letterSpacing: 'var(--tracking-wider)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Complimentary
                  </span>
                </div>
              )}

              <p className="label-caps" style={{ marginBottom: 'var(--space-3)', paddingRight: 'var(--space-8)' }}>
                {offering.label}
              </p>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'var(--text-2xl)',
                  lineHeight: 'var(--leading-snug)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                {offering.title}
              </h3>

              <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                {offering.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-6)',
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: 'var(--space-4)',
                }}
              >
                <span className="label-caps">{offering.duration}</span>
                <span className="label-caps">{offering.format}</span>
              </div>

              <a href="#booking-cta" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {offering.isFreeTier ? 'Book Free Call' : 'Book This Session'}
              </a>
            </article>
          ))}
        </div>

        {/* Link to /offerings page */}
        <div style={{ marginTop: 'var(--space-10)', textAlign: 'center' }}>
          <a href="/offerings" className="btn-secondary">
            View All Offerings →
          </a>
        </div>
      </div>
    </section>
  )
}
