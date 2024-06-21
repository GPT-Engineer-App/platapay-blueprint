import React from 'react';
import { Home, User, Settings, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-600 p-4 fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-around">
        <Link to="/" className="text-white flex flex-col items-center">
          <Home className="h-6 w-6" />
          <span>Home</span>
        </Link>
        <Link to="/user-management" className="text-white flex flex-col items-center">
          <User className="h-6 w-6" />
          <span>Users</span>
        </Link>
        <Link to="/settings" className="text-white flex flex-col items-center">
          <Settings className="h-6 w-6" />
          <span>Settings</span>
        </Link>
        <Link to="/about" className="text-white flex flex-col items-center">
          <Info className="h-6 w-6" />
          <span>About</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;