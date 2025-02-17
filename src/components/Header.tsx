import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Home, Calendar, Users, Menu, Building, LogOut } from 'lucide-react'
import { auth, googleAuthProvider } from '../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider)
      closeLoginModal()
    } catch (error: any) {
      console.error('Error signing in with Google: ', error)
      alert(`Login failed: ${error.message}`)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error: any) {
      console.error('Error signing out: ', error)
      alert(`Logout failed: ${error.message}`)
    }
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
              {user ? (
                <>
                  <Link to="/admin" className="block py-2 px-4 text-white hover:bg-blue-600">
                    <Building className="inline-block mr-1" size={16} /> Admin
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block py-2 px-4 text-white hover:bg-blue-600"
                  >
                    <LogOut className="inline-block mr-1" size={16} /> Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={openLoginModal}
                  className="block py-2 px-4 text-white hover:bg-blue-600"
                >
                  Login
                </button>
              )}
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
              {user ? (
                <>
                  <li>
                    <Link to="/admin" className="flex items-center py-2 px-3 hover:bg-blue-600 rounded">
                      <Building className="mr-1" /> Admin
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center py-2 px-3 hover:bg-blue-600 rounded"
                    >
                      <LogOut className="mr-1" /> Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={openLoginModal}
                    className="flex items-center py-2 px-3 hover:bg-blue-600 rounded"
                  >
                    Login
                  </button>
                </li>
              )}
          </ul>
        </nav>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Login
              </h3>
              <div className="mt-2 px-7 py-3">
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Continue with Google
                </button>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={closeLoginModal}
                  className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md width-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
