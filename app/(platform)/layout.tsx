import { PlatformShell } from "@/components/platform/platform-shell"
import { ReactNode } from "react"

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return <PlatformShell>{children}</PlatformShell>
}
