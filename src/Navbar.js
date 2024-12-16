import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Narender Rai
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
            }>
              About
            </NavLink>
            <NavLink to="/resume" className={({ isActive }) => 
              isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
            }>
              Resume
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
            }>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" 
                className={({ isActive }) => 
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink to="/about"
                className={({ isActive }) => 
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink to="/resume"
                className={({ isActive }) => 
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </NavLink>
              <NavLink to="/contact"
                className={({ isActive }) => 
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
