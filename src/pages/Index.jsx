import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Package, Link2, Monitor, FileText, LayoutDashboard, QrCode, ShoppingCart, Wallet, Truck, CreditCard, List, DollarSign } from 'lucide-react';

const Index = () => {
  const navItems = [
    { path: '/user-management', icon: <User className="h-6 w-6" />, label: 'User Management' },
    { path: '/product-management', icon: <Package className="h-6 w-6" />, label: 'Product Management' },
    { path: '/integration-management', icon: <Link2 className="h-6 w-6" />, label: 'Integration Management' },
    { path: '/system-monitoring', icon: <Monitor className="h-6 w-6" />, label: 'System Monitoring' },
    { path: '/reporting', icon: <FileText className="h-6 w-6" />, label: 'Reporting' },
    { path: '/manager-dashboard', icon: <LayoutDashboard className="h-6 w-6" />, label: 'Manager Dashboard' },
    { path: '/qr-code-payments', icon: <QrCode className="h-6 w-6" />, label: 'QR Code Payments' },
    { path: '/cashier-pos', icon: <ShoppingCart className="h-6 w-6" />, label: 'Cashier POS' },
    { path: '/user-account-management', icon: <Wallet className="h-6 w-6" />, label: 'User Account Management' },
    { path: '/rider-application', icon: <Truck className="h-6 w-6" />, label: 'Rider Application' },
    { path: '/e-wallet-management', icon: <CreditCard className="h-6 w-6" />, label: 'E-Wallet Management' },
    { path: '/ordering', icon: <List className="h-6 w-6" />, label: 'Ordering' },
    { path: '/fund-transfers', icon: <DollarSign className="h-6 w-6" />, label: 'Fund Transfers' },
  ];

  return (
    <div className="min-h-screen bg-background pt-16 pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {navItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 h-48 w-48">
              <CardHeader>
                {item.icon}
                <CardTitle>{item.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Go to {item.label}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;