import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerDemo } from '@/components/ui/date-picker';
import { toast } from 'sonner';

const ReportGeneration = () => {
  const [reportType, setReportType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filters, setFilters] = useState('');

  const handleGenerateReport = () => {
    if (!reportType || !startDate || !endDate) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Report generated successfully');
    // Add logic to generate report
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Generate Report</h1>
      <div className="mb-4">
        <Select onValueChange={setReportType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Report Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales">Sales Report</SelectItem>
            <SelectItem value="inventory">Inventory Report</SelectItem>
            <SelectItem value="performance">Performance Report</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-4">
        <DatePickerDemo selected={startDate} onSelect={setStartDate} placeholder="Select Start Date" />
      </div>
      <div className="mb-4">
        <DatePickerDemo selected={endDate} onSelect={setEndDate} placeholder="Select End Date" />
      </div>
      <div className="mb-4">
        <Input
          placeholder="Additional Filters"
          value={filters}
          onChange={(e) => setFilters(e.target.value)}
          className="mr-2"
        />
      </div>
      <Button onClick={handleGenerateReport}>Generate Report</Button>
    </div>
  );
};

export default ReportGeneration;