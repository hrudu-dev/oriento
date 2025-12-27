import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Mail, 
  MessageSquare, 
  Users, 
  Building2,
  Send,
  Clock,
  MapPin,
  Phone
} from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're a student exploring opportunities, 
            a school interested in supporting your learners, or a partner with questions 
            or ideas, the Oriento team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Students</CardTitle>
              <CardDescription>
                Questions about using Oriento or finding opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get help with your account, guidance on using our matching system, 
                or support with opportunity applications.
              </p>
              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Student Support
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Schools & Institutions</CardTitle>
              <CardDescription>
                Partnership inquiries and institutional support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about institutional accounts, student management features, 
                and how Oriento can support your guidance programs.
              </p>
              <Button className="w-full">
                <Building2 className="mr-2 h-4 w-4" />
                Institutional Inquiry
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>General Inquiries</CardTitle>
              <CardDescription>
                Press, partnerships, and other questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Media inquiries, partnership opportunities, feedback, 
                or any other questions about Oriento.
              </p>
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                General Contact
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">I am a...</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent/Guardian</option>
                  <option value="educator">Educator/Counselor</option>
                  <option value="institution">School/Institution</option>
                  <option value="partner">Potential Partner</option>
                  <option value="media">Media/Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  placeholder="Brief subject line"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us and get the support you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-background rounded-full w-fit shadow-sm">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours during business days
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-background rounded-full w-fit shadow-sm">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground">
                hello@oriento.com
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-background rounded-full w-fit shadow-sm">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-sm text-muted-foreground">
                Supporting students and schools worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick answers to frequently asked questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How does Oriento work?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Oriento guides you through a short question flow to understand your goals, 
                then matches you with 3-5 relevant opportunities based on your preferences, 
                location, and availability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is Oriento free to use?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Yes, Oriento is free for individual students. We offer institutional 
                accounts for schools that want additional features and student management tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What types of opportunities do you include?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We curate scholarships, internships, study abroad programs, competitions, 
                and career opportunities from verified sources worldwide.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How can schools use Oriento?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Schools can create institutional accounts to support their students' 
                opportunity discovery with administrative oversight and guidance tools.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All FAQs
          </Button>
        </div>
      </section>
    </div>
  )
}