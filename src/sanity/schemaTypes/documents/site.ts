import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	groups: [
		{ name: 'branding', default: true },
		{ name: 'navigation' },
		{ name: 'info' },
		{ name: 'links' },
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
			group: 'branding',
		}),
		defineField({
			name: 'logo',
			type: 'logo',
			group: 'branding',
		}),
		defineField({
			name: 'ogimage',
			title: 'OpenGraph image (global)',
			description: 'Used for social sharing previews',
			type: 'image',
			group: 'branding',
		}),
		defineField({
			name: 'header',
			type: 'reference',
			to: [{ type: 'navigation' }],
			group: 'navigation',
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			group: 'navigation',
		}),
		defineField({
			name: 'footer',
			type: 'reference',
			to: [{ type: 'navigation' }],
			group: 'navigation',
		}),
		defineField({
			name: 'social',
			type: 'reference',
			to: [{ type: 'navigation' }],
			group: 'navigation',
		}),
		defineField({
			name: 'copyright',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: [],
				},
			],
			group: 'info',
		}),
		defineField({
			name: 'bookingUrl',
			title: 'Booking URL',
			description: 'Where "Book a call" buttons across the site link to (e.g. your Cal.com link).',
			type: 'url',
			validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
			group: 'links',
		}),
		defineField({
			name: 'substackUrl',
			title: 'Substack URL',
			description: 'The base URL of your Substack publication (e.g. https://yourname.substack.com).',
			type: 'url',
			validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
			group: 'links',
		}),
		defineField({
			name: 'contactEmail',
			title: 'Contact email',
			type: 'string',
			validation: (Rule) => Rule.email(),
			group: 'links',
		}),
		defineField({
			name: 'addressLocality',
			title: 'City',
			description: 'Used in structured data (JSON-LD) so AI search engines and answer bots can resolve where the business is based, e.g. "Portland".',
			type: 'string',
			group: 'info',
		}),
		defineField({
			name: 'addressRegion',
			title: 'State / region',
			description: 'e.g. "OR". Used alongside City in structured data.',
			type: 'string',
			group: 'info',
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Site',
		}),
	},
})
