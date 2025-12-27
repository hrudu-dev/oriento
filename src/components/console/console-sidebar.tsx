'use client'

import { Logo } from '@/components/ui/logo'
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  BarChart3, 
  FileText, 
  Bell,
  Building2,
  HelpCircle,
  Compass,
  Search,
  Bookmark,
  User
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ConsoleSidebarProps {
  isCollapsed: boolean
  onToggle: (collapsed: boolean) => void
}

export function ConsoleSidebar({ isCollapsed, onToggle }: ConsoleSidebarProps) {
  const pathname = usePathname()

  const navigation = [
    {
      name: 'Dashboard',
      href: '/console/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Guide',
      href: '/console/guide',
      icon: Compass,
    },
    {
      name: 'Explore',
      href: '/console/explore',
      icon: Search,
    },
    {
      name: 'Saved',
      href: '/console/saved',
      icon: Bookmark,
    },
    {
      name: 'Profile',
      href: '/console/profile',
      icon: User,
    },
    {
      name: 'Admin Dashboard',
      href: '/console/admin/dashboard',
      icon: BarChart3,
    },
    {
      name: 'Users',
      href: '/console/admin/users',
      icon: Users,
    },
    {
      name: 'Organization',
      href: '/console/admin/organization',
      icon: Building2,
    },
    {
      name: 'Help',
      href: '/console/help',
      icon: HelpCircle,
    },
    {
      name: 'Settings',
      href: '/console/settings',
      icon: Settings,
    },
  ]

  return (
    <div className={`fixed left-0 top-0 bottom-0 bg-background border-r transition-all duration-300 z-40 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full pt-16">
        {/* Navigation */}
        <nav className="flex-1 p-2 overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  } ${isCollapsed ? 'justify-center' : 'space-x-3'}`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}