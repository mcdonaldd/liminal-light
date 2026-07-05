import type { MetadataRoute } from 'next'
import { groq } from 'next-sanity'
import { ROUTES } from '@/lib/env'
import { sanityFetchLive } from '@/sanity/lib/live'

export const dynamic = 'force-dynamic'

export default async function (): Promise<MetadataRoute.Sitemap> {
	const data = await sanityFetchLive<{
		pages: MetadataRoute.Sitemap
		posts: MetadataRoute.Sitemap
	}>({
		query: groq`{
			'pages': *[
				_type == 'page'
				&& defined(metadata.slug.current)
				&& !(metadata.slug.current in ['404'])
				&& metadata.noIndex != true
			]|order(metadata.slug.current != 'index', metadata.slug.current){
				'url': $baseUrl + select(
					metadata.slug.current == 'index' => '',
					'/' + metadata.slug.current
				),
				'lastModified': _updatedAt,
				'priority': select(
					metadata.slug.current == 'index' => 1,
					0.5
				)
			},
			'posts': *[
				_type == 'blog.post'
				&& defined(metadata.slug.current)
				&& metadata.noIndex != true
			]|order(publishDate desc){
				'url': $baseUrl + '/' + $blogDir + '/' + metadata.slug.current,
				'lastModified': _updatedAt,
				'priority': 0.4
			}
		}`,
		params: {
			baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
			blogDir: ROUTES.blog,
		},
	})

	// Static routes rendered outside the Sanity-backed [[...slug]] catch-all —
	// not 'page' documents, so the query above can't see them. The homepage
	// itself falls into this bucket too: it's a hardcoded fallback whenever no
	// Sanity 'page' doc with slug 'index' exists (true for this project today).
	const staticRoutes: MetadataRoute.Sitemap = [
		{ path: '', priority: 1 },
		{ path: '/about', priority: 0.5 },
		{ path: '/offerings', priority: 0.5 },
		{ path: '/offerings/private-events', priority: 0.5 },
		{ path: '/events', priority: 0.5 },
		{ path: '/writing', priority: 0.5 },
	].map(({ path, priority }) => ({
		url: process.env.NEXT_PUBLIC_BASE_URL + path,
		priority,
	}))

	const combined = [...Object.values(data).flat(), ...staticRoutes]
	const seen = new Set<string>()
	return combined.filter(({ url }) => (seen.has(url) ? false : (seen.add(url), true)))
}
