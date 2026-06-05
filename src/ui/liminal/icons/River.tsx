interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function River({ size = 24, color = 'currentColor', strokeWidth = 1.8 }: GlyphProps) {
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
      <path d="M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 20c2-2 4-2 6 0" />
    </svg>
  )
}
