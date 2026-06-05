'use client'

import { useId } from 'react'

const accordionItems = [
	{
		entryQuote: '"I feel like an outsider, even at home."',
		header: 'Finding Where You Fit',
		body: 'For those navigating systemic friction or carrying the quiet weight of feeling "different" within their families, relationships, or corporate spaces. We work to clear the energetic static and build a deep sense of internal safety. By dropping out of the analytical survival strategies that keep you permanently on guard, you can fully engage with others and occupy your life without dimming your light.',
	},
	{
		entryQuote: '"I\'m the one holding everything together."',
		header: 'Sustainable Giving',
		body: 'For the empaths, caretakers, and fellow healing practitioners who spend their lives stabilizing the systems around them while quietly running on empty. It is a unique burden to hold space for others while your own overstimulated nervous system is humming with low-grade anxiety. This is a dedicated container for the guides to become the guided, providing a safe, grounded place to drop the armor, receive deep restoration, and move from chronic exhaustion back into balance.',
	},
	{
		entryQuote: '"I want things to be better, but I\'m stuck."',
		header: 'Navigating the Threshold',
		body: 'For those standing at a crossroads who recognize that being "stuck" is often the result of boundaries that have become too rigid. This is a space for deep, advanced threshold work that goes beyond simple stress management. Within a highly calibrated container of safety, we allow the armor to drop so you can look honestly at your limits, safely step past them, and surprise yourself with how strong you actually are. Transformation happens when the pressure is met with absolute steadiness.',
	},
]

function AccordionItem({
	item,
	index,
}: {
	item: (typeof accordionItems)[number]
	index: number
}) {
	return (
		<details
			style={{
				borderTop: '1px solid var(--color-border)',
				paddingBlock: 'var(--space-6)',
			}}
		>
			<summary
				style={{
					listStyle: 'none',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 'var(--space-4)',
					cursor: 'pointer',
				}}
			>
				<blockquote
					style={{
						fontFamily: 'var(--font-display)',
						fontWeight: 400,
						fontSize: 'var(--text-xl)',
						lineHeight: 'var(--leading-snug)',
						color: 'var(--color-text-primary)',
						fontStyle: 'italic',
						margin: 0,
					}}
				>
					{item.entryQuote}
				</blockquote>

				{/* Chevron icon */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					style={{
						width: 20,
						height: 20,
						flexShrink: 0,
						color: 'var(--color-text-secondary)',
						transition: 'rotate var(--duration-normal) var(--ease-out)',
					}}
				>
					<path d="m6 9 6 6 6-6" />
				</svg>
			</summary>

			<div
				style={{
					paddingTop: 'var(--space-6)',
					paddingLeft: 0,
				}}
			>
				<h3
					style={{
						fontFamily: 'var(--font-body)',
						fontWeight: 600,
						fontSize: 'var(--text-lg)',
						color: 'var(--color-accent-ember)',
						marginBottom: 'var(--space-3)',
						letterSpacing: 'var(--tracking-wide)',
					}}
				>
					{item.header}
				</h3>

				<p
					style={{
						fontWeight: 300,
						lineHeight: 'var(--leading-relaxed)',
						color: 'var(--color-text-secondary)',
						maxWidth: '65ch',
					}}
				>
					{item.body}
				</p>
			</div>
		</details>
	)
}

export default function IsThisYou() {
	return (
		<section
			id="is-this-you"
			style={{
				backgroundColor: 'var(--color-bg-surface)',
				paddingBlock: 'var(--space-24)',
				paddingInline: 'var(--space-6)',
				borderTop: '1px solid var(--color-border)',
			}}
		>
			<div
				style={{
					maxWidth: 'var(--container-lg)',
					margin: '0 auto',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
					gap: 'var(--space-16)',
					alignItems: 'start',
				}}
			>
				{/* Left: heading */}
				<div style={{ position: 'sticky', top: 'calc(var(--nav-height) + var(--space-8))' }}>
					<p className="label-caps" style={{ marginBottom: 'var(--space-4)' }}>
						Recognition
					</p>
					<h2
						style={{
							fontFamily: 'var(--font-display)',
							fontWeight: 400,
							fontSize: 'var(--text-4xl)',
							lineHeight: 'var(--leading-snug)',
							color: 'var(--color-text-primary)',
						}}
					>
						Is This You?
					</h2>
				</div>

				{/* Right: accordions + storytelling anchor */}
				<div>
					{/* Accordion list */}
					<div style={{ marginBottom: 'var(--space-12)', borderBottom: '1px solid var(--color-border)' }}>
						{accordionItems.map((item, i) => (
							<AccordionItem key={i} item={item} index={i} />
						))}
					</div>

					{/* Storytelling anchor — always visible */}
					<div>
						<h3
							style={{
								fontFamily: 'var(--font-display)',
								fontWeight: 400,
								fontSize: 'var(--text-2xl)',
								lineHeight: 'var(--leading-snug)',
								color: 'var(--color-text-primary)',
								marginBottom: 'var(--space-6)',
							}}
						>
							How We Walk Through It
						</h3>

						<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
							<p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)', maxWidth: '65ch' }}>
								I don't look at a hyper-analytical mind or an overstimulated system as a problem to be fixed. Your mind is a brilliant, protective tool, but it can become an exhausting prison. Because I spent over a decade leading innovation in high-pressure corporate environments, I know the precise texture of that mental noise.
							</p>
							<p style={{ fontWeight: 300, lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)', maxWidth: '65ch' }}>
								My work isn't about overriding your intellect; it's about establishing a presence so steady and resonant that your mind finally feels permitted to hand the reins back to your body. Through grounded energy, sound resonance, and sacred ceremony, we clear a path forward so you can land back in yourself.
							</p>
						</div>

						<div style={{ marginTop: 'var(--space-8)' }}>
							<a href="#booking-cta" className="btn-primary">
								Book a Free Consultation
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
