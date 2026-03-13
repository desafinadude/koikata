const VARIANTS = ['btn-primary', 'btn-secondary', 'btn-accent', 'btn-neutral', 'btn-ghost', 'btn-outline']
const SIZES   = ['btn-lg', '', 'btn-sm', 'btn-xs']

export default function ButtonDemo() {
  return (
    <div className="space-y-4">
      {/* Variants */}
      <div className="flex flex-wrap gap-2">
        {VARIANTS.map(v => (
          <button key={v} className={`btn ${v}`}>
            {v.replace('btn-', '')}
          </button>
        ))}
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap items-center gap-2">
        {SIZES.map((s, i) => (
          <button key={i} className={`btn btn-primary ${s}`}>
            {s ? s.replace('btn-', '') : 'md'}
          </button>
        ))}
      </div>

      {/* States */}
      <div className="flex flex-wrap gap-2">
        <button className="btn btn-primary loading">Loading</button>
        <button className="btn btn-primary" disabled>Disabled</button>
        <button className="btn btn-primary btn-wide">Wide</button>
      </div>
    </div>
  )
}
