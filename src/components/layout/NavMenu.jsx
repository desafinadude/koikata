import { Palette } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'demo', label: 'Demo', Icon: Palette, section: 'Main' },
]

function groupItems(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = []
    acc[item.section].push(item)
    return acc
  }, {})
}

export default function NavMenu({ navigate, onClose }) {
  const groups = groupItems(NAV_ITEMS)

  function handleNav(id) {
    navigate(id)
    onClose()
  }

  return (
    <nav>
      {Object.entries(groups).map(([section, items]) => (
        <div key={section} className="mb-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-base-content/50 px-3 mb-1">
            {section}
          </div>
          <ul className="menu menu-sm gap-0.5">
            {items.map(({ id, label, Icon }) => (
              <li key={id}>
                <button
                  className="flex items-center gap-3 rounded-lg"
                  onClick={() => handleNav(id)}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
