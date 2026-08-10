import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'navy'

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-500 text-navy-950 hover:bg-gold-400 active:bg-gold-600 shadow-none font-semibold',
  secondary:
    'bg-transparent text-white border border-white/40 hover:border-gold-400 hover:text-gold-400',
  tertiary:
    'bg-transparent text-gold-500 hover:text-gold-400 px-0 py-0 h-auto min-h-0 shadow-none',
  navy: 'bg-navy-900 text-white hover:bg-navy-800 font-semibold',
}

type Common = {
  variant?: Variant
  showArrow?: boolean
  className?: string
  children: ReactNode
}

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }

type ButtonAsLink = Common & Omit<LinkProps, 'className' | 'children'> & { href?: undefined }

type ButtonAsAnchor = Common &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { to?: undefined; href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const base =
  'inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3 text-base transition-colors duration-200 min-h-11 disabled:opacity-50 disabled:pointer-events-none'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref,
) {
  const { variant = 'primary', showArrow, className, children, ...rest } = props
  const classes = cn(base, variants[variant], className)
  const content = (
    <>
      {children}
      {(showArrow || variant === 'tertiary') && (
        <ArrowRight className="size-4 shrink-0" aria-hidden />
      )}
    </>
  )

  if ('to' in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as ButtonAsLink
    return (
      <Link to={to} className={classes} {...linkRest}>
        {content}
      </Link>
    )
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    )
  }

  const buttonRest = rest as ButtonAsButton
  return (
    <button ref={ref} type={buttonRest.type ?? 'button'} className={classes} {...buttonRest}>
      {content}
    </button>
  )
})
