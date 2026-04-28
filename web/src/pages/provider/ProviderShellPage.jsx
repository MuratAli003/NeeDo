import { useNavigate } from 'react-router-dom'
import { ProviderShell } from '../../components/layout/MobileShell'
import { AppBar } from '../../components/ui/AppBar'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { SegmentedTabs } from '../../components/ui/SegmentedTabs'
import { Icons } from '../../lib/icons'
import { providerTabs } from '../../utils/constants'
import { useState } from 'react'

export function ProviderShellPage() {
  const navigate = useNavigate()

  return (
    <ProviderShell
      tabs={providerTabs}
      defaultTab="dashboard"
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
    <div className="app-page pb-8">
      <AppBar title="Usta Paneli" trailing={<button type="button" className="rounded-full p-2 text-xl text-[var(--text-primary)]">◌</button>} />
      <div className="space-y-6 px-4 py-4">
        <Card className="bg-[var(--primary)] text-white shadow-[var(--shadow-primary)]">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[var(--primary)]">
              <Icons.Person className="text-3xl" />
            </div>
            <div>
              <p className="text-lg font-bold">Merhaba, Ahmet Usta</p>
              <p className="text-sm text-indigo-100">Bolgende 4 yeni is firsati var.</p>
            </div>
          </div>
        </Card>

        <div>
          <h2 className="mb-3 text-lg font-bold">Istatistikler (Bu Ay)</h2>
          <div className="grid grid-cols-2 gap-4">
            <StatCard icon={<Icons.Payment />} value="₺4,250" label="Kazanc" color="text-[var(--primary)]" />
            <StatCard icon={<Icons.CheckCircle />} value="12 Is" label="Tamamlanan" color="text-[var(--secondary)]" />
            <StatCard icon={<Icons.Star />} value="4.9/5" label="Profil Puani" color="text-amber-400" />
            <StatCard icon={<Icons.Work />} value="3" label="Bekleyen Teklif" color="text-orange-400" />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold">Yaklasan Isler</h2>
          <Card>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[color:rgba(16,185,129,0.12)] px-3 py-1 text-xs font-bold text-[var(--secondary)]">Bugun, 14:00</span>
              <span className="font-bold">Ev Temizligi</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <Icons.Location />
              <span>Kadikoy, Istanbul</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function OpportunitiesTab({ onSubmit }) {
  return (
    <div className="app-page pb-8">
      <AppBar title="Yeni Firsatlar" />
      <div className="space-y-4 px-4 py-4">
      {[1, 2, 3].map((item) => (
        <Card key={item}>
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[color:rgba(79,70,229,0.1)] px-3 py-1 text-xs font-bold text-[var(--primary)]">Yeni Talep</span>
            <span className="text-xs text-[var(--text-hint)]">5 dk once</span>
          </div>
          <p className="mt-4 text-base font-bold">Derinlemesine Ev Temizligi (Bos Ev)</p>
          <div className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <Icons.Location />
              <span>Atasehir, Istanbul (Sana 4 km uzakta)</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.Calendar />
              <span>15 Mayis 2026, Cuma - Esnek Zaman</span>
            </div>
          </div>
          <Button className="mt-3 w-full" onClick={onSubmit}>
            Detaylari Incele & Teklif Ver
          </Button>
        </Card>
      ))}
      </div>
    </div>
  )
}

function JobsTab() {
  const [tab, setTab] = useState('active')

  return (
    <div className="app-page pb-8">
      <AppBar title="Islerim" />
      <div className="space-y-4 px-4 py-4">
        <SegmentedTabs
          tabs={[
            { label: 'Aktif Isler', value: 'active' },
            { label: 'Gecmis Isler', value: 'past' },
          ]}
          value={tab}
          onChange={setTab}
        />
        {tab === 'active' ? (
          <Card>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[color:rgba(16,185,129,0.12)] px-3 py-1 text-xs font-bold text-[var(--secondary)]">Randevu Onaylandi</span>
              <span className="text-xs text-[var(--text-hint)]">12 Mayis 2026</span>
            </div>
            <p className="mt-4 font-bold">Ev Temizligi (Ayberk K.)</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">Ataturk Mah. Istiklal Cad. No:12 Kat:4</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
              <Icons.Location />
              Haritada Gor
            </div>
          </Card>
        ) : (
          <Card className="py-10 text-center text-sm text-[var(--text-hint)]">Gecmis tamamlanmis isiniz bulunmuyor.</Card>
        )}
      </div>
    </div>
  )
}

function SettingsTab({ onCustomerMode, onLogout }) {
  const items = ['Hizmet Bolgelerim', 'Gelir & Odeme Ayarlari', 'Musteri Degerlendirmeleri', 'Portfolyo & Galeri']

  return (
    <div className="app-page pb-8">
      <AppBar title="Usta Profili" />
      <div className="px-6 py-6 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--primary)] text-white">
          <Icons.Work className="text-4xl" />
        </div>
        <p className="mt-4 text-2xl font-bold">Ahmet Usta</p>
        <p className="text-[15px] text-[var(--text-secondary)]">Temizlik Uzmani</p>
      </div>
      <div className="divide-y divide-[var(--border)] bg-white">
        {items.map((item) => (
          <button key={item} type="button" className="flex w-full items-center gap-3 px-5 py-4 text-left">
            <Icons.Settings className="text-xl text-[var(--text-primary)]" />
            <span className="flex-1 font-medium">{item}</span>
            <span className="text-[var(--text-hint)]">›</span>
          </button>
        ))}
      </div>
      <div className="space-y-3 px-6 py-6">
        <Button className="w-full" variant="ghost" onClick={onCustomerMode}>
          Musteri Moduna Don
        </Button>
        <Button className="w-full" variant="danger" onClick={onLogout}>
          Cikis Yap
        </Button>
      </div>
    </div>
  )
}

function StatCard({ icon, value, label, color }) {
  return (
    <Card>
      <div className={`text-xl ${color}`}>{icon}</div>
      <p className="mt-3 text-xl font-bold">{value}</p>
      <p className="text-sm text-[var(--text-secondary)]">{label}</p>
    </Card>
  )
}
