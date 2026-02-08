import { ArrowRight } from 'lucide-react';

const CTAButton = ({ children, fullWidth = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative px-6 py-3 font-semibold text-gray-900
        bg-yellow-400 rounded-lg transition-all duration-300
        hover:bg-yellow-500 hover:shadow-lg hover:scale-105
        active:scale-95 flex items-center justify-center gap-2
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      <span>{children}</span>
      <ArrowRight
        size={18}
        className="group-hover:translate-x-1 transition-transform duration-300"
      />
    </button>
  );
}

export default CTAButton
// // Variant 1: Original Yellow
// <button className="px-6 py-3 font-semibold text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 hover:shadow-lg hover:scale-105 transition-all duration-300">
//   Download App
// </button>

// // Variant 2: Ghost Style
// <button className="px-6 py-3 font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
//   Learn More
// </button>

// // Variant 3: Dark with Icon
// <button className="px-6 py-3 font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 hover:shadow-lg flex items-center gap-2">
//   <span>Get Started</span>
//   <ArrowRight size={18} />
// </button>

// // Variant 4: Gradient
// <button className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
//   Start Free Trial
// </button>