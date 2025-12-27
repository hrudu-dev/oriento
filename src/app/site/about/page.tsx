import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Target, 
  Users, 
  Globe, 
  Heart,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Shield,
  Compass
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Clarity",
      description: "We believe opportunity discovery should be clear, not overwhelming. Every feature is designed to reduce confusion and increase understanding."
    },
    {
      icon: Shield,
      title: "Fairness",
      description: "Everyone deserves equal access to opportunities. We work to eliminate barriers and create transparent pathways for all young people."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "We curate opportunities from verified sources and provide honest, reliable guidance that students and schools can depend on."
    },
    {
      icon: Compass,
      title: "Guidance",
      description: "Structure and support matter. We provide the framework that helps users navigate choices with confidence and purpose."
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About Oriento
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Oriento was built to solve a simple but widespread problem: finding the right opportunities 
            is harder than it should be. Many students miss out not due to lack of talent, but due to 
            lack of clarity and guidance.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 md:p-12 text-center">
          <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oriento exists to bring structure, fairness, and transparency to opportunity discovery—helping 
            individuals and institutions navigate choices with confidence. We believe every young person 
            deserves clear guidance on their path forward.
          </p>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Problem We Solve</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Information Overload</p>
                  <p className="text-muted-foreground text-sm">Students face thousands of opportunities with no clear way to filter what's relevant</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Lack of Guidance</p>
                  <p className="text-muted-foreground text-sm">Many miss opportunities simply because they don't know where to look or how to start</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Unequal Access</p>
                  <p className="text-muted-foreground text-sm">Opportunity discovery often depends on who you know, not what you're capable of</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Decision Paralysis</p>
                  <p className="text-muted-foreground text-sm">Too many choices without clear criteria leads to delayed decisions and missed deadlines</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Structured Guidance</p>
                  <p className="text-sm text-muted-foreground">Clear questions that capture what matters most</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Smart Matching</p>
                  <p className="text-sm text-muted-foreground">3-5 curated opportunities that genuinely fit</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Equal Access</p>
                  <p className="text-sm text-muted-foreground">Same quality guidance for everyone</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Clear Direction</p>
                  <p className="text-sm text-muted-foreground">Confidence in next steps and decisions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we build and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Who We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oriento is designed for young people and the institutions that support them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Students & Young People
              </CardTitle>
              <CardDescription>
                Ages 16-25 seeking educational and career opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Whether you're in high school exploring college options, a university student 
                looking for internships, or a recent graduate seeking career opportunities, 
                Oriento helps you find paths that align with your goals and circumstances.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded-full">High School Students</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">University Students</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Recent Graduates</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Career Changers</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Schools & Institutions
              </CardTitle>
              <CardDescription>
                Educational institutions supporting student success
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                From high schools to universities, career centers to guidance counselors, 
                Oriento provides institutions with tools to better support their students' 
                opportunity discovery and application processes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded-full">High Schools</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Universities</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Career Centers</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Guidance Counselors</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            How we're building a better way to discover opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Quality Over Quantity</h3>
            <p className="text-sm text-muted-foreground">
              We focus on finding the few opportunities that truly matter, rather than overwhelming 
              users with endless options.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              <Compass className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Structured Guidance</h3>
            <p className="text-sm text-muted-foreground">
              Clear, focused questions help users articulate their goals and preferences, 
              leading to better matches.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Transparent Process</h3>
            <p className="text-sm text-muted-foreground">
              Users understand how matches are made and can trust the recommendations 
              they receive.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Oriento?</h2>
          <p className="text-muted-foreground mb-8">
            Join us in making opportunity discovery clearer, fairer, and more effective for everyone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/signup">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/site/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}