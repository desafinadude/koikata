const STORAGE_KEY = 'koikata-theme'
const DEFAULT_THEME = 'comic'

export const THEMES = [
  { id: 'comic',     label: 'Comic' },
  { id: 'vaporware', label: 'Vaporware' },
]

export function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_THEME
}

export function applyTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId)
  localStorage.setItem(STORAGE_KEY, themeId)
}
