import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cookie, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CookiesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <Cookie className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">Cookie Policy</h1>
        <p className="text-muted-foreground mt-2">
          Last updated: December 27, 2024
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>1. What Are Cookies</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. How We Use Cookies</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>We use cookies for several purposes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To enable certain functions of our service</li>
            <li>To provide analytics and track usage</li>
            <li>To store your preferences and settings</li>
            <li>To improve security and prevent fraud</li>
            <li>To remember your login status</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3. Types of Cookies We Use</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <h4 className="font-semibold">Essential Cookies</h4>
          <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
          
          <h4 className="font-semibold mt-4">Analytics Cookies</h4>
          <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
          
          <h4 className="font-semibold mt-4">Functional Cookies</h4>
          <p>These cookies enable the website to provide enhanced functionality and personalization.</p>
          
          <h4 className="font-semibold mt-4">Targeting Cookies</h4>
          <p>These cookies may be set through our site by our advertising partners to build a profile of your interests.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>4. Third-Party Cookies</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>We may use third-party services that place cookies on your device:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google Analytics - for website analytics</li>
            <li>Authentication providers - for secure login</li>
            <li>Content delivery networks - for performance</li>
            <li>Customer support tools - for help and support</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>5. Managing Cookies</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>You can control and manage cookies in several ways:</p>
          
          <h4 className="font-semibold mt-4">Browser Settings</h4>
          <p>Most browsers allow you to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>View what cookies are stored on your device</li>
            <li>Delete cookies individually or all at once</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
            <li>Delete cookies when you close your browser</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Cookie Preferences</h4>
          <p>You can manage your cookie preferences through our cookie consent banner when you first visit our site.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>6. Cookie Retention</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>Cookies are stored for different periods:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent cookies:</strong> Remain until they expire or you delete them</li>
            <li><strong>Essential cookies:</strong> Typically expire after 1 year</li>
            <li><strong>Analytics cookies:</strong> Typically expire after 2 years</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>7. Updates to This Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>8. Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>
            If you have any questions about our use of cookies, please contact us at:
          </p>
          <p>
            Email: privacy@oriento.com<br />
            Address: San Francisco, CA
          </p>
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="text-center pt-8">
        <Button variant="outline" asChild>
          <Link href="/auth/login">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Link>
        </Button>
      </div>
    </div>
  )
}