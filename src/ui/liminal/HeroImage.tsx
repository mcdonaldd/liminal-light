import Image from 'next/image'
import ArcTransition from './ArcTransition'

export default function HeroImage() {
	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: 'clamp(320px, 50vw, 600px)',
				overflow: 'hidden',
				backgroundColor: 'var(--color-bg-primary)',
			}}
		>
			<Image
				src="/images/nathan/nathan-hero.jpg"
				alt="Nathan Ghabour in his practice"
				fill
				sizes="100vw"
				style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
			/>
			<ArcTransition variant="top" fill="var(--color-bg-primary)" offset={0.45} />
			<ArcTransition variant="bottom" fill="var(--color-bg-surface)" offset={0.55} />
		</div>
	)
}
