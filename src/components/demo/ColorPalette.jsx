const SWATCHES = [
  { label: 'Primary',   bg: 'bg-primary',   text: 'text-primary-content' },
  { label: 'Secondary', bg: 'bg-secondary', text: 'text-secondary-content' },
  { label: 'Accent',    bg: 'bg-accent',    text: 'text-accent-content' },
  { label: 'Neutral',   bg: 'bg-neutral',   text: 'text-neutral-content' },
  { label: 'Base 100',  bg: 'bg-base-100',  text: 'text-base-content', border: true },
  { label: 'Base 200',  bg: 'bg-base-200',  text: 'text-base-content' },
  { label: 'Base 300',  bg: 'bg-base-300',  text: 'text-base-content' },
  { label: 'Info',      bg: 'bg-info',      text: 'text-info-content' },
  { label: 'Success',   bg: 'bg-success',   text: 'text-success-content' },
  { label: 'Warning',   bg: 'bg-warning',   text: 'text-warning-content' },
  { label: 'Error',     bg: 'bg-error',     text: 'text-error-content' },
]

export default function ColorPalette() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {SWATCHES.map(({ label, bg, text, border }) => (
        <div
          key={label}
          className={`${bg} ${text} ${border ? 'border border-base-300' : ''} rounded-lg px-4 py-3`}
        >
          <div className="text-sm font-medium">{label}</div>
        </div>
      ))}
    </div>
  )
}
