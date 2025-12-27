import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Building2, 
  School, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Settings,
  Users,
  Shield,
  Palette,
  Plus,
  Edit
} from 'lucide-react'

export default function AdminOrganizationPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Organization Settings</h1>
          <p className="text-muted-foreground">
            Manage school and organizational configurations
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add School
        </Button>
      </div>

      {/* Organization Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building2 className="h-5 w-5 mr-2" />
            Organization Information
          </CardTitle>
          <CardDescription>
            Basic information about your organization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Organization Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter organization name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Organization Type</label>
              <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select type</option>
                <option value="school-district">School District</option>
                <option value="university">University</option>
                <option value="college">College</option>
                <option value="private-school">Private School</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              placeholder="Brief description of your organization"
            />
          </div>

          <Button>Save Organization Info</Button>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Contact Information
          </CardTitle>
          <CardDescription>
            Organization contact details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Primary Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input 
                  type="email" 
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="admin@organization.edu"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input 
                  type="tel" 
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Organization address"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Website</label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input 
                type="url" 
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://www.organization.edu"
              />
            </div>
          </div>

          <Button>Save Contact Info</Button>
        </CardContent>
      </Card>

      {/* Schools Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <School className="h-5 w-5 mr-2" />
            Schools
          </CardTitle>
          <CardDescription>
            Manage schools within your organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <School className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No Schools Added</h3>
            <p className="mb-4">Start by adding schools to your organization</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add First School
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* System Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              System Settings
            </CardTitle>
            <CardDescription>
              Configure system-wide settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Multi-School Mode</p>
                <p className="text-xs text-muted-foreground">Enable multiple school management</p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Public Registration</p>
                <p className="text-xs text-muted-foreground">Allow public user registration</p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Send system email notifications</p>
              </div>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <Button className="w-full">Save System Settings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Security & Privacy
            </CardTitle>
            <CardDescription>
              Security and privacy configurations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Require 2FA for admin accounts</p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Data Encryption</p>
                <p className="text-xs text-muted-foreground">Encrypt sensitive data at rest</p>
              </div>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Audit Logging</p>
                <p className="text-xs text-muted-foreground">Log all administrative actions</p>
              </div>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <Button className="w-full">Save Security Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}