interface GlyphProps {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Ember({ size = 24, color = 'currentColor', strokeWidth = 1.4 }: GlyphProps) {
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
      <path d="M12 22c-4 0-7-3-7-7 0-3 2-5 3-7 1 2 2 3 3 3 0-3 1-6 4-9 0 4 6 7 6 13 0 4-3 7-9 7Z" />
      <path d="M12 19.5c-1 0-2-.75-2-2 0-.75.5-1.5 1-2.25.5.75.75 1.25 1 1.25 0-1 .5-2 1.5-3 0 1.5 1.5 2.25 1.5 4 0 1.5-1 2-3 2Z" />
    </svg>
  )
}
