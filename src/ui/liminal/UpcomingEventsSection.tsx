import Link from 'next/link'
import { getEvents } from '@/sanity/lib/queries'
import EventCard from './EventCard'

export default async function UpcomingEventsSection() {
	const { upcoming } = (await getEvents()) ?? { upcoming: [], past: [] }
	const featured = (upcoming ?? []).slice(0, 3)

	if (featured.length === 0) return null

	return (
		<section
			id="events"
			style={{
				position: 'relative',
				marginTop: '-4px',
				backgroundColor: 'var(--color-bg-primary)',
				paddingBlock: 'var(--space-24)',
				paddingInline: 'var(--space-6)',
			}}
		>
			<div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
				<p
					style={{
						fontFamily: 'var(--font-body)',
						fontWeight: 600,
						fontSize: 'var(--text-sm)',
						letterSpacing: 'var(--tracking-wider)',
						textTransform: 'uppercase',
						color: 'var(--color-accent-magenta)',
						marginBottom: 'var(--space-8)',
					}}
				>
					Events
				</p>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
						gap: 'var(--space-6)',
					}}
				>
					{featured.map((event) => (
						<EventCard key={event._id} event={event} />
					))}
				</div>

				<div style={{ marginTop: 'var(--space-6)' }}>
					<Link
						href="/events"
						style={{
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: 'var(--text-sm)',
							color: 'var(--color-text-secondary)',
							textDecoration: 'underline',
							textUnderlineOffset: '3px',
						}}
					>
						View all events →
					</Link>
				</div>
			</div>
		</section>
	)
}
