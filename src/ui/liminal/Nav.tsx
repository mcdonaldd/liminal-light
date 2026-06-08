'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import FoilArc from './FoilArc'

const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Offerings', href: '#offerings' },
	{ label: 'Is This You?', href: '#is-this-you' },
]

export default function Nav() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header
			style={{
				position: 'sticky',
				top: 0,
				height: 'var(--nav-height)',
				zIndex: 'var(--z-sticky)',
				backgroundColor: scrolled ? 'rgba(234,212,168,0.88)' : 'var(--color-bg-primary)',
				backdropFilter: scrolled ? 'blur(12px)' : 'none',
				WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
				transition: 'background-color var(--duration-slow) var(--ease-out), backdrop-filter var(--duration-slow) var(--ease-out)',
			}}
		>
			<div
				style={{
					maxWidth: 'var(--container-xl)',
					margin: '0 auto',
					height: '100%',
					padding: '0 var(--space-6)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 'var(--space-8)',
				}}
			>
				{/* Brand */}
				<Link
					href="/"
					style={{
						fontFamily: 'var(--font-display)',
						fontWeight: 400,
						fontSize: 'var(--text-lg)',
						color: 'var(--color-text-primary)',
						textDecoration: 'none',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						gap: 2,
						lineHeight: 1,
					}}
				>
					<span>Liminal Light</span>
					<span className="hidden md:block">
						<FoilArc style={{ width: 100, height: 6 }} />
					</span>
				</Link>

				{/* Desktop nav */}
				<nav
					aria-label="Primary navigation"
					style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}
				>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							style={{
								fontFamily: 'var(--font-body)',
								fontWeight: 500,
								fontSize: '11px',
								color: 'var(--color-text-secondary)',
								textDecoration: 'none',
								letterSpacing: 'var(--tracking-widest)',
								textTransform: 'uppercase',
								transition: 'color var(--duration-fast) var(--ease-out)',
							}}
							onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
							onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
						>
							{link.label}
						</a>
					))}
					<a
						href="#booking-cta"
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: 'var(--space-2) var(--space-4)',
							borderRadius: '2px',
							backgroundColor: 'transparent',
							border: '1.5px solid var(--color-accent-ember)',
							color: 'var(--color-accent-ember)',
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: 'var(--text-xs)',
							letterSpacing: 'var(--tracking-wider)',
							textTransform: 'uppercase',
							textDecoration: 'none',
							transition: 'background-color var(--duration-fast) var(--ease-out)',
						}}
						onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(196,78,25,0.08)')}
						onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
					>
						Book a call
					</a>
				</nav>
			</div>
		</header>
	)
}
