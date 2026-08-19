import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { Download, RotateCcw, X } from 'lucide-react'
import { PreviewEditorProvider, usePreviewEditor } from './PreviewEditorContext'

type TextMeta = {
  key: string
  pathname: string
  tagName: string
  originalText: string
}

const TEXT_CONTAINER_SELECTOR =
  'h1,h2,h3,h4,h5,h6,p,li,a,button,blockquote,small,label,dt,dd,td,th,figcaption'

function getElementPath(element: Element) {
  const segments: string[] = []
  let current: Element | null = element

  while (current && current instanceof HTMLElement && !current.hasAttribute('data-preview-edit-root')) {
    const siblings = Array.from(current.parentElement?.children ?? []).filter(
      (child) => child.tagName === current?.tagName,
    )
    const index = siblings.indexOf(current) + 1
    segments.unshift(`${current.tagName.toLowerCase()}:${index}`)
    current = current.parentElement
  }

  return segments.join('>')
}

function isEligibleTextNode(node: Text) {
  const value = node.nodeValue?.replace(/\s+/g, ' ').trim()
  if (!value) return false

  const parent = node.parentElement
  if (!parent) return false
  if (!parent.matches(TEXT_CONTAINER_SELECTOR)) return false
  if (parent.closest('[data-preview-editor-ui="true"]')) return false
  if (parent.closest('[data-preview-editable="true"]')) return false
  if (parent.closest('script,style,noscript,svg')) return false

  return true
}

function buildKey(parent: HTMLElement, pathname: string, textIndex: number) {
  const scope = parent.closest('header,footer,nav') ? 'shared' : pathname
  return `${scope}::${getElementPath(parent)}::text:${textIndex}`
}

function EditableContentLayer() {
  const location = useLocation()
  const { edits, getMeta, registerMeta, setEdit } = usePreviewEditor()
  const rootRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<MutationObserver | null>(null)

  const bindRoot = useMemo(
    () => () => {
      const root = rootRef.current
      if (!root) return

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      const textNodes: Text[] = []
      let current = walker.nextNode()

      while (current) {
        if (current instanceof Text && isEligibleTextNode(current)) textNodes.push(current)
        current = walker.nextNode()
      }

      const perParentCount = new Map<string, number>()

      for (const textNode of textNodes) {
        const parent = textNode.parentElement
        if (!parent) continue

        const parentPath = getElementPath(parent)
        const nextIndex = (perParentCount.get(parentPath) ?? 0) + 1
        perParentCount.set(parentPath, nextIndex)

        const key = buildKey(parent, location.pathname, nextIndex)
        const originalText = textNode.nodeValue ?? ''
        const currentValue = edits[key] ?? originalText

        const span = document.createElement('span')
        span.dataset.previewEditable = 'true'
        span.dataset.previewKey = key
        span.dataset.previewOriginal = originalText
        span.contentEditable = 'true'
        span.spellcheck = false
        span.textContent = currentValue

        textNode.parentNode?.replaceChild(span, textNode)

        if (!getMeta(key)) {
          registerMeta({
            key,
            pathname: location.pathname,
            tagName: parent.tagName.toLowerCase(),
            originalText,
          } satisfies TextMeta)
        }
      }
    },
    [edits, getMeta, location.pathname, registerMeta],
  )

  useEffect(() => {
    bindRoot()

    const root = rootRef.current
    if (!root) return

    const handleInput = (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLElement) || target.dataset.previewEditable !== 'true') return
      const key = target.dataset.previewKey
      if (!key) return
      setEdit(key, target.innerText)
    }

    const handleClick = (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLElement)) return
      const editable = target.closest('[data-preview-editable="true"]')
      if (!editable) return

      const interactiveParent = editable.closest('a,button')
      if (interactiveParent) {
        event.preventDefault()
        event.stopPropagation()
        ;(editable as HTMLElement).focus()
      }
    }

    root.addEventListener('input', handleInput)
    root.addEventListener('click', handleClick, true)

    observerRef.current?.disconnect()
    observerRef.current = new MutationObserver(() => {
      bindRoot()
    })
    observerRef.current.observe(root, { childList: true, subtree: true })

    return () => {
      root.removeEventListener('input', handleInput)
      root.removeEventListener('click', handleClick, true)
      observerRef.current?.disconnect()
    }
  }, [bindRoot, setEdit])

  return (
    <div ref={rootRef} data-preview-edit-root className="preview-theme">
      <Outlet />
    </div>
  )
}

