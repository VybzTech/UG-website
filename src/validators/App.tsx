// import { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import ScrollSection from './components/ScrollSection';
// import Footer from './components/Footer';

// export default function App() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       <Navbar scrollY={scrollY} />
//       <Hero scrollY={scrollY} />
//       {/* Feature Sections */}
//       <ScrollSection
//         number={1}
//         title="Create a Profile"
//         description="Create a Profile, No Hidden Fees. Smart matching, AI-powered recommendations based on your lifestyle."
//         buttonText="Sign Up"
//         imageSrc="/images/profile.jpg"
//         scrollY={scrollY}
//       />

//       <ScrollSection
//         number={2}
//         title="Swipe & Match"
//         description="Find your Dream Home. Just you and your preferences. No middle-man!"
//         buttonText="Start Looking"
//         imageSrc="/images/swipe.jpg"
//         scrollY={scrollY}
//       />

//       <ScrollSection
//         number={3}
//         title="Move In Today!"
//         description="Match with your choice & pay Landlords directly once you're satisfied. Back out at any time. Join 1000+ early users."
//         buttonText="Download App"
//         imageSrc="/images/payment.jpg"
//         scrollY={scrollY}
//       />
//       <Footer />
//     </div>
//   );
// }