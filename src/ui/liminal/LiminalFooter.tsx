export default function LiminalFooter() {
	return (
		<footer
			style={{
				backgroundColor: 'var(--color-bg-primary)',
				paddingBlock: 'var(--space-10)',
				paddingInline: 'var(--space-6)',
			}}
		>
			<div
				style={{
					maxWidth: 'var(--container-xl)',
					margin: '0 auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<span
					style={{
						fontFamily: 'var(--font-display)',
						fontWeight: 400,
						fontSize: 'var(--text-base)',
						color: 'var(--color-text-secondary)',
					}}
				>
					Nathan Ghabour
				</span>
			</div>
		</footer>
	)
}
