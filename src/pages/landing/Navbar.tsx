// import React from "react";
// import Button from "@/components/ui/Button";
import logo from "@/assets/images/ug-logo.png";
import { useNavigate } from "react-router-dom";
// import CTAButton from "@/components/ui/CTAButton";

// const Navbar = () => {
//   const navigate = useNavigate();
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//         <div
//           className="flex items-center gap-3 cursor-pointer group"
//           onClick={() => navigate("/")}
//         >
//           <img
//             src={logo}
//             alt="Urban Gravity"
//             className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
//           />
//           {/* COMBO TEXT */}
//           <span className="font-bold text-xl tracking-tight text-gray-900">
//             Urban Gravity
//           </span>
//         </div>

//         <div className="hidden md:flex items-center gap-8">
//           <a
//             href="#about"
//             className="text-gray-600 hover:text-yellow-600 transition-colors font-medium text-sm lg:text-base"
//           >
//             About
//           </a>
//           <a
//             href="#services"
//             className="text-gray-600 hover:text-yellow-600 transition-colors font-medium text-sm lg:text-base"
//           >
//             Services
//           </a>
//           <a
//             href="#contact"
//             className="text-gray-600 hover:text-yellow-600 transition-colors font-medium text-sm lg:text-base"
//           >
//             Contact
//           </a>
//           {/* CTA BUTTON */}
//           <CTAButton
//             variant="primary"
//             onClick={() => navigate("/onboarding")}
//             className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-none shadow-yellow-200/50 shadow-lg hover:shadow-yellow-300/50"
//           >
//             Download App
//           </CTAButton>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavLink from "@/components/ui/NavLink";
import { Menu, X } from "lucide-react";
import { COLORS } from "@/constants/colors";
import ComboText from "@/components/ui/ComboText";
import CTAButton from "@/components/ui/CTAButton";

/**
 * Example Navbar Component
 * Demonstrates NavLink usage with active state and mobile menu
 *
 * For React Router integration, replace the click handlers with:
 * import { useNavigate, useLocation } from 'react-router-dom';
 * and use navigate() and location.pathname
 */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
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
    { label: "About Us", href: "#about", id: "about" },
    { label: "Our Services", href: "#services", id: "services" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(id);
    setIsOpen(false);

    // Smooth scroll to section
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.09 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={logo}
              alt="Urban Gravity"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <ComboText
              firstText="Urban"
              secondText="Gravity"
              firstColor={scrolled ? "#000" : COLORS.text}
              secondColor={COLORS.primary}
              fontFamily="hubot"
              fontWeight="bold"
              size={18}
              gap={1}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                active={activeLink === link.id}
                onClick={(e) => handleNavClick(link.id, e)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          {/* <motion.button
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Get Started
            </motion.button> */}
          <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
            <CTAButton
              variant="primary"
              onClick={() => navigate("/onboarding")}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-none shadow-yellow-200/50 shadow-lg hover:shadow-yellow-300/50"
            >
              Download App
            </CTAButton>
          </motion.span>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X size={24} color={scrolled ? COLORS.text : "white"} />
            ) : (
              <Menu size={24} color={scrolled ? COLORS.text : "white"} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
              >
                <NavLink
                  href={link.href}
                  active={activeLink === link.id}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.button
              className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
