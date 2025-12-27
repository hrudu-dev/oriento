'use client'

import { Logo } from '@/components/ui/logo'
import Link from 'next/link'

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/auth/login" className="flex items-center space-x-2">
            <Logo className="h-5 w-5" />
            <span className="text-lg font-semibold">Oriento</span>
          </Link>
          
          {/* Empty space for future navigation */}
          <div></div>
        </nav>
      </div>
    </header>
  )
}