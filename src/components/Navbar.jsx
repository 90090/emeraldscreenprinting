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
      <div className="relative w-full px-4 h-20 flex items-center justify-between">
  {/* Logo - Left */}
  <Link
    to="/"
    onClick={close}
    className="flex flex-row items-center space-x-2 z-1000"
  >
    {/* Logo */}
    <img
      src="/logo-mostlywhite.png"
      alt="Emerald Logo"
      className="w-16 md:w-20"
      loading="lazy"
    />

    {/* Text */}
    <div className="flex flex-col text-left">
      <span className="text-sm md:text-lg font-semibold text-emerald-400">
        Emerald
      </span>
      <span className="text-sm md:text-sm lg:text-base text-white font-medium leading-tight">
        Screen Printing &amp; Embroidery
      </span>
    </div>
  </Link>

  {/* Centered Links - Desktop (lg and up only) */}
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
                ? "text-[rgb(208,177,65)]"
                : "text-white hover:text-[rgb(208,177,65)]"
            }`}
          >
            {name}
          </Link>
        </motion.div>
      );
    })}
  </div>

  {/* Hamburger - Right side (Mobile & Tablet) */}
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
                    ? "text-[rgb(208,177,65)]"
                    : "text-white hover:text-[rgb(208,177,65)]"
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
