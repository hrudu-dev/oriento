import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  MapPin, 
  Calendar, 
  Clock,
  Users,
  ExternalLink,
  Mail,
  Phone,
  Building2
} from 'lucide-react'
import Link from 'next/link'

export default function OpportunityDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/console/explore">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Explore
          </Link>
        </Button>
      </div>

      {/* Opportunity Header */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <CardTitle className="text-2xl">Opportunity Details</CardTitle>
              <CardDescription>
                Opportunity ID: {params.id}
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Building2 className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">Opportunity Not Found</h3>
            <p className="mb-4">The opportunity you're looking for doesn't exist or has been removed</p>
            <Button asChild>
              <Link href="/console/explore">
                Browse Opportunities
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Opportunity Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>No description available</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>No requirements listed</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>No learning outcomes specified</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Location not specified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Date not specified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Duration not specified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Capacity not specified</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-muted-foreground">
                <Building2 className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Organization not available</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" disabled>
                <Mail className="h-4 w-4 mr-2" />
                Email Contact
              </Button>
              <Button variant="outline" className="w-full justify-start" disabled>
                <Phone className="h-4 w-4 mr-2" />
                Phone Contact
              </Button>
              <Button variant="outline" className="w-full justify-start" disabled>
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Apply</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" disabled>
                Application Not Available
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Contact the organization directly for application details
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}