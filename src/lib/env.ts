export const dev =
	process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview'

// Used when Site Settings' bookingUrl hasn't been set in Sanity yet.
export const FALLBACK_BOOKING_URL = 'https://cal.com/liminallight/15min'

// Used when Site Settings' substackUrl hasn't been set in Sanity yet.
export const FALLBACK_SUBSTACK_URL = 'https://liminalight.substack.com'

// Used when Site Settings' contactEmail hasn't been set in Sanity yet.
export const FALLBACK_INQUIRY_EMAIL = 'hello@liminallight.help'

export const ROUTES = {
	studio: 'admin',
	blog: 'blog',
	// @example services: 'services',
	// @example caseStudies: 'case-studies',
} as const
