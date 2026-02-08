import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';
import NavLink from './NavLink';

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-white shadow-lg backdrop-blur-sm'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">🏢</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Urban Gravity</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Our Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <CTAButton>Download App</CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-yellow-50 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-100">
            <NavLink href="#about" mobile>
              About
            </NavLink>
            <NavLink href="#services" mobile>
              Our Services
            </NavLink>
            <NavLink href="#contact" mobile>
              Contact
            </NavLink>
            <div className="pt-2">
              <CTAButton fullWidth>Download App</CTAButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// // Navbar.jsx - Version with dropdown

// import { useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import CTAButton from './CTAButton';
// import NavLink from './NavLink';

// export default function Navbar({ scrollY }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//       scrollY > 50
//         ? 'bg-white shadow-lg backdrop-blur-sm'
//         : 'bg-white/80 backdrop-blur-md'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
//                 <span className="text-sm font-bold">🏢</span>
//               </div>
//               <span className="text-lg font-bold text-gray-900">Urban Gravity</span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <NavLink href="#about">About</NavLink>

//             {/* Dropdown Example */}
//             <div className="relative group">
//               <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-yellow-500 transition-colors">
//                 Services
//                 <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
//               </button>
//               <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                 <a href="#service1" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Service 1</a>
//                 <a href="#service2" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Service 2</a>
//                 <a href="#service3" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Service 3</a>
//               </div>
//             </div>

//             <NavLink href="#contact">Contact</NavLink>
//             <CTAButton>Download App</CTAButton>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-yellow-50 transition-colors"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }