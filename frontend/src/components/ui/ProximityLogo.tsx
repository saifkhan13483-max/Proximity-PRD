interface ProximityLogoProps {
  size?: number
  className?: string
}

export default function ProximityLogo({ size = 34, className = '' }: ProximityLogoProps) {
  const gid = `pcr-card-${size}`
  const cid = `pcr-chip-${size}`
  const w = Math.round(size * (40 / 28))
  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 40 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Proximity Credit Repair logo"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="40" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4AF72" />
          <stop offset="55%" stopColor="#B8924A" />
          <stop offset="100%" stopColor="#8B6A2E" />
        </linearGradient>
        <linearGradient id={cid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0D898" />
          <stop offset="100%" stopColor="#C8A055" />
        </linearGradient>
      </defs>

      {/* Card body — gold gradient, no background square */}
      <rect x="0.5" y="0.5" width="39" height="27" rx="3.5" fill={`url(#${gid})`} />
      <rect x="0.5" y="0.5" width="39" height="27" rx="3.5" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />

      {/* Magnetic stripe */}
      <rect x="0" y="6" width="40" height="6" fill="rgba(0,0,0,0.35)" />

      {/* EMV chip */}
      <rect x="5" y="14.5" width="8" height="6.5" rx="1.2" fill={`url(#${cid})`} />
      <line x1="9" y1="14.5" x2="9" y2="21" stroke="rgba(0,0,0,0.22)" strokeWidth="0.7" />
      <line x1="5" y1="17.75" x2="13" y2="17.75" stroke="rgba(0,0,0,0.22)" strokeWidth="0.7" />

      {/* "P" lettermark */}
      <text
        x="20"
        y="22.5"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11"
        fontWeight="900"
        fill="rgba(255,255,255,0.92)"
        letterSpacing="-0.5"
      >
        P
      </text>

      {/* Contactless signal arcs */}
      <path d="M31 16 Q33.5 18 31 20" stroke="rgba(255,255,255,0.55)" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M33 14.5 Q37 18 33 21.5" stroke="rgba(255,255,255,0.30)" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  )
}
