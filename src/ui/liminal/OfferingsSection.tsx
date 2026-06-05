const placeholderOfferings = [
	{
		id: 1,
		label: '[PLACEHOLDER — Offering type label]',
		title: '[PLACEHOLDER — Offering 1 name]',
		description: '[PLACEHOLDER — Short description of what this offering is, who it is for, and what to expect. 2–3 sentences.]',
		duration: '[PLACEHOLDER — Duration, e.g. 60 min]',
		format: '[PLACEHOLDER — Format, e.g. 1:1 / In-person / Remote]',
	},
	{
		id: 2,
		label: '[PLACEHOLDER — Offering type label]',
		title: '[PLACEHOLDER — Offering 2 name]',
		description: '[PLACEHOLDER — Short description of what this offering is, who it is for, and what to expect. 2–3 sentences.]',
		duration: '[PLACEHOLDER — Duration]',
		format: '[PLACEHOLDER — Format]',
	},
	{
		id: 3,
		label: '[PLACEHOLDER — Offering type label]',
		title: '[PLACEHOLDER — Offering 3 name]',
		description: '[PLACEHOLDER — Short description of what this offering is, who it is for, and what to expect. 2–3 sentences.]',
		duration: '[PLACEHOLDER — Duration]',
		format: '[PLACEHOLDER — Format]',
	},
]

export default function OfferingsSection() {
	return (
		<section
			id="offerings"
			style={{
				backgroundColor: 'var(--color-bg-primary)',
				paddingBlock: 'var(--space-24)',
				paddingInline: 'var(--space-6)',
			}}
		>
			<div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
				{/* Section header */}
				<div style={{ marginBottom: 'var(--space-12)', maxWidth: '55ch' }}>
					<p className="label-caps" style={{ marginBottom: 'var(--space-3)' }}>
						[PLACEHOLDER — Offerings section eyebrow]
					</p>
					<h2
						style={{
							fontFamily: 'var(--font-display)',
							fontWeight: 400,
							fontSize: 'var(--text-4xl)',
							lineHeight: 'var(--leading-snug)',
							color: 'var(--color-text-primary)',
							marginBottom: 'var(--space-4)',
						}}
					>
						[PLACEHOLDER — Offerings section heading]
					</h2>
					<p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
						[PLACEHOLDER — Offerings section subheading / framing sentence]
					</p>
				</div>

				{/* Card grid */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
						gap: 'var(--space-6)',
					}}
				>
					{placeholderOfferings.map((offering) => (
						<article key={offering.id} className="card">
							<p className="label-caps" style={{ marginBottom: 'var(--space-3)' }}>
								{offering.label}
							</p>

							<h3
								style={{
									fontFamily: 'var(--font-display)',
									fontWeight: 400,
									fontSize: 'var(--text-2xl)',
									lineHeight: 'var(--leading-snug)',
									color: 'var(--color-text-primary)',
									marginBottom: 'var(--space-4)',
								}}
							>
								{offering.title}
							</h3>

							<p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
								{offering.description}
							</p>

							<div
								style={{
									display: 'flex',
									gap: 'var(--space-4)',
									marginBottom: 'var(--space-6)',
									borderTop: '1px solid var(--color-border)',
									paddingTop: 'var(--space-4)',
								}}
							>
								<span className="label-caps">{offering.duration}</span>
								<span className="label-caps">{offering.format}</span>
							</div>

							<a href="#booking-cta" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
								Book This Session
							</a>
						</article>
					))}
				</div>

				{/* Link to /offerings page */}
				<div style={{ marginTop: 'var(--space-10)', textAlign: 'center' }}>
					<a
						href="/offerings"
						className="btn-secondary"
					>
						View All Offerings →
					</a>
				</div>
			</div>
		</section>
	)
}
