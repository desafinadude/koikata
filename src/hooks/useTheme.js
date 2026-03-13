import { useState, useEffect } from 'react'
import { getStoredTheme, applyTheme } from '../store/themeStore'

export function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return { theme, setTheme }
}
