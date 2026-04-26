import { communityFeed } from "@/lib/platform-data"

export default function CommunityPage() {
  return (
    <section>
      <h1 className="text-4xl font-display mb-2">Community Hub</h1>
      <p className="text-muted-foreground mb-8">Live feed of trades, drops, events, and membership perks.</p>
      <div className="border border-foreground/10 divide-y divide-foreground/10">
        {communityFeed.map((item, i) => (
          <div key={item} className="p-5 flex items-start justify-between gap-6">
            <p>{item}</p>
            <span className="text-xs text-muted-foreground">{i + 1}m ago</span>
          </div>
        ))}
      </div>
    </section>
  )
}
