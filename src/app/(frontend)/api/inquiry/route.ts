import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { FALLBACK_INQUIRY_EMAIL } from '@/lib/env'
import { getSite } from '@/sanity/lib/queries'

// Resend's shared sending address — no domain verification needed, stays on the free tier.
const FROM_EMAIL = 'Liminal Light <onboarding@resend.dev>'

interface InquiryPayload {
	name: string
	email: string
	eventDate?: string
	location?: string
	groupSize?: string
	message: string
}

function isValidEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function formatDate(iso?: string) {
	if (!iso) return null
	const date = new Date(iso)
	if (Number.isNaN(date.getTime())) return null
	return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export async function POST(request: Request) {
	const body = (await request.json()) as Partial<InquiryPayload>

	if (
		!body.name?.trim() ||
		!body.email?.trim() ||
		!isValidEmail(body.email) ||
		!body.message?.trim()
	) {
		return NextResponse.json({ error: 'Missing or invalid fields.' }, { status: 400 })
	}

	if (!process.env.RESEND_API_KEY) {
		return NextResponse.json({ error: 'Email delivery is not configured.' }, { status: 500 })
	}

	const site = await getSite()
	const to = site?.contactEmail || FALLBACK_INQUIRY_EMAIL

	const lines = [
		`Name: ${body.name}`,
		`Email: ${body.email}`,
		formatDate(body.eventDate) ? `Date: ${formatDate(body.eventDate)}` : null,
		body.location ? `Location: ${body.location}` : null,
		body.groupSize ? `Estimated group size: ${body.groupSize}` : null,
		'',
		'About the gathering:',
		body.message,
	].filter((line): line is string => line !== null)

	const resend = new Resend(process.env.RESEND_API_KEY)
	const { error } = await resend.emails.send({
		from: FROM_EMAIL,
		to,
		replyTo: body.email,
		subject: `Private event inquiry — ${body.name}`,
		text: lines.join('\n'),
	})

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 502 })
	}

	return NextResponse.json({ ok: true })
}
