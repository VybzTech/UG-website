import React from 'react';
import { HubotH1 } from '@/components/ui/HubotText';
import Navbar from '@/pages/landing/Navbar';
import PageHero from '@/components/common/PageHero';
import Footer from '@/components/common/Footer';
import VisionSection from '@/pages/about/VisionSection';
import ServicesSection from '@/pages/about/ServicesSection';
import AboutBg from '@/assets/images/landing/about-bg.jpg';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        backgroundImage={AboutBg}
        overlayFrom="rgba(255, 212, 59, 0.3)"
        overlayTo="rgba(0, 0, 0, 0.45)"
        heightClass="h-[100vh] md:h-[80vh] lg:h-[65vh]"
        parallax={true}
      >
        <HubotH1 fontWeight="extrabold" size={72} className="text-white drop-shadow-2xl">
          About Us
        </HubotH1>
      </PageHero>

      <VisionSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
