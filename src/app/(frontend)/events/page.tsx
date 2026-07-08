import type { Metadata } from 'next'
import { getEvents, getSite } from '@/sanity/lib/queries'
import EventCard from '@/ui/liminal/EventCard'
import LiminalFooter from '@/ui/liminal/LiminalFooter'
import PrivateEventsCTA from '@/ui/liminal/PrivateEventsCTA'

export const metadata: Metadata = {
	title: 'Events — Liminal Light',
	description:
		'Upcoming sound baths, ceremonies, and gatherings with Nathan Ghabour in Portland, Oregon.',
}

export const revalidate = 3600

export default async function EventsPage() {
	const [{ upcoming, past }, site] = await Promise.all([
		getEvents().then((events) => events ?? { upcoming: [], past: [] }),
		getSite(),
	])

	return (
		<>
			<section
				style={{
					position: 'relative',
					backgroundColor: 'var(--color-bg-primary)',
					paddingBlock: 'var(--space-24)',
					paddingInline: 'var(--space-6)',
				}}
			>
				<div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
					<div style={{ marginBottom: 'var(--space-12)', maxWidth: '55ch' }}>
						<p
							style={{
								fontFamily: 'var(--font-body)',
								fontWeight: 600,
								fontSize: 'var(--text-sm)',
								letterSpacing: 'var(--tracking-wider)',
								textTransform: 'uppercase',
								color: 'var(--color-accent-magenta)',
								marginBottom: 'var(--space-4)',
							}}
						>
							Events
						</p>

						<h1
							style={{
								fontFamily: 'var(--font-display)',
								fontWeight: 400,
								fontSize: 'clamp(var(--text-3xl), 4.5vw, var(--text-5xl))',
								lineHeight: 'var(--leading-tight)',
								color: 'var(--color-text-primary)',
								marginBottom: 'var(--space-4)',
							}}
						>
							Gather in person.
						</h1>

						<p
							style={{
								fontWeight: 300,
								fontSize: 'var(--text-lg)',
								lineHeight: 'var(--leading-relaxed)',
								color: 'var(--color-text-secondary)',
							}}
						>
							Sound baths, ceremonies, and gatherings held in Portland, Oregon and beyond.
						</p>
					</div>

					{upcoming && upcoming.length > 0 ? (
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
								gap: 'var(--space-6)',
								marginBottom: 'var(--space-16)',
							}}
						>
							{upcoming.map((event) => (
								<EventCard key={event._id} event={event} />
							))}
						</div>
					) : (
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 'var(--space-16) var(--space-6)',
								backgroundColor: 'var(--color-bg-surface)',
								border: '1px solid var(--color-border)',
								borderRadius: 'var(--radius-lg)',
								marginBottom: 'var(--space-16)',
								fontWeight: 300,
								fontSize: 'var(--text-base)',
								color: 'var(--color-text-secondary)',
								textAlign: 'center',
							}}
						>
							No events currently scheduled — check back soon.
						</div>
					)}

					{past && past.length > 0 && (
						<div>
							<h2
								style={{
									fontFamily: 'var(--font-display)',
									fontWeight: 400,
									fontSize: 'var(--text-2xl)',
									lineHeight: 'var(--leading-snug)',
									color: 'var(--color-text-primary)',
									marginBottom: 'var(--space-6)',
								}}
							>
								Past events
							</h2>
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
									gap: 'var(--space-6)',
								}}
							>
								{past.map((event) => (
									<EventCard key={event._id} event={event} muted />
								))}
							</div>
						</div>
					)}
				</div>
			</section>
			<PrivateEventsCTA contactEmail={site?.contactEmail} dark />
			<LiminalFooter />
		</>
	)
}
