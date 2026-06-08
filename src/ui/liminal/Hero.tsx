import Image from 'next/image'
import FoilArc from './FoilArc'
import ArcTransition from './ArcTransition'

export default function Hero() {
	return (
		<section
			id="hero"
			style={{
				position: 'relative',
				minHeight: 'calc(100vh - var(--nav-height))',
				display: 'flex',
				alignItems: 'center',
				overflow: 'hidden',
				backgroundColor: 'var(--color-bg-primary)',
			}}
		>
			{/* Background image */}
			<Image
				src="/images/nathan/nathan-hero.jpg"
				alt=""
				fill
				priority
				sizes="100vw"
				style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
			/>

			{/* Gradient overlay — readable on left, transparent on right */}
			<div
				aria-hidden="true"
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'linear-gradient(to right, rgba(234,212,168,0.94) 0%, rgba(234,212,168,0.80) 38%, rgba(234,212,168,0.30) 65%, rgba(234,212,168,0.00) 100%)',
				}}
			/>


			{/* Dark arc — hero image curves into the dark section below */}
			<ArcTransition variant="bottom" fill="#181510" offset={0.45} />

			{/* Content */}
			<div
				style={{
					position: 'relative',
					zIndex: 1,
					maxWidth: 'var(--container-xl)',
					margin: '0 auto',
					width: '100%',
					paddingBlock: 'var(--space-32)',
					paddingInline: 'var(--space-6)',
				}}
			>
				{/* Eyebrow + Headline + FoilArc — all share the same container */}
				<div style={{ maxWidth: '560px', marginBottom: 'var(--space-6)' }}>
					<p
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: 'var(--space-2)',
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: '13px',
							letterSpacing: 'var(--tracking-widest)',
							textTransform: 'uppercase',
							color: 'var(--color-text-secondary)',
							marginBottom: 'var(--space-6)',
						}}
					>
						<span
							aria-hidden="true"
							style={{
								display: 'inline-block',
								width: 6,
								height: 6,
								borderRadius: '50%',
								backgroundColor: 'var(--color-accent-magenta)',
								flexShrink: 0,
							}}
						/>
						Somatic Practitioner
					</p>

					<h1
						style={{
							fontFamily: 'var(--font-display)',
							fontWeight: 400,
							fontSize: 'clamp(var(--text-4xl), 5vw, var(--text-6xl))',
							letterSpacing: 'var(--tracking-tight)',
							lineHeight: 'var(--leading-tight)',
							color: 'var(--color-text-primary)',
							marginBottom: 'var(--space-3)',
						}}
					>
						Grounded in the body.{' '}
						<em style={{ color: 'var(--color-accent-teal)', fontStyle: 'italic' }}>Open</em> to what
						wants to change.
					</h1>

					<FoilArc style={{ width: '100%', height: 16 }} />
				</div>

				{/* Body + CTA */}
				<div style={{ maxWidth: '520px' }}>
					<p
						style={{
							fontFamily: 'var(--font-body)',
							fontWeight: 300,
							fontSize: 'var(--text-lg)',
							lineHeight: 'var(--leading-relaxed)',
							color: 'var(--color-text-secondary)',
							maxWidth: '50ch',
							marginBottom: 'var(--space-10)',
						}}
					>
						Reiki, vibrational sound therapy, and sacred ceremony for people standing at the
						threshold of something new.
					</p>

					{/* TODO: replace href with booking platform URL */}
					<a href="#booking-placeholder" className="btn-primary">
						Free 15-min consultation
					</a>
				</div>
			</div>
		</section>
	)
}
