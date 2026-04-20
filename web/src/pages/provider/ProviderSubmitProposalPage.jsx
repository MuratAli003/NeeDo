import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

export function ProviderSubmitProposalPage() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-3xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">Teklif Ver</h1>
      <Card>
        <p className="font-semibold">Is Ozeti</p>
        <p className="mt-2 text-sm text-slate-600">Musteri 120 metrekarelik bos bir evin derinlemesine temizlenmesini talep ediyor.</p>
      </Card>
      <Card className="space-y-3">
        <input className="w-full rounded-xl border border-slate-300 p-3" placeholder="Fiyat teklifiniz (orn: 1500)" />
        <select className="w-full rounded-xl border border-slate-300 p-3">
          <option>Tahmini Is Suresi Seciniz</option>
          <option>1-2 Saat</option>
          <option>3-4 Saat</option>
          <option>Tum Gun</option>
        </select>
        <textarea className="min-h-24 w-full rounded-xl border border-slate-300 p-3" placeholder="Musteriye mesajiniz..." />
      </Card>
      <Button className="w-full" onClick={() => navigate('/provider-home?tab=opportunities')}>
        Teklifi Gonder
      </Button>
    </div>
  )
}
