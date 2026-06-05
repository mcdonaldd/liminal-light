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
      <path d="M12 22V14" />
      <path d="M12 14L6 8" />
      <path d="M12 14L18 8" />
      <path d="M6 8V4" />
      <path d="M18 8V4" />
      <circle cx="12" cy="22" r="0.5" fill={color} stroke="none" />
    </svg>
  )
}
