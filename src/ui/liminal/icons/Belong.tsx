interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Belong({ size = 24, color = 'currentColor', strokeWidth = 1.4 }: GlyphProps) {
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
      <path d="M7 21 C7 14 9 8 12 5" />
      <path d="M17 21 C17 14 15 8 12 5" />
    </svg>
  )
}
