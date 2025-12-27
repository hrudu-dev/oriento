import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Compass, Target, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Find Your Direction in
            <span className="text-primary"> Global Opportunities</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Oriento helps young people discover the right opportunities without overwhelm. 
            Through guided questions, we match you with scholarships, programs, and career pathways 
            that genuinely fit your age, interests, location, and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/signup">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/site/features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Stop Endless Searching, Start Finding</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Instead of drowning in information overload, get clarity, confidence, and a clear next step
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Guided Discovery</CardTitle>
              <CardDescription>
                Answer focused questions about your interests, goals, and availability
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Smart Matching</CardTitle>
              <CardDescription>
                Get 3-5 curated opportunities that genuinely fit your profile
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Clear Next Steps</CardTitle>
              <CardDescription>
                Save, explore, and take action on opportunities at your own pace
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Oriento Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple, structured approach to finding opportunities that matter to you
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tell Us About Yourself</h3>
                  <p className="text-muted-foreground">Complete a short, focused questionnaire about your interests, goals, location, and availability.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Get Matched</h3>
                  <p className="text-muted-foreground">Our smart matching system finds 3-5 opportunities that genuinely fit your profile and preferences.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Explore & Apply</h3>
                  <p className="text-muted-foreground">Review your matches, save favorites, and take action on opportunities that excite you most.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 text-center">
              <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quality Over Quantity</h3>
              <p className="text-muted-foreground">
                Instead of overwhelming you with hundreds of options, we focus on finding the few opportunities that truly matter to your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Schools */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Supporting Schools & Students</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A shared platform where schools can support their students' opportunity discovery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                For Students
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Personal Guidance</p>
                  <p className="text-sm text-muted-foreground">Individual matching based on your unique profile</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Save & Track</p>
                  <p className="text-sm text-muted-foreground">Manage your opportunities and application progress</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Explore Freely</p>
                  <p className="text-sm text-muted-foreground">Browse additional opportunities beyond your matches</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                For Schools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Administrative Visibility</p>
                  <p className="text-sm text-muted-foreground">Basic oversight of student engagement and progress</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">User Management</p>
                  <p className="text-sm text-muted-foreground">Manage student and staff accounts efficiently</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Shared Platform</p>
                  <p className="text-sm text-muted-foreground">Support students through a unified system</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Direction?</h2>
          <p className="text-muted-foreground mb-8">
            Join young people who are discovering opportunities that truly fit their goals and aspirations
          </p>
          <Button size="lg" asChild>
            <Link href="/auth/signup">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}