import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { ErrorState } from '../../components/ui/ErrorState'
import { LoadingState } from '../../components/ui/LoadingState'
import { useAsync } from '../../hooks/useAsync'
import { mockApi } from '../../services/mockApi'

export function ProposalsPage() {
  const navigate = useNavigate()
  const { data, isLoading, error, execute } = useAsync(mockApi.getProposals)

  if (isLoading) return <LoadingState />
  if (error) return <div className="mx-auto max-w-5xl p-4"><ErrorState message="Teklifler yuklenemedi." onRetry={execute} /></div>

  return (
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Gelen Teklifler</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {data.map((item) => (
          <Card key={item.id}>
            <p className="font-bold">{item.name}</p>
            <p className="text-sm text-slate-500">Puan: {item.rating} ({item.reviews} yorum)</p>
            <p className="text-sm text-slate-500">Tahmini sure: {item.duration}</p>
            <p className="mt-2 text-xl font-bold text-indigo-600">{item.price} TL</p>
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
