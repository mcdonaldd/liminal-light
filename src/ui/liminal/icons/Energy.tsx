interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Energy({ size = 24, color = 'currentColor', strokeWidth = 1.4 }: GlyphProps) {
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
      <path d="M12 8 Q15 7 15 10" />
      <path d="M16 12 Q17 15 14 15" />
      <path d="M12 16 Q9 17 9 14" />
      <path d="M8 12 Q7 9 10 9" />
    </svg>
  )
}
