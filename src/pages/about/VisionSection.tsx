import React from 'react';
import { motion } from 'framer-motion';
import { HubotH2, HubotP } from '@/components/ui/HubotText';
import Button from '@/components/ui/Button';
import { ABOUT_VISION } from '@/constants/utils';
import BumbleBImg from '@/assets/images/landing/BumbleB.jpg';

const VisionSection: React.FC = () => (
  <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — content (swapped from original right side) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <HubotH2 fontWeight="extrabold" size={48} className="text-black mb-6 leading-tight">
            {ABOUT_VISION.heading}
          </HubotH2>

          <div className="space-y-4 mb-8">
            {ABOUT_VISION.body.map((paragraph, i) => (
              <HubotP key={i} fontWeight="regular" size={15} className="text-gray-700 leading-relaxed">
                {paragraph}
              </HubotP>
            ))}
          </div>

          <Button variant="primary" size="lg">
            {ABOUT_VISION.ctaLabel}
          </Button>
        </motion.div>

        {/* RIGHT — BumbleB image (swapped from original left side) */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-xl"
          style={{ aspectRatio: '4/5' }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <img
            src={BumbleBImg}
            alt="Our vision — Urban Gravity"
            className="w-full h-full object-cover"
          />
          {/* Subtle yellow tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </div>
  </section>
);

export default VisionSection;
