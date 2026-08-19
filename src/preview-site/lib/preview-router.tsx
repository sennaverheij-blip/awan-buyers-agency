import {
  Link as RouterLink,
  Navigate as RouterNavigate,
  useLocation,
  useNavigate as useRouterNavigate,
  type LinkProps,
  type NavigateProps,
  type To,
  type NavigateOptions,
} from 'react-router'

export * from 'react-router'

export const PREVIEW_BASE = '/preview'

function isExternal(to: string) {
  return /^(?:[a-z]+:|\/\/)/i.test(to)
}

export function prefixPreviewPath(to: To): To {
  if (typeof to !== 'string') {
    if (to.pathname?.startsWith(PREVIEW_BASE)) return to
    if (to.pathname?.startsWith('/')) {
      return { ...to, pathname: `${PREVIEW_BASE}${to.pathname}` }
    }
    return to
  }

  if (!to.startsWith('/') || to.startsWith(PREVIEW_BASE) || isExternal(to)) return to
  return `${PREVIEW_BASE}${to}`
}

export function stripPreviewBase(pathname: string) {
  if (pathname === PREVIEW_BASE) return '/'
  if (pathname.startsWith(`${PREVIEW_BASE}/`)) return pathname.slice(PREVIEW_BASE.length)
  return pathname
}

export function Link(props: LinkProps) {
  const { to, ...rest } = props
  return <RouterLink {...rest} to={prefixPreviewPath(to)} />
}

export function Navigate(props: NavigateProps) {
  return <RouterNavigate {...props} to={prefixPreviewPath(props.to)} />
}

export function useNavigate() {
  const navigate = useRouterNavigate()
  return (to: To, options?: NavigateOptions) =>
    navigate(prefixPreviewPath(to), options)
}

export function usePreviewPathname() {
  const location = useLocation()
  return stripPreviewBase(location.pathname)
}
