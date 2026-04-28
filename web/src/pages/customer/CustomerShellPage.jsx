import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MobileShell } from '../../components/layout/MobileShell'
import { AppBar } from '../../components/ui/AppBar'
import { Field } from '../../components/ui/Field'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { ErrorState } from '../../components/ui/ErrorState'
import { LoadingState } from '../../components/ui/LoadingState'
import { SegmentedTabs } from '../../components/ui/SegmentedTabs'
import { useAsync } from '../../hooks/useAsync'
import { iconMap, Icons } from '../../lib/icons'
import { mockApi } from '../../services/mockApi'
import { customerTabs } from '../../utils/constants'
import { categories } from '../../utils/mockData'

export function CustomerShellPage() {
  const navigate = useNavigate()

  return (
    <MobileShell
      tabs={customerTabs}
      defaultTab="home"
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
  const featured = categories.slice(0, 4)

  return (
    <div className="app-page pb-8">
      <div className="px-6 pt-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-[24px] font-bold text-[var(--text-primary)]">Gunaydin, Ayberk! 👋</p>
            <p className="mt-1 text-[15px] text-[var(--text-secondary)]">Bugun hangi hizmete ihtiyacin var?</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:rgba(129,140,248,0.2)] text-[var(--primary)]">
            <Icons.Person className="text-2xl" />
          </div>
        </div>
        <Field hint="Hizmet ara (Orn: Boya badana, temizlik...)" prefix={<Icons.Search className="text-xl" />} />
        <Card className="mt-6 overflow-hidden bg-[var(--primary)] text-white shadow-[var(--shadow-primary)]">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-xl font-bold">Ilk Hizmetine Ozel %20 Indirim!</p>
              <p className="mt-2 text-sm text-indigo-100">Hemen teklif al, indirimi yakala.</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
              <Icons.Offer className="text-2xl" />
            </div>
          </div>
        </Card>
      </div>

      <section className="mt-6 px-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">Populer Kategoriler</h2>
          <button type="button" className="text-sm font-semibold text-[var(--primary)]">
            Tumunu Gor
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {featured.map((item) => {
            const Icon = iconMap[item.icon]

            return (
              <div key={item.name} className="w-[72px] shrink-0 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] bg-white text-[var(--primary)] shadow-[var(--shadow-card)]">
                  <Icon className="text-[28px]" />
                </div>
                <p className="mt-2 text-xs font-medium text-[var(--text-primary)]">{item.name}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-6 px-6">
        <h2 className="mb-3 text-lg font-bold">En Cok Tercih Edilenler</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="w-[160px] shrink-0 overflow-hidden p-0">
              <div className="flex h-28 items-center justify-center bg-[var(--background)] text-[var(--text-hint)]">
                <Icons.Home className="text-4xl" />
              </div>
              <div className="p-4">
                <p className="font-bold">Ev Temizligi</p>
                <div className="mt-1 flex items-center gap-1 text-sm text-[var(--text-secondary)]">
                  <Icons.Star className="text-amber-400" />
                  <span>4.8</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

function CategoriesTab({ onCreateRequest }) {
  const [query, setQuery] = useState('')
  const { data, isLoading, error, execute } = useAsync(mockApi.getCategories)
  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message="Kategoriler yuklenemedi." onRetry={execute} />

  const filtered = data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="app-page pb-8">
      <AppBar title="Tum Hizmetler" />
      <div className="px-4 py-4">
        <Field
          hint="Hangi kategoriye bakmistiniz?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          prefix={<Icons.Search className="text-xl" />}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 pb-6">
        {filtered.map((item) => {
          const Icon = iconMap[item.icon]

          return (
            <button
              key={item.name}
              type="button"
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-card)] transition hover:border-[var(--primary-light)]"
              onClick={onCreateRequest}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[color:rgba(79,70,229,0.1)] text-[var(--primary)]">
                <Icon className="text-[32px]" />
              </div>
              <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">{item.name}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function RequestsTab({ onTracking }) {
  const [tab, setTab] = useState('active')

  const tabs = [
    { label: 'Aktif', value: 'active' },
    { label: 'Bekleyen', value: 'pending' },
    { label: 'Gecmis', value: 'past' },
  ]

  return (
    <div className="app-page pb-8">
      <AppBar title="Taleplerim" />
      <div className="space-y-4 px-4 py-4">
        <SegmentedTabs tabs={tabs} value={tab} onChange={setTab} />
        {tab === 'active' ? (
          <Card className="p-5">
            <button type="button" className="w-full text-left" onClick={onTracking}>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[color:rgba(16,185,129,0.12)] px-3 py-1 text-xs font-bold text-[var(--secondary)]">Yolda</span>
                <span className="text-xs text-[var(--text-hint)]">12 Mayis 2026</span>
              </div>
              <p className="mt-4 text-base font-bold">Ev Temizligi</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">Hizmet Veren: Ahmet Usta</p>
              <div className="mt-4 flex items-center text-sm font-bold text-[var(--primary)]">Detaylari Gor</div>
            </button>
          </Card>
        ) : (
          <Card className="py-10 text-center text-sm text-[var(--text-hint)]">
            {tab === 'pending' ? 'Bekleyen talep bulunmuyor' : 'Gecmis talep bulunmuyor'}
          </Card>
        )}
      </div>
    </div>
  )
}

function MessagesTab({ onChat }) {
  const { data, isLoading, error, execute } = useAsync(mockApi.getMessages)
  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message="Mesajlar yuklenemedi." onRetry={execute} />

  return (
    <div className="app-page pb-8">
      <AppBar title="Mesajlar" />
      {data.map((item) => (
        <button
          key={item.id}
          type="button"
          className="flex w-full items-center gap-3 border-b border-[var(--border)] px-6 py-4 text-left"
          onClick={onChat}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--border)] text-[var(--text-secondary)]">
            <Icons.Person className="text-2xl" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-xs text-[var(--text-hint)]">{item.role}</p>
              </div>
              <p className={`text-xs ${item.unread ? 'font-bold text-[var(--primary)]' : 'text-[var(--text-hint)]'}`}>{item.time}</p>
            </div>
            <p className={`mt-1 truncate text-sm ${item.unread ? 'font-semibold text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
              {item.lastMessage}
            </p>
          </div>
          {item.unread > 0 ? <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">{item.unread}</span> : null}
        </button>
      ))}
    </div>
  )
}

function ProfileTab({ onProviderMode, onLogout }) {
  const menu = useMemo(
    () => [
      { icon: Icons.Location, label: 'Adreslerim' },
      { icon: Icons.Payment, label: 'Odeme Yontemleri' },
      { icon: Icons.Favorite, label: 'Favori Ustalarim' },
      { icon: Icons.Settings, label: 'Bildirim Ayarlari' },
      { icon: Icons.Support, label: 'Yardim Merkezi' },
    ],
    [],
  )

  return (
    <div className="app-page pb-8">
      <AppBar
        title="Profilim"
        trailing={
          <button type="button" className="rounded-full p-2 text-[var(--text-primary)]">
            <Icons.Settings className="text-xl" />
          </button>
        }
      />
      <div className="px-6 py-6 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--primary)] text-4xl font-bold text-white">A</div>
        <p className="mt-4 text-2xl font-bold">Ayberk K.</p>
        <p className="text-[15px] text-[var(--text-secondary)]">+90 555 123 45 67</p>
      </div>
      <div className="divide-y divide-[var(--border)] bg-white">
        {menu.map((item) => (
          <button key={item.label} type="button" className="flex w-full items-center gap-3 px-5 py-4 text-left">
            <item.icon className="text-xl text-[var(--text-primary)]" />
            <span className="flex-1 font-medium">{item.label}</span>
            <span className="text-[var(--text-hint)]">›</span>
          </button>
        ))}
      </div>
      <div className="space-y-3 px-6 py-6">
        <Button className="w-full gap-2" variant="ghost" onClick={onProviderMode}>
          <Icons.Work />
          Usta Moduna Gec
        </Button>
        <Button className="w-full" variant="danger" onClick={onLogout}>
          Cikis Yap
        </Button>
      </div>
    </div>
  )
}
