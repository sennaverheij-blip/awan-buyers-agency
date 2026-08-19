import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'

type EditableMeta = {
  key: string
  pathname: string
  tagName: string
  originalText: string
}

type PreviewEditorContextValue = {
  edits: Record<string, string>
  changeCount: number
  setEdit: (key: string, value: string) => void
  registerMeta: (meta: EditableMeta) => void
  getMeta: (key: string) => EditableMeta | undefined
  exportChanges: () => void
  resetChanges: () => void
  isUnlocked: boolean
  unlock: (code: string) => boolean
  introDismissed: boolean
  dismissIntro: () => void
}

const STORAGE_KEY = 'awan-preview-edits'
const AUTH_KEY = 'awan-preview-auth'
const INTRO_KEY = 'awan-preview-intro-dismissed'
const PREVIEW_CODE = 'awan2026'

const PreviewEditorContext = createContext<PreviewEditorContextValue | null>(null)

export function PreviewEditorProvider({ children }: { children: ReactNode }) {
  const [edits, setEdits] = useState<Record<string, string>>({})
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [introDismissed, setIntroDismissed] = useState(false)
  const metaRef = useRef(new Map<string, EditableMeta>())

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setEdits(JSON.parse(raw) as Record<string, string>)
      setIsUnlocked(sessionStorage.getItem(AUTH_KEY) === PREVIEW_CODE)
      setIntroDismissed(sessionStorage.getItem(INTRO_KEY) === '1')
    } catch {
      // Ignore storage issues and continue with defaults.
    }
  }, [])

  const persist = useCallback((next: Record<string, string>) => {
    setEdits(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // Ignore storage quota or availability issues.
    }
  }, [])

  const setEdit = useCallback(
    (key: string, value: string) => {
      setEdits((current) => {
        const next = { ...current, [key]: value }
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        } catch {
          // Ignore storage quota or availability issues.
        }
        return next
      })
    },
    [],
  )

  const registerMeta = useCallback((meta: EditableMeta) => {
    metaRef.current.set(meta.key, meta)
  }, [])

  const getMeta = useCallback((key: string) => metaRef.current.get(key), [])

  const exportChanges = useCallback(() => {
    const payload = Object.entries(edits).map(([key, value]) => {
      const meta = metaRef.current.get(key)
      return {
        key,
        pathname: meta?.pathname ?? 'unknown',
        tagName: meta?.tagName ?? 'unknown',
        originalText: meta?.originalText ?? '',
        updatedText: value,
      }
    })

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'awan-preview-changes.json'
    anchor.click()
    URL.revokeObjectURL(url)
  }, [edits])

  const resetChanges = useCallback(() => {
    metaRef.current.clear()
    persist({})
  }, [persist])

  const unlock = useCallback((code: string) => {
    const ok = code.trim() === PREVIEW_CODE
    if (ok) {
      setIsUnlocked(true)
      sessionStorage.setItem(AUTH_KEY, PREVIEW_CODE)
    }
    return ok
  }, [])

  const dismissIntro = useCallback(() => {
    setIntroDismissed(true)
    sessionStorage.setItem(INTRO_KEY, '1')
  }, [])

  const value = useMemo<PreviewEditorContextValue>(
    () => ({
      edits,
      changeCount: Object.keys(edits).length,
      setEdit,
      registerMeta,
      getMeta,
      exportChanges,
      resetChanges,
      isUnlocked,
      unlock,
      introDismissed,
      dismissIntro,
    }),
    [dismissIntro, edits, exportChanges, getMeta, introDismissed, isUnlocked, registerMeta, resetChanges, setEdit, unlock],
  )

  return <PreviewEditorContext.Provider value={value}>{children}</PreviewEditorContext.Provider>
}

export function usePreviewEditor() {
  const context = useContext(PreviewEditorContext)
  if (!context) throw new Error('usePreviewEditor must be used inside PreviewEditorProvider')
  return context
}
