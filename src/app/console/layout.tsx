'use client'

import { ConsoleHeader } from '@/components/console/console-header'
import { ConsoleSidebar } from '@/components/console/console-sidebar'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    } else {
      // Redirect to login if not authenticated
      router.push('/auth/login')
    }
    setIsLoading(false)
  }, [router])

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  // Show loading or nothing while checking authentication
  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <ConsoleHeader 
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={toggleSidebar}
      />
      <div className="flex">
        <ConsoleSidebar 
          isCollapsed={sidebarCollapsed} 
          onToggle={setSidebarCollapsed} 
        />
        <main 
          className={`flex-1 pt-20 px-6 pb-6 overflow-y-auto transition-all duration-300 min-h-screen ${
            sidebarCollapsed ? 'ml-16' : 'ml-64'
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  )
}