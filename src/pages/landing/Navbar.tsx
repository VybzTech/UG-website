import React from "react";
import Button from "@/components/ui/Button";
import logo from "@/assets/images/ug-logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Urban Gravity"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
          {/* COMBO TEXT */}
          <span className="font-bold text-xl tracking-tight text-gray-900">
            Urban Gravity
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-gray-600 hover:text-yellow-600 transition-colors font-medium text-sm lg:text-base"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-yellow-600 transition-colors font-medium text-sm lg:text-base"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-yellow-600 transition-colors font-medium text-sm lg:text-base"
          >
            Contact
          </a>
          {/* CTA BUTTON */}
          <Button
            variant="primary"
            onClick={() => navigate("/onboarding")}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-none shadow-yellow-200/50 shadow-lg hover:shadow-yellow-300/50"
          >
            Download App
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
