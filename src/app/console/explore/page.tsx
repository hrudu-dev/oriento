import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Users,
  Bookmark,
  ExternalLink,
  Grid,
  List
} from 'lucide-react'

export default function ExplorePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Explore Opportunities</h1>
          <p className="text-muted-foreground">
            Browse all available opportunities and find your perfect match
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Search opportunities..."
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">All Categories</option>
                <option value="volunteer">Volunteer</option>
                <option value="internship">Internship</option>
                <option value="job">Job</option>
                <option value="education">Education</option>
              </select>
              <select className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="local">Local</option>
              </select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing 0 opportunities
        </p>
        <select className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="relevance">Sort by Relevance</option>
          <option value="date">Sort by Date</option>
          <option value="location">Sort by Location</option>
        </select>
      </div>

      {/* Opportunities List */}
      <Card>
        <CardHeader>
          <CardTitle>Available Opportunities</CardTitle>
          <CardDescription>
            Discover opportunities that match your interests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No Opportunities Found</h3>
            <p className="mb-4">Try adjusting your search criteria or check back later</p>
            <Button variant="outline">
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Filters</CardTitle>
          <CardDescription>
            Popular search categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="justify-start">
              <Users className="h-4 w-4 mr-2" />
              Volunteer Work
            </Button>
            <Button variant="outline" className="justify-start">
              <Bookmark className="h-4 w-4 mr-2" />
              Internships
            </Button>
            <Button variant="outline" className="justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Part-time
            </Button>
            <Button variant="outline" className="justify-start">
              <MapPin className="h-4 w-4 mr-2" />
              Remote
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Browse Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Browse Tips</CardTitle>
          <CardDescription>
            Make the most of your opportunity search
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Use specific keywords</p>
              <p className="text-xs text-muted-foreground">Search for specific skills, roles, or organizations</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Save interesting opportunities</p>
              <p className="text-xs text-muted-foreground">Bookmark opportunities to review later</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Set up alerts</p>
              <p className="text-xs text-muted-foreground">Get notified when new opportunities match your criteria</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}