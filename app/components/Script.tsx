'use client'

import { useEffect } from 'react'

export function Script({ src }: { src: string }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = src
    script.async = true

    // Add script to head instead of body
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [src])

  return <div id="gist-container" className="gist-container" />
}