function PasscodeGate({ children }: { children: ReactNode }) {
  const { isUnlocked, unlock } = usePreviewEditor()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  if (isUnlocked) return <>{children}</>

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const ok = unlock(code)
    setError(ok ? '' : 'That code did not match. Use the code Senna sent you.')
  }

  return (
    <div className="preview-theme flex min-h-screen items-center justify-center bg-navy-950 px-6 text-white">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p className="text-small uppercase tracking-[0.16em] text-gold-400">Private preview</p>
        <h1 className="mt-3 text-3xl font-bold">Enter your preview code</h1>
        <p className="mt-3 text-white/75">
          This is your private preview of the new website. Enter the code Senna sent you to
          review and edit the copy.
        </p>
        <input
          value={code}
          onChange={(event) => setCode(event.target.value)}
          className="mt-5 w-full rounded-btn border border-white/15 bg-white px-4 py-3 text-ink-900"
          placeholder="Preview code"
          autoComplete="off"
        />
        {error ? <p className="mt-3 text-small text-red-300">{error}</p> : null}
        <button
          type="submit"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-btn bg-gold-500 px-5 py-2.5 font-semibold text-navy-950"
        >
          Open preview
        </button>
      </form>
    </div>
  )
}

function WelcomeBanner() {
  const { introDismissed, dismissIntro } = usePreviewEditor()

  if (introDismissed) return null

  return (
    <div data-preview-editor-ui="true" className="sticky top-0 z-[300] border-b border-blue-200 bg-blue-50 text-ink-900">
      <div className="mx-auto flex max-w-6xl items-start gap-4 px-4 py-3 text-sm leading-relaxed sm:px-6">
        <div className="flex-1">
          Welcome, Sohaib. This is your new website preview. Every piece of text with a blue dotted
          border can be edited inline. Your changes save automatically. When you are happy with the
          copy, click <strong>Download Changes</strong> in the bottom corner and send the file to
          Senna.
        </div>
        <button
          type="button"
          onClick={dismissIntro}
          className="rounded-full p-1 text-ink-600 transition-colors hover:bg-blue-100 hover:text-ink-900"
          aria-label="Dismiss instructions"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  )
}

function PreviewToolbar() {
  const { changeCount, exportChanges, resetChanges } = usePreviewEditor()

  return (
    <div
      data-preview-editor-ui="true"
      className="preview-editor-ui fixed bottom-4 right-4 z-[400] w-[min(92vw,22rem)] rounded-card border border-white/10 bg-navy-950/95 p-4 text-white shadow-2xl backdrop-blur"
    >
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-400">
        Preview - not live
      </p>
      <p className="mt-2 text-sm text-white/80">
        {changeCount === 0 ? 'No saved copy changes yet.' : `${changeCount} saved change${changeCount === 1 ? '' : 's'}.`}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={exportChanges}
          className="inline-flex min-h-11 items-center gap-2 rounded-btn bg-emerald-500 px-4 py-2.5 font-semibold text-emerald-950 transition-colors hover:bg-emerald-400"
        >
          <Download className="size-4" />
          Download Changes
        </button>
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Clear all saved preview edits and reload the original copy?')) {
              resetChanges()
              window.location.reload()
            }
          }}
          className="inline-flex min-h-11 items-center gap-2 rounded-btn border border-white/20 px-4 py-2.5 font-medium text-white transition-colors hover:bg-white/8"
        >
          <RotateCcw className="size-4" />
          Reset All
        </button>
      </div>
    </div>
  )
}

function PreviewLayoutInner() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <PasscodeGate>
        <WelcomeBanner />
        <EditableContentLayer />
        <PreviewToolbar />
      </PasscodeGate>
    </>
  )
}

export function PreviewLayout() {
  return (
    <PreviewEditorProvider>
      <PreviewLayoutInner />
    </PreviewEditorProvider>
  )
}
