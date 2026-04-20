import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

export function ProviderProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-4xl space-y-4 p-4">
      <Card>
        <h1 className="text-2xl font-bold">Ahmet Usta</h1>
        <p className="text-slate-500">Profesyonel Ev Temizligi</p>
        <div className="mt-3 flex gap-4 text-sm text-slate-600">
          <span>4.9 Puan</span>
          <span>124 Yorum</span>
          <span>340+ Tamamlanan</span>
        </div>
      </Card>
      <Card>
        <h2 className="font-semibold">Hakkinda</h2>
        <p className="mt-2 text-sm text-slate-600">10 yili askin suredir profesyonel ev temizligi ve ofis temizligi alaninda hizmet veriyorum.</p>
      </Card>
      <div className="grid gap-3 md:grid-cols-2">
        <Button variant="secondary" onClick={() => navigate('/chat')}>
          Mesaj Gonder
        </Button>
        <Button onClick={() => navigate('/create-request')}>Teklif Iste</Button>
      </div>
    </div>
  )
}
