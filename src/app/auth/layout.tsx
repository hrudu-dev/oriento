import { AppHeader } from '@/components/app/app-header'
import { AppFooter } from '@/components/app/app-footer'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col">
      <AppHeader />
      <main className="flex-1 flex items-center justify-center p-4 pt-20">
        {children}
      </main>
      <AppFooter />
    </div>
  )
}