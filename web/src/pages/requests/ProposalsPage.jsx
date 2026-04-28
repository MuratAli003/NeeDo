import { useNavigate } from 'react-router-dom'
import { AppBar } from '../../components/ui/AppBar'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { ErrorState } from '../../components/ui/ErrorState'
import { LoadingState } from '../../components/ui/LoadingState'
import { useAsync } from '../../hooks/useAsync'
import { Icons } from '../../lib/icons'
import { mockApi } from '../../services/mockApi'

export function ProposalsPage() {
  const navigate = useNavigate()
  const { data, isLoading, error, execute } = useAsync(mockApi.getProposals)

  if (isLoading) return <LoadingState />
  if (error) return <div className="mx-auto max-w-5xl p-4"><ErrorState message="Teklifler yuklenemedi." onRetry={execute} /></div>

  return (
    <div className="app-page min-h-screen bg-[var(--background)]">
      <AppBar title="Gelen Teklifler" />
      <div className="grid gap-4 px-4 py-4 md:grid-cols-2">
        {data.map((item) => (
          <Card key={item.id}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--border)] text-[var(--text-secondary)]">
                  <Icons.Person className="text-2xl" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">{item.name}</p>
                    {item.verified ? <Icons.Verified className="text-[var(--secondary)]" /> : null}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Puan: {item.rating} ({item.reviews} yorum)
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">Tahmini sure: {item.duration}</p>
                </div>
              </div>
              <p className="text-xl font-extrabold text-[var(--primary)]">{item.price} TL</p>
            </div>
            <div className="mt-3 flex gap-2">
              <Button className="flex-1" variant="secondary" onClick={() => navigate('/provider-profile')}>
                Profili Incele
              </Button>
              <Button className="flex-1" onClick={() => navigate('/chat')}>
                Mesaj Gonder
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
