import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, User } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Navbar = ({ pageTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-purple-600 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="ml-4">
            <div className="text-white text-2xl">PlataPay</div>
            <div className="text-white text-sm">{pageTitle}</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Bell className="text-white h-6 w-6 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Sample Notification: Your transaction was successful.</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <User className="text-white h-6 w-6 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full mb-4" />
                <p>Super Admin: Boss Marc</p>
                <Button variant="outline" className="mt-4">Log In/Out</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <nav className={`md:flex md:items-center md:justify-between ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="md:flex md:space-x-4" onClick={closeMenu}>
          <li><Link to="/" className="text-white block py-2 px-4">Home</Link></li>
          <li><Link to="/user-management" className="text-white block py-2 px-4">User Management</Link></li>
          <li><Link to="/product-management" className="text-white block py-2 px-4">Product Management</Link></li>
          <li><Link to="/integration-management" className="text-white block py-2 px-4">Integration Management</Link></li>
          <li><Link to="/system-monitoring" className="text-white block py-2 px-4">System Monitoring</Link></li>
          <li><Link to="/reporting" className="text-white block py-2 px-4">Reporting</Link></li>
          <li><Link to="/manager-dashboard" className="text-white block py-2 px-4">Manager Dashboard</Link></li>
          <li><Link to="/qr-code-payments" className="text-white block py-2 px-4">QR Code Payments</Link></li>
          <li><Link to="/cashier-pos" className="text-white block py-2 px-4">Cashier POS</Link></li>
          <li><Link to="/user-account-management" className="text-white block py-2 px-4">User Account Management</Link></li>
          <li><Link to="/rider-application" className="text-white block py-2 px-4">Rider Application</Link></li>
          <li><Link to="/e-wallet-management" className="text-white block py-2 px-4">E-Wallet Management</Link></li>
          <li><Link to="/ordering" className="text-white block py-2 px-4">Ordering</Link></li>
          <li><Link to="/fund-transfers" className="text-white block py-2 px-4">Fund Transfers</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;