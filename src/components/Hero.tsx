// import { ArrowRight, Users } from 'lucide-react';
// import CTAButton from './CTAButton';

// export default function Hero({ scrollY }) {
//   const yOffset = scrollY * 0.5; // Parallax effect

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
//       {/* Background Image with Parallax */}
//       <div
//         className="absolute inset-0 w-full h-full"
//         style={{
//           backgroundImage: 'url(/images/hero-bg.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           transform: `translateY(${yOffset}px)`,
//           zIndex: 0,
//         }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* Content */}
//       <div className="relative z-20 text-center px-4 max-w-3xl animate-fadeInUp">
//         <div className="space-y-6">
//           <span className="inline-block px-4 py-2 bg-yellow-400/20 border border-yellow-300 rounded-full text-yellow-200 text-sm font-semibold">
//             ✨ AI-Powered Matching
//           </span>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
//             Move into your <br />
//             <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
//               Dream Home
//             </span>
//           </h1>

//           <p className="text-lg sm:text-xl text-gray-100 font-light max-w-xl mx-auto">
//             Find the perfect home with AI-powered matching and zero hidden fees. Join 1000+ happy users today.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
//             <button className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2">
//               <Users size={20} />
//               I'm a Landlord
//             </button>
//             <CTAButton>Find My Home</CTAButton>
//           </div>

//           <p className="text-gray-300 text-sm pt-4">
//             🏠 Over 10,000 homes available • ⚡ Match in minutes • 💰 Zero commission
//           </p>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
//           <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
//         </div>
//       </div>
//     </section>
//   );
// }



import { ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Hero({ scrollY }) {
  const yOffset = scrollY * 0.5; // Parallax effect

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/api/placeholder/1920/1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${yOffset}px)`,
          zIndex: 0,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl">
        <div className="space-y-6 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
            Move into your <br />
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-100 font-light max-w-xl mx-auto">
            Find the perfect home with AI-powered matching and zero hidden fees
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl">
              I'm a Landlord
            </button>
            <CTAButton>Find My Home</CTAButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}