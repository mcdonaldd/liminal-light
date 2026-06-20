'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

export default function RevealOnScroll({
	children,
	delay = 0,
	style,
}: {
	children: ReactNode
	delay?: number
	style?: CSSProperties
}) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.style.opacity = '1'
					el.style.transform = 'translateY(0)'
					obs.disconnect()
				}
			},
			{ threshold: 0.08, rootMargin: '0px 0px -32px 0px' },
		)
		obs.observe(el)
		return () => obs.disconnect()
	}, [])

	return (
		<div
			ref={ref}
			style={{
				opacity: 0,
				transform: 'translateY(18px)',
				transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
				...style,
			}}
		>
			{children}
		</div>
	)
}
