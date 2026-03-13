const STORAGE_KEY = 'koikata-theme'
const DEFAULT_THEME = 'handdrawn'

export const THEMES = [
  { id: 'handdrawn', label: 'Hand-Drawn' },
  { id: 'vaporwave', label: 'Vaporwave' },
]

export function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_THEME
}

export function applyTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId)
  localStorage.setItem(STORAGE_KEY, themeId)
}
