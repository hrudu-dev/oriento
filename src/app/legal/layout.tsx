import { AppHeader } from '@/components/app/app-header'
import { AppFooter } from '@/components/app/app-footer'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl pt-20">
        {children}
      </main>
      <AppFooter />
    </div>
  )
}