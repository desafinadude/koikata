import NavMenu from './NavMenu'
import ThemeSwitcher from '../ui/ThemeSwitcher'

export default function Drawer({ open, onClose, children, theme, setTheme, navigate }) {
  return (
    <div className="drawer">
      <input
        id="app-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        onChange={() => {}}
        readOnly
      />

      <div className="drawer-content">
        {children}
      </div>

      <div className="drawer-side z-40">
        <label
          htmlFor="app-drawer"
          aria-label="Close menu"
          className="drawer-overlay"
          onClick={onClose}
        />

        <aside className="bg-base-200 min-h-full w-72 flex flex-col">
          <div className="bg-primary text-primary-content px-6 py-5">
            <div className="text-2xl font-bold">鯉型</div>
            <div className="text-sm opacity-80 mt-0.5">KoiKata</div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4">
            <NavMenu navigate={navigate} onClose={onClose} />
          </div>

          <div className="border-t border-base-300 px-4 py-4">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </div>
        </aside>
      </div>
    </div>
  )
}
