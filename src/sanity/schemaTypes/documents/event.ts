import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export default defineType({
	name: 'event',
	title: 'Event',
	type: 'document',
	icon: CalendarIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'eventType',
			title: 'Event type',
			type: 'string',
			options: {
				list: ['Sound Bath', 'Ceremony', 'Workshop', 'Retreat', 'Other'],
			},
		}),
		defineField({
			name: 'dateTime',
			title: 'Date & time',
			type: 'datetime',
			description: 'Enter in Pacific time (Portland-based practice).',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'locationName',
			title: 'Location name',
			description: 'The venue or place name, e.g. "Living Room Wines".',
			type: 'string',
		}),
		defineField({
			name: 'address',
			title: 'Address',
			description: 'Street address, e.g. "123 Main St, Portland, OR".',
			type: 'string',
		}),
		defineField({
			name: 'description',
			type: 'text',
		}),
		defineField({
			name: 'ticketLink',
			title: 'Ticket link',
			type: 'url',
			validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'dateTime',
			media: 'image',
		},
	},
	orderings: [
		{
			name: 'dateTimeAsc',
			title: 'Date (upcoming first)',
			by: [{ field: 'dateTime', direction: 'asc' }],
		},
		{
			name: 'dateTimeDesc',
			title: 'Date (most recent first)',
			by: [{ field: 'dateTime', direction: 'desc' }],
		},
	],
})
