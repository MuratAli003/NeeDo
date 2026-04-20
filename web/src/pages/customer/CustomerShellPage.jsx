import { useNavigate } from 'react-router-dom'
import { TabShell } from '../../components/layout/TabShell'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { ErrorState } from '../../components/ui/ErrorState'
import { LoadingState } from '../../components/ui/LoadingState'
import { useAsync } from '../../hooks/useAsync'
import { mockApi } from '../../services/mockApi'
import { customerTabs } from '../../utils/constants'

export function CustomerShellPage() {
  const navigate = useNavigate()

  return (
    <TabShell
      tabs={customerTabs}
      defaultTab="home"
      title="NeeDo"
      renderContent={(tab) => {
        if (tab === 'home') return <HomeTab />
        if (tab === 'categories') return <CategoriesTab onCreateRequest={() => navigate('/create-request')} />
        if (tab === 'requests') return <RequestsTab onTracking={() => navigate('/appointment-tracking')} />
        if (tab === 'messages') return <MessagesTab onChat={() => navigate('/chat')} />
        return <ProfileTab onProviderMode={() => navigate('/provider-home')} onLogout={() => navigate('/login')} />
      }}
    />
  )
}

function HomeTab() {
  return (
    <div className="space-y-4">
      <Card className="bg-indigo-600 text-white">
        <h2 className="text-xl font-bold">Gunaydin, Ayberk!</h2>
        <p className="text-indigo-100">Bugun hangi hizmete ihtiyacin var?</p>
      </Card>
      <Card>
        <h3 className="font-semibold">Ilk hizmetine ozel %20 indirim</h3>
        <p className="mt-1 text-sm text-slate-600">Hemen teklif al, indirimi yakala.</p>
      </Card>
    </div>
  )
}

function CategoriesTab({ onCreateRequest }) {
  const { data, isLoading, error, execute } = useAsync(mockApi.getCategories)
  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message="Kategoriler yuklenemedi." onRetry={execute} />

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <button key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-left hover:border-indigo-400" onClick={onCreateRequest}>
          <p className="font-semibold">{item}</p>
        </button>
      ))}
    </div>
  )
}

function RequestsTab({ onTracking }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-emerald-600">Yolda</p>
          <h3 className="font-semibold">Ev Temizligi</h3>
          <p className="text-sm text-slate-500">Hizmet Veren: Ahmet Usta</p>
        </div>
        <Button onClick={onTracking}>Detay</Button>
      </div>
    </Card>
  )
}

function MessagesTab({ onChat }) {
  const { data, isLoading, error, execute } = useAsync(mockApi.getMessages)
  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message="Mesajlar yuklenemedi." onRetry={execute} />

  return (
    <div className="space-y-3">
      {data.map((item) => (
        <Card key={item.id}>
          <button className="flex w-full items-center justify-between text-left" onClick={onChat}>
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-slate-500">{item.lastMessage}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">{item.time}</p>
              {item.unread > 0 ? <span className="mt-1 inline-block rounded-full bg-indigo-600 px-2 py-1 text-xs text-white">{item.unread}</span> : null}
            </div>
          </button>
        </Card>
      ))}
    </div>
  )
}

function ProfileTab({ onProviderMode, onLogout }) {
  return (
    <div className="space-y-3">
      <Card>
        <p className="text-lg font-bold">Ayberk K.</p>
        <p className="text-sm text-slate-500">+90 555 123 45 67</p>
      </Card>
      <Button className="w-full" variant="secondary" onClick={onProviderMode}>
        Usta Moduna Gec
      </Button>
      <Button className="w-full bg-red-600 hover:bg-red-700" onClick={onLogout}>
        Cikis Yap
      </Button>
    </div>
  )
}
