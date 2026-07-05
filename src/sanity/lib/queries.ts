import { groq } from 'next-sanity'
import type {
	EVENTS_QUERY_RESULT,
	NEXT_EVENT_QUERY_RESULT,
	SITE_QUERY_RESULT,
} from '@/sanity/types'
import { sanityFetchLive } from './live'

/* fragments */

// @sanity-typegen-ignore
const LINK_QUERY = groq`
	...,
	type == 'internal' => {
		internal->{
			_type,
			title,
			'slug': select(
				metadata.slug.current == 'index' => '/',
				'/' + metadata.slug.current
			)
		}
	}
`

// @sanity-typegen-ignore
const NAVIGATION_QUERY = groq`
	...,
	items[]{
		${LINK_QUERY},
		defined(link) => { link{ ${LINK_QUERY} } },
		defined(links[]) => { links[]{ ${LINK_QUERY} } },
		_type == 'megamenu' => {
			defined(link) => { link{ ${LINK_QUERY} } },
			items[]{
				...,
				_type == 'link' => { ${LINK_QUERY} },
				_type == 'link.list' => {
					defined(link) => { link{ ${LINK_QUERY} } },
					links[]{ ${LINK_QUERY} }
				}
			}
		}
	}
`

const SITE_QUERY = groq`*[_type == 'site'][0]{
	...,
	header->{ ${NAVIGATION_QUERY} },
	ctas[]{
		...,
		link{ ${LINK_QUERY} }
	},
	footer->{ ${NAVIGATION_QUERY} },
	social->{ ${NAVIGATION_QUERY} },
}`

// @sanity-typegen-ignore
const EVENT_FIELDS_QUERY = groq`
	...,
	image{ ..., asset-> }
`

const EVENTS_QUERY = groq`{
	'upcoming': *[_type == 'event' && dateTime >= now()] | order(dateTime asc){ ${EVENT_FIELDS_QUERY} },
	'past': *[_type == 'event' && dateTime < now()] | order(dateTime desc){ ${EVENT_FIELDS_QUERY} }
}`

// Kept array-shaped (sliced to one item) rather than using a [0] single-object
// projection — that shape reliably came back null through sanityFetch's
// live/stega wrapper in testing, even though the identical query returns data
// when queried directly against the Sanity API.
const NEXT_EVENT_QUERY = groq`
	*[_type == 'event' && dateTime >= now()] | order(dateTime asc)[0...1]{ ${EVENT_FIELDS_QUERY} }
`

export const GLOBAL_MODULE_EXCLUDE_QUERY = groq`
	select(
		defined(excludePaths) => count(excludePaths[string::startsWith($slug, @)]) == 0,
		true
	)
`

export const GLOBAL_MODULE_PATH_QUERY = groq`
	string::startsWith($slug, path)
	&& ${GLOBAL_MODULE_EXCLUDE_QUERY}
`

// @sanity-typegen-ignore
export const MODULES_QUERY = groq`
	...,
	ctas[]{
		...,
		link{ ${LINK_QUERY} }
	},
	_type == 'form-module' => {
		form->
	},
	_type == 'breadcrumbs' => {
		crumbs[]{ ${LINK_QUERY} }
	},
	_type == 'card-list' => {
		cards[]{
			...,
			ctas[]{
				...,
				link{ ${LINK_QUERY} }
			}
		}
	},
	_type == 'logo-list' => {
		logos[]->
	},
	_type == 'person-list' => {
		people[]->
	},
	_type == 'prose' => {
		content[]{
			...,
			_type == 'image' => {
				...,
				asset->{
					...,
					metadata
				}
			}
		},
		'headings': content[style in ['h2', 'h3', 'h4', 'h5', 'h6']]{
			style,
			'text': pt::text(@)
		}
	},
	_type == 'quote-list' => {
		testimonials[]->
	},
`

/* queries */

export async function getSite() {
	return await sanityFetchLive<SITE_QUERY_RESULT>({
		query: SITE_QUERY,
	})
}

export async function getEvents() {
	return await sanityFetchLive<EVENTS_QUERY_RESULT>({
		query: EVENTS_QUERY,
	})
}

export async function getNextEvent() {
	const events = await sanityFetchLive<NEXT_EVENT_QUERY_RESULT>({
		query: NEXT_EVENT_QUERY,
	})
	return events?.[0] ?? null
}
