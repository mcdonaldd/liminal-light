'use client'

import type { CSSProperties } from 'react'

export default function FoilArc({
  className,
  style,
  drawIn = false,
  drawDelay = 0,
}: {
  className?: string
  style?: CSSProperties
  drawIn?: boolean
  drawDelay?: number
}) {
  // Arc: M 1 4 Q 140 28 279 4 — visual peak at y≈16, 12px below endpoints
  // Sparkle positions recalculated for this deeper curve
  const sparkles = drawIn ? [
    { cx: 56.6,  cy: 11.7, t: 0.20 },
    { cx: 112.2, cy: 15.5, t: 0.40 },
    { cx: 167.8, cy: 15.5, t: 0.60 },
    { cx: 223.4, cy: 11.7, t: 0.80 },
  ] : []

  return (
    <svg
      viewBox="0 0 280 32"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{
        width: 280,
        height: 32,
        animation: `foil-shimmer 4s ${drawIn ? drawDelay + 700 : 0}ms ease-in-out infinite`,
        ...style,
      }}
    >
      <style>{`
        @keyframes foil-shimmer {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes foil-draw {
          from { stroke-dashoffset: 320; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes foil-sparkle {
          0%   { opacity: 0; }
          10%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .foil-arc-svg { animation: none !important; opacity: 0.85; }
        }
      `}</style>
      <defs>
        <linearGradient id="foil-holo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C44E19" />
          <stop offset="35%" stopColor="#D4940C" />
          <stop offset="65%" stopColor="#3FB6C9" />
          <stop offset="100%" stopColor="#FF2D87" />
        </linearGradient>
      </defs>
      <path
        d="M 1 4 Q 140 28 279 4"
        stroke="url(#foil-holo-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={drawIn ? 320 : undefined}
        style={drawIn ? {
          animation: `foil-draw 0.7s ${drawDelay}ms cubic-bezier(0.16,1,0.3,1) both`,
        } : undefined}
      />
      {sparkles.map(({ cx, cy, t }, i) => (
        <path
          key={i}
          d="M 0,-2.5 L 0.6,-0.6 L 2.5,0 L 0.6,0.6 L 0,2.5 L -0.6,0.6 L -2.5,0 L -0.6,-0.6 Z"
          fill="white"
          transform={`translate(${cx}, ${cy})`}
          style={{
            animation: `foil-sparkle 200ms ${Math.round(drawDelay + t * 700 - 40)}ms ease-out 1 both`,
          }}
        />
      ))}
    </svg>
  )
}
