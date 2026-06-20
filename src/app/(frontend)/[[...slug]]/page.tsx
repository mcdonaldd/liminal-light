import pkg from '@@/package.json'
import type { Metadata } from 'next'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'
import { ROUTES } from '@/lib/env'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { sanityFetchLive } from '@/sanity/lib/live'
import {
	getSite,
	GLOBAL_MODULE_EXCLUDE_QUERY,
	GLOBAL_MODULE_PATH_QUERY,
	MODULES_QUERY,
} from '@/sanity/lib/queries'
import type { PAGE_QUERY_RESULT } from '@/sanity/types'
import ModulesResolver from '@/ui/modules'
import About from '@/ui/liminal/About'
import BookingCTA from '@/ui/liminal/BookingCTA'
import Hero from '@/ui/liminal/Hero'
import IsThisYou from '@/ui/liminal/IsThisYou'
import LiminalFooter from '@/ui/liminal/LiminalFooter'
import NarrativeBridge from '@/ui/liminal/NarrativeBridge'
import OfferingsSection from '@/ui/liminal/OfferingsSection'
import SubstackSection from '@/ui/liminal/SubstackSection'

type Props = {
	params: Promise<{ slug?: string[] }>
}

const SANITY_CONFIGURED =
	!!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

export default async function Page({ params }: Props) {
	const { slug } = await params
	const isRoot = !slug || slug.length === 0

	// When Sanity is not yet configured, render static Liminal Light pages
	if (!SANITY_CONFIGURED) {
		if (isRoot) {
			return (
				<>
					<Hero />
					<NarrativeBridge />
					<IsThisYou />
					<OfferingsSection />
					<About />
					<BookingCTA />
					<SubstackSection />
					<LiminalFooter />
				</>
			)
		}
		notFound()
	}

	const page = await getPage(slug)

	if (!page) {
		if (isRoot) {
			return (
				<>
					<Hero />
					<NarrativeBridge />
					<IsThisYou />
					<OfferingsSection />
					<About />
					<BookingCTA />
					<SubstackSection />
					<LiminalFooter />
				</>
			)
		}
		notFound()
	}

	return <ModulesResolver page={page!} />
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params
	const isRoot = !slug || slug.length === 0

	if (!SANITY_CONFIGURED) {
		return {
			title: 'Liminal Light — Somatic Healing with Nathan Ghabour',
			description:
				'[PLACEHOLDER — Site meta description: 1–2 sentences for SEO, 155 chars max.]',
		}
	}

	const [page, site] = await Promise.all([getPage(slug), getSite()])
	const { title, description, image, noIndex } = page?.metadata ?? {}

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url: [process.env.NEXT_PUBLIC_BASE_URL, slug?.join('/')]
				.filter(Boolean)
				.join('/'),
			images: [
				image
					? urlFor(image).width(1200).url()
					: site?.ogimage
						? urlFor(site.ogimage).width(1200).url()
						: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?slug=${slug?.join('/')}`,
			],
		},
		robots: {
			index: noIndex ? false : undefined,
		},
		alternates: {
			types: {
				'application/rss+xml': `/${ROUTES.blog}/rss.xml`,
				'text/markdown': `/${slug?.length ? slug.join('/') : 'index'}.md`,
			},
		},
		generator: `SanityPress v${pkg.version}`,
	}
}

export async function generateStaticParams() {
	if (!SANITY_CONFIGURED) return []

	const slugs = await client.fetch<string[]>(
		groq`
			*[
				_type == 'page'
				&& defined(metadata.slug.current)
				&& !(metadata.slug.current in ['404'])
			].metadata.slug.current
		`,
	)

	return slugs.map((slug) => ({
		slug: slug === 'index' ? undefined : slug.split('/'),
	}))
}

async function getPage(slug?: string[]) {
	return await sanityFetchLive<PAGE_QUERY_RESULT>({
		query: PAGE_QUERY,
		params: {
			slug: slug ? slug.join('/') : 'index',
		},
	})
}

const PAGE_QUERY = groq`
	*[_type == 'page' && metadata.slug.current == $slug][0]{
		...,
		'modules': (
			// global moddules (before)
			*[_type == 'global-module' && path == '*' && ${GLOBAL_MODULE_EXCLUDE_QUERY}].before[]{ ${MODULES_QUERY} }
			// path modules (before)
			+ *[_type == 'global-module' && path != '*' && ${GLOBAL_MODULE_PATH_QUERY}].before[]{ ${MODULES_QUERY} }
			// page modules
			+ modules[]{ ${MODULES_QUERY} }
			// path modules (after)
			+ *[_type == 'global-module' && path != '*' && ${GLOBAL_MODULE_PATH_QUERY}].after[]{ ${MODULES_QUERY} }
			// global moddules (after)
			+ *[_type == 'global-module' && path == '*' && ${GLOBAL_MODULE_EXCLUDE_QUERY}].after[]{ ${MODULES_QUERY} }
		)
	}
`
