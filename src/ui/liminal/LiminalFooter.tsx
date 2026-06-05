'use client'

import FoilArc from './FoilArc'

export default function LiminalFooter() {
	return (
		<footer
			style={{
				backgroundColor: 'var(--color-bg-dark)',
				paddingBlock: 'var(--space-16)',
				paddingInline: 'var(--space-6)',
				borderTop: '1px solid rgba(255,255,255,0.06)',
			}}
		>
			<div
				style={{
					maxWidth: 'var(--container-xl)',
					margin: '0 auto',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
					gap: 'var(--space-12)',
					alignItems: 'start',
					marginBottom: 'var(--space-12)',
				}}
			>
				{/* Brand */}
				<div>
					<p
						style={{
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: 'var(--text-base)',
							color: 'var(--color-text-on-dark)',
							marginBottom: 4,
						}}
					>
						Liminal Light
					</p>
					<FoilArc style={{ width: 100, height: 6 }} />
					<p
						style={{
							marginTop: 'var(--space-4)',
							fontWeight: 300,
							fontSize: 'var(--text-sm)',
							lineHeight: 'var(--leading-relaxed)',
							color: 'var(--color-text-on-dark-muted)',
							maxWidth: '30ch',
						}}
					>
						[PLACEHOLDER — Footer brand tagline, 1 short sentence]
					</p>
				</div>

				{/* Nav links */}
				<nav aria-label="Footer navigation">
					<p className="label-caps" style={{ color: 'var(--color-text-on-dark-muted)', marginBottom: 'var(--space-4)' }}>
						Navigate
					</p>
					<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
						{[
							{ label: 'About', href: '#about' },
							{ label: 'Offerings', href: '#offerings' },
							{ label: 'Is This You?', href: '#is-this-you' },
							{ label: 'Substack', href: '#substack' },
						].map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									style={{
										fontWeight: 300,
										fontSize: 'var(--text-sm)',
										color: 'var(--color-text-on-dark-muted)',
										textDecoration: 'none',
										transition: 'color var(--duration-fast) var(--ease-out)',
									}}
									onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-on-dark)')}
									onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-on-dark-muted)')}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Contact / CTA */}
				<div>
					<p className="label-caps" style={{ color: 'var(--color-text-on-dark-muted)', marginBottom: 'var(--space-4)' }}>
						Work Together
					</p>
					<a href="#booking-cta" className="btn-primary" style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}>
						Free 15-Min Consult
					</a>
					<p style={{ fontWeight: 300, fontSize: 'var(--text-xs)', color: 'var(--color-text-on-dark-muted)' }}>
						[PLACEHOLDER — Contact email or social link]
					</p>
				</div>
			</div>

			{/* Bottom bar */}
			<div
				style={{
					borderTop: '1px solid rgba(255,255,255,0.06)',
					paddingTop: 'var(--space-6)',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					alignItems: 'center',
					gap: 'var(--space-4)',
				}}
			>
				<p style={{ fontWeight: 300, fontSize: 'var(--text-xs)', color: 'var(--color-text-on-dark-muted)' }}>
					© {new Date().getFullYear()} Liminal Light. All rights reserved.
				</p>
				<p style={{ fontWeight: 300, fontSize: 'var(--text-xs)', color: 'var(--color-text-on-dark-muted)' }}>
					[PLACEHOLDER — Privacy policy / terms link if needed]
				</p>
			</div>
		</footer>
	)
}
