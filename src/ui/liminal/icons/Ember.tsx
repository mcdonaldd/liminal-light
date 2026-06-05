interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Ember({ size = 24, color = 'currentColor', strokeWidth = 1.4 }: GlyphProps) {
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
      <path d="M9 20 C4 14 7 7 12 3 C17 7 20 14 15 20" />
    </svg>
  )
}
