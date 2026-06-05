import type { Metadata } from 'next'

const SANITY_CONFIGURED =
	!!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

export const metadata: Metadata = {
	title: '404 — Page Not Found',
}

export default async function NotFound() {
	if (!SANITY_CONFIGURED) {
		return (
			<div
				style={{
					minHeight: '60vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 'var(--space-6)',
					padding: 'var(--space-16)',
					textAlign: 'center',
				}}
			>
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
					404
				</p>
				<h1
					style={{
						fontFamily: 'var(--font-display)',
						fontWeight: 400,
						fontSize: 'var(--text-4xl)',
						color: 'var(--color-text-primary)',
					}}
				>
					Page not found
				</h1>
				<a href="/" className="btn-primary">
					Return Home
				</a>
			</div>
		)
	}

	const { default: ModulesResolver } = await import('@/ui/modules')
	const { sanityFetchLive } = await import('@/sanity/lib/live')
	const { MODULES_QUERY } = await import('@/sanity/lib/queries')
	const { groq } = await import('next-sanity')

	const NOT_FOUND_QUERY = groq`
		*[_type == 'page' && metadata.slug.current == '404'][0]{
			...,
			modules[]{ ${MODULES_QUERY} }
		}
	`

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const page = await sanityFetchLive<any>({ query: NOT_FOUND_QUERY })
	return <ModulesResolver page={page} />
}
