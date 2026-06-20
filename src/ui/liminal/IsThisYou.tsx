'use client'

import { useState } from 'react'
import { Belong, Root, Path } from './icons'
import ArcTransition from './ArcTransition'

const accordionItems = [
  {
    entryQuote: '"I feel like an outsider, even at home."',
    header: 'Finding Where You Fit',
    body: 'For those navigating systemic friction or carrying the quiet weight of feeling "different" within their families, relationships, or corporate spaces. We work to clear the energetic static and build a deep sense of internal safety. By dropping out of the analytical survival strategies that keep you permanently on guard, you can fully engage with others and occupy your life without dimming your light.',
    Glyph: Belong,
    accent: 'var(--color-accent-volt)',
  },
  {
    entryQuote: '"I\'m the one holding everything together."',
    header: 'Sustainable Giving',
    body: 'For the empaths, caretakers, and fellow healing practitioners who spend their lives stabilizing the systems around them while quietly running on empty. It is a unique burden to hold space for others while your own overstimulated nervous system is humming with low-grade anxiety. This is a dedicated container for the guides to become the guided, providing a safe, grounded place to drop the armor, receive deep restoration, and move from chronic exhaustion back into balance.',
    Glyph: Root,
    accent: 'var(--color-accent-teal)',
  },
  {
    entryQuote: '"I want things to be better, but I\'m stuck."',
    header: 'Navigating the Threshold',
    body: 'For those standing at a crossroads who recognize that being "stuck" is often the result of boundaries that have become too rigid. This is a space for deep, advanced threshold work that goes beyond simple stress management. Within a highly calibrated container of safety, we allow the armor to drop so you can look honestly at your limits, safely step past them, and surprise yourself with how strong you actually are. Transformation happens when the pressure is met with absolute steadiness.',
    Glyph: Path,
    accent: 'var(--color-accent-magenta)',
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof accordionItems)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  const { Glyph, accent } = item

  return (
    <div
      style={{
        borderTop: '1px solid rgba(244,235,220,0.10)',
        paddingBlock: 'var(--space-6)',
        borderLeft: isOpen ? `2px solid ${accent}` : '2px solid transparent',
        paddingLeft: isOpen ? 'var(--space-4)' : 0,
        transition: 'border-color var(--duration-normal) var(--ease-out), padding-left var(--duration-normal) var(--ease-out)',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-4)',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flex: 1, minWidth: 0 }}>
          <Glyph size={40} color={accent} />
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'var(--text-xl)',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-on-dark)',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            {item.entryQuote}
          </blockquote>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            width: 20,
            height: 20,
            flexShrink: 0,
            rotate: isOpen ? '180deg' : '0deg',
            transition: 'rotate var(--duration-normal) var(--ease-out)',
          }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div style={{
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.38s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            paddingTop: 'var(--space-6)',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
          }}>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 'var(--text-base)',
                color: accent,
                marginBottom: 'var(--space-3)',
                letterSpacing: 'var(--tracking-wide)',
              }}
            >
              {item.header}
            </h3>
            <p
              style={{
                fontWeight: 300,
                lineHeight: 'var(--leading-relaxed)',
                color: 'var(--color-text-on-dark-muted)',
                maxWidth: '60ch',
              }}
            >
              {item.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function IsThisYou() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="is-this-you"
      style={{
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-2px',
        backgroundColor: 'var(--color-bg-dark)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      {/* Arc out to Offerings */}
      <ArcTransition variant="bottom" fill="#EAD4A8" offset={0.58} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 'var(--container-lg)',
          margin: '0 auto',
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
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
            Is this you?
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-4xl))',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-on-dark)',
              maxWidth: '30ch',
            }}
          >
            Recognition
          </h2>
        </div>

        {/* Accordion list */}
        <div style={{ marginBottom: 'var(--space-16)', borderBottom: '1px solid rgba(244,235,220,0.10)' }}>
          {accordionItems.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Storytelling anchor */}
        <div style={{ maxWidth: '65ch' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'var(--text-2xl)',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-on-dark)',
              marginBottom: 'var(--space-6)',
            }}
          >
            How We Walk Through It
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-on-dark-muted)' }}>
              I don't look at a hyper-analytical mind or an overstimulated system as a problem to be fixed. Your mind is a brilliant, protective tool, but it can become an exhausting prison. Because I spent over a decade leading innovation in high-pressure corporate environments, I know the precise texture of that mental noise.
            </p>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-on-dark-muted)' }}>
              My work isn't about overriding your intellect; it's about establishing a presence so steady and resonant that your mind finally feels permitted to hand the reins back to your body. Through grounded energy, sound resonance, and sacred ceremony, we clear a path forward so you can land back in yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
