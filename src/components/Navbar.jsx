import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-emerald-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" onClick={closeMenu}>Emerald Screen Printing</Link>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-emerald-300 transition">Home</Link>
          <Link to="/about" className="hover:text-emerald-300 transition">About</Link>
          <Link to="/portfolio" className="hover:text-emerald-300 transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-emerald-300 transition">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-emerald-700 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 py-3' : 'max-h-0'
        }`}
      >
        <div className="space-y-2 px-4">
          <Link to="/" onClick={closeMenu} className="block hover:text-emerald-300">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-emerald-300">About</Link>
          <Link to="/portfolio" onClick={closeMenu} className="block hover:text-emerald-300">Portfolio</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-emerald-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
