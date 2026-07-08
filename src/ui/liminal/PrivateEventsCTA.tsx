'use client'

import { useState } from 'react'
import ArcTransition from './ArcTransition'
import FoilArc from './FoilArc'
import RevealOnScroll from './RevealOnScroll'
import InquiryModal from './InquiryModal'

export default function PrivateEventsCTA({
	contactEmail,
	dark = false,
}: {
	contactEmail?: string
	dark?: boolean
}) {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<section
			id="private-events-cta"
			style={{
				position: 'relative',
				overflow: 'hidden',
				marginTop: '-4px',
				backgroundColor: dark ? 'var(--color-bg-dark)' : 'var(--color-bg-primary)',
				paddingBlock: 'var(--space-24)',
				paddingInline: 'var(--space-6)',
			}}
		>
			<ArcTransition
				variant="top"
				fill={dark ? 'var(--color-bg-primary)' : 'var(--color-bg-dark)'}
				offset={0.6}
				depth={1.0}
			/>
			{dark && <ArcTransition variant="bottom" fill="var(--color-bg-primary)" offset={0.65} depth={1.0} />}

			<div style={{ position: 'relative', zIndex: 1, maxWidth: 'var(--container-md)', margin: '0 auto' }}>
				<RevealOnScroll>
					<p
						style={{
							fontFamily: 'var(--font-body)',
							fontWeight: 600,
							fontSize: 'var(--text-sm)',
							letterSpacing: 'var(--tracking-wider)',
							textTransform: 'uppercase',
							color: dark ? 'var(--color-accent-teal)' : 'var(--color-accent-ember)',
							marginBottom: 'var(--space-3)',
						}}
					>
						Bring this work to your gathering
					</p>
					<div style={{ width: 'fit-content', maxWidth: '100%' }}>
						<h2
							style={{
								fontFamily: 'var(--font-display)',
								fontWeight: 400,
								fontSize: 'clamp(var(--text-2xl), 3vw, var(--text-3xl))',
								lineHeight: 'var(--leading-snug)',
								color: dark ? 'var(--color-text-on-dark)' : 'var(--color-text-primary)',
								marginBottom: 'var(--space-6)',
							}}
						>
							Every group and environment is different.
						</h2>

						{dark && (
							<FoilArc style={{ width: '100%', height: 10, marginBottom: 'var(--space-6)', display: 'block' }} />
						)}
					</div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)', maxWidth: '60ch' }}>
						<p
							style={{
								fontSize: 'var(--text-lg)',
								fontWeight: 300,
								lineHeight: 'var(--leading-relaxed)',
								color: dark ? 'var(--color-text-on-dark-muted)' : 'var(--color-text-secondary)',
							}}
						>
							I do not offer a standard template. Whether we are setting up in a boardroom or a ceremonial circle, we will collaborate to ensure the space is held exactly as it needs to be.
						</p>
						<p
							style={{
								fontSize: 'var(--text-lg)',
								fontWeight: 300,
								lineHeight: 'var(--leading-relaxed)',
								color: dark ? 'var(--color-text-on-dark-muted)' : 'var(--color-text-secondary)',
							}}
						>
							Please reach out to discuss the intention, location, and logistics of your upcoming event.
						</p>
					</div>

					<button type="button" onClick={() => setModalOpen(true)} className="btn-primary">
						Inquire about an event
					</button>
				</RevealOnScroll>
			</div>

			<InquiryModal open={modalOpen} onClose={() => setModalOpen(false)} contactEmail={contactEmail} />
		</section>
	)
}
