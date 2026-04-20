import { useState } from 'react'
import { Card } from '../../components/ui/Card'

export function ChatPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: 'Merhaba, fiyat teklifimi ilettim incelerseniz sevinirim.', isMe: false },
    { id: 2, text: 'Evet gordum, temizlenecek alan 120 metrekare.', isMe: true },
  ])

  const onSend = () => {
    if (!input.trim()) return
    setMessages((current) => [...current, { id: Date.now(), text: input, isMe: true }])
    setInput('')
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col p-4">
      <h1 className="mb-4 text-xl font-bold">Ahmet Usta ile Sohbet</h1>
      <Card className="flex-1 space-y-2 overflow-y-auto">
        {messages.map((item) => (
          <div key={item.id} className={`flex ${item.isMe ? 'justify-end' : 'justify-start'}`}>
            <p className={`max-w-xs rounded-2xl px-4 py-2 text-sm ${item.isMe ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>{item.text}</p>
          </div>
        ))}
      </Card>
      <div className="mt-3 flex gap-2">
        <input value={input} onChange={(event) => setInput(event.target.value)} className="flex-1 rounded-xl border border-slate-300 p-3" placeholder="Mesaj yaz..." />
        <button className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white" onClick={onSend}>
          Gonder
        </button>
      </div>
    </div>
  )
}
