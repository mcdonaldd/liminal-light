'use client'

import { useEffect, useRef } from 'react'
import { Stone } from './icons'

export default function About() {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (detailsRef.current && window.innerWidth >= 768) {
      detailsRef.current.open = true
    }
  }, [])

  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-xl)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gap: 'var(--space-16)',
          alignItems: 'start',
        }}
      >
        {/* Portrait placeholder */}
        <div
          style={{
            aspectRatio: '4 / 5',
            backgroundColor: 'var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
          }}
        >
          [PLACEHOLDER — Nathan's portrait photo]
        </div>

        {/* Text content */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(var(--text-2xl), 3.5vw, var(--text-4xl))',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-8)',
            }}
          >
            A space to clear the path, settle into the body, and remember who you are.
          </h2>

          {/* Always-visible narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
              There is a specific kind of exhaustion that comes from navigating fast-paced, high-pressure systems. I know that world intimately because I spent over a decade leading AI and machine learning innovation at companies like Nike and Amazon, carrying the mental noise and the weight of holding everything together.
            </p>
            <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
              But that pressure is rarely just about work. It echoes in our families, our relationships, and the quiet patterns that keep us stuck. It manifests as a knot in the chest, a heaviness in the limbs, or the feeling of being an outsider in your own life. Underneath it all is often the quiet, unspoken weariness of always needing to have the answers, to fix, and to manage.
            </p>
            <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
              My path through those analytical spaces eventually required me to step back and look inward, returning to healing practices rooted in the body, energy, and ceremony.
            </p>
            <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
              Today, Liminal Light is a conduit for that return. Whether you are navigating a threshold in your career, carrying the fatigue of family dynamics, or simply looking for a safe space where you don't have to carry the weight alone, this is a soft, grounded place to land. Together, we quiet the noise, drop out of the mind, and gently clear a path forward.
            </p>
          </div>

          {/* Collapsible extended bio */}
          <details
            ref={detailsRef}
            style={{
              marginBottom: 'var(--space-8)',
              borderTop: '1px solid var(--color-border)',
              paddingTop: 'var(--space-6)',
            }}
          >
            <summary
              style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: 'var(--text-sm)',
                letterSpacing: 'var(--tracking-wide)',
                color: 'var(--color-text-secondary)',
                marginBottom: 0,
              }}
            >
              <Stone size={16} color="var(--color-text-secondary)" />
              Read more about Nathan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ width: 14, height: 14, marginLeft: 'var(--space-1)', transition: 'rotate var(--duration-normal) var(--ease-out)' }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
              <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
                I'm a queer Coptic man, shaped by the wisdom of my heritage and a lifelong calling toward healing. I carry a New York state of mind — precise, curious, and direct — balanced by a West Coast approachability that keeps things grounded, open, and human.
              </p>
              <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
                I studied biomechanics at Cornell, and I've spent my life translating complex systems into something people can feel, understand, and act on. For over a decade, I lived in the world of high-stakes, high-pressure innovation — leading AI and machine learning initiatives for global tech giants and fast-paced startups. I did that work deeply and successfully, but I also learned intimately how those hyper-analytical, relentless environments can fragment us.
              </p>
              <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
                That chapter ultimately served as a bridge, calling me back to the wisdom of the body and the lineages that came before me. Today, my clinical and systemic foundation is anchored by my work in the Under the Eagle's Wing fellowship with Shayne Case. There, I've deepened my practice in the ethics of spiritual power, ancestral healing, and the art of holding sacred ceremony — walking with the teachings of the medicine wheel to help others map the earth, fire, air, and water they contain, return them to balance, and greet the rascals along the way.
              </p>
              <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
                As I stepped fully into this vocation, I gathered specific tools to support that return. Trained as a Reiki practitioner, I work to hold a grounded, "hollow bone" presence, using energy and the resonance of vibrational sound therapy with singing bowls to help an overstimulated nervous system finally drop out of the analytical mind and settle into the body. To ground this work further, I trained in conflict mediation, bringing a steady presence to the tight places where we carry tension — both within our relationships and within ourselves.
              </p>
              <p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
                I believe in divine energy, in the power of song, in the life force that connects us all. There's so much pain and disconnection in the world — but I believe our deepest work is to make space for love to move through us. My vocation is to help people remember what's already within them.
              </p>
            </div>
          </details>

          <a href="#offerings" className="btn-secondary">
            See Offerings
          </a>
        </div>
      </div>
    </section>
  )
}
