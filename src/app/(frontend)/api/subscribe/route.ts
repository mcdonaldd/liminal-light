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

	const headers = {
		'Content-Type': 'application/json',
		'X-Kit-Api-Key': process.env.KIT_API_KEY,
	}

	// Kit's combined "add subscriber to form by email" endpoint 404s reliably
	// on this account/plan (confirmed against Kit's own API directly), so this
	// goes through the two-step flow instead: create-or-fetch the subscriber
	// by email, then add that subscriber ID to the form. Both calls are
	// idempotent — safe to resubmit the same email.
	const subscriberRes = await fetch('https://api.kit.com/v4/subscribers', {
		method: 'POST',
		headers,
		body: JSON.stringify({ email_address: email }),
	})

	if (!subscriberRes.ok) {
		const data = await subscriberRes.json().catch(() => null)
		return NextResponse.json(
			{ error: data?.errors?.[0] || data?.error || 'Something went wrong. Please try again.' },
			{ status: 502 },
		)
	}

	const { subscriber } = (await subscriberRes.json()) as { subscriber: { id: number } }

	const formRes = await fetch(
		`https://api.kit.com/v4/forms/${process.env.KIT_FORM_ID}/subscribers/${subscriber.id}`,
		{ method: 'POST', headers, body: JSON.stringify({}) },
	)

	if (!formRes.ok) {
		const data = await formRes.json().catch(() => null)
		return NextResponse.json(
			{ error: data?.errors?.[0] || data?.error || 'Something went wrong. Please try again.' },
			{ status: 502 },
		)
	}

	return NextResponse.json({ ok: true })
}
