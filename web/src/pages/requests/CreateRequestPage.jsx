import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { AppBar } from '../../components/ui/AppBar'
import { Field } from '../../components/ui/Field'
import { Icons } from '../../lib/icons'

const steps = ['Hizmet', 'Zaman', 'Konum', 'Detay']

export function CreateRequestPage() {
  const [step, setStep] = useState(0)
  const [service, setService] = useState('')
  const [location, setLocation] = useState('')
  const [details, setDetails] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()
  const isLast = step === steps.length - 1

  const onContinue = () => {
    if (isLast) {
      setSubmitted(true)
      setTimeout(() => navigate('/proposals'), 900)
      return
    }
    setStep((current) => current + 1)
  }

  return (
    <div className="app-page min-h-screen bg-[var(--background)]">
      <AppBar title="Talep Olustur" />
      <div className="px-4 py-4">
        <div className="mb-6 grid grid-cols-4 gap-2">
          {steps.map((item, index) => (
            <div key={item} className={`rounded-full px-3 py-2 text-center text-xs font-semibold ${index <= step ? 'bg-[var(--primary)] text-white' : 'bg-[var(--border)] text-[var(--text-secondary)]'}`}>
              {item}
            </div>
          ))}
        </div>
        <Card>
          {step === 0 ? (
            <div>
              <p className="text-lg font-bold">Hangi hizmete ihtiyaciniz var?</p>
              <Field className="mt-4" hint="Orn: Ev Temizligi" value={service} onChange={(event) => setService(event.target.value)} />
            </div>
          ) : null}
          {step === 1 ? (
            <div>
              <p className="text-lg font-bold">Hizmetin ne zaman yapilmasini istersiniz?</p>
              <div className="mt-4 space-y-3">
                <button type="button" className="flex w-full items-center justify-between rounded-[var(--radius-md)] border border-[var(--border)] p-4 text-left">
                  <span>Belirli Bir Tarihte</span>
                  <Icons.Calendar className="text-xl text-[var(--text-secondary)]" />
                </button>
                <button type="button" className="flex w-full items-center justify-between rounded-[var(--radius-md)] border border-[var(--border)] p-4 text-left">
                  <span>Esnegim (Tarih fark etmez)</span>
                  <Icons.CheckCircle className="text-xl text-[var(--text-secondary)]" />
                </button>
              </div>
            </div>
          ) : null}
          {step === 2 ? (
            <div>
              <p className="text-lg font-bold">Hizmet nerede verilecek?</p>
              <Field
                className="mt-4"
                hint="Ilce, Mahalle veya Adres arayin"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                prefix={<Icons.Location className="text-xl" />}
              />
            </div>
          ) : null}
          {step === 3 ? (
            <div>
              <p className="text-lg font-bold">Ek detaylar ve aciklama</p>
              <Field
                className="mt-4"
                textarea
                hint="Ustalarin bilmesi gereken ekstra bir detay var mi?"
                value={details}
                onChange={(event) => setDetails(event.target.value)}
              />
              <button type="button" className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                <Icons.Camera className="text-xl" />
                Fotograf Ekle (Opsiyonel)
              </button>
            </div>
          ) : null}
        </Card>
        {submitted ? (
          <Card className="mt-4 bg-[color:rgba(16,185,129,0.08)] text-[var(--secondary)]">
            Talebiniz basariyla olusturuldu! Uygun ustalar listeleniyor...
          </Card>
        ) : null}
      </div>
      <div className="px-4 pb-8">
        <div className="mt-4 flex gap-3">
        {step > 0 ? (
          <Button variant="secondary" className="flex-1" onClick={() => setStep((current) => current - 1)}>
            Geri
          </Button>
        ) : null}
        <Button className="flex-1" onClick={onContinue}>
          {isLast ? 'Ucretsiz Teklif Al' : 'Devam Et'}
        </Button>
        </div>
      </div>
    </div>
  )
}
