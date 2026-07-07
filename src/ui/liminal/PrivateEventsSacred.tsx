import RevealOnScroll from './RevealOnScroll'
import ArcTransition from './ArcTransition'

export default function PrivateEventsSacred() {
	return (
		<section
			id="private-events-sacred"
			style={{
				position: 'relative',
				overflow: 'hidden',
				marginTop: '-4px',
				backgroundColor: 'var(--color-bg-dark)',
				paddingBlock: 'var(--space-24)',
				paddingInline: 'var(--space-6)',
			}}
		>
			<ArcTransition variant="top" fill="var(--color-bg-primary)" offset={0.5} />

			<div style={{ position: 'relative', zIndex: 1, maxWidth: 'var(--container-md)', margin: '0 auto' }}>
				<RevealOnScroll>
					<p
						style={{
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: 'var(--text-sm)',
							letterSpacing: 'var(--tracking-wider)',
							textTransform: 'uppercase',
							color: 'var(--color-accent-magenta)',
							marginBottom: 'var(--space-3)',
						}}
					>
						For sacred gatherings
					</p>
					<h2
						style={{
							fontFamily: 'var(--font-display)',
							fontWeight: 400,
							fontSize: 'clamp(var(--text-2xl), 3vw, var(--text-3xl))',
							lineHeight: 'var(--leading-snug)',
							color: 'var(--color-text-on-dark)',
							marginBottom: 'var(--space-2)',
						}}
					>
						Sacred Gatherings and Thresholds
					</h2>
					<p style={{ fontStyle: 'italic', fontWeight: 300, fontSize: 'var(--text-base)', color: 'var(--color-text-on-dark-muted)', marginBottom: 'var(--space-6)' }}>
						For weddings, ceremonies, grief rituals, and memorials.
					</p>
				</RevealOnScroll>

				<RevealOnScroll delay={60}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
						<p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-on-dark-muted)' }}>
							There are moments in life that require us to pause, witness, and be held. In these ceremonial spaces, sound acts as a container for whatever is moving through the room. That could be joy, grief, or the quiet weight of a shared transition.
						</p>
						<p style={{ fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-on-dark-muted)' }}>
							Approaching this work with a grounded and &ldquo;hollow bone&rdquo; presence, I use vibrational sound to support the emotional and energetic weight of the gathering. The resonance helps clear the path. It allows you and your community to fully arrive in the present moment, honor the threshold you are crossing, and make space for what comes next.
						</p>
					</div>
				</RevealOnScroll>
			</div>
		</section>
	)
}
