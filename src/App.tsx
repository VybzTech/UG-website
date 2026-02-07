import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollSection from './components/ScrollSection';
import Footer from './components/Footer';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <ScrollSection
  number={1}                           // Section number
  title="Create a Profile"             // Section heading
  description="Create a Profile..."   // Description text
  buttonText="Sign Up"                 // CTA button text
  imageSrc="/path/to/image.jpg"       // Image URL
  scrollY={scrollY}                    // Scroll tracking
/>
      <ScrollSection number={2} scrollY={scrollY} ... />
      <ScrollSection number={3} scrollY={scrollY} ... />
      <Footer />
    </div>
  );
}