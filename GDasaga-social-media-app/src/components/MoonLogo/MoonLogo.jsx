import styles from './MoonLogo.module.scss'

export default function MoonLogo({ size = 34, glow = true }) {
  return (
    <svg
      className={styles.moon}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Logo LUMA"
    >
      <defs>
        <radialGradient id="lumaSurface" cx="34%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#f2fff8" />
          <stop offset="42%" stopColor="#79dfae" />
          <stop offset="100%" stopColor="#3f3f7d" />
        </radialGradient>

        
        <radialGradient id="lumaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="55%" stopColor="#74e0ab" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#74e0ab" stopOpacity="0" />
        </radialGradient>
      </defs>

      {glow && <circle cx="50" cy="50" r="50" fill="url(#lumaGlow)" />}

      <circle cx="50" cy="50" r="34" fill="url(#lumaSurface)" />

      
      <circle cx="40" cy="40" r="6" fill="#0f1113" opacity="0.13" />
      <circle cx="59" cy="57" r="9" fill="#0f1113" opacity="0.15" />
      <circle cx="55" cy="33" r="3.5" fill="#0f1113" opacity="0.1" />
      <circle cx="38" cy="60" r="4" fill="#0f1113" opacity="0.12" />
    </svg>
  )
}
