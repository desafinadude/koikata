export default function FormDemo() {
  return (
    <div className="space-y-4 max-w-sm">
      {/* Text input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Search vocabulary</span>
        </label>
        <input
          type="text"
          placeholder="Type in Japanese or English…"
          className="input input-bordered w-full"
        />
      </div>

      {/* Select */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Study level</span>
        </label>
        <select className="select select-bordered w-full">
          <option>JLPT N5 (Beginner)</option>
          <option>JLPT N4</option>
          <option>JLPT N3 (Intermediate)</option>
          <option>JLPT N2</option>
          <option>JLPT N1 (Advanced)</option>
        </select>
      </div>

      {/* Toggle */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Show romaji</span>
          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
        </label>
      </div>

      {/* Radio group */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Card style</span>
        </label>
        <div className="flex gap-4">
          {['Minimal', 'Detailed', 'Compact'].map(opt => (
            <label key={opt} className="label cursor-pointer gap-2">
              <input
                type="radio"
                name="card-style"
                className="radio radio-primary"
                defaultChecked={opt === 'Minimal'}
              />
              <span className="label-text">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Range */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Daily goal</span>
          <span className="label-text-alt">20 cards</span>
        </label>
        <input type="range" min={5} max={50} step={5} defaultValue={20} className="range range-primary" />
        <div className="w-full flex justify-between text-xs text-base-content/50 px-1 mt-1">
          <span>5</span><span>15</span><span>25</span><span>35</span><span>50</span>
        </div>
      </div>

      <button className="btn btn-primary w-full">Save preferences</button>
    </div>
  )
}
