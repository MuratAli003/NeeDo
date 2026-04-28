export function LoadingState() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--border)] border-t-[var(--primary)]" />
        <p className="text-sm font-medium text-[var(--text-secondary)]">Yukleniyor...</p>
      </div>
    </div>
  )
}
