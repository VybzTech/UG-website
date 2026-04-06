import React from 'react';
import { HubotH1, HubotH2 } from '@/components/ui/HubotText';
import Navbar from '@/pages/landing/Navbar';
import PageHero from '@/components/common/PageHero';
import Footer from '@/components/common/Footer';
import ContactForm from '@/pages/contact/ContactForm';
import ContactSupport from '@/pages/contact/ContactSupport';
import ContactBg from '@/assets/images/landing/contact-bg.jpg';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        backgroundImage={ContactBg}
        overlayFrom="rgba(0, 0, 0, 0.67)"
        overlayTo="rgba(0, 0, 0, 0.27)"
        heightClass="h-[100vh] md:h-[80vh] lg:h-[65vh]"
        parallax={false}
      >
        <HubotH1 fontWeight="extrabold" size={72} className="text-white drop-shadow-2xl">
          Contact Us
        </HubotH1>
      </PageHero>

      {/* Form + image section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <HubotH2 fontWeight="extrabold" size={42} className="text-black mb-3">
              Get in Touch
            </HubotH2>
            <p className="font-hubot text-sm text-gray-500 max-w-md mx-auto">
              Have a question, complaint, or just want to say hi? Drop us a message.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <ContactSupport />
      <Footer />
    </main>
  );
}
