import React from 'react';
import { HubotH1 } from '@/components/ui/HubotText';
import Navbar from '@/pages/landing/Navbar';
import PageHero from '@/components/common/PageHero';
import Footer from '@/components/common/Footer';
import VisionSection from '@/pages/about/VisionSection';
import ServicesSection from '@/pages/about/ServicesSection';
import AboutBg from '@/assets/images/landing/about-bg.jpg';
import ComboText from '@/components/ui/ComboText';
import { COLORS } from '@/constants/colors';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        backgroundImage={AboutBg}
        overlayFrom="rgba(255, 212, 59, 0.3)"
        overlayTo="rgba(0, 0, 0, 0.45)"
        heightClass="h-[65vh] md:h-[80vh] lg:h-[100vh]"
        parallax={true}
      >
         <ComboText
                firstText="About"
                secondText="Us"
                firstColor={"#fff"}
                secondColor={COLORS.primary}
                fontFamily="hubot"
                fontWeight="bold"
                size={60}
                gap={1}
              />
      </PageHero>
      <VisionSection />
      <div id="services">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}
