interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Air({ size = 24, color = 'currentColor', strokeWidth = 1.4 }: GlyphProps) {
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
      <path d="M12 12 C14 8 19 9 18 14 C17 19 11 20 8 16 C5 12 7 7 12 6" />
    </svg>
  )
}
