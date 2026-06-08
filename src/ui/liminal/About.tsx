import Image from 'next/image'
import ArcTransition from './ArcTransition'

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-primary)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>

        {/* Eyebrow + headline — full width */}
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-magenta)',
              marginBottom: 'var(--space-4)',
            }}
          >
            About Nathan
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(var(--text-2xl), 3.5vw, var(--text-4xl))',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-text-primary)',
              maxWidth: '55ch',
            }}
          >
            A space to clear the path, settle into the body, and remember who you are.
          </h2>
        </div>

        {/* Short narrative — full width single column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-20)',
          }}
        >
          <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
            There is a specific kind of exhaustion that comes from navigating fast-paced, high-pressure systems. I know that world intimately because I spent over a decade leading AI and machine learning innovation at companies like Nike and Amazon, carrying the mental noise and the weight of holding everything together.
          </p>
          <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
            But that pressure is rarely just about work. It echoes in our families, our relationships, and the quiet patterns that keep us stuck. It manifests as a knot in the chest, a heaviness in the limbs, or the feeling of being an outsider in your own life. Underneath it all is often the quiet, unspoken weariness of always needing to have the answers, to fix, and to manage.
          </p>
          <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
            My path through those analytical spaces eventually required me to step back and look inward, returning to healing practices rooted in the body, energy, and ceremony.
          </p>
          <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
            Today, Liminal Light is a conduit for that return. Whether you are navigating a threshold in your career, carrying the fatigue of family dynamics, or simply looking for a safe space where you don't have to carry the weight alone, this is a soft, grounded place to land. Together, we quiet the noise, drop out of the mind, and gently clear a path forward.
          </p>
        </div>

        {/* Portrait + extended bio — side by side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
            gap: 'var(--space-16)',
            alignItems: 'start',
            marginBottom: 'var(--space-20)',
          }}
        >
          {/* Portrait */}
          <div
            style={{
              aspectRatio: '4 / 5',
              borderRadius: 'var(--radius-lg)',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'var(--color-border)',
            }}
          >
            <Image
              src="/images/nathan/nathan-portrait.jpg"
              alt="Nathan Ghabour, founder of Liminal Light"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Extended bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              I'm a queer Coptic man, shaped by the wisdom of my heritage and a lifelong calling toward healing. I carry a New York state of mind — precise, curious, and direct — balanced by a West Coast approachability that keeps things grounded, open, and human.
            </p>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              I studied biomechanics at Cornell, and I've spent my life translating complex systems into something people can feel, understand, and act on. For over a decade, I lived in the world of high-stakes, high-pressure innovation — leading AI and machine learning initiatives for global tech giants and fast-paced startups. I did that work deeply and successfully, but I also learned intimately how those hyper-analytical, relentless environments can fragment us.
            </p>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              That chapter ultimately served as a bridge, calling me back to the wisdom of the body and the lineages that came before me. Today, my clinical and systemic foundation is anchored by my work in the <em>Under the Eagle's Wing</em> fellowship with Shayne Case. There, I've deepened my practice in the ethics of spiritual power, ancestral healing, and the art of holding sacred ceremony — walking with the teachings of the medicine wheel to help others map the earth, fire, air, and water they contain, return them to balance, and greet the rascals along the way.
            </p>
          </div>
        </div>

        {/* The Practice — full width */}
        <div style={{ maxWidth: 'var(--container-md)', paddingTop: 'var(--space-16)', borderTop: '1px solid var(--color-border)' }}>
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
            The Practice
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              As I stepped fully into this vocation, I gathered specific tools to support that return. Trained as a Reiki practitioner, I work to hold a grounded, "hollow bone" presence, using energy and the resonance of vibrational sound therapy with singing bowls to help an overstimulated nervous system finally drop out of the analytical mind and settle into the body. To ground this work further, I trained in conflict mediation, bringing a steady presence to the tight places where we carry tension — both within our relationships and within ourselves.
            </p>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              I believe in divine energy, in the power of song, in the life force that connects us all. There's so much pain and disconnection in the world — but I believe our deepest work is to make space for love to move through us. My vocation is to help people remember what's already within them.
            </p>
          </div>
        </div>
      </div>

      {/* Arc into BookingCTA — dark rises from below */}
      <ArcTransition variant="bottom" fill="#181510" offset={0.55} />
    </section>
  )
}
