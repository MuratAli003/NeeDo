import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

export function TabShell({ tabs, defaultTab, renderContent, title, actions }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentTab = searchParams.get('tab') || defaultTab
  const safeTab = useMemo(
    () => (tabs.some((tab) => tab.key === currentTab) ? currentTab : defaultTab),
    [currentTab, defaultTab, tabs],
  )

  const setTab = (tab) => {
    searchParams.set('tab', tab)
    setSearchParams(searchParams)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col bg-slate-50">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-bold text-slate-900">{title}</h1>
          <div>{actions}</div>
        </div>
        <nav className="overflow-x-auto px-4 pb-2">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setTab(tab.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  safeTab === tab.key ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1 p-4">{renderContent(safeTab)}</main>
    </div>
  )
}
