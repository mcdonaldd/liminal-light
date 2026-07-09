'use client'

import { useEffect, useRef, useState } from 'react'
import NewsletterForm from './NewsletterForm'

export default function NewsletterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
	const dialogRef = useRef<HTMLDialogElement>(null)
	const [formKey, setFormKey] = useState(0)

	useEffect(() => {
		const dialog = dialogRef.current
		if (!dialog) return

		const handleClose = () => onClose()
		dialog.addEventListener('close', handleClose)
		return () => dialog.removeEventListener('close', handleClose)
	}, [onClose])

	useEffect(() => {
		const dialog = dialogRef.current
		if (!dialog) return

		if (open && !dialog.open) {
			dialog.showModal()
			// Reset to a fresh form each time the modal is opened.
			setFormKey((k) => k + 1)
		} else if (!open && dialog.open) {
			dialog.close()
		}
	}, [open])

	function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
		if (e.target === dialogRef.current) onClose()
	}

	return (
		<dialog
			ref={dialogRef}
			className="inquiry-modal"
			aria-labelledby="newsletter-modal-title"
			onClick={handleBackdropClick}
		>
			<div className="inquiry-modal-panel" style={{ maxWidth: 400 }}>
				<div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
					<div>
						<p
							id="newsletter-modal-title"
							style={{
								fontFamily: 'var(--font-body)',
								fontWeight: 600,
								fontSize: 'var(--text-xs)',
								letterSpacing: 'var(--tracking-wider)',
								textTransform: 'uppercase',
								color: 'var(--color-accent-magenta)',
								marginBottom: 'var(--space-2)',
							}}
						>
							Newsletter
						</p>
						<h2
							style={{
								fontFamily: 'var(--font-display)',
								fontWeight: 400,
								fontSize: 'var(--text-2xl)',
								lineHeight: 'var(--leading-snug)',
								color: 'var(--color-text-primary)',
							}}
						>
							Stay in touch
						</h2>
					</div>
					<button type="button" onClick={onClose} aria-label="Close" className="modal-close-btn">
						<svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
							<path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
						</svg>
					</button>
				</div>

				<p style={{ fontWeight: 300, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
					Occasional notes on upcoming gatherings and new writing — no spam, unsubscribe anytime.
				</p>

				<NewsletterForm key={formKey} />
			</div>
		</dialog>
	)
}
