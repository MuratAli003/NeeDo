import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate('/home')
    }, 500)
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-2xl font-bold">NeeDo'ya Giris Yap</h1>
      <div className="space-y-4">
        <input className="w-full rounded-xl border border-slate-300 p-3" placeholder="05xx xxx xx xx / mail@example.com" />
        <input type="password" className="w-full rounded-xl border border-slate-300 p-3" placeholder="••••••••" />
        <Button className="w-full" onClick={handleLogin} disabled={isLoading}>
          {isLoading ? 'Yukleniyor...' : 'Giris Yap'}
        </Button>
        <Button className="w-full" variant="secondary">
          Google ile Devam Et
        </Button>
        <Button className="w-full" variant="secondary">
          Apple ile Devam Et
        </Button>
      </div>
    </div>
  )
}
