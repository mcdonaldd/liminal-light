import type { Metadata } from 'next'
import OfferingsSection from '@/ui/liminal/OfferingsSection'
import BookingCTA from '@/ui/liminal/BookingCTA'
import LiminalFooter from '@/ui/liminal/LiminalFooter'

export const metadata: Metadata = {
	title: 'Offerings — Liminal Light',
	description:
		'Reiki, vibrational sound therapy, remote medicine sessions, and sacred ceremony with Nathan Ghabour — healing for people standing at the threshold of something new.',
}

export default function OfferingsPage() {
	return (
		<>
			<OfferingsSection />
			<BookingCTA />
			<LiminalFooter />
		</>
	)
}
