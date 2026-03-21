import { athletes, cards } from "@/lib/platform-data"

export default function CardsPage() {
  return (
    <section>
      <h1 className="text-4xl font-display mb-2">Pro Cards</h1>
      <p className="text-muted-foreground mb-8">Explore current drops and track which cards are already in your collection.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => {
          const athlete = athletes.find((a) => a.id === card.athleteId)
          return (
            <article key={card.id} className="border border-foreground/10 p-5 space-y-2">
              <p className="text-xs font-mono text-muted-foreground uppercase">{card.season}</p>
              <h2 className="text-xl font-display">{card.title}</h2>
              <p className="text-sm text-muted-foreground">{athlete?.name} • {athlete?.team}</p>
              <p className="text-sm">Performance score: <span className="font-semibold">{card.points}</span></p>
              <p className={`text-xs inline-block px-2 py-1 ${card.owned ? "bg-foreground text-background" : "border border-foreground/20"}`}>{card.owned ? "Owned" : "Available"}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
