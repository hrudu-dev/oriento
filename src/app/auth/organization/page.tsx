import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function OrganizationPage() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">Setup Your Organization</CardTitle>
        <CardDescription>
          Create your organization to start collaborating with your team
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Organization Name</label>
          <div className="relative">
            <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter organization name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Organization URL</label>
          <div className="relative">
            <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your-org-name"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            This will be your organization's unique identifier
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Team Size</label>
          <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Select team size</option>
            <option value="1-5">1-5 members</option>
            <option value="6-20">6-20 members</option>
            <option value="21-50">21-50 members</option>
            <option value="51-100">51-100 members</option>
            <option value="100+">100+ members</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Industry</label>
          <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Select industry</option>
            <option value="technology">Technology</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="retail">Retail</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="bg-muted/50 p-3 rounded-md">
          <div className="flex items-start space-x-2">
            <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium">Team Collaboration</p>
              <p className="text-muted-foreground text-xs">
                Invite team members and manage permissions after setup
              </p>
            </div>
          </div>
        </div>

        <Button className="w-full">
          Create Organization
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          Skip for now?{' '}
          <Link href="/dashboard" className="text-primary hover:underline">
            Continue to dashboard
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}