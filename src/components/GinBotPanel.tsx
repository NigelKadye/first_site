import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { botPersonality, botRules, suggestedPrompts } from '../data/ginBot'

function getGinFallback(userMessage) {
  const lower = userMessage.toLowerCase()

  if (/travel|trip|holiday|country|city|place|where/.test(lower)) {
    return "I can give that a gin angle: explore a region through its botanicals. Try juniper-led European gin, fynbos gin from Southern Africa, Japanese tea and yuzu gin, or American terroir styles. Ask me for a regional bottle guide."
  }

  if (/weather|hot|cold|summer|winter|season/.test(lower)) {
    return "I can give that a gin angle: hot weather calls for a tall, ice-heavy cooler with gin, citrus, soda, and a fresh herb. Cold weather suits a Martini, Negroni, or a spiced gin serve."
  }

  if (/work|study|focus|busy|tired/.test(lower)) {
    return "I can give that a gin angle for later: keep a simple 1:3 G&T formula in mind, with a dry tonic and a garnish that matches the gin. Please enjoy alcohol responsibly and never drink before driving or working."
  }

  return "I’ll keep that gin-related. A useful starting point is a cold 1:3 G&T with plenty of ice, a dry tonic, and a garnish that matches the gin’s strongest botanical. Ask me about a region, bottle, recipe, mixer, or pairing for a more specific answer."
}

async function getBotResponse(userMessage) {
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

  const response = matchedRule?.response ?? getGinFallback(userMessage)
  const wantsLiveData = !matchedRule || /cocktail|cocktails|recipe|recipes|drink|drinks|online|live|bottle|brand|recommend|suggest/.test(lower)

  if (!wantsLiveData) return response

  try {
    const apiResponse = await fetch('/api/gin-cocktails')
    const data = await apiResponse.json()
    const drinks = Array.isArray(data.drinks) ? data.drinks : []
    const gins = Array.isArray(data.gins) ? data.gins : []
    const liveSections = []

    if (gins.length) {
      const liveGins = gins
        .slice(0, 4)
        .map((gin) => `• **${gin.product_name}${gin.brands ? ` · ${gin.brands}` : ''}**`)
        .join('\n')
      liveSections.push(`**${data.liveGins ? 'Live gin bottles' : 'More gin bottles'}**\n${liveGins}`)
    }

    if (drinks.length) {
      const liveDrinks = drinks.slice(0, 4).map((drink) => `• **${drink.strDrink}**`).join('\n')
      liveSections.push(`**Live cocktail ideas**\n${liveDrinks}`)
    }

    return liveSections.length
      ? `${response}\n\n${liveSections.join('\n\n')}\n\nLive results from free public drink and product catalogues.`
      : response
  } catch {
    return response
  }
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
  const [isThinking, setIsThinking] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const idRef = useRef(1)

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [open, messages])

  const sendMessage = async (text) => {
    const trimmed = text.trim()
    if (!trimmed || isThinking) return

    setShowSuggestions(false)
    const userMessage = { role: 'user', text: trimmed, id: idRef.current++ }
    setMessages((current) => [...current, userMessage])
    setInput('')
    setIsThinking(true)

    const botMessage = { role: 'bot', text: await getBotResponse(trimmed), id: idRef.current++ }
    setMessages((current) => [...current, botMessage])
    setIsThinking(false)
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
        <span className="ginbot-header-sub">Live gin guide</span>
        <button type="button" className="ginbot-close" aria-label="Close chat" onClick={onClose}>
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="ginbot-messages" aria-live="polite">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isThinking ? <div className="ginbot-bubble ginbot-bubble--bot">Checking live cocktail ideas…</div> : null}
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
        <button type="submit" className="ginbot-send" aria-label="Send" disabled={!input.trim() || isThinking}>
          <Send size={16} aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}
