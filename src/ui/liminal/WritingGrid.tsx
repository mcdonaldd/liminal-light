'use client'

import { useState } from 'react'
import type { SubstackPost } from '@/lib/substack'
import SubstackPostCard from './SubstackPostCard'

const PAGE_SIZE = 9

export default function WritingGrid({ posts }: { posts: SubstackPost[] }) {
	const [visible, setVisible] = useState(PAGE_SIZE)
	const shown = posts.slice(0, visible)
	const hasMore = visible < posts.length

	return (
		<div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
					gap: 'var(--space-6)',
				}}
			>
				{shown.map((post) => (
					<SubstackPostCard key={post.link} post={post} />
				))}
			</div>

			{hasMore && (
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-10)' }}>
					<button
						type="button"
						onClick={() => setVisible((v) => v + PAGE_SIZE)}
						className="btn-secondary"
					>
						Load more
					</button>
				</div>
			)}
		</div>
	)
}
