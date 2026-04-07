import logo from "@/assets/images/ug-logo.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavLink from "@/components/ui/NavLink";
import { Menu, X, Sun, Moon } from "lucide-react";
import { COLORS } from "@/constants/colors";
import ComboText from "@/components/ui/ComboText";
import CTAButton from "@/components/ui/CTAButton";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Example Navbar Component
 * Demonstrates NavLink usage with active state and mobile menu
 *
 * For React Router integration, replace the click handlers with:
 * import { useNavigate, useLocation } from 'react-router-dom';
 * and use navigate() and location.pathname
 */
const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  // Track scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About Us", href: "/about", id: "about" },
    { label: "Our Services", href: "/about#services", id: "services" },
    { label: "Contact", href: "/contact", id: "contact" },
  ];

  const handleNavClick = (id: string, href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(id);
    setIsOpen(false);
    if (id !== "home") navigate(`/${href}`);

    // Smooth scroll to section
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Backdrop — clicking outside closes the mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}

    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? isDark
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 hover:cursor-pointer"
            whileHover={{ scale: 1.09 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleNavClick("home", "/", e)}
          >
            <span className="h-[9vw] block md:hidden">
              <img
                src={logo}
                alt="Urban Gravity"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </span>
            <span className="hidden md:block">

              <ComboText
                firstText="Urban"
                secondText="Gravity"
                firstColor={scrolled ? (isDark ? "#fff" : "#000") : COLORS.text}
                secondColor={COLORS.primary}
                fontFamily="hubot"
                fontWeight="bold"
                size={18}
                gap={1}
              />
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                active={activeLink === link.id}
                onClick={(e) => handleNavClick(link.id, link.href, e)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300 ${scrolled
                ? isDark
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                : "bg-white/10 text-white hover:bg-white/20"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ?
                <Moon size={19} />
                :
                <Sun size={19} />
              }
            </motion.button>

            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
              <CTAButton
                variant="primary"
                onClick={() => navigate("/onboarding")}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-none shadow-yellow-200/50 shadow-lg hover:shadow-yellow-300/50"
              >
                Download App
              </CTAButton>
            </motion.span>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${scrolled
                ? isDark 
                  ? "bg-gray-700 text-white-700"
                  : "bg-white text-yellow-400 shadow-sm shadow"
                : "bg-white/10 text-white"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ?
                <Moon size={20} />
                :
                <Sun size={20} />
              }
            </motion.button>
            <motion.button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X size={24} color={scrolled ? (isDark ? "#fff" : COLORS.error) : "white"} />
              ) : (
                <Menu size={24} color={scrolled ? (isDark ? "#fff" : COLORS.text) : "white"} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden backdrop-blur-md ${isDark ? "bg-gray-900/95" : "bg-white/85"} rounded-lg`}
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 pt-5 pb-10 flex flex-col gap-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
              >
                <NavLink
                  href={link.href}
                  active={activeLink === link.id}
                  onClick={(e) => handleNavClick(link.id, link.href, e)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                    }`}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            {/* Download App — pinned to bottom of mobile menu */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
            >
              <CTAButton
                variant="primary"
                onClick={() => { setIsOpen(false); navigate("/onboarding"); }}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-none shadow-yellow-200/50 shadow-lg hover:shadow-yellow-300/50 justify-center"
              >
                Download App
              </CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
