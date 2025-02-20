import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Home, Calendar, Users, Menu, Building, LogOut } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://i.imgur.com/QTNsUY1.png"
            alt="School Logo"
            className="h-12 w-32 mr-2"
          />
          <div className="text-2xl font-bold">Robotics Showcase</div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden" ref={menuRef}>
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>

          {/* Submenu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-blue-500 rounded shadow-md z-10">
              <Link to="/" className="block py-2 px-4 text-white hover:bg-blue-600">
                <Home className="inline-block mr-1" size={16} /> Home
              </Link>
              <Link to="/events" className="block py-2 px-4 text-white hover:bg-blue-600">
                <Calendar className="inline-block mr-1" size={16} /> Events
              </Link>
              <Link to="/student-builds" className="block py-2 px-4 text-white hover:bg-blue-600">
                <Users className="inline-block mr-1" size={16} /> Builds
              </Link>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
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
  )
}

export default Header
