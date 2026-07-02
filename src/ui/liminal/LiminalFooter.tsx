import Link from 'next/link'
import FoilArc from './FoilArc'

export default function LiminalFooter() {
	return (
		<footer
			style={{
				backgroundColor: 'var(--color-bg-primary)',
				paddingBlock: 'var(--space-12)',
				paddingInline: 'var(--space-6)',
			}}
		>
			<div
				style={{
					maxWidth: 'var(--container-xl)',
					margin: '0 auto',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
					gap: 'var(--space-10)',
					alignItems: 'start',
				}}
			>
				{/* Brand */}
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
						<span
							style={{
								fontFamily: 'var(--font-display)',
								fontWeight: 400,
								fontSize: 'var(--text-lg)',
								color: 'var(--color-text-primary)',
							}}
						>
							Liminal Light
						</span>
						<span style={{ display: 'block', width: '100%' }}>
							<FoilArc style={{ width: '100%', height: 6 }} />
						</span>
					</div>
					<p
						style={{
							fontWeight: 300,
							fontSize: 'var(--text-sm)',
							lineHeight: 'var(--leading-relaxed)',
							color: 'var(--color-text-secondary)',
							maxWidth: '30ch',
							marginTop: 'var(--space-2)',
						}}
					>
						Somatic healing with Nathan Ghabour.
						<br />
						Portland, Oregon.
					</p>
				</div>

				{/* Navigate */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
					<p
						style={{
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: '11px',
							letterSpacing: 'var(--tracking-wider)',
							textTransform: 'uppercase',
							color: 'var(--color-text-secondary)',
							marginBottom: 'var(--space-1)',
						}}
					>
						Navigate
					</p>
					{[
						{ label: 'About Nathan', href: '/about' },
						{ label: 'Offerings', href: '/offerings' },
						{ label: 'Book a free call', href: '#booking-cta' },
					].map(({ label, href }) => (
						<Link key={href} href={href} className="footer-link">
							{label}
						</Link>
					))}
				</div>

				{/* Writing */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
					<p
						style={{
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: '11px',
							letterSpacing: 'var(--tracking-wider)',
							textTransform: 'uppercase',
							color: 'var(--color-text-secondary)',
							marginBottom: 'var(--space-1)',
						}}
					>
						Writing
					</p>
					<a
						href="https://liminalight.substack.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-link"
					>
						Substack
					</a>
				</div>
			</div>

			{/* Bottom bar */}
			<div
				style={{
					maxWidth: 'var(--container-xl)',
					margin: 'var(--space-10) auto 0',
					paddingTop: 0,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexWrap: 'wrap',
					gap: 'var(--space-4)',
				}}
			>
				<p
					style={{
						fontWeight: 300,
						fontSize: 'var(--text-xs)',
						color: 'var(--color-text-secondary)',
						opacity: 0.7,
					}}
				>
					&copy; {new Date().getFullYear()} Nathan Ghabour. All rights reserved.
				</p>
				<p
					style={{
						fontWeight: 300,
						fontSize: 'var(--text-xs)',
						color: 'var(--color-text-secondary)',
						opacity: 0.5,
					}}
				>
					liminallight.help
				</p>
			</div>
		</footer>
	)
}
