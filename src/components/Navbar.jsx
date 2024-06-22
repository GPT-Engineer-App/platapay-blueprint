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
    <header className="bg-primary p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <button onClick={toggleMenu} className="text-primary-foreground focus:outline-none md:hidden">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <div className="flex items-center justify-center flex-grow">
          <img src="https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px-1.png?w=500" alt="PlataPay Logo" className="h-8 w-8" />
          <div className="text-primary-foreground text-2xl">PlataPay</div>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Bell className="text-primary-foreground h-6 w-6 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Sample Notification: Your transaction was successful.</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <User className="text-primary-foreground h-6 w-6 cursor-pointer" />
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
      <nav className={`md:flex md:items-center md:justify-center ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="space-y-2 md:space-y-0 md:flex md:space-x-4" onClick={closeMenu}>
          <li><Link to="/" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/user-management" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>User Management</Link></li>
          <li><Link to="/product-management" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>Product Management</Link></li>
          <li><Link to="/integration-management" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>Integration Management</Link></li>
          <li><Link to="/system-monitoring" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>System Monitoring</Link></li>
          <li><Link to="/reporting" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>Reporting</Link></li>
          <li><Link to="/manager-dashboard" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>Manager Dashboard</Link></li>
          <li><Link to="/qr-code-payments" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>QR Code Payments</Link></li>
          <li><Link to="/cashier-pos" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>Cashier POS</Link></li>
          <li><Link to="/user-account-management" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>User Account Management</Link></li>
          <li><Link to="/rider-application" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>Rider Application</Link></li>
          <li><Link to="/e-wallet-management" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>E-Wallet Management</Link></li>
          <li><Link to="/ordering" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>Ordering</Link></li>
          <li><Link to="/fund-transfers" className="text-primary-foreground block py-2 px-4" onClick={closeMenu}>Fund Transfers</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;