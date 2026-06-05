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
      <path d="M3 9 Q7 6 12 9 Q17 12 21 9" />
      <path d="M3 15 Q7 12 12 15 Q17 18 21 15" />
    </svg>
  )
}
