'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import FoilArc from './FoilArc'

const navLinks = [
	{ label: 'About', href: '/about' },
	{ label: 'Offerings', href: '/offerings' },
]

export default function Nav() {
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => { setMounted(true) }, [])

	useEffect(() => {
		console.log('%cLiminal Light', 'font-size: 1.4em; color: #C44E19; font-family: "Instrument Serif", Georgia, serif; font-style: italic;')
		console.log('Still in the analytical mind?\nNathan was too.\nliminallight.help')
	}, [])

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])

	const bg = scrolled || menuOpen ? 'var(--color-bg-primary-glass)' : 'var(--color-bg-primary)'
	const blur = scrolled || menuOpen ? 'blur(12px)' : 'none'

	return (
		<header
			style={{
				position: 'sticky',
				top: 0,
				zIndex: 'var(--z-sticky)',
				backgroundColor: bg,
				backdropFilter: blur,
				WebkitBackdropFilter: blur,
				transition: 'background-color var(--duration-slow) var(--ease-out), backdrop-filter var(--duration-slow) var(--ease-out)',
			}}
		>
			{/* Bar */}
			<div
				style={{
					maxWidth: 'var(--container-xl)',
					margin: '0 auto',
					height: 'var(--nav-height)',
					padding: '0 var(--space-6)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
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
					<span className="hidden md:block" style={{ display: 'block', width: '100%' }}>
						<FoilArc style={{ width: '100%', height: 6 }} drawIn={mounted} drawDelay={300} />
					</span>
				</Link>

				{/* Desktop nav — hidden below md */}
				<nav
					aria-label="Primary navigation"
					className="hidden md:flex"
					style={{ alignItems: 'center', gap: 'var(--space-8)' }}
				>
					{navLinks.map((link) => (
						<Link
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
						</Link>
					))}
					<a
						href="https://cal.com/liminallight/15min"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: 'var(--space-2) var(--space-4)',
							borderRadius: 'var(--radius-sm)',
							backgroundColor: 'var(--color-accent-ember)',
							border: 'none',
							color: 'var(--color-text-on-dark)',
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: 'var(--text-xs)',
							letterSpacing: 'var(--tracking-wider)',
							textTransform: 'uppercase',
							textDecoration: 'none',
							transition: 'background-color var(--duration-fast) var(--ease-out)',
						}}
						onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-ember-hover)')}
						onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-ember)')}
					>
						Book a call
					</a>
				</nav>

				{/* Mobile controls — hidden above md */}
				<div className="flex md:hidden" style={{ alignItems: 'center', gap: 'var(--space-3)' }}>
					<a
						href="https://cal.com/liminallight/15min"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: 'var(--space-2) var(--space-3)',
							borderRadius: 'var(--radius-sm)',
							backgroundColor: 'var(--color-accent-ember)',
							color: 'var(--color-text-on-dark)',
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: '10px',
							letterSpacing: 'var(--tracking-wider)',
							textTransform: 'uppercase',
							textDecoration: 'none',
						}}
					>
						Book a call
					</a>
					<button
						onClick={() => setMenuOpen((o) => !o)}
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={menuOpen}
						style={{
							background: 'none',
							border: 'none',
							cursor: 'pointer',
							padding: '10px 8px',
							display: 'flex',
							flexDirection: 'column',
							gap: '5px',
						}}
					>
						<span style={{
							display: 'block', width: 20, height: 1.5,
							backgroundColor: 'var(--color-text-primary)', borderRadius: 1,
							transition: 'transform 0.22s cubic-bezier(0.4,0,0.2,1), opacity 0.15s',
							transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
						}} />
						<span style={{
							display: 'block', width: 20, height: 1.5,
							backgroundColor: 'var(--color-text-primary)', borderRadius: 1,
							transition: 'opacity 0.15s',
							opacity: menuOpen ? 0 : 1,
						}} />
						<span style={{
							display: 'block', width: 20, height: 1.5,
							backgroundColor: 'var(--color-text-primary)', borderRadius: 1,
							transition: 'transform 0.22s cubic-bezier(0.4,0,0.2,1), opacity 0.15s',
							transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
						}} />
					</button>
				</div>
			</div>

			{/* Mobile drawer — overlaid, not in flow */}
			{menuOpen && (
				<nav
					aria-label="Mobile navigation"
					className="md:hidden"
					style={{
						position: 'absolute',
						top: '100%',
						left: 0,
						right: 0,
						borderTop: '0.5px solid rgba(90,60,30,0.12)',
						padding: 'var(--space-6) var(--space-6) var(--space-8)',
						display: 'flex',
						flexDirection: 'column',
						gap: 'var(--space-6)',
						backgroundColor: 'var(--color-accent-ember)',
						boxShadow: 'var(--shadow-lg)',
						animation: 'drawerOpen 0.22s cubic-bezier(0.16,1,0.3,1) both',
					}}
				>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							style={{
								fontFamily: 'var(--font-body)',
								fontWeight: 500,
								fontSize: 'var(--text-xs)',
								letterSpacing: 'var(--tracking-widest)',
								textTransform: 'uppercase',
								color: 'var(--color-text-on-dark)',
								textDecoration: 'none',
							}}
						>
							{link.label}
						</Link>
					))}
				</nav>
			)}
		</header>
	)
}
