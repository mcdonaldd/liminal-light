import type { Metadata } from 'next'
import { FALLBACK_SUBSTACK_URL } from '@/lib/env'
import { getSubstackPosts } from '@/lib/substack'
import { getSite } from '@/sanity/lib/queries'
import BookingCTA from '@/ui/liminal/BookingCTA'
import LiminalFooter from '@/ui/liminal/LiminalFooter'
import WritingGrid from '@/ui/liminal/WritingGrid'

export const metadata: Metadata = {
	title: 'Writing — Liminal Light',
	description:
		'Essays on healing, identity, systems, and what it means to live in a body while working in tech, by Nathan Ghabour. Published on Substack.',
}

export const revalidate = 3600

export default async function WritingPage() {
	const site = await getSite()
	const substackUrl = site?.substackUrl || FALLBACK_SUBSTACK_URL
	const posts = (await getSubstackPosts(substackUrl)).slice(0, 20)

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
								color: 'var(--color-accent-gold)',
								marginBottom: 'var(--space-4)',
							}}
						>
							The Writing
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
							Where the thinking happens out loud.
						</h1>

						<p
							style={{
								fontWeight: 300,
								fontSize: 'var(--text-lg)',
								lineHeight: 'var(--leading-relaxed)',
								color: 'var(--color-text-secondary)',
							}}
						>
							Essays on healing, identity, systems, and what it means to live in a body while
							working in tech. Published on Substack.
						</p>
					</div>

					{posts.length > 0 ? (
						<WritingGrid posts={posts} />
					) : (
						<a
							href={substackUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="post-card"
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 'var(--space-16) var(--space-6)',
								backgroundColor: 'var(--color-bg-surface)',
								border: '1px solid var(--color-border)',
								borderRadius: 'var(--radius-lg)',
								textDecoration: 'none',
								fontFamily: 'var(--font-body)',
								fontWeight: 600,
								fontSize: 'var(--text-base)',
								color: 'var(--color-accent-ember-hover)',
							}}
						>
							Read Nathan's writing on Substack →
						</a>
					)}
				</div>
			</section>
			<BookingCTA />
			<LiminalFooter />
		</>
	)
}
