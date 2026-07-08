import type { Metadata } from 'next'
import LiminalFooter from '@/ui/liminal/LiminalFooter'
import NewsletterForm from '@/ui/liminal/NewsletterForm'

export const metadata: Metadata = {
	title: 'Newsletter — Liminal Light',
	description:
		'Sign up for occasional notes on upcoming sound baths, ceremonies, and new writing from Nathan Ghabour.',
}

export default function NewsletterPage() {
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
				<div style={{ maxWidth: 'var(--container-sm)', margin: '0 auto' }}>
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
						Newsletter
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
						Stay in touch.
					</h1>

					<p
						style={{
							fontWeight: 300,
							fontSize: 'var(--text-lg)',
							lineHeight: 'var(--leading-relaxed)',
							color: 'var(--color-text-secondary)',
							marginBottom: 'var(--space-10)',
							maxWidth: '55ch',
						}}
					>
						Occasional notes on upcoming gatherings and new writing. No spam, unsubscribe anytime.
					</p>

					<div style={{ maxWidth: 400 }}>
						<NewsletterForm />
					</div>
				</div>
			</section>
			<LiminalFooter />
		</>
	)
}
