import Link from "next/link"
import { ReactNode } from "react"

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/cards", label: "Cards" },
  { href: "/athletes", label: "Creators" },
  { href: "/community", label: "Community" },
]

export function PlatformShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-foreground/10 sticky top-0 bg-background/90 backdrop-blur z-30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs tracking-widest uppercase">Superfanz Pro</Link>
          <nav className="flex gap-5 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground/70 hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>
    </main>
  )
}
