import { useLocation, useNavigate } from 'react-router'
import { PREVIEW_PAGES } from './PreviewPages'

export function PreviewPageNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div data-preview-editor-ui="true" className="border-b border-blue-200 bg-blue-50/95 px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-ink-900">
          Jump to any page while you review copy
        </p>
        <label className="flex w-full flex-col gap-1.5 sm:max-w-md">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-600">
            Preview pages
          </span>
          <select
            className="min-h-11 rounded-btn border border-blue-200 bg-white px-3 text-sm text-ink-900"
            value={location.pathname.replace(/\/$/, '') || '/preview'}
            onChange={(event) => navigate(event.target.value)}
          >
            {PREVIEW_PAGES.map((page) => (
              <option key={page.path} value={page.path}>
                {page.group}: {page.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}
