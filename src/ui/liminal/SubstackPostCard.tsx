import Image from 'next/image'
import type { SubstackPost } from '@/lib/substack'

function formatDate(dateStr: string) {
	const date = new Date(dateStr)
	if (Number.isNaN(date.getTime())) return null
	return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date)
}

export default function SubstackPostCard({ post }: { post: SubstackPost }) {
	const date = formatDate(post.pubDate)

	return (
		<a
			href={post.link}
			target="_blank"
			rel="noopener noreferrer"
			className="post-card media-row-card"
			style={{
				backgroundColor: 'var(--color-bg-surface)',
				border: '1px solid var(--color-border)',
				borderRadius: 'var(--radius-lg)',
				overflow: 'hidden',
				textDecoration: 'none',
				boxShadow: 'var(--shadow-sm)',
			}}
		>
			{post.thumbnail && (
				<div
					className="media-row-card-media"
					style={{
						position: 'relative',
						backgroundColor: 'var(--color-border)',
					}}
				>
					<Image src={post.thumbnail} alt="" fill sizes="220px" style={{ objectFit: 'cover' }} />
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
				{date && (
					<p
						style={{
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: 'var(--text-xs)',
							letterSpacing: 'var(--tracking-wider)',
							textTransform: 'uppercase',
							color: 'var(--color-text-secondary)',
						}}
					>
						{date}
					</p>
				)}

				<h3
					className="media-row-card-title"
					style={{
						fontFamily: 'var(--font-display)',
						fontWeight: 400,
						fontSize: 'var(--text-xl)',
						lineHeight: 'var(--leading-snug)',
						color: 'var(--color-text-primary)',
					}}
				>
					{post.title}
				</h3>

				{post.excerpt && (
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
						{post.excerpt}
					</p>
				)}
			</div>
		</a>
	)
}
