import Img from '@/ui/img'
import type { EVENTS_QUERY_RESULT } from '@/sanity/types'

type Event = NonNullable<EVENTS_QUERY_RESULT['upcoming']>[number]

const EVENT_TYPE_TAGS: Record<string, { bg: string; color: string }> = {
	'Sound Bath': { bg: 'var(--color-accent-teal)', color: 'var(--color-text-primary)' },
	Ceremony: { bg: 'var(--color-accent-magenta)', color: 'var(--color-text-on-dark)' },
	Workshop: { bg: 'var(--color-accent-volt)', color: 'var(--color-text-primary)' },
	Retreat: { bg: 'var(--color-accent-gold)', color: 'var(--color-text-primary)' },
	Other: { bg: 'var(--color-border)', color: 'var(--color-text-primary)' },
}

function formatEventDate(iso: string) {
	const date = new Date(iso)
	if (Number.isNaN(date.getTime())) return ''
	return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
}

function formatEventTime(iso: string) {
	const date = new Date(iso)
	if (Number.isNaN(date.getTime())) return ''
	return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(date)
}

export default function EventCard({ event, muted = false }: { event: Event; muted?: boolean }) {
	const tag = event.eventType ? (EVENT_TYPE_TAGS[event.eventType] ?? EVENT_TYPE_TAGS.Other) : null
	const dateLabel = event.dateTime ? formatEventDate(event.dateTime) : ''
	const timeLabel = event.dateTime ? formatEventTime(event.dateTime) : ''

	return (
		<article
			style={{
				display: 'flex',
				maxHeight: 220,
				backgroundColor: 'var(--color-bg-surface)',
				border: '1px solid var(--color-border)',
				borderRadius: 'var(--radius-lg)',
				overflow: 'hidden',
				boxShadow: 'var(--shadow-sm)',
				opacity: muted ? 0.65 : 1,
			}}
		>
			{event.image && (
				<div
					style={{
						position: 'relative',
						width: '38%',
						minWidth: 120,
						maxWidth: 220,
						flexShrink: 0,
						backgroundColor: 'var(--color-border)',
					}}
				>
					<Img
						image={event.image}
						width={300}
						height={400}
						alt={event.title ?? ''}
						style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
					/>
				</div>
			)}

			<div
				style={{
					padding: 'var(--space-4)',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--space-2)',
					flex: 1,
					minWidth: 0,
					overflow: 'hidden',
				}}
			>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
					{tag && (
						<span
							style={{
								display: 'inline-block',
								padding: '2px var(--space-3)',
								borderRadius: 'var(--radius-sm)',
								backgroundColor: tag.bg,
								color: tag.color,
								fontFamily: 'var(--font-body)',
								fontWeight: 600,
								fontSize: 'var(--text-xs)',
								letterSpacing: 'var(--tracking-wider)',
								textTransform: 'uppercase',
								flexShrink: 0,
							}}
						>
							{event.eventType}
						</span>
					)}
					{dateLabel && (
						<p
							style={{
								fontFamily: 'var(--font-body)',
								fontWeight: 600,
								fontSize: 'var(--text-xs)',
								letterSpacing: 'var(--tracking-wider)',
								textTransform: 'uppercase',
								color: 'var(--color-text-secondary)',
								marginLeft: 'auto',
								textAlign: 'right',
								whiteSpace: 'nowrap',
							}}
						>
							{dateLabel}
							{timeLabel && ` · ${timeLabel}`}
						</p>
					)}
				</div>

				<h3
					style={{
						fontFamily: 'var(--font-display)',
						fontWeight: 400,
						fontSize: 'var(--text-xl)',
						lineHeight: 'var(--leading-snug)',
						color: 'var(--color-text-primary)',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				>
					{event.title}
				</h3>

				{(event.locationName || event.address) && (
					<p
						style={{
							fontWeight: 500,
							fontSize: 'var(--text-sm)',
							color: 'var(--color-text-secondary)',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						}}
					>
						{event.locationName}
						{event.locationName && event.address && ' — '}
						{event.address}
					</p>
				)}

				{event.description && (
					<p
						style={{
							fontWeight: 300,
							fontSize: 'var(--text-sm)',
							lineHeight: 'var(--leading-relaxed)',
							color: 'var(--color-text-secondary)',
							flex: 1,
							display: '-webkit-box',
							WebkitLineClamp: 2,
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
						}}
					>
						{event.description}
					</p>
				)}

				{event.ticketLink && (
					<a
						href={event.ticketLink}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-secondary"
						style={{ alignSelf: 'flex-start', flexShrink: 0 }}
					>
						Get tickets →
					</a>
				)}
			</div>
		</article>
	)
}
