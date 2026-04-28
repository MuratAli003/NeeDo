export function ErrorState({ message = 'Bir hata olustu.', onRetry }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[color:rgba(239,68,68,0.18)] bg-[color:rgba(239,68,68,0.06)] p-4 text-sm text-[var(--error)]">
      <p>{message}</p>
      {onRetry ? (
        <button className="mt-2 font-semibold underline" onClick={onRetry}>
          Tekrar dene
        </button>
      ) : null}
    </div>
  )
}
