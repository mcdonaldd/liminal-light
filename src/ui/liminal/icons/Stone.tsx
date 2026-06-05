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
      <path d="M5 14c0-4 3-8 7-8s7 3 7 7c0 3-2 5-7 5s-7-1-7-4Z" />
      <path d="M9 12c.5-1.5 2-2.5 3.5-2.5" />
    </svg>
  )
}
