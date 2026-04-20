import { useNavigate } from 'react-router-dom'
import { TabShell } from '../../components/layout/TabShell'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { providerTabs } from '../../utils/constants'

export function ProviderShellPage() {
  const navigate = useNavigate()

  return (
    <TabShell
      tabs={providerTabs}
      defaultTab="dashboard"
      title="Usta Paneli"
      renderContent={(tab) => {
        if (tab === 'dashboard') return <DashboardTab />
        if (tab === 'opportunities') return <OpportunitiesTab onSubmit={() => navigate('/submit-proposal')} />
        if (tab === 'jobs') return <JobsTab />
        return <SettingsTab onCustomerMode={() => navigate('/home')} onLogout={() => navigate('/login')} />
      }}
    />
  )
}

function DashboardTab() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card><p className="text-sm text-slate-500">Kazanc (Bu Ay)</p><p className="text-2xl font-bold">₺4,250</p></Card>
      <Card><p className="text-sm text-slate-500">Tamamlanan Is</p><p className="text-2xl font-bold">12</p></Card>
    </div>
  )
}

function OpportunitiesTab({ onSubmit }) {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((item) => (
        <Card key={item}>
          <p className="font-semibold">Derinlemesine Ev Temizligi (Bos Ev)</p>
          <p className="mt-1 text-sm text-slate-500">Atasehir, Istanbul - 5 dk once</p>
          <Button className="mt-3 w-full" onClick={onSubmit}>
            Detaylari Incele & Teklif Ver
          </Button>
        </Card>
      ))}
    </div>
  )
}

function JobsTab() {
  return (
    <Card>
      <p className="text-xs font-semibold text-emerald-600">Randevu Onaylandi</p>
      <p className="font-semibold">Ev Temizligi (Ayberk K.)</p>
      <p className="text-sm text-slate-500">Ataturk Mah. Istiklal Cad. No:12 Kat:4</p>
    </Card>
  )
}

function SettingsTab({ onCustomerMode, onLogout }) {
  return (
    <div className="space-y-3">
      <Card>
        <p className="text-lg font-bold">Ahmet Usta</p>
        <p className="text-sm text-slate-500">Temizlik Uzmani</p>
      </Card>
      <Button className="w-full" variant="secondary" onClick={onCustomerMode}>
        Musteri Moduna Don
      </Button>
      <Button className="w-full bg-red-600 hover:bg-red-700" onClick={onLogout}>
        Cikis Yap
      </Button>
    </div>
  )
}
