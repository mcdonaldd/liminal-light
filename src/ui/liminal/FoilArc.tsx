'use client'

import type { CSSProperties } from 'react'

export default function FoilArc({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 280 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{
        width: 280,
        height: 16,
        animation: 'foil-shimmer 4s ease-in-out infinite',
        ...style,
      }}
    >
      <style>{`
        @keyframes foil-shimmer {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .foil-arc-svg { animation: none !important; opacity: 0.85; }
        }
      `}</style>
      <defs>
        <linearGradient id="foil-holo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C2562A" />
          <stop offset="35%" stopColor="#D4A24C" />
          <stop offset="65%" stopColor="#3FB6C9" />
          <stop offset="100%" stopColor="#FF2D87" />
        </linearGradient>
      </defs>
      <path
        d="M 5 9 Q 140 19 275 9"
        stroke="url(#foil-holo-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
