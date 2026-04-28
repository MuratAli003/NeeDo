import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar } from '../../components/ui/AppBar'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Field } from '../../components/ui/Field'
import { Icons } from '../../lib/icons'

export function ReviewPage() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const navigate = useNavigate()

  return (
    <div className="app-page min-h-screen bg-[var(--background)]">
      <AppBar title="Hizmeti Degerlendir" />
      <div className="space-y-5 px-6 py-6">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--border)] text-[var(--text-secondary)]">
            <Icons.Person className="text-4xl" />
          </div>
          <p className="mt-4 text-lg font-bold">Ahmet Usta</p>
          <p className="text-sm text-[var(--text-secondary)]">Ev Temizligi</p>
        </div>
        <Card className="text-center">
          <p className="text-lg font-bold">Hizmet deneyimini nasil degerlendirirsin?</p>
          <div className="mt-5 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)} className="text-4xl text-amber-400">
              {star <= rating ? '★' : '☆'}
            </button>
          ))}
          </div>
          <Field
            className="mt-6 text-left"
            textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            hint="Yorumunu buraya yazabilirsin..."
          />
        </Card>
        <Button className="w-full" disabled={rating === 0} onClick={() => navigate('/home?tab=requests')}>
          Degerlendirmeyi Gonder
        </Button>
      </div>
    </div>
  )
}
