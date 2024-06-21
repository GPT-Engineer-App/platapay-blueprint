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
          <Link to="/cashier-pos" className="text-white">Cashier POS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;