export default function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold uppercase tracking-widest text-base-content/50 mb-4 border-b border-base-300 pb-2">
        {title}
      </h2>
      {children}
    </section>
  )
}
