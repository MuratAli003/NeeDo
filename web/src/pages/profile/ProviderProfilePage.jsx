import { useNavigate } from 'react-router-dom'
import { AppBar } from '../../components/ui/AppBar'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Icons } from '../../lib/icons'

export function ProviderProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="app-page min-h-screen bg-[var(--background)] pb-28">
      <AppBar
        title="Uzman Profili"
        trailing={
          <button type="button" className="rounded-full p-2 text-[var(--text-primary)]">
            <Icons.Favorite className="text-xl" />
          </button>
        }
      />
      <div className="space-y-6">
        <div className="px-6 py-6 text-center">
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--border)] text-[var(--text-secondary)]">
            <Icons.Person className="text-5xl" />
            <span className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--secondary)] shadow-[var(--shadow-card)]">
              <Icons.Verified />
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold">Ahmet Usta</h1>
          <p className="text-[15px] text-[var(--text-secondary)]">Profesyonel Ev Temizligi</p>
        </div>

        <div className="grid grid-cols-3 gap-3 px-6 text-center">
          <Stat value="4.9" label="Puan" />
          <Stat value="124" label="Yorum" />
          <Stat value="340+" label="Tamamlanan" />
        </div>

        <Card className="mx-6">
          <h2 className="font-bold">Hakkinda</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
            10 yili askin suredir profesyonel ev temizligi, insaat sonrasi temizlik ve ofis temizligi alaninda hizmet veriyorum.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Sertifikali Personel', 'Hizli Yanit Verme', 'Guvenilir Profil'].map((item) => (
              <span key={item} className="rounded-full bg-[color:rgba(79,70,229,0.1)] px-3 py-2 text-xs font-semibold text-[var(--primary)]">
                {item}
              </span>
            ))}
          </div>
        </Card>

        <Card className="mx-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold">Galeri</h2>
            <span className="text-sm font-semibold text-[var(--primary)]">Tumunu Gor</span>
          </div>
          <div className="flex gap-3 overflow-x-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[var(--border)] text-[var(--text-hint)]">
                <Icons.Home className="text-3xl" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="mx-6">
          <h2 className="font-bold">Son Yorumlar</h2>
          <div className="mt-4 space-y-4">
            {[
              'Evimi piril piril yaptilar. Zamaninda geldiler ve cok titiz calistilar.',
              'Ellerine saglik Ahmet usta. Fiyat/performans olarak mukemmel bir hizmet.',
            ].map((content, index) => (
              <div key={content}>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{index === 0 ? 'Meltem T.' : 'Can K.'}</p>
                  <div className="flex text-amber-400">{Array.from({ length: 5 }).map((_, star) => <span key={star}>★</span>)}</div>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{content}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="fixed inset-x-0 bottom-0 border-t border-[var(--border)] bg-white/98 px-4 py-4 backdrop-blur">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3">
          <Button variant="secondary" onClick={() => navigate('/chat')}>
            Mesaj Gonder
          </Button>
          <Button onClick={() => navigate('/create-request')}>Teklif Iste</Button>
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-white px-3 py-4 shadow-[var(--shadow-card)]">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-sm text-[var(--text-secondary)]">{label}</p>
    </div>
  )
}
