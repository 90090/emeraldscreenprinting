import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Our Work", to: "/ourwork" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-emerald-700 shadow sticky top-0 z-50">
      <div className="relative container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo - Left */}
        <Link
          to="/"
          onClick={close}
          className="flex items-center space-x-2 z-10"
        >
          <img src="/logo_black.png" alt="Emerald Logo" className="h-12 w-15" />
          <span className="text-xl font-semibold text-emerald-400">Emerald</span>
          <span className="text-lg text-white font-medium">Screen Printing</span>
        </Link>

        {/* Centered Links - Center */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="hidden md:flex space-x-10 pointer-events-auto">
            {links.map(({ name, to }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Link
                  to={to}
                  className="text-lg text-white font-semibold hover:text-emerald-300 transition"
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hamburger - Right */}
        <button
          onClick={toggle}
          className="md:hidden p-2 text-2xl text-white focus:outline-none z-10"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-emerald-100 md:hidden"
      >
        <div className="flex flex-col items-center px-4 py-4 space-y-4 text-lg font-semibold">
          {links.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              onClick={close}
              className="w-full text-center py-2 px-4 text-black hover:bg-emerald-200 rounded"
            >
              {name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
