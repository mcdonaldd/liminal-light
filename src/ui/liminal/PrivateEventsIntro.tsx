import RevealOnScroll from './RevealOnScroll'

export default function PrivateEventsIntro() {
	return (
		<section
			id="private-events-intro"
			style={{
				position: 'relative',
				backgroundColor: 'var(--color-bg-primary)',
				paddingBlock: 'var(--space-24)',
				paddingInline: 'var(--space-6)',
			}}
		>
			<div style={{ maxWidth: 'var(--container-md)', margin: '0 auto' }}>
				<RevealOnScroll>
					<p
						style={{
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: 'var(--text-sm)',
							letterSpacing: 'var(--tracking-wider)',
							textTransform: 'uppercase',
							color: 'var(--color-accent-ember)',
							marginBottom: 'var(--space-4)',
						}}
					>
						Private events
					</p>

					<h1
						style={{
							fontFamily: 'var(--font-display)',
							fontWeight: 400,
							fontSize: 'clamp(var(--text-3xl), 4.5vw, var(--text-5xl))',
							lineHeight: 'var(--leading-tight)',
							color: 'var(--color-text-primary)',
							marginBottom: 'var(--space-6)',
							maxWidth: '18ch',
						}}
					>
						A Shared Resonance: Sound Baths for Private Events
					</h1>

					<p
						style={{
							fontFamily: 'var(--font-display)',
							fontStyle: 'italic',
							fontWeight: 400,
							fontSize: 'clamp(var(--text-xl), 2.5vw, var(--text-2xl))',
							lineHeight: 'var(--leading-snug)',
							color: 'var(--color-text-primary)',
							marginBottom: 'var(--space-8)',
						}}
					>
						Using the resonance of sound bowls to settle the nervous system, clear the mental noise, and anchor the moment.
					</p>
				</RevealOnScroll>

				<RevealOnScroll delay={60}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-16)' }}>
						<p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
							When we gather to mark a life transition or align a team under high pressure, we bring the full weight of our lived experiences, our systemic fatigue, and our overstimulated minds into the room.
						</p>
						<p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
							A sound bath is not a performance. It is a somatic reset. Using the deep and enduring frequencies of sound bowls and other vibrational instruments, I facilitate a space where the analytical mind can finally power down. The resonance acts as a physical anchor, allowing a room full of people to drop out of their heads, settle their nervous systems, and return to a shared and grounded baseline.
						</p>
						<p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
							Every event carries its own unique intention. I offer sound baths across two distinct worlds of gathering.
						</p>
					</div>
				</RevealOnScroll>

				{/* Corporate Offsites and Systemic Reset */}
				<RevealOnScroll delay={80}>
					<div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-10)' }}>
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
