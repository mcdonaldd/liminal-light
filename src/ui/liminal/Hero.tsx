import Image from 'next/image'
import FoilArc from './FoilArc'

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
			{/* Content */}
			<div
				style={{
					position: 'relative',
					zIndex: 1,
					maxWidth: 'var(--container-xl)',
					margin: '0 auto',
					width: '100%',
					paddingBlock: 'var(--space-24)',
					paddingInline: 'var(--space-6)',
					display: 'grid',
					gridTemplateColumns: '1.2fr 0.8fr',
					gap: 'var(--space-16)',
					alignItems: 'center',
				}}
				className="hero-grid"
			>
				{/* Left: copy */}
				<div>
					{/* Eyebrow + Headline + FoilArc */}
					<div style={{ maxWidth: '560px', marginBottom: 'var(--space-6)' }}>
						<h1
							style={{
								fontFamily: 'var(--font-display)',
								fontWeight: 400,
								fontSize: 'clamp(var(--text-4xl), 5vw, var(--text-6xl))',
								letterSpacing: 'var(--tracking-tight)',
								lineHeight: 'var(--leading-tight)',
								color: 'var(--color-text-primary)',
								marginBottom: 'var(--space-3)',
								animation: 'heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
								animationDelay: '80ms',
							}}
						>
							Grounded in the body.{' '}
							<em style={{ color: 'var(--color-accent-teal)', fontStyle: 'italic' }}>Open</em> to what
							wants to change.
						</h1>

						<FoilArc style={{ width: '100%', height: 32 }} drawIn drawDelay={220} />
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
								animation: 'heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
								animationDelay: '320ms',
							}}
						>
							Reiki, vibrational sound therapy, and sacred ceremony for people standing at the
							threshold of something new.
						</p>

						{/* TODO: replace href with booking platform URL */}
						<a
							href="#booking-placeholder"
							className="btn-primary"
							style={{
								animation: 'heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
								animationDelay: '420ms',
							}}
						>
							Free 15-min consultation
						</a>
					</div>
				</div>

				{/* Right: candid photo + caption */}
				<div
					style={{
						animation: 'heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
						animationDelay: '200ms',
					}}
				>
					<div
						style={{
							position: 'relative',
							aspectRatio: '3 / 4',
							borderRadius: 'var(--radius-lg)',
							overflow: 'hidden',
							backgroundColor: 'var(--color-border)',
						}}
					>
						<Image
							src="/images/nathan/candid-a.jpg"
							alt="Nathan Ghabour, somatic practitioner"
							fill
							priority
							sizes="(max-width: 768px) 100vw, 50vw"
							style={{ objectFit: 'cover', objectPosition: 'center top' }}
						/>
					</div>
					<p
						style={{
							marginTop: 'var(--space-3)',
							fontFamily: 'var(--font-body)',
							fontWeight: 500,
							fontSize: 'var(--text-sm)',
							color: 'var(--color-text-secondary)',
							letterSpacing: 'var(--tracking-wide)',
							textAlign: 'center',
						}}
					>
						<span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-base)' }}>Nathan Ghabour</span>
						{' — Somatic Practitioner'}
					</p>
				</div>
			</div>

			<style>{`
				@media (max-width: 767px) {
					.hero-grid {
						grid-template-columns: 1fr !important;
					}
				}
			`}</style>
		</section>
	)
}
