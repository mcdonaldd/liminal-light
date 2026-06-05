import type { Metadata } from 'next'
import BookingCTA from '@/ui/liminal/BookingCTA'
import LiminalFooter from '@/ui/liminal/LiminalFooter'

export const metadata: Metadata = {
	title: 'Offerings — Liminal Light',
	description:
		'[PLACEHOLDER — Offerings page meta description: 1–2 sentences describing the services Nathan offers.]',
}

const placeholderOfferings = [
	{
		id: 1,
		label: '[PLACEHOLDER — Offering category]',
		title: '[PLACEHOLDER — Offering 1 name]',
		description:
			'[PLACEHOLDER — Full description of Offering 1: what it is, what to expect, who it\'s for, modalities used. 3–5 sentences.]',
		duration: '[PLACEHOLDER — Duration]',
		format: '[PLACEHOLDER — Format, e.g. 1:1 / In-person / Remote / Both]',
		investment: '[PLACEHOLDER — Price or price range]',
	},
	{
		id: 2,
		label: '[PLACEHOLDER — Offering category]',
		title: '[PLACEHOLDER — Offering 2 name]',
		description:
			'[PLACEHOLDER — Full description of Offering 2.]',
		duration: '[PLACEHOLDER — Duration]',
		format: '[PLACEHOLDER — Format]',
		investment: '[PLACEHOLDER — Price]',
	},
	{
		id: 3,
		label: '[PLACEHOLDER — Offering category]',
		title: '[PLACEHOLDER — Offering 3 name]',
		description:
			'[PLACEHOLDER — Full description of Offering 3.]',
		duration: '[PLACEHOLDER — Duration]',
		format: '[PLACEHOLDER — Format]',
		investment: '[PLACEHOLDER — Price]',
	},
	{
		id: 4,
		label: '[PLACEHOLDER — Offering category]',
		title: '[PLACEHOLDER — Offering 4 name — e.g. Free Consultation]',
		description:
			'[PLACEHOLDER — Full description of Offering 4 / free consult. This is the primary conversion entry point — describe it warmly.]',
		duration: '15 min',
		format: '[PLACEHOLDER — Format]',
		investment: 'Complimentary',
	},
]

export default function OfferingsPage() {
	return (
		<>
			{/* Page header */}
			<section
				style={{
					background: 'var(--gradient-warm-fade)',
					paddingTop: 'var(--space-24)',
					paddingBottom: 'var(--space-16)',
					paddingInline: 'var(--space-6)',
					borderBottom: '1px solid var(--color-border)',
				}}
			>
				<div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
					<p
						className="label-caps"
						style={{ marginBottom: 'var(--space-4)' }}
					>
						Services
					</p>
					<h1
						style={{
							fontFamily: 'var(--font-display)',
							fontWeight: 400,
							fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
							letterSpacing: 'var(--tracking-tight)',
							lineHeight: 'var(--leading-tight)',
							color: 'var(--color-text-primary)',
							marginBottom: 'var(--space-6)',
						}}
					>
						[PLACEHOLDER — Offerings page headline]
					</h1>
					<p
						style={{
							fontWeight: 300,
							fontSize: 'var(--text-xl)',
							lineHeight: 'var(--leading-relaxed)',
							color: 'var(--color-text-secondary)',
							maxWidth: '60ch',
						}}
					>
						[PLACEHOLDER — Offerings page subheading: a brief framing statement about Nathan's approach or what clients can expect from working with him.]
					</p>
				</div>
			</section>

			{/* Offerings list */}
			<section
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
						display: 'flex',
						flexDirection: 'column',
						gap: 'var(--space-6)',
					}}
				>
					{placeholderOfferings.map((offering) => (
						<article
							key={offering.id}
							style={{
								backgroundColor: 'var(--color-bg-surface)',
								border: '1px solid var(--color-border)',
								borderRadius: 'var(--radius-lg)',
								padding: 'var(--space-8)',
								display: 'grid',
								gridTemplateColumns: '1fr auto',
								gap: 'var(--space-8)',
								alignItems: 'start',
							}}
						>
							<div>
								<p className="label-caps" style={{ marginBottom: 'var(--space-3)' }}>
									{offering.label}
								</p>

								<h2
									style={{
										fontFamily: 'var(--font-display)',
										fontWeight: 400,
										fontSize: 'var(--text-3xl)',
										lineHeight: 'var(--leading-snug)',
										color: 'var(--color-text-primary)',
										marginBottom: 'var(--space-4)',
									}}
								>
									{offering.title}
								</h2>

								<p
									style={{
										fontWeight: 300,
										lineHeight: 'var(--leading-relaxed)',
										color: 'var(--color-text-secondary)',
										maxWidth: '65ch',
										marginBottom: 'var(--space-6)',
									}}
								>
									{offering.description}
								</p>

								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										gap: 'var(--space-6)',
									}}
								>
									<div>
										<p className="label-caps" style={{ marginBottom: 'var(--space-1)' }}>Duration</p>
										<p style={{ fontWeight: 500, fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>{offering.duration}</p>
									</div>
									<div>
										<p className="label-caps" style={{ marginBottom: 'var(--space-1)' }}>Format</p>
										<p style={{ fontWeight: 500, fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>{offering.format}</p>
									</div>
									<div>
										<p className="label-caps" style={{ marginBottom: 'var(--space-1)' }}>Investment</p>
										<p style={{ fontWeight: 500, fontSize: 'var(--text-sm)', color: 'var(--color-accent-ember)' }}>{offering.investment}</p>
									</div>
								</div>
							</div>

							<div style={{ flexShrink: 0 }}>
								<a href="#booking-cta" className="btn-primary">
									Book Now
								</a>
							</div>
						</article>
					))}
				</div>
			</section>

			<BookingCTA />
			<LiminalFooter />
		</>
	)
}
