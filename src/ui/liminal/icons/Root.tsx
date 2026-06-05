interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Root({ size = 24, color = 'currentColor', strokeWidth = 1.4 }: GlyphProps) {
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
      <line x1="12" y1="3" x2="12" y2="16" />
      <line x1="12" y1="16" x2="6" y2="21" />
      <line x1="12" y1="16" x2="18" y2="21" />
      <line x1="12" y1="20" x2="9" y2="23" />
      <line x1="12" y1="20" x2="15" y2="23" />
    </svg>
  )
}
