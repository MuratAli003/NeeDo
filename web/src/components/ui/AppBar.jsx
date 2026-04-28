import { cn } from '../../lib/theme'

export function AppBar({ title, subtitle, leading, trailing, className = '' }) {
  return (
    <header className={cn('sticky top-0 z-20 border-b border-[var(--border)] bg-white/95 backdrop-blur', className)}>
      <div className="mx-auto flex min-h-[72px] max-w-3xl items-center gap-3 px-4 py-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {leading}
          <div className="min-w-0">
            <h1 className="truncate text-[18px] font-bold text-[var(--text-primary)]">{title}</h1>
            {subtitle ? <p className="truncate text-[12px] text-[var(--text-secondary)]">{subtitle}</p> : null}
          </div>
        </div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </div>
    </header>
  )
}
