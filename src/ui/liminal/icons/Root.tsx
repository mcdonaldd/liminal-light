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
      <path d="M12 22V8" />
      <path d="M12 14C9 14 6 11 6 8" />
      <path d="M12 14C15 14 18 11 18 8" />
      <path d="M12 8C12 6 13 4 15 4" />
    </svg>
  )
}
