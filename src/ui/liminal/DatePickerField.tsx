'use client'

import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react'
import { createPortal } from 'react-dom'

const WEEKDAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTH_LABELS = [
	'January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December',
]

function parseISO(iso: string): Date | null {
	if (!iso) return null
	const [y, m, d] = iso.split('-').map(Number)
	if (!y || !m || !d) return null
	return new Date(y, m - 1, d)
}

function toISO(date: Date): string {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function formatDateDisplay(iso: string): string {
	const date = parseISO(iso)
	if (!date) return ''
	return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function isSameDay(a: Date, b: Date) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function buildMonthGrid(year: number, month: number) {
	const firstOfMonth = new Date(year, month, 1)
	const startWeekday = firstOfMonth.getDay()
	const daysInMonth = new Date(year, month + 1, 0).getDate()
	const daysInPrevMonth = new Date(year, month, 0).getDate()

	const cells: { date: Date; inMonth: boolean }[] = []
	for (let i = startWeekday - 1; i >= 0; i--) {
		cells.push({ date: new Date(year, month - 1, daysInPrevMonth - i), inMonth: false })
	}
	for (let d = 1; d <= daysInMonth; d++) {
		cells.push({ date: new Date(year, month, d), inMonth: true })
	}
	let next = 1
	while (cells.length < 42) {
		cells.push({ date: new Date(year, month + 1, next), inMonth: false })
		next += 1
	}
	return cells
}

interface DatePickerFieldProps {
	id: string
	value: string
	onChange: (value: string) => void
	placeholder?: string
	/** Nearest non-clipping positioned ancestor to portal the calendar into (escapes the scrollable modal body). */
	portalRef: RefObject<HTMLElement | null>
}

export default function DatePickerField({ id, value, onChange, placeholder = 'Select a date', portalRef }: DatePickerFieldProps) {
	const selected = parseISO(value)
	const today = new Date()
	const [open, setOpen] = useState(false)
	const [viewDate, setViewDate] = useState(selected ?? today)
	const [coords, setCoords] = useState({ top: 0, left: 0, width: 0, maxHeight: 400 })
	const triggerRef = useRef<HTMLButtonElement>(null)
	const panelRef = useRef<HTMLDivElement>(null)

	// Reset the visible month whenever the picker opens.
	useEffect(() => {
		if (open) setViewDate(selected ?? today)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open])

	// Position the panel relative to the portal container: below the trigger by
	// default, flipped above it when there isn't room below. Available space is
	// measured against the actual browser viewport, not the dialog's own box —
	// on desktop the dialog is a small fit-content card with plenty of page
	// around it, so clamping to its bounds would clip the calendar needlessly.
	// Only on very short viewports (e.g. landscape mobile), where the dialog
	// *is* the viewport, does neither side have room for the panel's full
	// height; there its height is capped and it scrolls internally instead of
	// running off the edge of the screen.
	useLayoutEffect(() => {
		if (!open) return
		const trigger = triggerRef.current
		const container = portalRef.current
		const panel = panelRef.current
		if (!trigger || !container || !panel) return

		const margin = 8
		const containerRect = container.getBoundingClientRect()
		const triggerRect = trigger.getBoundingClientRect()
		const panelRect = panel.getBoundingClientRect()

		const spaceBelowViewport = window.innerHeight - triggerRect.bottom - margin
		const spaceAboveViewport = triggerRect.top - margin
		const flipAbove = panelRect.height > spaceBelowViewport && spaceAboveViewport > spaceBelowViewport

		const maxHeight = Math.max(160, Math.floor(flipAbove ? spaceAboveViewport : spaceBelowViewport))
		const panelHeight = Math.min(panelRect.height, maxHeight)

		const topViewport = flipAbove ? triggerRect.top - panelHeight - 6 : triggerRect.bottom + 6
		const leftViewport = Math.min(
			Math.max(triggerRect.left, margin),
			Math.max(margin, window.innerWidth - panelRect.width - margin),
		)

		// Convert back to dialog-relative coordinates, since the panel is
		// positioned absolute within the dialog (its containing block).
		const top = topViewport - containerRect.top
		const left = leftViewport - containerRect.left

		setCoords((c) => (c.top === top && c.left === left && c.width === triggerRect.width && c.maxHeight === maxHeight
			? c
			: { top, left, width: triggerRect.width, maxHeight }))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open, viewDate])

	// Close on outside click / Escape.
	useEffect(() => {
		if (!open) return
		function handlePointer(e: MouseEvent) {
			const target = e.target as Node
			if (panelRef.current?.contains(target) || triggerRef.current?.contains(target)) return
			setOpen(false)
		}
		function handleKey(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				e.stopPropagation()
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handlePointer)
		document.addEventListener('keydown', handleKey)
		return () => {
			document.removeEventListener('mousedown', handlePointer)
			document.removeEventListener('keydown', handleKey)
		}
	}, [open])

	// Close if the scrollable modal body scrolls, so the panel never drifts from its trigger.
	useEffect(() => {
		if (!open) return
		const scrollParent = portalRef.current?.querySelector('.inquiry-modal-panel')
		if (!scrollParent) return
		const handleScroll = () => setOpen(false)
		scrollParent.addEventListener('scroll', handleScroll)
		return () => scrollParent.removeEventListener('scroll', handleScroll)
	}, [open, portalRef])

	const year = viewDate.getFullYear()
	const month = viewDate.getMonth()
	const cells = buildMonthGrid(year, month)

	function selectDate(date: Date) {
		onChange(toISO(date))
		setOpen(false)
	}

	return (
		<>
			<button
				ref={triggerRef}
				type="button"
				id={id}
				className="field-input date-picker-trigger"
				onClick={() => setOpen((o) => !o)}
				aria-haspopup="dialog"
				aria-expanded={open}
			>
				<span style={{ color: value ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>
					{value ? formatDateDisplay(value) : placeholder}
				</span>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
					<path d="M2 6.5H14" stroke="currentColor" strokeWidth="1.2" />
					<path d="M5 1.5V4M11 1.5V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
				</svg>
			</button>

			{open && portalRef.current && createPortal(
				<div
					ref={panelRef}
					role="group"
					aria-label="Choose a date"
					className="date-picker-panel"
					style={{ top: coords.top, left: coords.left, minWidth: Math.max(coords.width, 264), maxHeight: coords.maxHeight, overflowY: 'auto' }}
				>
					<div className="date-picker-header">
						<button
							type="button"
							onClick={() => setViewDate(new Date(year, month - 1, 1))}
							aria-label="Previous month"
							className="date-picker-nav-btn"
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
								<path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
						<span className="date-picker-month-label">{MONTH_LABELS[month]} {year}</span>
						<button
							type="button"
							onClick={() => setViewDate(new Date(year, month + 1, 1))}
							aria-label="Next month"
							className="date-picker-nav-btn"
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
								<path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>

					<div className="date-picker-weekdays">
						{WEEKDAY_LABELS.map((w, i) => <span key={`${w}-${i}`}>{w}</span>)}
					</div>

					<div className="date-picker-grid">
						{cells.map(({ date, inMonth }, i) => {
							const isSelected = selected ? isSameDay(date, selected) : false
							const isToday = isSameDay(date, today)
							return (
								<button
									type="button"
									key={i}
									onClick={() => selectDate(date)}
									className="date-picker-day"
									data-selected={isSelected || undefined}
									data-today={isToday || undefined}
									data-muted={!inMonth || undefined}
								>
									{date.getDate()}
								</button>
							)
						})}
					</div>

					<div className="date-picker-footer">
						<button type="button" className="date-picker-today-btn" onClick={() => selectDate(today)}>
							Today
						</button>
					</div>
				</div>,
				portalRef.current,
			)}
		</>
	)
}
