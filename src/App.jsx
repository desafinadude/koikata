import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import AppShell from './components/layout/AppShell'
import DemoPage from './pages/DemoPage'

const PAGES = {
  demo: DemoPage,
}

export default function App() {
  const { theme, setTheme } = useTheme()
  const [page, setPage] = useState('demo')

  const Page = PAGES[page] ?? DemoPage

  return (
    <AppShell theme={theme} setTheme={setTheme} navigate={setPage}>
      <Page />
    </AppShell>
  )
}
