import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/user-management" className="text-white">User Management</Link>
        </li>
        <li>
          <Link to="/product-management" className="text-white">Product Management</Link>
        </li>
        <li>
          <Link to="/integration-management" className="text-white">Integration Management</Link>
        </li>
        <li>
          <Link to="/system-monitoring" className="text-white">System Monitoring</Link>
        </li>
        <li>
          <Link to="/reporting" className="text-white">Reporting</Link>
        </li>
        <li>
          <Link to="/manager-dashboard" className="text-white">Manager Dashboard</Link>
        </li>
        <li>
          <Link to="/qr-code-payments" className="text-white">QR Code Payments</Link>
        </li>
        <li>
          <Link to="/cashier-pos" className="text-white">Cashier POS</Link>
        </li>
        <li>
          <Link to="/user-account-management" className="text-white">User Account Management</Link>
        </li>
        <li>
          <Link to="/rider-application" className="text-white">Rider Application</Link>
        </li>
        <li>
          <Link to="/e-wallet-management" className="text-white">E-Wallet Management</Link>
        </li>
        <li>
          <Link to="/ordering" className="text-white">Ordering</Link>
        </li>
        <li>
          <Link to="/fund-transfers" className="text-white">Fund Transfers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;