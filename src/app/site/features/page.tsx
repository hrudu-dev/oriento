import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Compass, 
  Target, 
  BookOpen, 
  Users, 
  Search, 
  Bookmark, 
  Shield,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
  Lightbulb
} from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Compass,
      title: "Guided Question Flow",
      description: "Short, focused questions that capture what matters most—your interests, goals, location, and availability",
      category: "Discovery"
    },
    {
      icon: Target,
      title: "Smart Opportunity Matching",
      description: "Rule-based matching that delivers 3-5 curated opportunities that genuinely fit your profile",
      category: "Matching"
    },
    {
      icon: Search,
      title: "Explore & Browse",
      description: "Review additional opportunities beyond your matches and discover new possibilities at your own pace",
      category: "Exploration"
    },
    {
      icon: Bookmark,
      title: "Save & Track",
      description: "Bookmark interesting opportunities and manage your application progress in one place",
      category: "Management"
    },
    {
      icon: Users,
      title: "School Integration",
      description: "Shared platform where schools can support students with basic administrative visibility",
      category: "Collaboration"
    },
    {
      icon: Shield,
      title: "Trustworthy Results",
      description: "Curated opportunities from verified sources, ensuring quality and reliability",
      category: "Trust"
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Speed to Value",
      description: "Get relevant results in minutes, not hours of searching"
    },
    {
      icon: Lightbulb,
      title: "Clarity Over Confusion",
      description: "Cut through information overload with focused, relevant matches"
    },
    {
      icon: CheckCircle,
      title: "Confidence in Choices",
      description: "Make informed decisions with curated, quality opportunities"
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access scholarships, programs, and pathways worldwide"
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Structured Guidance Meets
            <span className="text-primary"> Smart Matching</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Oriento combines structured guidance with intelligent opportunity matching to make discovery 
            simple and trustworthy. No more endless searching—just clear, relevant results.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Oriento Makes Discovery Simple</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed to reduce overwhelm and increase clarity in your opportunity search
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="relative group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {feature.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </section>

      {/* The Oriento Difference */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Oriento Difference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Why structured guidance works better than endless searching
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Quality Over Quantity</h3>
                <p className="text-muted-foreground">
                  Instead of overwhelming you with hundreds of options, we focus on finding the 3-5 opportunities 
                  that truly matter to your journey. Each match is carefully selected based on your specific profile.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{benefit.title}</p>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8">
              <div className="text-center space-y-4">
                <Target className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-bold">Focused Matching</h3>
                <p className="text-muted-foreground">
                  Our rule-based system considers your age, location, interests, and availability 
                  to deliver opportunities that actually fit your life and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience Flow */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Journey with Oriento</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From first visit to application—a clear, supportive path forward
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">1. Guided Questions</CardTitle>
              <CardDescription>
                Answer focused questions about your interests and goals
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">2. Smart Matching</CardTitle>
              <CardDescription>
                Receive 3-5 curated opportunities that fit your profile
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">3. Explore More</CardTitle>
              <CardDescription>
                Browse additional opportunities at your own pace
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">4. Take Action</CardTitle>
              <CardDescription>
                Save favorites and apply to opportunities that excite you
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* For Schools Section */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Supporting Schools & Students Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A shared platform that benefits both individual students and educational institutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Individual Student Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Personal Matching</p>
                    <p className="text-sm text-muted-foreground">Get opportunities matched to your unique profile and interests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Self-Paced Discovery</p>
                    <p className="text-sm text-muted-foreground">Explore and save opportunities on your own timeline</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Progress Tracking</p>
                    <p className="text-sm text-muted-foreground">Keep track of applications and deadlines in one place</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  School Administrative Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Basic Visibility</p>
                    <p className="text-sm text-muted-foreground">Overview of student engagement and platform usage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">User Management</p>
                    <p className="text-sm text-muted-foreground">Efficiently manage student and staff accounts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Unified Platform</p>
                    <p className="text-sm text-muted-foreground">Support students through a single, integrated system</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Guided Discovery?</h2>
          <p className="text-muted-foreground mb-8">
            Stop searching endlessly. Start finding opportunities that truly fit your goals and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/signup">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/site/home">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}