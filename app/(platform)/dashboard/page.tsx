import Link from "next/link"
import { athletes, cards, communityFeed } from "@/lib/platform-data"

export default function DashboardPage() {
  const owned = cards.filter((card) => card.owned)

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-display">Welcome back, Collector</h1>
        <p className="text-muted-foreground mt-2">Track your cards, discover athletes, and stay on top of community activity.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="border border-foreground/10 p-5"><p className="text-sm text-muted-foreground">Owned cards</p><p className="text-3xl font-display">{owned.length}</p></div>
        <div className="border border-foreground/10 p-5"><p className="text-sm text-muted-foreground">Athletes live</p><p className="text-3xl font-display">{athletes.length}</p></div>
        <div className="border border-foreground/10 p-5"><p className="text-sm text-muted-foreground">Community updates</p><p className="text-3xl font-display">{communityFeed.length}</p></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="border border-foreground/10 p-6">
          <h2 className="font-medium mb-4">Recent community activity</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {communityFeed.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <div className="border border-foreground/10 p-6">
          <h2 className="font-medium mb-4">Quick actions</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/cards" className="border px-3 py-2 border-foreground/20 hover:bg-foreground/5">Browse cards</Link>
            <Link href="/athletes" className="border px-3 py-2 border-foreground/20 hover:bg-foreground/5">Follow athletes</Link>
            <Link href="/community" className="border px-3 py-2 border-foreground/20 hover:bg-foreground/5">Open community</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
