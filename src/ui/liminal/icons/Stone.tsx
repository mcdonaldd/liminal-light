interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Stone({ size = 24, color = 'currentColor', strokeWidth = 1.4 }: GlyphProps) {
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
      <path d="M12 4 C17 4 21 7 20 13 C19 19 15 21 10 20 C5 19 3 15 4 10 C5 5 9 4 12 4 Z" />
    </svg>
  )
}
