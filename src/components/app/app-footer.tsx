import Link from 'next/link'

export function AppFooter() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Oriento. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/legal/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}