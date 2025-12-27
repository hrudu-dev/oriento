import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  CheckCircle, 
  Clock, 
  Bookmark, 
  ArrowRight, 
  Plus,
  Target,
  Calendar,
  Star
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your progress and stay organized
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Item
        </Button>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Tasks completed today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Active tasks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saved Items</CardTitle>
            <Bookmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Bookmarked for later
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Tracking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Progress Overview
            </CardTitle>
            <CardDescription>
              Track your current progress and goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No progress data available</p>
              <p className="text-sm">Start tracking your activities</p>
            </div>
          </CardContent>
        </Card>

        {/* Saved Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bookmark className="h-5 w-5 mr-2" />
              Saved Items
            </CardTitle>
            <CardDescription>
              Your bookmarked content and resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Bookmark className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No saved items</p>
              <p className="text-sm">Save important items for quick access</p>
            </div>
          </CardContent>
        </Card>

        {/* Next Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowRight className="h-5 w-5 mr-2" />
              Next Actions
            </CardTitle>
            <CardDescription>
              Upcoming tasks and priorities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No upcoming actions</p>
              <p className="text-sm">Add tasks to stay organized</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Plus className="h-4 w-4 mr-2" />
              Add New Task
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Bookmark className="h-4 w-4 mr-2" />
              Save Item
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Target className="h-4 w-4 mr-2" />
              Set Goal
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Star className="h-4 w-4 mr-2" />
              Mark Important
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}