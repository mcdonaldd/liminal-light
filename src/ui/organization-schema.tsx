import {
	FALLBACK_ADDRESS_LOCALITY,
	FALLBACK_ADDRESS_REGION,
	FALLBACK_SUBSTACK_URL,
} from '@/lib/env'
import { getSite } from '@/sanity/lib/queries'

export default async function OrganizationSchema() {
	const site = await getSite()
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

	const sameAs: string[] = []
	for (const link of site?.social?.items ?? []) {
		if (link._type === 'link' && link.external) sameAs.push(link.external)
	}
	sameAs.push(site?.substackUrl || FALLBACK_SUBSTACK_URL)

	const schema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${baseUrl}/#nathan`,
				name: 'Nathan Ghabour',
				jobTitle: 'Somatic Practitioner',
				url: `${baseUrl}/about`,
				sameAs,
				worksFor: { '@id': `${baseUrl}/#business` },
			},
			{
				'@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
				'@id': `${baseUrl}/#business`,
				name: site?.title || 'Liminal Light',
				url: baseUrl,
				founder: { '@id': `${baseUrl}/#nathan` },
				address: {
					'@type': 'PostalAddress',
					addressLocality: site?.addressLocality || FALLBACK_ADDRESS_LOCALITY,
					addressRegion: site?.addressRegion || FALLBACK_ADDRESS_REGION,
					addressCountry: 'US',
				},
			},
		],
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	)
}
