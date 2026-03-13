export default function TypographyDemo() {
  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-bold">H1 — 日本語</h1>
      <h2 className="text-3xl font-bold">H2 — Heading</h2>
      <h3 className="text-2xl font-semibold">H3 — Subheading</h3>
      <h4 className="text-xl font-semibold">H4 — Section title</h4>
      <p className="text-base leading-relaxed text-base-content/80">
        Body text — The quick brown fox jumps over the lazy dog.
        Learning Japanese opens a window to a rich culture and language.
        ひらがな、カタカナ、漢字
      </p>
      <p className="text-sm text-base-content/60">
        Small / caption text — Used for labels, hints, and secondary information.
      </p>
      <p className="font-mono text-sm bg-base-200 rounded px-3 py-2">
        Monospace — あいうえお アイウエオ 一二三四五
      </p>
    </div>
  )
}
