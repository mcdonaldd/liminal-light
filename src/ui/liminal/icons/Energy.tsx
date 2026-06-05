interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Energy({ size = 24, color = 'currentColor', strokeWidth = 1.4 }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  )
}
