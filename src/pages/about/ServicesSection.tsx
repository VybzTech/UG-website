import React from 'react';
import { motion } from 'framer-motion';
import { HubotH2, HubotH3, HubotP } from '@/components/ui/HubotText';
import Button from '@/components/ui/Button';
import { ABOUT_SERVICES } from '@/constants/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ServicesSection: React.FC = () => (
  <section id="services" className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
    <div className="max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <HubotH2 fontWeight="extrabold" size={48} className="text-black">
          Our Services
        </HubotH2>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ABOUT_SERVICES.map((service) => (
          <motion.div
            key={service.heading}
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-300 group flex flex-col"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.emoji}
            </div>

            <HubotH3 fontWeight="extrabold" size={26} className="text-black mb-4">
              {service.heading}
            </HubotH3>

            <HubotP fontWeight="regular" size={14} className="text-gray-600 leading-relaxed mb-8 flex-1">
              {service.body}
            </HubotP>

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
