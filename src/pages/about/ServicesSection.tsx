import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ABOUT_SERVICES } from '@/constants/utils';
import { HubotH1 } from '@/components/ui/HubotText';
import ComboText from '@/components/ui/ComboText';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ServicesSection: React.FC = () => (
  <section id="services" className="py-16 px-12 sm:py-24 lg:py-32 px-5  lg:px-12 bg-gray-50">
    <div className="max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 sm:mb-16 text-center"
      >
       <ComboText firstText={'Our'} secondText={'Services'} 
     fontFamily="hubot"
       fontWeight='bold' 
       size={55}
       />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ABOUT_SERVICES.map((service) => (
          <motion.div
            key={service.heading}
            variants={cardVariants}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl
                       transition-all duration-300 border border-gray-100
                       hover:border-yellow-300 group flex flex-col"
          >
            <div className="text-5xl mb-5 group-hover:scale-105 transition-transform duration-300">
              {service.emoji}
            </div>

            <h3
              className="font-hubot font-extrabold text-black mb-3"
              style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
            >
              {service.heading}
            </h3>

            <p
              className="font-hubot text-gray-600 leading-relaxed mb-6 flex-1"
              style={{ fontSize: 'clamp(13px, 1.2vw, 15px)' }}
            >
              {service.body}
            </p>

            <Button variant="primary" size="sm" className="self-start">
              {service.ctaLabel}
            </Button>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default ServicesSection;
