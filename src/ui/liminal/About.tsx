export default function About() {
	return (
		<section
			id="about"
			style={{
				backgroundColor: 'var(--color-bg-surface)',
				paddingBlock: 'var(--space-24)',
				paddingInline: 'var(--space-6)',
				borderTop: '1px solid var(--color-border)',
			}}
		>
			<div
				style={{
					maxWidth: 'var(--container-xl)',
					margin: '0 auto',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
					gap: 'var(--space-16)',
					alignItems: 'center',
				}}
			>
				{/* Image placeholder */}
				<div
					style={{
						aspectRatio: '4 / 5',
						backgroundColor: 'var(--color-border)',
						borderRadius: 'var(--radius-lg)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: 'var(--color-text-secondary)',
						fontFamily: 'var(--font-body)',
						fontSize: 'var(--text-sm)',
					}}
				>
					[PLACEHOLDER — Nathan's portrait photo]
				</div>

				{/* Text content */}
				<div>
					<p className="label-caps" style={{ marginBottom: 'var(--space-4)' }}>
						[PLACEHOLDER — About section eyebrow label]
					</p>

					<h2
						style={{
							fontFamily: 'var(--font-display)',
							fontWeight: 400,
							fontSize: 'var(--text-4xl)',
							lineHeight: 'var(--leading-snug)',
							color: 'var(--color-text-primary)',
							marginBottom: 'var(--space-6)',
						}}
					>
						[PLACEHOLDER — About heading, e.g. "My name is Nathan Ghabour."]
					</h2>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
						<p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
							[PLACEHOLDER — About paragraph 1: Nathan's background, origin story, what led him to this work]
						</p>
						<p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
							[PLACEHOLDER — About paragraph 2: His modalities, what makes his approach distinct]
						</p>
						<p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
							[PLACEHOLDER — About paragraph 3: What clients experience working with him]
						</p>
					</div>

					<div style={{ marginTop: 'var(--space-8)' }}>
						<a href="#offerings" className="btn-secondary">
							See Offerings
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
