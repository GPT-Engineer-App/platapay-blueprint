import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, FileText, Settings } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <button onClick={toggleSidebar} className="p-4 w-full text-left">
        {isOpen ? '<<' : '>>'}
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/admin" className="flex items-center p-4 hover:bg-gray-700">
              <Home className="h-5 w-5 mr-2" />
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="flex items-center p-4 hover:bg-gray-700">
              <Users className="h-5 w-5 mr-2" />
              {isOpen && <span>Users</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/reports" className="flex items-center p-4 hover:bg-gray-700">
              <FileText className="h-5 w-5 mr-2" />
              {isOpen && <span>Reports</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/settings" className="flex items-center p-4 hover:bg-gray-700">
              <Settings className="h-5 w-5 mr-2" />
              {isOpen && <span>Settings</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;