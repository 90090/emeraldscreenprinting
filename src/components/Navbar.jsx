import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const location = useLocation();

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

        {/* Centered Links - Desktop (1024px and above) */}
        <div className="hidden lg:flex space-x-10 absolute inset-0 justify-center items-center">
          {links.map(({ name, to }) => {
            const isActive = location.pathname === to;
            return (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Link
                  to={to}
                  className={`text-lg font-semibold transition ${
                    isActive
                      ? "text-emerald-300"
                      : "text-white hover:text-emerald-300"
                  }`}
                >
                  {name}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Hamburger - Mobile (1023px and below) */}
        <button
          onClick={toggle}
          className="lg:hidden p-2 text-2xl text-white focus:outline-none z-10"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-emerald-700 lg:hidden"
      >
        <div className="flex flex-col items-center px-4 py-4 space-y-4 text-lg font-semibold">
          {links.map(({ name, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={name}
                to={to}
                onClick={close}
                className={`w-full text-center py-2 px-4 rounded transition ${
                  isActive
                    ? "text-emerald-400"
                    : "text-white hover:bg-emerald-200"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
