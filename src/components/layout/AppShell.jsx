import { useState } from 'react'
import Header from './Header'
import Drawer from './Drawer'

export default function AppShell({ children, theme, setTheme, navigate }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        theme={theme}
        setTheme={setTheme}
        navigate={navigate}
      >
        {/* Main content column */}
        <div className="flex flex-col min-h-screen">
          <Header onMenuClick={() => setDrawerOpen(true)} />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </Drawer>
    </div>
  )
}
