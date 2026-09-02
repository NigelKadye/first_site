import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { botPersonality, botRules, suggestedPrompts } from '../data/ginBot'

function getBotResponse(userMessage) {
  const lower = userMessage.toLowerCase().trim()
  let matchedRule = null
  let matchedLength = 0

  for (const rule of botRules) {
    const longestMatch = rule.triggers.reduce((longest, trigger) => (
      lower.includes(trigger) && trigger.length > longest ? trigger.length : longest
    ), 0)

    if (longestMatch > matchedLength) {
      matchedRule = rule
      matchedLength = longestMatch
    }
  }

  return matchedRule?.response ?? botPersonality.fallback
}

function MessageBubble({ message }) {
  const isBot = message.role === 'bot'
  const parts = message.text.split(/(\*\*[^*]+\*\*)/g)

  return (
    <div className={`ginbot-bubble ginbot-bubble--${isBot ? 'bot' : 'user'}`}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>
        }

        return part.split('\n').map((line, lineIndex, lines) => (
          <span key={`${index}-${lineIndex}`}>
            {line}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </span>
        ))
      })}
    </div>
  )
}

export default function GinBotPanel({ open, onClose }) {
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
    const userMessage = { role: 'user', text: trimmed, id: idRef.current++ }
    const botMessage = { role: 'bot', text: getBotResponse(trimmed), id: idRef.current++ }
    setMessages((current) => [...current, userMessage, botMessage])
    setInput('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(input)
  }

  if (!open) return null

  return (
    <div id="ginbot-panel" className="ginbot-panel" role="dialog" aria-label="GinBot chat" aria-modal="false">
      <div className="ginbot-header">
        <MessageCircle size={18} aria-hidden="true" />
        <span className="ginbot-header-name">GinBot</span>
        <span className="ginbot-header-sub">Offline guide</span>
        <button type="button" className="ginbot-close" aria-label="Close chat" onClick={onClose}>
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="ginbot-messages" aria-live="polite">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {showSuggestions ? (
        <div className="ginbot-suggestions">
          <p className="ginbot-suggestions-label">Try asking:</p>
          <div className="ginbot-suggestions-list">
            {suggestedPrompts.map((prompt) => (
              <button key={prompt} type="button" className="ginbot-suggestion-chip" onClick={() => sendMessage(prompt)}>
                {prompt}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <form className="ginbot-input-row" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="ginbot-input"
          placeholder="Ask about gin..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          aria-label="Ask GinBot a question"
          maxLength={300}
        />
        <button type="submit" className="ginbot-send" aria-label="Send" disabled={!input.trim()}>
          <Send size={16} aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}
