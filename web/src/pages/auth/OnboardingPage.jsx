import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { onboardingSlides } from '../../utils/mockData'

export function OnboardingPage() {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  const slide = onboardingSlides[index]

  const next = () => {
    if (index === onboardingSlides.length - 1) {
      navigate('/login')
      return
    }
    setIndex((current) => current + 1)
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-between p-6">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-indigo-50 text-4xl">✨</div>
          <h2 className="text-3xl font-bold text-slate-900">{slide.title}</h2>
          <p className="mt-3 text-slate-600">{slide.description}</p>
        </div>
      </div>
      <div className="pb-6">
        <div className="mb-6 flex justify-center gap-2">
          {onboardingSlides.map((_, dotIndex) => (
            <div key={dotIndex} className={`h-2 rounded-full ${dotIndex === index ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-300'}`} />
          ))}
        </div>
        <Button className="w-full" onClick={next}>
          {index === onboardingSlides.length - 1 ? 'Hemen Basla' : 'Devam Et'}
        </Button>
      </div>
    </div>
  )
}
