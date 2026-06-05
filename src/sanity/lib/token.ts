import 'server-only'

export const token = process.env.SANITY_API_READ_TOKEN

// Only enforce token when Sanity project is actually configured
const sanityConfigured =
	!!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

if (sanityConfigured && !token) {
	throw new Error('Missing SANITY_API_READ_TOKEN environment variable')
}
