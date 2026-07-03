import Parser from 'rss-parser'
import { FALLBACK_SUBSTACK_URL } from '@/lib/env'

type CustomItem = {
	'content:encoded'?: string
}

const parser = new Parser<Record<string, never>, CustomItem>({
	customFields: {
		item: ['content:encoded'],
	},
})

export type SubstackPost = {
	title: string
	link: string
	pubDate: string
	excerpt: string
	thumbnail?: string
}

function extractThumbnail(item: Parser.Item & CustomItem): string | undefined {
	if (item.enclosure?.url) return item.enclosure.url
	const html = item['content:encoded'] ?? item.content ?? ''
	return html.match(/<img[^>]+src="([^"]+)"/)?.[1]
}

function truncate(text: string, max = 160) {
	const trimmed = text.trim()
	if (trimmed.length <= max) return trimmed
	return trimmed.slice(0, max).replace(/\s+\S*$/, '') + '…'
}

export async function getSubstackPosts(substackUrl?: string): Promise<SubstackPost[]> {
	const url = substackUrl || FALLBACK_SUBSTACK_URL

	try {
		const feedUrl = new URL('/feed', url).toString()
		const res = await fetch(feedUrl, { next: { revalidate: 3600 } })
		if (!res.ok) return []

		const xml = await res.text()
		const feed = await parser.parseString(xml)

		return feed.items
			.filter((item): item is typeof item & { link: string; title: string } => !!item.link && !!item.title)
			.map((item) => ({
				title: item.title,
				link: item.link,
				pubDate: item.pubDate ?? item.isoDate ?? '',
				excerpt: truncate(item.contentSnippet ?? ''),
				thumbnail: extractThumbnail(item),
			}))
	} catch (error) {
		console.error('Failed to fetch Substack feed:', error)
		return []
	}
}
