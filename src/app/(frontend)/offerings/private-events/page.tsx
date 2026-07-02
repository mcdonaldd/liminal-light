import type { Metadata } from 'next'
import PrivateEventsIntro from '@/ui/liminal/PrivateEventsIntro'
import PrivateEventsPhoto from '@/ui/liminal/PrivateEventsPhoto'
import PrivateEventsSacred from '@/ui/liminal/PrivateEventsSacred'
import PrivateEventsCTA from '@/ui/liminal/PrivateEventsCTA'
import LiminalFooter from '@/ui/liminal/LiminalFooter'

export const metadata: Metadata = {
	title: 'Private Sound Baths for Groups & Events — Liminal Light',
	description:
		'Sound bath ceremonies for corporate offsites, weddings, full moon circles, and grief rituals — held by Nathan Ghabour for groups who need a shared, somatic reset.',
}

export default function PrivateEventsPage() {
	return (
		<>
			<PrivateEventsIntro />
			<PrivateEventsPhoto />
			<PrivateEventsSacred />
			<PrivateEventsCTA />
			<LiminalFooter />
		</>
	)
}
