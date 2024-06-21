import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const IntegrationManagement = () => {
  const [integrations, setIntegrations] = useState([]);
  const [newIntegration, setNewIntegration] = useState({ name: '', status: '', settings: '' });

  const handleAddIntegration = () => {
    setIntegrations([...integrations, newIntegration]);
    setNewIntegration({ name: '', status: '', settings: '' });
    toast.success('Integration added successfully');
  };

  const handleDeleteIntegration = (index) => {
    const updatedIntegrations = integrations.filter((_, i) => i !== index);
    setIntegrations(updatedIntegrations);
    toast.success('Integration deleted successfully');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Integration Management</h1>
      <div className="mb-4">
        <Input
          placeholder="Integration Name"
          value={newIntegration.name}
          onChange={(e) => setNewIntegration({ ...newIntegration, name: e.target.value })}
          className="mr-2"
        />
        <Input
          placeholder="Status"
          value={newIntegration.status}
          onChange={(e) => setNewIntegration({ ...newIntegration, status: e.target.value })}
          className="mr-2"
        />
        <Input
          placeholder="Settings"
          value={newIntegration.settings}
          onChange={(e) => setNewIntegration({ ...newIntegration, settings: e.target.value })}
          className="mr-2"
        />
        <Button onClick={handleAddIntegration}>Add Integration</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Integration Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Settings</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {integrations.map((integration, index) => (
            <TableRow key={index}>
              <TableCell>{integration.name}</TableCell>
              <TableCell>{integration.status}</TableCell>
              <TableCell>{integration.settings}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteIntegration(index)} variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-4">Financial Partners and Banks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <img src="/images/ezpay.png" alt="Ezpay" className="h-12 w-12" />
              <CardTitle>Ezpay</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integration with Ezpay</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <img src="/images/bayad-center.png" alt="Bayad Center" className="h-12 w-12" />
              <CardTitle>Bayad Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integration with Bayad Center</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <img src="/images/gcash.png" alt="GCash" className="h-12 w-12" />
              <CardTitle>GCash</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integration with GCash</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <img src="/images/netbank.png" alt="Netbank" className="h-12 w-12" />
              <CardTitle>Netbank</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integration with Netbank</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <img src="/images/ub.png" alt="UB" className="h-12 w-12" />
              <CardTitle>UB</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integration with UB</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IntegrationManagement;