import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding', { replace: true }), 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-600 p-4 text-center text-white">
      <div>
        <h1 className="text-5xl font-bold">NeeDo</h1>
        <p className="mt-2 text-indigo-100">Ihtiyacin olan hizmet kapinda</p>
      </div>
    </div>
  )
}
