import { athletes } from "@/lib/platform-data"

export default function AthletesPage() {
  return (
    <section>
      <h1 className="text-4xl font-display mb-2">Athletes</h1>
      <p className="text-muted-foreground mb-8">Discover featured athletes and the rarity tiers tied to their Pro Cards.</p>
      <div className="space-y-4">
        {athletes.map((athlete) => (
          <div key={athlete.id} className="border border-foreground/10 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-xl font-display">{athlete.name}</h2>
              <p className="text-sm text-muted-foreground">{athlete.sport} • {athlete.team}</p>
            </div>
            <div className="text-sm text-muted-foreground">{athlete.followers.toLocaleString()} followers</div>
            <span className="border border-foreground/20 px-2 py-1 text-xs font-mono uppercase">{athlete.rarity}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
