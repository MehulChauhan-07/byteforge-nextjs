import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileSidebar } from "@/components/sidebar"

export default function TopicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MobileSidebar />
          <div className="ml-4 md:ml-0 font-bold">ByteForge</div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <Sidebar className="py-6" />
        </aside>
        <main className="flex w-full flex-col overflow-hidden p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

