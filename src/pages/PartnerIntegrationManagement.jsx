import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PartnerIntegrationManagement = () => {
  const partners = [
    { id: 1, name: 'Ezpay', status: 'Active', transactions: 1234 },
    { id: 2, name: 'Bayad Center', status: 'Active', transactions: 5678 },
    { id: 3, name: 'GCash', status: 'Inactive', transactions: 0 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {partners.map((partner) => (
        <Card key={partner.id}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {partner.name}
              <Badge variant={partner.status === 'Active' ? 'success' : 'secondary'}>
                {partner.status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Transactions: {partner.transactions}</p>
            <Button variant="outline" size="sm" className="mr-2">View Details</Button>
            <Button variant="outline" size="sm">
              {partner.status === 'Active' ? 'Deactivate' : 'Activate'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PartnerIntegrationManagement;