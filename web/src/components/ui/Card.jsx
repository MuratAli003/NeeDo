import { cn } from '../../lib/theme'

export function Card({ children, className = '' }) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-card)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
