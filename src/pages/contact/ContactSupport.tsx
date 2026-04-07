import React from 'react';
import { motion } from 'framer-motion';
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
  <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-gray-50">
    <div className="max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-14 text-center"
      >
        <h2
          className="font-hubot font-extrabold text-black mb-3"
          style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}
        >
          How can we help?
        </h2>
        <p className="font-hubot text-sm text-gray-500 max-w-md mx-auto">
          Pick a category below or use the form above — we've got you covered.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CONTACT_SUPPORT_CATEGORIES.map((cat) => (
          <motion.div
            key={cat.heading}
            variants={cardVariants}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg
                       transition-all duration-300 border border-gray-100
                       hover:border-yellow-300 group cursor-pointer"
          >
            <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {cat.emoji}
            </div>
            <h3
              className="font-hubot font-bold text-black mb-3"
              style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}
            >
              {cat.heading}
            </h3>
            <p
              className="font-hubot text-gray-600 leading-relaxed"
              style={{ fontSize: 'clamp(13px, 1.1vw, 14px)' }}
            >
              {cat.body}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default ContactSupport;
