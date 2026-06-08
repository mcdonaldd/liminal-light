'use client'

import type { CSSProperties } from 'react'

interface ArcTransitionProps {
	/**
	 * top    — filled arc at top of dark section (light color dips in from above)
	 * bottom — filled arc at bottom of dark section (light color rises from below)
	 * stroke — foil gradient line only, no fill; renders inline for use between same-color sections
	 */
	variant: 'top' | 'bottom' | 'stroke'
	/** Background color of the adjacent light section (not needed for stroke variant) */
	fill?: string
	/** Horizontal position of the arc peak, 0–1. Default 0.5 (centered). Shift for organic asymmetry. */
	offset?: number
	style?: CSSProperties
}

export default function ArcTransition({ variant, fill, offset = 0.5, style }: ArcTransitionProps) {
	const peak = Math.round(offset * 1440)
	const gradientId = `arc-gradient-${variant}-${Math.round(offset * 100)}`

	let fillPath = ''
	let strokePath = ''

	if (variant === 'top') {
		// Light color fills from top, dips down toward peak, dark emerges at sides
		fillPath   = `M0,0 L1440,0 L1440,16 Q${peak},64 0,16 Z`
		strokePath = `M0,16 Q${peak},64 1440,16`
	} else if (variant === 'bottom') {
		// Light color rises from bottom, peaks at offset, dark recedes at sides
		fillPath   = `M0,64 Q${peak},16 1440,64 L1440,80 L0,80 Z`
		strokePath = `M0,64 Q${peak},16 1440,64`
	} else {
		// stroke-only: gentle arc line across the section boundary
		strokePath = `M0,40 Q${peak},16 1440,40`
	}

	const isStroke = variant === 'stroke'

	return (
		<svg
			viewBox="0 0 1440 80"
			preserveAspectRatio="none"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			style={
				isStroke
					? {
							display: 'block',
							width: '100%',
							height: 48,
							...style,
						}
					: {
							position: 'absolute',
							[variant === 'top' ? 'top' : 'bottom']: 0,
							left: 0,
							width: '100%',
							height: 80,
							display: 'block',
							...style,
						}
			}
		>
			<defs>
				<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%"   stopColor="#C44E19" />
					<stop offset="35%"  stopColor="#D4940C" />
					<stop offset="65%"  stopColor="#3FB6C9" />
					<stop offset="100%" stopColor="#FF2D87" />
				</linearGradient>
			</defs>

			{/* Filled shape — only for top/bottom variants */}
			{fill && fillPath && <path d={fillPath} fill={fill} />}

			{/* Foil gradient line — only for explicit stroke variant */}
			{isStroke && (
				<path
					d={strokePath}
					stroke={`url(#${gradientId})`}
					strokeWidth="1.5"
					strokeLinecap="round"
					fill="none"
				/>
			)}
		</svg>
	)
}
