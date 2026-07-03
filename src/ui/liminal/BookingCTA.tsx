import { FALLBACK_BOOKING_URL } from '@/lib/env'
import { getSite } from '@/sanity/lib/queries'
import ArcTransition from './ArcTransition'
import FoilArc from './FoilArc'

export default async function BookingCTA({ noTopArc = false }: { noTopArc?: boolean }) {
  const site = await getSite()
  const bookingUrl = site?.bookingUrl || FALLBACK_BOOKING_URL

  return (
    <section
      id="booking-cta"
      style={{
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-4px',
        backgroundColor: 'var(--color-bg-dark)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      {!noTopArc && <ArcTransition variant="top" fill="var(--color-bg-primary)" offset={0.55} depth={0.9} />}
      {/* Arc out to Substack — medium upward sweep, peak right */}
      <ArcTransition variant="bottom" fill="var(--color-bg-primary)" offset={0.68} depth={1.1} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 'var(--container-xl)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'var(--space-12)',
          alignItems: 'center',
        }}
      >
        {/* Copy */}
        <div>
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
            Free consultation
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-5xl))',
              lineHeight: 'var(--leading-tight)',
              color: 'var(--color-text-on-dark)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Not sure where to start?
            <br />
            Start with a conversation.
          </h2>

          <FoilArc style={{ width: '100%', height: 10, marginBottom: 'var(--space-6)', display: 'block' }} />

          <p
            style={{
              fontWeight: 300,
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-on-dark-muted)',
              maxWidth: '50ch',
            }}
          >
            A free 15-minute call. No pitch, no pressure. Just a chance to find out if this work is
            right for you.
          </p>
        </div>

        {/* Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary booking-cta-btn" style={{ fontSize: 'var(--text-base)', padding: 'var(--space-4) var(--space-10)' }}>
            Book free call
          </a>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .booking-cta-btn {
              width: 100%;
              text-align: center;
              justify-content: center;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
