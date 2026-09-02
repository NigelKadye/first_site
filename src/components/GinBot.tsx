import dynamic from 'next/dynamic'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

function GinBotLoadError() {
  return (
    <div className="ginbot-panel ginbot-panel--loading" role="alert">
      GinBot is unavailable right now. Please try opening it again.
    </div>
  )
}

const GinBotPanel = dynamic(
  () => import('./GinBotPanel').catch(() => ({ default: GinBotLoadError })),
  {
    loading: () => (
      <div className="ginbot-panel ginbot-panel--loading" role="status" aria-live="polite">
        Opening GinBot…
      </div>
    ),
    ssr: false,
  },
)

export default function GinBot() {
  const [open, setOpen] = useState(false)
  const [panelRequested, setPanelRequested] = useState(false)

  const openChat = () => {
    setPanelRequested(true)
    setOpen(true)
  }

  return (
    <>
      <button
        type="button"
        className="ginbot-fab"
        aria-label={open ? 'Close GinBot' : 'Open GinBot'}
        aria-expanded={open}
        aria-controls="ginbot-panel"
        onClick={() => (open ? setOpen(false) : openChat())}
      >
        {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
        {!open ? <span className="ginbot-fab-label">Gin Chat</span> : null}
      </button>

      {panelRequested ? <GinBotPanel open={open} onClose={() => setOpen(false)} /> : null}
    </>
  )
}
