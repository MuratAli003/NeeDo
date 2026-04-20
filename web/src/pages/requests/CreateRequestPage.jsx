import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

const steps = ['Hizmet', 'Zaman', 'Konum', 'Detay']

export function CreateRequestPage() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()
  const isLast = step === steps.length - 1

  const onContinue = () => {
    if (isLast) {
      navigate('/proposals')
      return
    }
    setStep((current) => current + 1)
  }

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Talep Olustur</h1>
      <div className="mb-4 flex gap-2">
        {steps.map((item, index) => (
          <span key={item} className={`rounded-full px-3 py-1 text-xs ${index <= step ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
            {item}
          </span>
        ))}
      </div>
      <Card>
        <p className="font-semibold">{steps[step]} adimi</p>
        <textarea className="mt-3 min-h-28 w-full rounded-xl border border-slate-300 p-3" placeholder="Bu adim icin detay girin..." />
      </Card>
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
  )
}
