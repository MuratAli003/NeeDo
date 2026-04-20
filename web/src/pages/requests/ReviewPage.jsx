import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

export function ReviewPage() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">Hizmeti Degerlendir</h1>
      <Card>
        <p className="font-semibold">Ahmet Usta - Ev Temizligi</p>
        <div className="mt-3 flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)} className="text-3xl">
              {star <= rating ? '★' : '☆'}
            </button>
          ))}
        </div>
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          className="mt-3 min-h-24 w-full rounded-xl border border-slate-300 p-3"
          placeholder="Yorumunu buraya yazabilirsin..."
        />
      </Card>
      <Button className="w-full" disabled={rating === 0} onClick={() => navigate('/home?tab=requests')}>
        Degerlendirmeyi Gonder
      </Button>
    </div>
  )
}
