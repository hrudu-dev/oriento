import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Search,
  ChevronDown,
  ExternalLink
} from 'lucide-react'

export default function HelpPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground mt-2">
          Find answers to common questions and get support
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search for help articles..."
            />
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <HelpCircle className="h-5 w-5 mr-2" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>
            Common questions and answers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No FAQ articles available</p>
            <p className="text-sm">Check back later for helpful articles</p>
          </div>
        </CardContent>
      </Card>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Live Chat
            </CardTitle>
            <CardDescription>
              Get instant help from our support team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Chat
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Email Support
            </CardTitle>
            <CardDescription>
              Send us an email and we'll get back to you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Phone Support
            </CardTitle>
            <CardDescription>
              Call us for immediate assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Help Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Help Categories</CardTitle>
          <CardDescription>
            Browse help topics by category
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-between">
            Getting Started
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            Account Management
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            Opportunities
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            Technical Issues
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>
            More ways to get help and learn
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <ExternalLink className="h-4 w-4 mr-2" />
            User Guide
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <ExternalLink className="h-4 w-4 mr-2" />
            Video Tutorials
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <ExternalLink className="h-4 w-4 mr-2" />
            Community Forum
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}