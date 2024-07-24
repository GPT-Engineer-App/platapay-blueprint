import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from 'next-themes';
import { Sun, Moon, Users, Settings, FileText } from 'lucide-react';
import Approvals from './Approvals';
import PartnerIntegrationManagement from './PartnerIntegrationManagement';
import AdvancedFilters from './AdvancedFilters';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('approvals');
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="p-6 md:p-8 lg:p-10 min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-4">
              <Users className="h-10 w-10 text-primary" />
              <div>
                <p className="text-sm font-medium">Total Users</p>
                <p className="text-2xl font-bold">10,234</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Settings className="h-10 w-10 text-primary" />
              <div>
                <p className="text-sm font-medium">Active Integrations</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FileText className="h-10 w-10 text-primary" />
              <div>
                <p className="text-sm font-medium">Pending Approvals</p>
                <p className="text-2xl font-bold">15</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="partner-integration-management">Partner Integration</TabsTrigger>
            <TabsTrigger value="advanced-filters">Advanced Filters</TabsTrigger>
          </TabsList>
          <TabsContent value="approvals">
            <Card>
              <CardHeader>
                <CardTitle>Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                <Approvals />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="partner-integration-management">
            <Card>
              <CardHeader>
                <CardTitle>Partner Integration Management</CardTitle>
              </CardHeader>
              <CardContent>
                <PartnerIntegrationManagement />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="advanced-filters">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <AdvancedFilters />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;