import { useState } from 'react'
import styles from './Avatar.module.scss'

export default function Avatar({ name, color, src, size = 42 }) {
  const [imageFailed, setImageFailed] = useState(false)

  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (src && !imageFailed) {
    return (
      <img
        className={styles.photo}
        src={src}
        alt={name}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        loading="lazy"
        onError={() => setImageFailed(true)}
      ></img>
    )
  }


  return (
    <span
      className={styles.avatar}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.38,
        background: `linear-gradient(140deg, ${color}, ${color}55)`,
      }}
      aria-hidden="true"
    >
      {initials}
    </span>
  )
}
