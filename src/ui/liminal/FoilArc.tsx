'use client'

import type { CSSProperties } from 'react'

export default function FoilArc({ className, style }: { className?: string; style?: CSSProperties }) {
	return (
		<svg
			viewBox="0 0 280 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className={className}
			style={{ width: 280, height: 16, ...style }}
		>
			<defs>
				<linearGradient id="foil-holo" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#C2562A" />
					<stop offset="20%" stopColor="#D4A24C" />
					<stop offset="40%" stopColor="#3FB6C9" />
					<stop offset="60%" stopColor="#FF2D87" />
					<stop offset="80%" stopColor="#E5FF3C" />
					<stop offset="100%" stopColor="#C2562A" />
				</linearGradient>
			</defs>
			<path d="M 5 9 Q 140 19 275 9" stroke="url(#foil-holo)" strokeWidth="2" strokeLinecap="round" />
		</svg>
	)
}
