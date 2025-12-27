import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Bookmark, 
  Search, 
  Filter, 
  Trash2,
  ExternalLink,
  Calendar,
  MapPin,
  Heart
} from 'lucide-react'

export default function SavedPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Saved Opportunities</h1>
          <p className="text-muted-foreground">
            Your bookmarked opportunities and favorites
          </p>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter Saved
        </Button>
      </div>

      {/* Search Saved Items */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search your saved opportunities..."
            />
          </div>
        </CardContent>
      </Card>

      {/* Saved Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
            <Bookmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Bookmarked opportunities
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Favorites</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Marked as favorites
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applied</CardTitle>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Applications submitted
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Saved Opportunities List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bookmark className="h-5 w-5 mr-2" />
            Your Saved Opportunities
          </CardTitle>
          <CardDescription>
            Manage your bookmarked opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Bookmark className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No Saved Opportunities</h3>
            <p className="mb-4">Start exploring and save opportunities that interest you</p>
            <Button>
              Explore Opportunities
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Manage your saved items
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start" disabled>
            <Heart className="h-4 w-4 mr-2" />
            View Favorites Only
          </Button>
          <Button variant="outline" className="w-full justify-start" disabled>
            <Calendar className="h-4 w-4 mr-2" />
            Sort by Date Saved
          </Button>
          <Button variant="outline" className="w-full justify-start" disabled>
            <MapPin className="h-4 w-4 mr-2" />
            Group by Location
          </Button>
          <Button variant="outline" className="w-full justify-start" disabled>
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All Saved
          </Button>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Tips for Managing Saved Opportunities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Save opportunities you're interested in</p>
              <p className="text-xs text-muted-foreground">Use the bookmark button to save opportunities for later review</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Mark your favorites</p>
              <p className="text-xs text-muted-foreground">Use the heart icon to mark your most preferred opportunities</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Keep your list organized</p>
              <p className="text-xs text-muted-foreground">Regularly review and remove opportunities that are no longer relevant</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}