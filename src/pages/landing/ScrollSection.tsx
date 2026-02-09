// import { useEffect, useRef, useState } from 'react';
// import CTAButton from './CTAButton';

// export default function ScrollSection({
//   number,
//   title,
//   description,
//   buttonText,
//   imageSrc,
//   scrollY,
// }) {
//   const sectionRef = useRef(null);
//   const [isInView, setIsInView] = useState(false);
//   const [sectionScrollY, setSectionScrollY] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting);
//         if (entry.isIntersecting) {
//           const sectionTop = entry.target.offsetTop;
//           const currentScroll = window.scrollY;
//           setSectionScrollY(Math.max(0, currentScroll - sectionTop));
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Calculate animation based on scroll position within section
//   const imageProgress = Math.min(1, sectionScrollY / 150);
//   const imageRotate = imageProgress * 5;
//   const imageScale = 1 + imageProgress * 0.1;
//   const imageOpacity = 0.8 + imageProgress * 0.2;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
//     >
//       {/* Background pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10" />

//       <div className="max-w-7xl mx-auto w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Fixed Content */}
//           <div className="lg:sticky lg:top-1/3 lg:h-fit space-y-8">
//             {/* Number */}
//             <div className="inline-block">
//               <span className="text-9xl font-black text-gray-200">
//                 {String(number).padStart(2, '0')}
//               </span>
//             </div>

//             {/* Content */}
//             <div className="space-y-6">
//               <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
//                 {title}
//               </h2>

//               <p className="text-lg text-gray-600 leading-relaxed font-light max-w-md">
//                 {description}
//               </p>

//               <div className="pt-4">
//                 <CTAButton>{buttonText}</CTAButton>
//               </div>
//             </div>

//             {/* Decorative Line */}
//             <div className="w-20 h-1 bg-yellow-400 rounded-full" />
//           </div>

//           {/* Right Side - Animated Image */}
//           <div className="relative h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
//             {/* Floating Container */}
//             <div
//               className="relative w-full h-full"
//               style={{
//                 perspective: '1000px',
//               }}
//             >
//               {/* Animated Image */}
//               <div
//                 className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
//                 style={{
//                   transform: `
//                     rotateZ(${imageRotate}deg)
//                     scale(${imageScale})
//                   `,
//                   opacity: imageOpacity,
//                   transition: isInView ? 'none' : 'transform 0.3s ease-out',
//                 }}
//               >
//                 <img
//                   src={imageSrc}
//                   alt={title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//               </div>

//               {/* Floating Badge */}
//               <div
//                 className="absolute bottom-8 right-8 bg-white rounded-xl shadow-xl p-4 max-w-xs animate-bounce"
//                 style={{
//                   animation: 'bounce 3s ease-in-out infinite',
//                   animationDelay: `${number * 0.2}s`,
//                 }}
//               >
//                 <p className="text-sm font-semibold text-gray-900">
//                   ✨ It's a match, Akim!
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   Swipe to see more homes
//                 </p>
//               </div>
//             </div>

//             {/* Mobile Phone Frame */}
//             <div className="absolute bottom-0 right-0 w-32 h-40 sm:w-40 sm:h-56 border-8 border-black rounded-3xl bg-black shadow-2xl overflow-hidden opacity-90 -mb-4 -mr-4">
//               <div className="w-full h-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex items-center justify-center">
//                 <span className="text-xs font-bold text-gray-800 text-center px-2">
//                   App Preview
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// // // ScrollSection.jsx - Version with stats badge

// // <div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-xl p-6 max-w-sm animate-bounce">
// //   <div className="grid grid-cols-2 gap-4 mb-4">
// //     <div>
// //       <p className="text-2xl font-bold text-gray-900">10K+</p>
// //       <p className="text-xs text-gray-500">Homes Listed</p>
// //     </div>
// //     <div>
// //       <p className="text-2xl font-bold text-yellow-500">4.9★</p>
// //       <p className="text-xs text-gray-500">Rating</p>
// //     </div>
// //   </div>
// //   <p className="text-sm font-semibold text-gray-900">
// //     ✨ It's a match, Akim!
// //   </p>
// //   <p className="text-xs text-gray-500 mt-2">
// //     Swipe to see more homes
// //   </p>
// // </div>





import React from 'react'

const ScrollSection = () => {
  return (
    <div>ScrollSection</div>
  )
}

export default ScrollSection