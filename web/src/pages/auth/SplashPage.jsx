import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdHandyman } from 'react-icons/md'

export function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding', { replace: true }), 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--primary)] px-6 text-center text-white">
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[32px] bg-white/14 ring-1 ring-white/20">
          <MdHandyman className="text-5xl" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight">NeeDo</h1>
        <p className="mt-3 max-w-xs text-base text-indigo-100">Ihtiyacin olan hizmet kapinda</p>
      </div>
    </div>
  )
}
