import { Menu } from 'lucide-react'

export default function Header({ onMenuClick }) {
  return (
    <header className="navbar bg-primary text-primary-content sticky top-0 z-30 shadow-md">
      <div className="navbar-start">
        <button
          className="btn btn-ghost btn-circle"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="navbar-center">
        <span className="text-xl font-bold tracking-wide">
          鯉型 <span className="font-light ml-1">KoiKata</span>
        </span>
      </div>

      <div className="navbar-end">
        {/* Right-side action slot */}
      </div>
    </header>
  )
}
