import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, CheckCircle, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function VerifyEmailPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">Verify Your Email</CardTitle>
        <CardDescription>
          We've sent a verification link to your email address
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <div className="bg-muted/50 p-4 rounded-md">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Email sent successfully!</p>
            <p className="text-xs text-muted-foreground mt-1">
              Check your inbox and click the verification link
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground text-center">
            Didn't receive the email? Check your spam folder or
          </p>
          
          <Button variant="outline" className="w-full">
            <RefreshCw className="h-4 w-4 mr-2" />
            Resend Verification Email
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Wrong email address?{' '}
          <Link href="/auth/signup" className="text-primary hover:underline">
            Sign up again
          </Link>
        </div>

        <div className="text-center">
          <Link href="/auth/login" className="text-sm text-primary hover:underline">
            Back to login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}