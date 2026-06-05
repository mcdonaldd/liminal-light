import FoilArc from './FoilArc'

export default function Hero() {
	return (
		<section
			id="hero"
			style={{
				background: 'var(--gradient-warm-fade)',
				paddingTop: 'var(--space-24)',
				paddingBottom: 'var(--space-24)',
				paddingInline: 'var(--space-6)',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Ember glow background decoration */}
			<div
				aria-hidden="true"
				style={{
					position: 'absolute',
					inset: 0,
					background: 'var(--gradient-ember-glow)',
					pointerEvents: 'none',
				}}
			/>

			<div
				style={{
					maxWidth: 'var(--container-lg)',
					margin: '0 auto',
					position: 'relative',
					zIndex: 1,
				}}
			>
				{/* Eyebrow label */}
				<p className="label-caps" style={{ marginBottom: 'var(--space-4)' }}>
					[PLACEHOLDER — Eyebrow / tagline label]
				</p>

				{/* Hero headline with foil arc */}
				<div style={{ marginBottom: 'var(--space-6)' }}>
					<h1
						style={{
							fontFamily: 'var(--font-display)',
							fontWeight: 400,
							fontSize: 'clamp(var(--text-5xl), 8vw, var(--text-7xl))',
							letterSpacing: 'var(--tracking-tight)',
							lineHeight: 'var(--leading-tight)',
							color: 'var(--color-text-primary)',
							marginBottom: 'var(--space-3)',
						}}
					>
						[PLACEHOLDER — Hero headline]
					</h1>
					<FoilArc />
				</div>

				{/* Subheadline */}
				<p
					style={{
						fontFamily: 'var(--font-body)',
						fontWeight: 300,
						fontSize: 'var(--text-xl)',
						lineHeight: 'var(--leading-relaxed)',
						color: 'var(--color-text-secondary)',
						maxWidth: '55ch',
						marginBottom: 'var(--space-10)',
					}}
				>
					[PLACEHOLDER — Hero subhead: 2–3 lines describing who Nathan serves and what transformation looks like]
				</p>

				{/* CTAs */}
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
					<a href="#booking-cta" className="btn-primary">
						Book a Free Consultation
					</a>
					<a href="#about" className="btn-secondary">
						Learn More
					</a>
				</div>
			</div>
		</section>
	)
}
