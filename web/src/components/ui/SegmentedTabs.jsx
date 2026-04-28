import { cn } from '../../lib/theme'

export function SegmentedTabs({ tabs, value, onChange, className = '' }) {
  return (
    <div className={cn('rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-1 shadow-[var(--shadow-card)]', className)}>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={cn(
              'rounded-[12px] px-3 py-2 text-sm font-semibold transition',
              value === tab.value ? 'bg-[var(--primary)] text-white shadow-[var(--shadow-primary)]' : 'text-[var(--text-secondary)]',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
