import { creators } from "@/lib/platform-data"

export default function CreatorsPage() {
  return (
    <section>
      <h1 className="text-4xl font-display mb-2">Creators</h1>
      <p className="text-muted-foreground mb-8">Discover musicians and content creators with segment-based Pro Card drops.</p>
      <div className="space-y-4">
        {creators.map((creator) => (
          <div key={creator.id} className="border border-foreground/10 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-xl font-display">{creator.name}</h2>
              <p className="text-sm text-muted-foreground">{creator.category} • {creator.collective}</p>
            </div>
            <div className="text-sm text-muted-foreground">{creator.followers.toLocaleString()} followers</div>
            <span className="border border-foreground/20 px-2 py-1 text-xs font-mono uppercase">{creator.rarity}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
