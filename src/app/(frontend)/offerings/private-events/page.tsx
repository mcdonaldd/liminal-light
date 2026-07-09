import type { Metadata } from 'next'
import PrivateEventsIntro from '@/ui/liminal/PrivateEventsIntro'
import PrivateEventsPhoto from '@/ui/liminal/PrivateEventsPhoto'
import PrivateEventsCorporate from '@/ui/liminal/PrivateEventsCorporate'
import PrivateEventsSacred from '@/ui/liminal/PrivateEventsSacred'
import PrivateEventsCTA from '@/ui/liminal/PrivateEventsCTA'
import LiminalFooter from '@/ui/liminal/LiminalFooter'
import { getSite } from '@/sanity/lib/queries'

export const metadata: Metadata = {
	title: 'Private Sound Baths for Groups & Events — Liminal Light',
	description:
		'Sound bath ceremonies for corporate offsites, weddings, ceremonies, and grief rituals — held by Nathan Ghabour for groups who need a shared, somatic reset.',
}

export default async function PrivateEventsPage() {
	const site = await getSite()

	return (
		<>
			<PrivateEventsIntro />
			<PrivateEventsPhoto />
			<PrivateEventsCorporate />
			<PrivateEventsSacred />
			<PrivateEventsCTA contactEmail={site?.contactEmail} />
			<LiminalFooter />
		</>
	)
}
