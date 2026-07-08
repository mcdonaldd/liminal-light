'use client'

import { useState } from 'react'
import NewsletterModal from './NewsletterModal'

export default function NewsletterFooterLink() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<button type="button" onClick={() => setOpen(true)} className="footer-link footer-link-btn">
				Newsletter
			</button>
			<NewsletterModal open={open} onClose={() => setOpen(false)} />
		</>
	)
}
