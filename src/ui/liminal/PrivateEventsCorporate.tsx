import RevealOnScroll from './RevealOnScroll'

export default function PrivateEventsCorporate() {
	return (
		<section
			id="private-events-corporate"
			style={{
				position: 'relative',
				overflow: 'hidden',
				marginTop: '-4px',
				backgroundColor: 'var(--color-bg-primary)',
				paddingBlock: 'var(--space-24)',
				paddingInline: 'var(--space-6)',
			}}
		>
			<div style={{ maxWidth: 'var(--container-md)', margin: '0 auto' }}>
				<RevealOnScroll>
					<div>
						<p
							style={{
								fontFamily: 'var(--font-body)',
								fontWeight: 600,
								fontSize: 'var(--text-sm)',
								letterSpacing: 'var(--tracking-wider)',
								textTransform: 'uppercase',
								color: 'var(--color-accent-teal)',
								marginBottom: 'var(--space-3)',
							}}
						>
							For teams & organizations
						</p>
						<h2
							style={{
								fontFamily: 'var(--font-display)',
								fontWeight: 400,
								fontSize: 'clamp(var(--text-2xl), 3vw, var(--text-3xl))',
								lineHeight: 'var(--leading-snug)',
								color: 'var(--color-text-primary)',
								marginBottom: 'var(--space-2)',
							}}
						>
							Corporate Offsites and Systemic Reset
						</h2>
						<p style={{ fontStyle: 'italic', fontWeight: 300, fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
							For leadership offsites, all-hands meetings, and wellness days.
						</p>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
							<p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
								In high-stakes and hyper-analytical environments, the pressure to always have the answers creates a specific kind of fragmentation. I know this intimately from my own time leading innovation in the tech space. When a team is running on systemic fatigue, strategic alignment is nearly impossible.
							</p>
							<p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
								For leaders, teams, and high-achieving empaths, these private sessions serve as a circuit breaker. We step away from the whiteboards and the metrics to use sound resonance to untangle the tension held in the body. It is a quiet and highly effective way to clear out the mental noise so your team can return to the work with clarity, focus, and a renewed capacity to connect.
							</p>
						</div>
					</div>
				</RevealOnScroll>
			</div>
		</section>
	)
}
