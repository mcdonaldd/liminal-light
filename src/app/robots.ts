import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

	return {
		rules: [
			// Bytespider has a history of ignoring robots.txt; disallow it
			// explicitly rather than relying on the wildcard rule below.
			{ userAgent: 'Bytespider', disallow: '/' },
			{ userAgent: '*', allow: '/' },
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	}
}
