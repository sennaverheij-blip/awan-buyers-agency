import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './useInView'

export function useCountUp(target: number, duration = 1200, enabled = true) {
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = useState(() => (reduced ? target : 0))
  const started = useRef(false)

  useEffect(() => {
    if (!enabled || started.current) return
    started.current = true

    if (reduced) {
      queueMicrotask(() => setValue(target))
      return
    }

    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, enabled, reduced])

  return value
}
