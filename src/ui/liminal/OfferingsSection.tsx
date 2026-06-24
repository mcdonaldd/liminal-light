'use client'

import { useState } from 'react'
import { Energy, River, Ember } from './icons'
import RevealOnScroll from './RevealOnScroll'



const offerings = [
  {
    id: 1,
    Glyph: Energy,
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
    ctaHref: 'https://cal.com/liminallight/reiki-and-vibrational-sound',
    dark: false,
  },
  {
    id: 2,
    Glyph: River,
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
    ctaHref: 'https://cal.com/liminallight/15min',
    dark: false,
  },
  {
    id: 3,
    Glyph: Ember,
    topRuleColor: 'var(--color-accent-magenta)',
    tagLabel: 'Ceremony',
    tagBg: 'var(--color-accent-magenta)',
    tagColor: 'var(--color-text-on-dark)',
    title: 'Sacred Hapé Ceremony',
    body: 'A prayerful, intentional ceremony utilizing a sacred Amazonian plant blend administered through the breath to bring clarity to a specific, pressing life question. Hapé acts as a direct spiritual catalyst — cutting through intense mental noise to reveal a clear, grounded answer to a pertinent question, while purging stagnant energy from the body.',
    expect: 'A quiet, reverent ritual centered on your specific question, the administration of the medicine, and space for deep integration.',
    availability: null,
    notice: null,
    noticeJsx: true,
    ctaLabel: 'Book a session',
    ctaHref: 'https://cal.com/liminallight/hape-ceremony',
    dark: false,
  },
]

export default function OfferingsSection() {
  const [openExpect, setOpenExpect] = useState<number | null>(null)

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
        <RevealOnScroll>
        <div style={{ marginBottom: 'var(--space-12)', maxWidth: '55ch' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 'var(--text-sm)',
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
        </RevealOnScroll>

        {/* Card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-10)',
          }}
        >
          {offerings.map((offering, i) => {
            const { Glyph } = offering
            return (
            <RevealOnScroll key={offering.id} delay={i * 80} style={{ height: '100%' }}>
            <article
              className="offering-card"
              style={{
                height: '100%',
                position: 'relative',
                backgroundColor: offering.dark ? 'var(--color-bg-dark)' : 'var(--color-bg-surface)',
                border: offering.dark ? '1px solid rgba(244,235,220,0.08)' : '1px solid var(--color-border)',
                borderTop: `3px solid ${offering.topRuleColor}`,
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
                boxShadow: offering.dark ? '0 8px 32px rgba(0,0,0,0.35)' : 'var(--shadow-sm)',
                overflow: 'hidden',
              }}
            >
              {/* Tag + Glyph */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                <Glyph size={26} color={offering.dark ? 'var(--color-text-on-dark-muted)' : 'var(--color-text-primary)'} strokeWidth={1.2} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'var(--text-2xl)',
                  lineHeight: 'var(--leading-snug)',
                  color: offering.dark ? 'var(--color-text-on-dark)' : 'var(--color-text-primary)',
                }}
              >
                {offering.title}
              </h3>

              {/* Body */}
              <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: offering.dark ? 'var(--color-text-on-dark-muted)' : 'var(--color-text-secondary)' }}>
                {offering.body}
              </p>

              {/* What to expect trigger + popover */}
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setOpenExpect(openExpect === offering.id ? null : offering.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '10px',
                    letterSpacing: 'var(--tracking-wider)',
                    textTransform: 'uppercase',
                    color: offering.dark ? 'var(--color-text-on-dark-muted)' : 'var(--color-text-secondary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  What to expect
                </button>

                {openExpect === offering.id && (
                  <>
                    {/* Backdrop to catch outside clicks */}
                    <div
                      onClick={() => setOpenExpect(null)}
                      style={{ position: 'fixed', inset: 0, zIndex: 10 }}
                    />
                    {/* Popover */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 'calc(100% + 8px)',
                        left: 0,
                        right: 0,
                        zIndex: 11,
                        backgroundColor: 'var(--color-bg-dark)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--space-4)',
                        boxShadow: 'var(--shadow-lg)',
                        animation: 'fadeIn 0.15s ease-out',
                      }}
                    >
                      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '10px', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: offering.topRuleColor, marginBottom: 'var(--space-2)' }}>
                        What to expect
                      </p>
                      <p style={{ fontWeight: 300, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-on-dark-muted)', margin: 0 }}>
                        {offering.expect}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Availability */}
              {offering.availability && (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-wide)',
                    color: offering.dark ? 'var(--color-text-on-dark-muted)' : 'var(--color-text-secondary)',
                  }}
                >
                  {offering.availability}
                </p>
              )}

              {/* Notice */}
              {(offering.notice || offering.noticeJsx) && (
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 'var(--text-xs)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: offering.dark ? 'var(--color-text-on-dark-muted)' : 'var(--color-text-secondary)',
                    borderTop: `1px solid ${offering.dark ? 'rgba(244,235,220,0.12)' : 'var(--color-border)'}`,
                    paddingTop: 'var(--space-3)',
                  }}
                >
                  {offering.noticeJsx ? (
                    <><a href="https://cal.com/liminallight/15min" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-ember)', textDecoration: 'underline', fontWeight: 500 }}>A brief consultation</a> is required prior to booking. This ceremony may not be suitable for individuals with certain cardiovascular conditions, high blood pressure, pregnancy, or those taking specific medications.</>
                  ) : offering.notice}
                </p>
              )}

              {/* CTA */}
              <a href={offering.ctaHref} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center', marginTop: 'auto' }}>
                {offering.ctaLabel}
              </a>
            </article>
            </RevealOnScroll>
            )
          })}
        </div>


      </div>
    </section>
  )
}
