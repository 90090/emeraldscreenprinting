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
    <nav className="bg-emerald-300 shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          onClick={close}
          className="flex items-center space-x-2"
        >
          <img src="/logo.jpg" alt="Emerald Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-emerald-600">
            Emerald
          </span>
          <span className="text-gray-800">Screen Printing</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map(({ name, to }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <Link
                to={to}
                className="text-gray-700 font-medium hover:text-black transition"
              >
                {name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggle}
          className="md:hidden p-2 text-2xl text-gray-700 focus:outline-none"
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
        <div className="flex flex-col px-4 py-2 space-y-2">
          {links.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              onClick={close}
              className="py-2 p-2 text-gray-700 font-medium hover:bg-emerald-200 rounded"
            >
              {name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
