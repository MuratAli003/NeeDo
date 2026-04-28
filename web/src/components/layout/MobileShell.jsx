import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cn } from '../../lib/theme'

export function MobileShell({ tabs, defaultTab, renderContent }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const tab = searchParams.get('tab') || defaultTab
  const currentTab = useMemo(
    () => (tabs.some((item) => item.key === tab) ? tab : defaultTab),
    [defaultTab, tab, tabs],
  )

  const setTab = (nextTab) => {
    const nextParams = new URLSearchParams(searchParams)
    nextParams.set('tab', nextTab)
    setSearchParams(nextParams)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-[1280px] bg-[var(--background)]">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col bg-[var(--background)]">
        <main className="flex-1 pb-24">{renderContent(currentTab)}</main>
        <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-white/98 backdrop-blur">
          <div className="mx-auto grid max-w-3xl grid-cols-5 gap-1 px-2 py-2">
            {tabs.map((item) => {
              const active = item.key === currentTab
              const Icon = active && item.activeIcon ? item.activeIcon : item.icon

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setTab(item.key)}
                  className={cn(
                    'flex flex-col items-center justify-center gap-1 rounded-[14px] px-2 py-2 text-[11px] font-semibold transition',
                    active ? 'bg-[color:rgba(79,70,229,0.1)] text-[var(--primary)]' : 'text-[var(--text-hint)]',
                  )}
                >
                  <span className="text-[20px]">{Icon ? <Icon /> : null}</span>
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}

export function ProviderShell({ tabs, defaultTab, renderContent }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const tab = searchParams.get('tab') || defaultTab
  const currentTab = useMemo(
    () => (tabs.some((item) => item.key === tab) ? tab : defaultTab),
    [defaultTab, tab, tabs],
  )

  const setTab = (nextTab) => {
    const nextParams = new URLSearchParams(searchParams)
    nextParams.set('tab', nextTab)
    setSearchParams(nextParams)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-[1280px] bg-[var(--background)]">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col bg-[var(--background)]">
        <main className="flex-1 pb-24">{renderContent(currentTab)}</main>
        <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-white/98 backdrop-blur">
          <div className="mx-auto grid max-w-3xl grid-cols-4 gap-1 px-2 py-2">
            {tabs.map((item) => {
              const active = item.key === currentTab
              const Icon = active && item.activeIcon ? item.activeIcon : item.icon

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setTab(item.key)}
                  className={cn(
                    'flex flex-col items-center justify-center gap-1 rounded-[14px] px-2 py-2 text-[11px] font-semibold transition',
                    active ? 'bg-[color:rgba(79,70,229,0.1)] text-[var(--primary)]' : 'text-[var(--text-hint)]',
                  )}
                >
                  <span className="text-[20px]">{Icon ? <Icon /> : null}</span>
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}
