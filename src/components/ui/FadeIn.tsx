import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/utils'
import type { ReactNode, CSSProperties } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className, delay = 0 }: Props) {
  const [ref, visible] = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn('fade-up', visible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
