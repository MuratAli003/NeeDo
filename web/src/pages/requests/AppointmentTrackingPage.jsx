import { useNavigate } from 'react-router-dom'
import { AppBar } from '../../components/ui/AppBar'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Icons } from '../../lib/icons'

export function AppointmentTrackingPage() {
  const navigate = useNavigate()
  return (
    <div className="app-page min-h-screen bg-[var(--background)]">
      <AppBar title="Hizmet Takibi" />
      <div className="space-y-5 px-6 py-6">
        <Card className="py-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[color:rgba(16,185,129,0.12)] text-[var(--secondary)]">
            <Icons.Work className="text-4xl" />
          </div>
          <p className="mt-4 text-2xl font-bold text-[var(--secondary)]">Usta Yolda</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">Tahmini varis: 15 dakika</p>
        </Card>
        <div>
          <h2 className="mb-3 text-lg font-bold">Hizmet Veren</h2>
          <Card>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--border)] text-[var(--text-secondary)]">
                <Icons.Person className="text-2xl" />
              </div>
              <div className="flex-1">
                <p className="font-bold">Ahmet Usta</p>
                <p className="text-sm text-[var(--text-secondary)]">4.9/5 Puan • Ev Temizligi Uzmani</p>
              </div>
              <button type="button" className="rounded-full p-2 text-[var(--primary)]">
                <Icons.Call className="text-xl" />
              </button>
            </div>
          </Card>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-bold">Hizmet Detaylari</h2>
          <Card className="space-y-4">
            <DetailRow icon={<Icons.Calendar />} text="12 Mayis 2026, 14:00" />
            <DetailRow icon={<Icons.Location />} text="Ataturk Mah. Istiklal Cad. No:12 Kat:4" />
            <DetailRow icon={<Icons.Confirmation />} text="Talep Kodu: #ND-4291" />
          </Card>
        </div>
        <Button className="w-full" variant="secondary">
          Destek Al
        </Button>
        <Button className="w-full" variant="ghost">
          Iptal Et / Yeniden Planla
        </Button>
        <Button className="w-full" onClick={() => navigate('/review')}>
          Hizmeti Degerlendir
        </Button>
      </div>
    </div>
  )
}

function DetailRow({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-[var(--text-primary)]">
      <div className="text-[var(--text-hint)]">{icon}</div>
      <span>{text}</span>
    </div>
  )
}
