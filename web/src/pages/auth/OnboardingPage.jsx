import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { onboardingSlides } from '../../utils/mockData'
import { iconMap } from '../../lib/icons'

export function OnboardingPage() {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  const slide = onboardingSlides[index]
  const SlideIcon = iconMap[slide.icon]

  const next = () => {
    if (index === onboardingSlides.length - 1) {
      navigate('/login')
      return
    }
    setIndex((current) => current + 1)
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col bg-[var(--background)]">
      <div className="flex flex-1 items-center justify-center px-8 py-10">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-12 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[color:rgba(79,70,229,0.1)] text-[var(--primary)]">
            <SlideIcon className="text-[80px]" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">{slide.title}</h2>
          <p className="mt-4 text-lg leading-7 text-[var(--text-secondary)]">{slide.description}</p>
        </div>
      </div>
      <div className="px-6 pb-8">
        <div className="mb-8 flex justify-center gap-2">
          {onboardingSlides.map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`h-2 rounded-full transition-all ${dotIndex === index ? 'w-6 bg-[var(--primary)]' : 'w-2 bg-[var(--border)]'}`}
            />
          ))}
        </div>
        <Button className="w-full" onClick={next}>
          {index === onboardingSlides.length - 1 ? 'Hemen Basla' : 'Devam Et'}
        </Button>
      </div>
    </div>
  )
}
