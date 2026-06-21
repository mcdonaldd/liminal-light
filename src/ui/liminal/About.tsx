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
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(280px, 44vw, 520px)',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/nathan/practice-2018.jpg"
          alt="Aerial view of rocky coastline with tidal pools"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <ArcTransition variant="top" fill="var(--color-bg-dark)" offset={0.38} />
        <ArcTransition variant="bottom" fill="var(--color-bg-dark)" offset={0.64} />
      </div>
    </section>
  )
}
