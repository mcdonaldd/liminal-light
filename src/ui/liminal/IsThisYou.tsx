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

  const itemId = `isthisyou-panel-${item.header.replace(/\s+/g, '-').toLowerCase()}`
  const btnId = `isthisyou-btn-${item.header.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div
      style={{
        borderTop: '1px solid rgba(244,235,220,0.10)',
        paddingBlock: 'var(--space-6)',
        paddingInline: 'var(--space-3)',
        backgroundColor: isOpen ? 'rgba(244,235,220,0.04)' : 'transparent',
        borderRadius: 'var(--radius-sm)',
        transition: 'background-color var(--duration-normal) var(--ease-out)',
      }}
    >
      <button
        id={btnId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={itemId}
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
          <span style={{ flexShrink: 0, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), filter 0.35s cubic-bezier(0.16,1,0.3,1)', transform: isOpen ? 'scale(1.12)' : 'scale(1)', filter: isOpen ? `drop-shadow(0 0 6px ${accent})` : 'none', display: 'inline-flex' }}>
            <Glyph size={40} color={accent} />
          </span>
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

      <div
        id={itemId}
        role="region"
        aria-labelledby={btnId}
        style={{
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
      {/* Arc in from NarrativeBridge — cream of NarrativeBridge arcs into dark section */}
      <ArcTransition variant="top" fill="var(--color-bg-surface)" offset={0.55} depth={1.0} />

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

      </div>
    </section>
  )
}
