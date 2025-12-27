'use client'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { PanelLeftClose, PanelRightClose, Search, User, Settings, LogOut, Bell } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface ConsoleHeaderProps {
  sidebarCollapsed: boolean
  onToggleSidebar: () => void
}

export function ConsoleHeader({ sidebarCollapsed, onToggleSidebar }: ConsoleHeaderProps) {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
      <div className="flex">
        {/* Logo Section - matches sidebar width and state */}
        <div className={`px-6 py-3 border-r transition-all duration-300 flex items-center ${sidebarCollapsed ? 'w-16 justify-center' : 'w-64'}`}>
          <Link href="/console/dashboard" className={`flex items-center ${sidebarCollapsed ? '' : 'space-x-2'}`}>
            <Logo className="h-6 w-6 flex-shrink-0" />
            {!sidebarCollapsed && <span className="text-xl font-bold">Oriento</span>}
          </Link>
        </div>

        {/* Main Header Content */}
        <div className="flex-1 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Sidebar Toggle - Icon Only */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleSidebar}
              >
                {sidebarCollapsed ? (
                  <PanelRightClose className="h-4 w-4" />
                ) : (
                  <PanelLeftClose className="h-4 w-4" />
                )}
              </Button>

              {/* Universal Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search opportunities, pages, or help..."
                    className="w-full pl-10 pr-4 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-2">
              {/* Notification Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
                >
                  <Bell className="h-4 w-4" />
                </Button>

                {/* Notification Dropdown Menu */}
                {isNotificationDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold mb-3">Notifications</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted/50 rounded-md">
                          <p className="text-sm font-medium">New opportunity match found</p>
                          <p className="text-xs text-muted-foreground mt-1">A scholarship program matching your interests is now available</p>
                          <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-md">
                          <p className="text-sm font-medium">Application deadline reminder</p>
                          <p className="text-xs text-muted-foreground mt-1">Your saved opportunity deadline is in 3 days</p>
                          <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-md">
                          <p className="text-sm font-medium">Profile completion</p>
                          <p className="text-xs text-muted-foreground mt-1">Complete your profile to get better matches</p>
                          <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t">
                        <Button variant="ghost" size="sm" className="w-full text-xs">
                          View All Notifications
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                >
                  <User className="h-4 w-4" />
                </Button>

                {/* Profile Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <Link
                        href="/console/settings"
                        className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Profile
                      </Link>
                      <Link
                        href="/auth/login"
                        className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => {
                          setIsProfileDropdownOpen(false)
                          // Clear authentication
                          localStorage.removeItem('isAuthenticated')
                          localStorage.removeItem('userEmail')
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop to close dropdowns */}
      {(isProfileDropdownOpen || isNotificationDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsProfileDropdownOpen(false)
            setIsNotificationDropdownOpen(false)
          }}
        />
      )}
    </header>
  )
}