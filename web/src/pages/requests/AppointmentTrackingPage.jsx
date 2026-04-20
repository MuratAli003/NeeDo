import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

export function AppointmentTrackingPage() {
  const navigate = useNavigate()
  return (
    <div className="mx-auto max-w-3xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">Hizmet Takibi</h1>
      <Card>
        <p className="text-sm font-semibold text-emerald-600">Usta Yolda</p>
        <p className="text-slate-600">Tahmini varis: 15 dakika</p>
      </Card>
      <Card>
        <p className="font-semibold">Hizmet Veren: Ahmet Usta</p>
        <p className="text-sm text-slate-500">12 Mayis 2026, 14:00</p>
      </Card>
      <Button className="w-full" onClick={() => navigate('/review')}>
        Hizmeti Degerlendir
      </Button>
    </div>
  )
}
