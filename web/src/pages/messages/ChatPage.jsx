import { useState } from 'react'
import { AppBar } from '../../components/ui/AppBar'
import { Card } from '../../components/ui/Card'
import { Icons } from '../../lib/icons'

export function ChatPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: 'Merhaba, fiyat teklifimi ilettim incelerseniz sevinirim.', isMe: false, time: '14:35' },
    { id: 2, text: 'Evet gordum, temizlenecek alan 120 metrekare.', isMe: true, time: '14:40' },
    { id: 3, text: 'Hic problem degil, kendi malzemelerimizle geliyoruz.', isMe: false, time: '14:42' },
  ])

  const onSend = () => {
    if (!input.trim()) return
    setMessages((current) => [...current, { id: Date.now(), text: input, isMe: true, time: '10:44' }])
    setInput('')
  }

  return (
    <div className="app-page flex min-h-screen flex-col bg-[var(--background)]">
      <AppBar
        title="Ahmet Usta"
        subtitle="Cevrimici"
        leading={
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--border)] text-[var(--text-secondary)]">
            <Icons.Person className="text-lg" />
          </div>
        }
      />
      <div className="px-4 py-4">
        <Card className="border-[color:rgba(79,70,229,0.15)] bg-[color:rgba(79,70,229,0.05)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:rgba(79,70,229,0.1)] text-[var(--primary)]">
              <Icons.Confirmation />
            </div>
            <div className="flex-1">
              <p className="font-bold">Teklif Ozeti: Ev Temizligi</p>
              <p className="text-sm font-semibold text-[var(--primary)]">Teklif edilen fiyat: 1200 TL</p>
            </div>
            <span className="text-[var(--text-hint)]">›</span>
          </div>
        </Card>
      </div>
      <div className="flex-1 px-4 pb-4">
        <div className="mb-4 text-center text-xs font-semibold text-[var(--text-hint)]">Bugun, 10:40</div>
        <div className="space-y-3">
          {messages.map((item) => (
            <div key={item.id} className={`flex items-end gap-2 ${item.isMe ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[75%] rounded-[18px] px-4 py-3 text-sm ${
                  item.isMe
                    ? 'rounded-br-md bg-[var(--primary)] text-white'
                    : 'rounded-bl-md border border-[var(--border)] bg-white text-[var(--text-primary)]'
                }`}
              >
                {item.text}
              </div>
              <span className="pb-1 text-[10px] text-[var(--text-hint)]">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--border)] bg-white px-3 py-3">
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 text-[var(--text-hint)]">
            <Icons.AddPhoto className="text-2xl" />
          </button>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="flex-1 rounded-full border-0 bg-[var(--background)] px-5 py-3 outline-none placeholder:text-[var(--text-hint)]"
            placeholder="Mesaj yaz..."
          />
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-white" onClick={onSend}>
            Gonder
          </button>
        </div>
      </div>
    </div>
  )
}
