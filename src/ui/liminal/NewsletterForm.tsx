'use client'

import { useState, type FormEvent } from 'react'
import FormField from './FormField'

function isValidEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function NewsletterForm() {
	const [email, setEmail] = useState('')
	const [touched, setTouched] = useState(false)
	const [submitting, setSubmitting] = useState(false)
	const [result, setResult] = useState<'sent' | null>(null)
	const [error, setError] = useState<string | null>(null)

	const validationError = !email.trim()
		? 'Please share your email.'
		: !isValidEmail(email)
			? 'That email doesn’t look quite right.'
			: undefined

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()
		setTouched(true)
		setError(null)
		if (validationError) return

		setSubmitting(true)
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			})
			const data = await res.json().catch(() => null)
			if (!res.ok) throw new Error(data?.error || 'Something went wrong. Please try again.')
			setResult('sent')
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
		} finally {
			setSubmitting(false)
		}
	}

	if (result === 'sent') {
		return (
			<p style={{ fontWeight: 300, fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-primary)' }}>
				Thank you — you're on the list. Keep an eye on your inbox.
			</p>
		)
	}

	return (
		<form onSubmit={handleSubmit} noValidate>
			<FormField id="newsletter-email" label="Email" error={touched ? (error ?? validationError) : undefined}>
				<input
					name="email"
					type="email"
					className="field-input"
					autoComplete="email"
					placeholder="you@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					onBlur={() => setTouched(true)}
					aria-invalid={touched && !!(error ?? validationError)}
					aria-describedby={touched && (error ?? validationError) ? 'newsletter-email-error' : undefined}
					id="newsletter-email"
				/>
			</FormField>

			<button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={submitting}>
				{submitting ? 'Signing up…' : 'Sign up'}
			</button>
		</form>
	)
}
