import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const Approvals = () => {
  const approvals = [
    { id: 1, type: 'Franchise', name: 'John Doe', status: 'Pending' },
    { id: 2, type: 'Merchant', name: 'Jane Smith', status: 'Pending' },
    { id: 3, type: 'Franchise', name: 'Bob Johnson', status: 'Pending' },
  ];

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {approvals.map((approval) => (
            <TableRow key={approval.id}>
              <TableCell>{approval.id}</TableCell>
              <TableCell>{approval.type}</TableCell>
              <TableCell>{approval.name}</TableCell>
              <TableCell>{approval.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Approve</Button>
                <Button variant="outline" size="sm">Reject</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Approvals;