import { draftMode } from 'next/headers'

const SANITY_CONFIGURED =
	!!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

export default async function () {
	if (!SANITY_CONFIGURED) return null

	// Dynamically import Sanity live/visual-editing only when actually configured
	const [{ VisualEditing }, { SanityLive }, { VscChevronDown }, { ROUTES }, { default: HoverDetails }] =
		await Promise.all([
			import('next-sanity/visual-editing'),
			import('@/sanity/lib/live'),
			import('react-icons/vsc'),
			import('@/lib/env'),
			import('@/ui/hover-details'),
		])

	const isDraftMode = (await draftMode()).isEnabled

	return (
		<>
			<SanityLive includeDrafts={isDraftMode} />

			{isDraftMode && (
				<>
					<VisualEditing />

					<HoverDetails className="accordion fixed right-0 bottom-0 bg-amber-200/60 backdrop-blur-xs">
						<summary className="px-4 py-2">
							🚧 Draft mode
							<VscChevronDown />
						</summary>

						<menu className="p-4 pt-0">
							<li>
								<a href="/api/draft-mode/disable" className="link">
									Exit draft mode
								</a>
							</li>
							<li>
								<a href={`/${ROUTES.studio}`} className="link">
									Open the Studio
								</a>
							</li>
						</menu>
					</HoverDetails>
				</>
			)}
		</>
	)
}
