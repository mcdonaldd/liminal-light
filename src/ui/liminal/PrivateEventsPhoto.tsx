import Image from 'next/image'
import ArcTransition from './ArcTransition'

export default function PrivateEventsPhoto() {
	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				marginTop: '-4px',
				height: 'clamp(440px, 62vw, 760px)',
				overflow: 'hidden',
				backgroundColor: 'var(--color-bg-primary)',
			}}
		>
			<Image
				src="/images/nathan/sound-bath.png"
				alt="Nathan Ghabour tending a circle of crystal singing bowls by candlelight"
				fill
				priority
				sizes="100vw"
				style={{ objectFit: 'cover', objectPosition: 'center 68%' }}
			/>
			<ArcTransition variant="top" fill="var(--color-bg-primary)" offset={0.45} />
			<ArcTransition variant="bottom" fill="var(--color-bg-primary)" offset={0.55} />
		</div>
	)
}
