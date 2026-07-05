'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import FormField from './FormField'
import DatePickerField, { formatDateDisplay } from './DatePickerField'
import { FALLBACK_INQUIRY_EMAIL } from '@/lib/env'

interface FormValues {
	name: string
	email: string
	eventDate: string
	location: string
	groupSize: string
	message: string
}

const initialValues: FormValues = {
	name: '',
	email: '',
	eventDate: '',
	location: '',
	groupSize: '',
	message: '',
}

type FieldErrors = Partial<Record<keyof FormValues, string>>

function buildMailto(values: FormValues, inquiryEmail: string) {
	const subject = `Private event inquiry — ${values.name}`
	const lines = [
		`Name: ${values.name}`,
		`Email: ${values.email}`,
		values.eventDate ? `Date: ${formatDateDisplay(values.eventDate)}` : null,
		values.location ? `Location: ${values.location}` : null,
		values.groupSize ? `Estimated group size: ${values.groupSize}` : null,
		'',
		'About the gathering:',
		values.message,
	].filter((line) => line !== null)

	return `mailto:${inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
}

function validate(values: FormValues): FieldErrors {
	const errors: FieldErrors = {}
	if (!values.name.trim()) errors.name = 'Please share your name.'
	if (!values.email.trim()) {
		errors.email = 'Please share an email so we can reach you.'
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors.email = 'That email doesn’t look quite right.'
	}
	if (!values.message.trim()) errors.message = 'Tell us a little about the gathering.'
	return errors
}

export default function InquiryModal({
	open,
	onClose,
	contactEmail,
}: {
	open: boolean
	onClose: () => void
	contactEmail?: string
}) {
	const inquiryEmail = contactEmail || FALLBACK_INQUIRY_EMAIL
	const dialogRef = useRef<HTMLDialogElement>(null)
	const nameInputRef = useRef<HTMLInputElement>(null)
	const [values, setValues] = useState<FormValues>(initialValues)
	const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})
	const [submitting, setSubmitting] = useState(false)
	const [result, setResult] = useState<'sent' | 'fallback' | null>(null)
	const [mailtoHref, setMailtoHref] = useState('')

	const errors = validate(values)

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
			setValues(initialValues)
			setTouched({})
			setResult(null)
			requestAnimationFrame(() => nameInputRef.current?.focus())
		} else if (!open && dialog.open) {
			dialog.close()
		}
	}, [open])

	function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
		if (e.target === dialogRef.current) onClose()
	}

	function handleChange(field: keyof FormValues, value: string) {
		setValues((v) => ({ ...v, [field]: value }))
	}

	function handleBlur(field: keyof FormValues) {
		setTouched((t) => ({ ...t, [field]: true }))
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()
		setTouched({ name: true, email: true, message: true })
		if (Object.keys(errors).length > 0) return

		setSubmitting(true)
		try {
			const res = await fetch('/api/inquiry', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			})
			if (!res.ok) throw new Error('Inquiry request failed')
			setResult('sent')
		} catch {
			const href = buildMailto(values, inquiryEmail)
			setMailtoHref(href)
			window.location.href = href
			setResult('fallback')
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<dialog
			ref={dialogRef}
			className="inquiry-modal"
			aria-labelledby="inquiry-modal-title"
			onClick={handleBackdropClick}
		>
			<div className="inquiry-modal-panel">
				<div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
					<div>
						<p
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
							Private event inquiry
						</p>
						<h2
							id="inquiry-modal-title"
							style={{
								fontFamily: 'var(--font-display)',
								fontWeight: 400,
								fontSize: 'var(--text-2xl)',
								lineHeight: 'var(--leading-snug)',
								color: 'var(--color-text-primary)',
							}}
						>
							Tell me about your gathering
						</h2>
					</div>
					<button
						type="button"
						onClick={onClose}
						aria-label="Close"
						className="modal-close-btn"
					>
						<svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
							<path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
						</svg>
					</button>
				</div>

				{result ? (
					<div role="status">
						{result === 'sent' ? (
							<p style={{ fontWeight: 300, fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-6)' }}>
								Thank you — your inquiry is on its way. I'll be in touch soon.
							</p>
						) : (
							<>
								<p style={{ fontWeight: 300, fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' }}>
									Your email client should now be open with your message ready to send.
								</p>
								<p style={{ fontWeight: 300, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
									If nothing opened, reach out directly at{' '}
									<a href={mailtoHref} style={{ color: 'var(--color-accent-ember)', fontWeight: 500 }}>
										{inquiryEmail}
									</a>.
								</p>
							</>
						)}
						<button type="button" onClick={onClose} className="btn-secondary">
							Close
						</button>
					</div>
				) : (
					<form onSubmit={handleSubmit} noValidate>
						<FormField id="inquiry-name" label="Name" error={touched.name ? errors.name : undefined}>
							<input
								ref={nameInputRef}
								name="name"
								type="text"
								className="field-input"
								autoComplete="name"
								value={values.name}
								onChange={(e) => handleChange('name', e.target.value)}
								onBlur={() => handleBlur('name')}
								aria-invalid={touched.name && !!errors.name}
								aria-describedby={touched.name && errors.name ? 'inquiry-name-error' : undefined}
								id="inquiry-name"
							/>
						</FormField>

						<FormField id="inquiry-email" label="Email" error={touched.email ? errors.email : undefined}>
							<input
								name="email"
								type="email"
								className="field-input"
								autoComplete="email"
								value={values.email}
								onChange={(e) => handleChange('email', e.target.value)}
								onBlur={() => handleBlur('email')}
								aria-invalid={touched.email && !!errors.email}
								aria-describedby={touched.email && errors.email ? 'inquiry-email-error' : undefined}
								id="inquiry-email"
							/>
						</FormField>

						<div className="date-location-grid">
							<FormField id="inquiry-date" label="Date (if known)" style={{ marginBottom: 0 }}>
								<DatePickerField
									id="inquiry-date"
									value={values.eventDate}
									onChange={(value) => handleChange('eventDate', value)}
									portalRef={dialogRef}
								/>
							</FormField>
							<FormField id="inquiry-location" label="Location (if known)" style={{ marginBottom: 0 }}>
								<input
									name="location"
									type="text"
									className="field-input"
									placeholder="City, venue..."
									value={values.location}
									onChange={(e) => handleChange('location', e.target.value)}
									id="inquiry-location"
								/>
							</FormField>
						</div>

						<FormField id="inquiry-group-size" label="Estimated group size">
							<input
								name="groupSize"
								type="number"
								inputMode="numeric"
								min={1}
								className="field-input"
								style={{ maxWidth: 160 }}
								value={values.groupSize}
								onChange={(e) => handleChange('groupSize', e.target.value)}
								id="inquiry-group-size"
							/>
						</FormField>

						<FormField
							id="inquiry-message"
							label="Tell me about your gathering"
							hint="What is the occasion, and what is your intention for the space?"
							error={touched.message ? errors.message : undefined}
							style={{ marginBottom: 'var(--space-6)' }}
						>
							<textarea
								name="message"
								className="field-input"
								rows={4}
								value={values.message}
								onChange={(e) => handleChange('message', e.target.value)}
								onBlur={() => handleBlur('message')}
								aria-invalid={touched.message && !!errors.message}
								aria-describedby={touched.message && errors.message ? 'inquiry-message-error' : undefined}
								id="inquiry-message"
							/>
						</FormField>

						<button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={submitting}>
							{submitting ? 'Sending…' : 'Send inquiry'}
						</button>
					</form>
				)}
			</div>
		</dialog>
	)
}
