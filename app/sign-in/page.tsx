import Link from "next/link"

export default function SignInPage() {
  return (
    <main className="min-h-screen grid place-items-center px-6">
      <div className="w-full max-w-md border border-foreground/10 p-8">
        <h1 className="text-3xl font-display mb-3">Sign in</h1>
        <p className="text-muted-foreground mb-6 text-sm">Demo auth screen for the Superfanz app flow.</p>
        <form className="space-y-4">
          <input className="w-full border border-foreground/20 px-3 py-2 bg-transparent" placeholder="Email" />
          <input className="w-full border border-foreground/20 px-3 py-2 bg-transparent" placeholder="Password" type="password" />
          <Link href="/dashboard" className="block text-center bg-foreground text-background py-2">Continue to dashboard</Link>
        </form>
      </div>
    </main>
  )
}
