import type { CSSProperties, ReactNode } from 'react'

interface FormFieldProps {
	id: string
	label: string
	hint?: string
	error?: string
	style?: CSSProperties
	children: ReactNode
}

export default function FormField({ id, label, hint, error, style, children }: FormFieldProps) {
	return (
		<div style={{ marginBottom: 'var(--space-8)', ...style }}>
			<label htmlFor={id} className="field-label">{label}</label>
			{children}
			{hint && (
				<p
					style={{
						fontSize: 'var(--text-xs)',
						fontWeight: 300,
						color: 'var(--color-text-secondary)',
						marginTop: 'var(--space-2)',
					}}
				>
					{hint}
				</p>
			)}
			{error && <span id={`${id}-error`} className="field-error">{error}</span>}
		</div>
	)
}
