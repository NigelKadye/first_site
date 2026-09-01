import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react'
import { botPersonality, botRules, suggestedPrompts } from '../data/ginBot'

function getBotResponse(userMessage) {
  const lower = userMessage.toLowerCase().trim()
  for (const rule of botRules) {
    if (rule.triggers.some((t) => lower.includes(t))) {
      return rule.response
    }
  }
  return botPersonality.fallback
}

function MessageBubble({ message }) {
  const isBot = message.role === 'bot'
  // Render **bold** markdown simply
  const parts = message.text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <div className={`ginbot-bubble ginbot-bubble--${isBot ? 'bot' : 'user'}`}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        // Preserve newlines
        return part.split('\n').map((line, j, arr) => (
          <span key={`${i}-${j}`}>
            {line}
            {j < arr.length - 1 ? <br /> : null}
          </span>
        ))
      })}
    </div>
  )
}

export default function GinBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: botPersonality.greeting, id: 0 },
  ])
  const [input, setInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const idRef = useRef(1)

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [open, messages])

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setShowSuggestions(false)
    const userMsg = { role: 'user', text: trimmed, id: idRef.current++ }
    const botMsg = { role: 'bot', text: getBotResponse(trimmed), id: idRef.current++ }
    setMessages((prev) => [...prev, userMsg, botMsg])
    setInput('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleSuggestion = (prompt) => {
    sendMessage(prompt)
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        className="ginbot-fab"
        aria-label={open ? 'Close GinBot' : 'Open GinBot'}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
        {!open && <span className="ginbot-fab-label">Gin Chat</span>}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="ginbot-panel" role="dialog" aria-label="GinBot chat">
          {/* Header */}
          <div className="ginbot-header">
            <span className="ginbot-header-name">GinBot</span>
            <span className="ginbot-header-sub">Your gin guide</span>
            <button
              type="button"
              className="ginbot-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <ChevronDown size={18} aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div className="ginbot-messages" aria-live="polite">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested prompts */}
          {showSuggestions && (
            <div className="ginbot-suggestions">
              <p className="ginbot-suggestions-label">Try asking:</p>
              <div className="ginbot-suggestions-list">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    className="ginbot-suggestion-chip"
                    onClick={() => handleSuggestion(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form className="ginbot-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="ginbot-input"
              placeholder="Ask about gin..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Ask GinBot a question"
              maxLength={300}
            />
            <button
              type="submit"
              className="ginbot-send"
              aria-label="Send"
              disabled={!input.trim()}
            >
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
