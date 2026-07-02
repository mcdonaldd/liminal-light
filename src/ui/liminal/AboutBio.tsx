import Image from 'next/image'
import { Stone, Ember, Air, River, Root, Path, Belong, Energy } from './icons'
import RevealOnScroll from './RevealOnScroll'

export default function AboutBio() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>

        <RevealOnScroll>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 'var(--text-sm)',
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
        </RevealOnScroll>

        <RevealOnScroll delay={40}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
              gap: 'var(--space-16)',
              alignItems: 'start',
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
                sizes="(max-width: 768px) 100vw, 50vw"
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
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-8)', paddingTop: 'var(--space-16)', flexWrap: 'wrap' }}>
            {[
              { Icon: Stone,  color: 'var(--color-accent-ember)',   label: 'Earth' },
              { Icon: Ember,  color: 'var(--color-accent-magenta)', label: 'Fire' },
              { Icon: Air,    color: 'var(--color-accent-teal)',    label: 'Air' },
              { Icon: River,  color: 'var(--color-accent-volt)',    label: 'Water' },
              { Icon: Root,   color: 'var(--color-accent-magenta)', label: 'Root' },
              { Icon: Path,   color: 'var(--color-accent-teal)',    label: 'Path' },
              { Icon: Belong, color: 'var(--color-accent-volt)',    label: 'Belong' },
              { Icon: Energy, color: 'var(--color-accent-ember)',   label: 'Energy' },
            ].map(({ Icon, color, label }) => (
              <div key={label} className="liminal-icon-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)', cursor: 'default' }}>
                <span className="liminal-icon" style={{ color, display: 'block' }}>
                  <Icon size={48} color="currentColor" strokeWidth={1.2} />
                </span>
                <span className="liminal-icon-label" style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '10px', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>{label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', paddingTop: 'var(--space-16)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-sm)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-accent-teal)', marginBottom: 'var(--space-4)' }}>
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
        </RevealOnScroll>

      </div>
    </section>
  )
}
