import { segmentPreviews } from "@/lib/platform-data"

export function CardSegmentPreviews() {
  return (
    <div className="w-full max-w-6xl mt-16">
      <h3 className="font-display text-3xl text-center mb-3">More Pro Card Segments</h3>
      <p className="text-center text-muted-foreground mb-8">Built for musicians and content creators — not just athletes.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {segmentPreviews.map((segment) => (
          <article key={segment.segment} className="border border-foreground/10 bg-background/60 p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">{segment.segment}</p>
            <ul className="space-y-1 text-sm">
              {segment.examples.map((example) => (
                <li key={example}>• {example}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
