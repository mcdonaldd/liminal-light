import { NextResponse } from 'next/server'

interface SubscribePayload {
	email: string
}

function isValidEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
	const body = (await request.json().catch(() => null)) as Partial<SubscribePayload> | null
	const email = body?.email?.trim()

	if (!email || !isValidEmail(email)) {
		return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
	}

	if (!process.env.KIT_API_KEY || !process.env.KIT_FORM_ID) {
		return NextResponse.json({ error: 'Newsletter signup is not configured.' }, { status: 500 })
	}

	const res = await fetch(`https://api.kit.com/v4/forms/${process.env.KIT_FORM_ID}/subscribers`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Kit-Api-Key': process.env.KIT_API_KEY,
		},
		body: JSON.stringify({ email_address: email }),
	})

	if (!res.ok) {
		const data = await res.json().catch(() => null)
		return NextResponse.json(
			{ error: data?.errors?.[0] || data?.error || 'Something went wrong. Please try again.' },
			{ status: 502 },
		)
	}

	return NextResponse.json({ ok: true })
}
