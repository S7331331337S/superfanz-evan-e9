import { cards, creators } from "@/lib/platform-data"

export default function CardsPage() {
  return (
    <section>
      <h1 className="text-4xl font-display mb-2">Pro Cards</h1>
      <p className="text-muted-foreground mb-8">Explore musician and creator drops across Release, Access, Milestone, and Community segments.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => {
          const creator = creators.find((c) => c.id === card.creatorId)
          return (
            <article key={card.id} className="border border-foreground/10 p-5 space-y-2">
              <p className="text-xs font-mono text-muted-foreground uppercase">{card.season} · {card.segment}</p>
              <h2 className="text-xl font-display">{card.title}</h2>
              <p className="text-sm text-muted-foreground">{creator?.name} • {creator?.category}</p>
              <p className="text-sm">Impact score: <span className="font-semibold">{card.impactScore}</span></p>
              <p className={`text-xs inline-block px-2 py-1 ${card.owned ? "bg-foreground text-background" : "border border-foreground/20"}`}>{card.owned ? "Owned" : "Available"}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
