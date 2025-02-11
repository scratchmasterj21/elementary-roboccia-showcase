    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { Home, Calendar, Users, Menu } from 'lucide-react';

    const Header: React.FC = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      return (
        <header className="bg-blue-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://i.imgur.com/QTNsUY1.png"
                alt="School Logo"
                className="h-12 w-32 mr-2"
              />
              <div className="text-2xl font-bold">Robotics Showcase</div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </button>

            {/* Navigation Links */}
            <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
              <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-2 md:mt-0 md:justify-end">
                <li>
                  <Link to="/" className="flex items-center py-2 px-3 hover:bg-blue-600 rounded">
                    <Home className="mr-1" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="flex items-center py-2 px-3 hover:bg-blue-600 rounded">
                    <Calendar className="mr-1" /> Events
                  </Link>
                </li>
                <li>
                  <Link to="/student-builds" className="flex items-center py-2 px-3 hover:bg-blue-600 rounded">
                    <Users className="mr-1" /> Builds
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    };

    export default Header;
