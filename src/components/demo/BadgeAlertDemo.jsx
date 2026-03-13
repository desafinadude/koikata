import { Lightbulb, CircleCheck, TriangleAlert, CircleX } from 'lucide-react'

export default function BadgeAlertDemo() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <span className="badge badge-primary">Primary</span>
        <span className="badge badge-secondary">Secondary</span>
        <span className="badge badge-accent">Accent</span>
        <span className="badge badge-ghost">Ghost</span>
        <span className="badge badge-outline">Outline</span>
        <span className="badge badge-success">N5</span>
        <span className="badge badge-warning">N4</span>
        <span className="badge badge-error">N3</span>
      </div>

      <div className="space-y-2">
        <div className="alert alert-info text-sm">
          <Lightbulb size={16} />
          <span>Tip: Practice hiragana for 10 minutes every day.</span>
        </div>
        <div className="alert alert-success text-sm">
          <CircleCheck size={16} />
          <span>Lesson complete! You learned 5 new kanji.</span>
        </div>
        <div className="alert alert-warning text-sm">
          <TriangleAlert size={16} />
          <span>You have 8 cards due for review.</span>
        </div>
        <div className="alert alert-error text-sm">
          <CircleX size={16} />
          <span>Incorrect reading. Try again!</span>
        </div>
      </div>
    </div>
  )
}
