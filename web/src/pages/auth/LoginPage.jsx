import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { AppBar } from '../../components/ui/AppBar'
import { Field } from '../../components/ui/Field'
import { Icons } from '../../lib/icons'

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
    <div className="app-page flex min-h-screen flex-col bg-[var(--background)]">
      <AppBar title="NeeDo'ya Giris Yap" />
      <div className="flex-1 px-6 py-6">
        <div className="space-y-4">
          <Field label="Telefon Veya E-Posta" hint="05xx xxx xx xx / mail@example.com" prefix={<Icons.PersonOutline className="text-xl" />} />
          <Field label="Sifre" hint="••••••••" type="password" prefix={<Icons.Lock className="text-xl" />} />
          <div className="flex justify-end">
            <button type="button" className="text-sm font-semibold text-[var(--primary)]">
              Sifremi Unuttum
            </button>
          </div>
          <Button className="w-full" onClick={handleLogin} loading={isLoading}>
            Giris Yap
          </Button>
          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="text-sm text-[var(--text-secondary)]">veya</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <Button className="w-full gap-2" variant="secondary">
            <Icons.Google />
            Google ile Devam Et
          </Button>
          <Button className="w-full gap-2" variant="secondary">
            <Icons.Apple />
            Apple ile Devam Et
          </Button>
          <div className="pt-4 text-center text-sm text-[var(--text-secondary)]">
            Hesabin yok mu?{' '}
            <button type="button" className="font-bold text-[var(--primary)]">
              Kayit Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
