import { useState } from 'react'
import { LogoMark } from './LogoMark'

type BrandLogoProps = {
  className?: string
  alt?: string
}

/**
 * Uses a drop-in public asset at `/images/logo.png` if present.
 * Falls back to the built-in SVG mark if the image doesn't exist.
 */
export function BrandLogo({ className, alt = 'GrandGuardian' }: BrandLogoProps) {
  const [useFallback, setUseFallback] = useState(false)

  if (useFallback) {
    return <LogoMark className={className} title={alt} />
  }

  return (
    <img
      className={className}
      src="/images/logo.png"
      alt={alt}
      width={32}
      height={32}
      onError={() => setUseFallback(true)}
      loading="eager"
      decoding="async"
    />
  )
}


