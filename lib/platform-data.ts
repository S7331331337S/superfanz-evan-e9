export type Athlete = {
  id: string
  name: string
  sport: string
  team: string
  rarity: "Common" | "Rare" | "Epic" | "Legendary"
  followers: number
}

export type ProCard = {
  id: string
  athleteId: string
  title: string
  season: string
  points: number
  owned: boolean
}

export const athletes: Athlete[] = [
  { id: "a1", name: "Evan Forster", sport: "Basketball", team: "Brisbane Blaze", rarity: "Legendary", followers: 120400 },
  { id: "a2", name: "Mia Santos", sport: "Football", team: "Sydney Rovers", rarity: "Epic", followers: 88400 },
  { id: "a3", name: "Luca Tan", sport: "Tennis", team: "Independent", rarity: "Rare", followers: 51100 },
  { id: "a4", name: "Noah Reeves", sport: "Rugby", team: "Gold Coast Storm", rarity: "Common", followers: 40300 },
]

export const cards: ProCard[] = [
  { id: "c1", athleteId: "a1", title: "Playoff Dominance", season: "2025", points: 97, owned: true },
  { id: "c2", athleteId: "a1", title: "All-Star Week", season: "2024", points: 92, owned: true },
  { id: "c3", athleteId: "a2", title: "Finals Hat Trick", season: "2025", points: 95, owned: false },
  { id: "c4", athleteId: "a3", title: "Grand Slam Run", season: "2024", points: 89, owned: false },
  { id: "c5", athleteId: "a4", title: "Defensive Wall", season: "2025", points: 84, owned: true },
]

export const communityFeed = [
  "@samd traded Playoff Dominance for 2 Epic cards",
  "New drop live: Finals MVP Collection",
  "Legend membership AMA starts in 2 hours",
  "Marketplace volume is up 28% this week",
]
