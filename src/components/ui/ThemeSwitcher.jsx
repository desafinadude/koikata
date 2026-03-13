import { Cpu, Pencil } from 'lucide-react'
import { THEMES } from '../../store/themeStore'

const THEME_ICONS = {
  handdrawn: Pencil,
  vaporwave: Cpu,
}

export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-base-content/50 mb-2">
        Theme
      </div>
      <div className="flex flex-col gap-1">
        {THEMES.map(({ id, label }) => {
          const Icon = THEME_ICONS[id]
          return (
            <button
              key={id}
              className={`btn btn-sm justify-start gap-2 ${theme === id ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setTheme(id)}
            >
              <Icon size={14} />
              <span>{label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
