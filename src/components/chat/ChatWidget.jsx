import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import './ChatWidget.css'

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Halo! Ada yang mau kamu tanyakan soal keamanan pinjaman online atau judi online?' }
  ])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || isSending) return

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }])
    setInput('')
    setIsSending(true)

    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await fetch(`${apiUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      })

      const json = await response.json()

      if (!response.ok) {
        throw new Error(json.message || 'Gagal mengirim pesan')
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: json.data.reply }])

    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Maaf, terjadi kesalahan. Coba lagi sebentar lagi.' }
      ])
    } finally {
      setIsSending(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chat-widget">

      {isOpen && (
        <div className="chat-window">

          <div className="chat-header">
            <span>Tanya JAGA</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble chat-bubble-${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {isSending && (
              <div className="chat-bubble chat-bubble-assistant chat-bubble-loading">
                Mengetik...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <textarea
              className="chat-input"
              placeholder="Ketik pesanmu..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              className="chat-send-button"
              onClick={handleSend}
              disabled={isSending}
            >
              <Send size={18} />
            </button>
          </div>

        </div>
      )}

      <button className="chat-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

    </div>
  )
}

export default ChatWidget