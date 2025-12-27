import { Logo } from '@/components/ui/logo'
import { Button } from '@/components/ui/button'
import { Github, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-2">
            <Link href="/site/home" className="flex items-center space-x-2">
              <Logo className="h-6 w-6" />
              <span className="text-xl font-bold">Oriento</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping young people find the right direction<br />
              in global opportunities through guided<br />
              discovery and smart matching.
            </p>
            <div className="flex space-x-1 pt-1">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm">
              Follow us for updates on new opportunities, platform features, and success stories from our community of students and schools worldwide.
            </p>
          </div>

          {/* Quick Links & Legal */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Quick Links</h3>
              <div className="space-y-1">
                <Link 
                  href="/site/home" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/site/features" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
                <Link 
                  href="/site/about" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/site/contact" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
                <Link 
                  href="/site/resources" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Resources
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Legal</h3>
              <div className="space-y-1">
                <Link 
                  href="/legal/terms" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/legal/privacy" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/legal/cookies" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-6 pt-6 text-center">
          <div className="text-sm text-muted-foreground">
            © 2025 Oriento. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}