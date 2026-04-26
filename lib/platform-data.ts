export type CreatorSegment =
  | "Release"
  | "Access"
  | "Milestone"
  | "Behind the Scenes"
  | "Collaboration"
  | "Community"

export type CreatorProfile = {
  id: string
  name: string
  category: "Musician" | "Streamer" | "Podcaster" | "Filmmaker" | "Educator"
  collective: string
  rarity: "Common" | "Rare" | "Epic" | "Legendary"
  followers: number
}

export type ProCard = {
  id: string
  creatorId: string
  title: string
  season: string
  segment: CreatorSegment
  impactScore: number
  owned: boolean
}

export const creators: CreatorProfile[] = [
  { id: "cr1", name: "Nova Lane", category: "Musician", collective: "Nightshift Records", rarity: "Legendary", followers: 120400 },
  { id: "cr2", name: "Kairo Flux", category: "Streamer", collective: "Flux Network", rarity: "Epic", followers: 88400 },
  { id: "cr3", name: "Mila Ortega", category: "Podcaster", collective: "Deep Talk Media", rarity: "Rare", followers: 51100 },
  { id: "cr4", name: "Jay Mori", category: "Filmmaker", collective: "Frame Atlas", rarity: "Rare", followers: 47900 },
  { id: "cr5", name: "Aria Chen", category: "Educator", collective: "Creator Lab", rarity: "Common", followers: 40300 },
]

export const cards: ProCard[] = [
  { id: "pc1", creatorId: "cr1", title: "Midnight Echo Album Drop", season: "2026", segment: "Release", impactScore: 97, owned: true },
  { id: "pc2", creatorId: "cr1", title: "Backstage Soundcheck Pass", season: "2026", segment: "Access", impactScore: 95, owned: false },
  { id: "pc3", creatorId: "cr2", title: "1M Live Watchers Milestone", season: "2026", segment: "Milestone", impactScore: 93, owned: true },
  { id: "pc4", creatorId: "cr3", title: "Uncut Studio Session", season: "2025", segment: "Behind the Scenes", impactScore: 90, owned: false },
  { id: "pc5", creatorId: "cr4", title: "Director x Composer Crossover", season: "2026", segment: "Collaboration", impactScore: 89, owned: false },
  { id: "pc6", creatorId: "cr5", title: "Founding Creator Circle", season: "2026", segment: "Community", impactScore: 86, owned: true },
  { id: "pc7", creatorId: "cr2", title: "Late Night Ranked Sprint", season: "2025", segment: "Release", impactScore: 84, owned: false },
  { id: "pc8", creatorId: "cr3", title: "VIP AMA Access", season: "2026", segment: "Access", impactScore: 88, owned: true },
]

export const segmentPreviews: Array<{ segment: CreatorSegment; examples: string[] }> = [
  { segment: "Release", examples: ["Album Drop", "Single Launch", "Episode Premiere"] },
  { segment: "Access", examples: ["Presale Window", "Backstage Pass", "Creator AMA"] },
  { segment: "Milestone", examples: ["1M Streams", "100K Subs", "Chart Breakthrough"] },
  { segment: "Behind the Scenes", examples: ["Raw Session", "Draft Vault", "Production Notes"] },
  { segment: "Collaboration", examples: ["Artist x Creator", "Feature Card", "Crossover Event"] },
  { segment: "Community", examples: ["Founding Fan", "Street Team", "Patron Tier"] },
]

export const communityFeed = [
  "@luna traded VIP AMA Access for Midnight Echo Album Drop",
  "New creator drop live: Crossover Collection",
  "Creator Circle town hall starts in 2 hours",
  "Marketplace volume is up 32% this week",
]
