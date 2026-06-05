interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Path({ size = 24, color = 'currentColor', strokeWidth = 1.4 }: GlyphProps) {
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
      <path d="M4 20 C6 18 9 16 11 13 C13 10 16 7 20 4" />
    </svg>
  )
}
