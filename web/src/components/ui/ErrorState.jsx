export function ErrorState({ message = 'Bir hata olustu.', onRetry }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
      <p>{message}</p>
      {onRetry ? (
        <button className="mt-2 font-semibold underline" onClick={onRetry}>
          Tekrar dene
        </button>
      ) : null}
    </div>
  )
}
