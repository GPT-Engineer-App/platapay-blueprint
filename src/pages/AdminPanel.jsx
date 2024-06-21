import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Approvals from './Approvals';
import PartnerIntegrationManagement from './PartnerIntegrationManagement';
import AdvancedFilters from './AdvancedFilters';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('approvals');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
          <TabsTrigger value="partner-integration-management">Partner Integration Management</TabsTrigger>
          <TabsTrigger value="advanced-filters">Advanced Filters</TabsTrigger>
        </TabsList>
        <TabsContent value="approvals">
          <Approvals />
        </TabsContent>
        <TabsContent value="partner-integration-management">
          <PartnerIntegrationManagement />
        </TabsContent>
        <TabsContent value="advanced-filters">
          <AdvancedFilters />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;