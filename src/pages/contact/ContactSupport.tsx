import React from 'react';
import { motion } from 'framer-motion';
import { HubotH3, HubotP } from '@/components/ui/HubotText';
import { CONTACT_SUPPORT_CATEGORIES } from '@/constants/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ContactSupport: React.FC = () => (
  <section className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
    <div className="max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <h2 className="font-hubot text-3xl md:text-4xl font-extrabold text-black mb-3">
          How can we help?
        </h2>
        <p className="font-hubot text-sm text-gray-500 max-w-md mx-auto">
          Pick a category below or use the form above — we've got you covered.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CONTACT_SUPPORT_CATEGORIES.map((cat) => (
          <motion.div
            key={cat.heading}
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-yellow-300 group cursor-pointer"
          >
            <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
              {cat.emoji}
            </div>
            <HubotH3 fontWeight="bold" size={22} className="text-black mb-3">
              {cat.heading}
            </HubotH3>
            <HubotP fontWeight="regular" size={13} className="text-gray-600 leading-relaxed">
              {cat.body}
            </HubotP>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default ContactSupport;
