export default function CardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Flashcard style */}
      <div className="card bg-primary text-primary-content shadow-md">
        <div className="card-body items-center text-center py-8">
          <div className="text-6xl font-bold mb-2">あ</div>
          <div className="text-xl opacity-80">a</div>
          <div className="text-sm opacity-60 mt-1">Hiragana</div>
        </div>
      </div>

      {/* Info card */}
      <div className="card bg-base-200 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-base">Vocabulary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">猫</span>
              <span className="text-base-content/60">neko — cat</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">犬</span>
              <span className="text-base-content/60">inu — dog</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">魚</span>
              <span className="text-base-content/60">sakana — fish</span>
            </div>
          </div>
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-primary btn-sm">Study</button>
          </div>
        </div>
      </div>

      {/* Progress card */}
      <div className="card bg-base-100 border border-base-300 shadow-sm sm:col-span-2">
        <div className="card-body">
          <h3 className="card-title text-base">Daily Progress</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Hiragana</span><span className="text-base-content/60">46 / 46</span>
              </div>
              <progress className="progress progress-success w-full" value={100} max={100} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Katakana</span><span className="text-base-content/60">32 / 46</span>
              </div>
              <progress className="progress progress-primary w-full" value={70} max={100} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Kanji N5</span><span className="text-base-content/60">41 / 103</span>
              </div>
              <progress className="progress progress-secondary w-full" value={40} max={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
