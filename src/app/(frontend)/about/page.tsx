import type { Metadata } from 'next'
import AboutBio from '@/ui/liminal/AboutBio'
import BookingCTA from '@/ui/liminal/BookingCTA'
import LiminalFooter from '@/ui/liminal/LiminalFooter'

export const metadata: Metadata = {
	title: 'About — Liminal Light',
	description:
		'Nathan Ghabour is a somatic practitioner, Reiki healer, and sacred ceremony guide helping people return to themselves through energy, sound, and ancestral wisdom.',
}

export default function AboutPage() {
	return (
		<>
			<AboutBio />
			<BookingCTA />
			<LiminalFooter />
		</>
	)
}
