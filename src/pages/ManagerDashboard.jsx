import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import FundManagement from './FundManagement';
import Reporting from './Reporting';
import BankTransferSetup from './BankTransferSetup';

const ManagerDashboard = () => {
  const [activeTab, setActiveTab] = useState('fund-management');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="fund-management">Fund Management</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
          <TabsTrigger value="bank-transfer-setup">Bank Transfer Setup</TabsTrigger>
        </TabsList>
        <TabsContent value="fund-management">
          <FundManagement />
        </TabsContent>
        <TabsContent value="reporting">
          <Reporting />
        </TabsContent>
        <TabsContent value="bank-transfer-setup">
          <BankTransferSetup />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManagerDashboard;