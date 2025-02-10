import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Users } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center">
        <img
          src="https://i.imgur.com/QTNsUY1.png"
          alt="School Logo"
          className="h-12 w-32 mr-2"
        />
        <div className="text-2xl font-bold">Robotics Showcase</div>
        <nav className="ml-auto">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="flex items-center">
                <Home className="mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="flex items-center">
                <Calendar className="mr-1" /> Events
              </Link>
            </li>
            <li>
              <Link to="/student-builds" className="flex items-center">
                <Users className="mr-1" /> Student Builds
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
