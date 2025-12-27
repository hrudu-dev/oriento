import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  BookOpen, 
  FileText, 
  Video, 
  Users,
  Calendar,
  Bell,
  ArrowRight,
  Construction,
  Lightbulb
} from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
  const upcomingResources = [
    {
      icon: BookOpen,
      title: "Opportunity Guide Library",
      description: "Comprehensive guides for different types of opportunities, application tips, and success strategies",
      status: "Coming Soon"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides on using Oriento effectively and maximizing your opportunity discovery",
      status: "Coming Soon"
    },
    {
      icon: FileText,
      title: "Application Templates",
      description: "Downloadable templates for essays, resumes, and application materials",
      status: "Coming Soon"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other students, share experiences, and get peer support",
      status: "Coming Soon"
    },
    {
      icon: Calendar,
      title: "Webinar Series",
      description: "Regular webinars on opportunity trends, application strategies, and career guidance",
      status: "Coming Soon"
    },
    {
      icon: Bell,
      title: "Newsletter & Updates",
      description: "Stay informed about new opportunities, platform updates, and success stories",
      status: "Coming Soon"
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
            <Construction className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Resources Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're building a comprehensive resource center to support your opportunity 
            discovery journey. Check back soon for guides, tutorials, and tools to help 
            you make the most of Oriento.
          </p>
        </div>
      </section>

      {/* Current Resources */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Available Now</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            While we build our full resource library, here's what you can access today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2" />
                Getting Started Guide
              </CardTitle>
              <CardDescription>
                Learn how to use Oriento effectively
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                A quick walkthrough of Oriento's features, from creating your profile 
                to finding and saving opportunities that match your goals.
              </p>
              <Button className="w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                View Guide
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Help & Support
              </CardTitle>
              <CardDescription>
                Get answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Access our help center with FAQs, troubleshooting guides, and 
                contact information for additional support.
              </p>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/console/help">
                  <Users className="mr-2 h-4 w-4" />
                  Visit Help Center
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Resources */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Coming</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're actively developing these resources to enhance your Oriento experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingResources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg w-fit">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        {resource.status}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription>
                Be the first to know when new resources become available
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Join our mailing list to receive updates about new resources, 
                platform features, and opportunity highlights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  className="flex-1 px-3 py-2 border border-input rounded-md bg-background"
                  placeholder="Enter your email address"
                />
                <Button>
                  <Bell className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            While we build our resource library, you can start discovering opportunities 
            that match your goals and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/signup">
                Start Discovering
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/site/contact">
                Request a Resource
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}