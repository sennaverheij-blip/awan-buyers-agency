import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { CallbackForm } from '../ui/CallbackForm'

type Ctx = {
  openCallback: () => void
}

const CallbackContext = createContext<Ctx | null>(null)

export function CallbackProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const value = useMemo(() => ({ openCallback: () => setOpen(true) }), [])

  return (
    <CallbackContext.Provider value={value}>
      {children}
      <CallbackForm open={open} onClose={() => setOpen(false)} />
    </CallbackContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- hook paired with provider
export function useCallbackForm() {
  const ctx = useContext(CallbackContext)
  if (!ctx) throw new Error('useCallbackForm must be used within CallbackProvider')
  return ctx
}
