import { MessageCircle, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { botPersonality, promptFlow } from '../data/ginBot'

function getNode(nextId) {
  if (nextId === 'start') {
    return {
      response: promptFlow.startResponse,
      prompts: promptFlow.start,
    }
  }

  return promptFlow.nodes[nextId]
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
  const [activePrompts, setActivePrompts] = useState(promptFlow.start)
  const [isThinking, setIsThinking] = useState(false)
  const messagesEndRef = useRef(null)
  const promptButtonRefs = useRef([])
  const idRef = useRef(1)

  useEffect(() => {
    if (!open) return

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    promptButtonRefs.current[0]?.focus()
  }, [open, messages, activePrompts])

  const selectPrompt = async (prompt) => {
    if (isThinking) return

    const nextNode = getNode(prompt.next)
    setMessages((current) => [
      ...current,
      { role: 'user', text: prompt.label, id: idRef.current++ },
    ])
    setActivePrompts([])
    setIsThinking(true)

    await Promise.resolve()

    setMessages((current) => [
      ...current,
      { role: 'bot', text: nextNode.response, id: idRef.current++ },
    ])
    setActivePrompts(nextNode.prompts)
    setIsThinking(false)
  }

  if (!open) return null

  return (
    <div id="ginbot-panel" className="ginbot-panel" role="dialog" aria-label="GinBot guided chat" aria-modal="false">
      <div className="ginbot-header">
        <MessageCircle size={18} aria-hidden="true" />
        <span className="ginbot-header-name">GinBot</span>
        <span className="ginbot-header-sub">Guided gin guide</span>
        <button type="button" className="ginbot-close" aria-label="Close chat" onClick={onClose}>
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="ginbot-messages" aria-live="polite">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isThinking ? <div className="ginbot-bubble ginbot-bubble--bot">Choosing your next gin path…</div> : null}
        <div ref={messagesEndRef} />
      </div>

      <div className="ginbot-suggestions">
        <p className="ginbot-suggestions-label">{isThinking ? 'One moment' : 'Choose your next path'}</p>
        <div className="ginbot-suggestions-list" role="list">
          {activePrompts.map((prompt, index) => (
            <button
              key={prompt.id}
              ref={(element) => {
                promptButtonRefs.current[index] = element
              }}
              type="button"
              className="ginbot-suggestion-chip"
              onClick={() => selectPrompt(prompt)}
              disabled={isThinking}
            >
              {prompt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
