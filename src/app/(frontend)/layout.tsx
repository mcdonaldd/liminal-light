import { Instrument_Serif, Manrope } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { preconnect } from 'react-dom'
import VisualEditing from '@/ui/modules/visual-editing'
import Nav from '@/ui/liminal/Nav'
import '@/app.css'

const instrumentSerif = Instrument_Serif({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-instrument-serif',
	display: 'swap',
})

const manrope = Manrope({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-manrope',
	display: 'swap',
})

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	preconnect('https://cdn.sanity.io')

	return (
		<html lang="en" className={`${instrumentSerif.variable} ${manrope.variable}`}>
			<NuqsAdapter>
				<body className="antialiased">
					<Nav />
					<main>{children}</main>
					<VisualEditing />
				</body>
			</NuqsAdapter>
		</html>
	)
}
