import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const SystemMonitoring = () => {
  const [metrics, setMetrics] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState({ dateRange: '', severity: '', type: '' });

  useEffect(() => {
    // Fetch system metrics, alerts, and logs from the backend or mock data
    const fetchMetrics = async () => {
      // Replace with actual API call
      const metricsData = await fetch('/api/system-metrics').then(res => res.json());
      setMetrics(metricsData);
    };

    const fetchAlerts = async () => {
      // Replace with actual API call
      const alertsData = await fetch('/api/system-alerts').then(res => res.json());
      setAlerts(alertsData);
    };

    const fetchLogs = async () => {
      // Replace with actual API call
      const logsData = await fetch('/api/system-logs').then(res => res.json());
      setLogs(logsData);
    };

    fetchMetrics();
    fetchAlerts();
    fetchLogs();
  }, []);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredLogs = logs.filter(log => {
    return (
      (!filter.dateRange || log.date.includes(filter.dateRange)) &&
      (!filter.severity || log.severity === filter.severity) &&
      (!filter.type || log.type === filter.type)
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">System Monitoring</h1>
      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle>{metric.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Line data={metric.data} />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="alerts">
          {alerts.map((alert, index) => (
            <Alert key={index} variant="destructive" className="mb-4">
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
            </Alert>
          ))}
        </TabsContent>
        <TabsContent value="logs">
          <div className="mb-4">
            <Input
              placeholder="Date Range"
              name="dateRange"
              value={filter.dateRange}
              onChange={handleFilterChange}
              className="mr-2"
            />
            <Input
              placeholder="Severity"
              name="severity"
              value={filter.severity}
              onChange={handleFilterChange}
              className="mr-2"
            />
            <Input
              placeholder="Type"
              name="type"
              value={filter.type}
              onChange={handleFilterChange}
              className="mr-2"
            />
            <Button onClick={() => setFilter({ dateRange: '', severity: '', type: '' })}>Clear Filters</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell>{log.date}</TableCell>
                  <TableCell>{log.severity}</TableCell>
                  <TableCell>{log.type}</TableCell>
                  <TableCell>{log.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SystemMonitoring;