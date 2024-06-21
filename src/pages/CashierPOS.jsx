import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import TransactionProcessing from './TransactionProcessing';
import CashManagement from './CashManagement';
import PartnerIntegration from './PartnerIntegration';

const CashierPOS = () => {
  const [activeTab, setActiveTab] = useState('transaction-processing');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cashier POS System</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="transaction-processing">Transaction Processing</TabsTrigger>
          <TabsTrigger value="cash-management">Cash Management</TabsTrigger>
          <TabsTrigger value="partner-integration">Partner Integration</TabsTrigger>
        </TabsList>
        <TabsContent value="transaction-processing">
          <TransactionProcessing />
        </TabsContent>
        <TabsContent value="cash-management">
          <CashManagement />
        </TabsContent>
        <TabsContent value="partner-integration">
          <PartnerIntegration />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CashierPOS;