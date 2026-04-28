import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppBar } from '../../components/ui/AppBar'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Field } from '../../components/ui/Field'
import { Icons } from '../../lib/icons'

export function ProviderSubmitProposalPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const onSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => navigate('/provider-home?tab=opportunities'), 900)
  }

  return (
    <div className="app-page min-h-screen bg-[var(--background)]">
      <AppBar title="Teklif Ver" />
      <div className="space-y-5 px-6 py-6">
        <div>
          <h2 className="text-lg font-bold">Is Ozeti</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
            Musteri 120 metrekarelik bos bir evin dezenfekte edilerek derinlemesine temizlenmesini talep ediyor. Camlar dahil.
          </p>
        </div>
        <Card className="space-y-4">
          <Field label="Fiyat Teklifiniz (₺)" hint="Orn: 1500" prefix={<Icons.Payment />} />
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Tahmini Is Suresi</span>
            <select className="min-h-14 w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-white px-4 text-[15px] text-[var(--text-primary)] outline-none">
          <option>Tahmini Is Suresi Seciniz</option>
          <option>1-2 Saat</option>
          <option>3-4 Saat</option>
          <option>Tum Gun</option>
            </select>
          </label>
          <Field textarea label="Musteriye Mesajiniz" hint="Musteriye isi nasil yapacaginizi anlatin..." />
        </Card>
        {isSubmitted ? (
          <Card className="bg-[color:rgba(16,185,129,0.08)] text-sm font-semibold text-[var(--secondary)]">
            Teklifiniz musteriye basariyla iletildi!
          </Card>
        ) : null}
        <Button className="w-full" onClick={onSubmit}>
          Teklifi Gonder
        </Button>
      </div>
    </div>
  )
}
