import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Compass, 
  ArrowRight, 
  CheckCircle, 
  Circle,
  Target,
  MapPin,
  Users,
  Briefcase
} from 'lucide-react'

export default function GuidePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <Compass className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">Opportunity Matching Guide</h1>
        <p className="text-muted-foreground mt-2">
          Answer a few questions to find opportunities that match your interests
        </p>
      </div>

      {/* Progress Indicator */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">0 of 5 steps</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </CardContent>
      </Card>

      {/* Guide Steps */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Circle className="h-5 w-5 mr-2 text-muted-foreground" />
              Step 1: Your Interests
            </CardTitle>
            <CardDescription>
              Tell us what you're passionate about
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6 text-muted-foreground">
              <Target className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Click "Start Guide" to begin</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Circle className="h-5 w-5 mr-2 text-muted-foreground" />
              Step 2: Your Skills
            </CardTitle>
            <CardDescription>
              What skills do you want to develop or use?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6 text-muted-foreground">
              <Briefcase className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Complete Step 1 to unlock</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Circle className="h-5 w-5 mr-2 text-muted-foreground" />
              Step 3: Location Preferences
            </CardTitle>
            <CardDescription>
              Where would you like to participate?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6 text-muted-foreground">
              <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Complete previous steps to unlock</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Circle className="h-5 w-5 mr-2 text-muted-foreground" />
              Step 4: Time Commitment
            </CardTitle>
            <CardDescription>
              How much time can you dedicate?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6 text-muted-foreground">
              <Users className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Complete previous steps to unlock</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Circle className="h-5 w-5 mr-2 text-muted-foreground" />
              Step 5: Review & Match
            </CardTitle>
            <CardDescription>
              Review your preferences and find matches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6 text-muted-foreground">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Complete all steps to see matches</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1">
          <Compass className="h-4 w-4 mr-2" />
          Start Guide
        </Button>
        <Button variant="outline" className="flex-1">
          Skip Guide
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Help Text */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>This guided process will help you discover opportunities that align with your interests and goals.</p>
            <p className="mt-2">You can save your progress and return anytime to complete the guide.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}