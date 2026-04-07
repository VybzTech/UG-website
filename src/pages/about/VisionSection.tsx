import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ABOUT_VISION } from '@/constants/utils';
import BumbleBImg from '@/assets/images/landing/BumbleB.jpg';
import OptimizedImage from '@/components/ui/OptimizedImage';

const VisionSection: React.FC = () => (
  <section className="py-16 px-10 sm:py-24 lg:py-32 sm:px-8 lg:px-12 bg-white">
    <div className="max-w-6xl mx-auto">
      {/* Mobile: image on top, content below. Desktop: content left, image right */}
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2
            className="font-hubot font-extrabold leading-tight text-black mb-5"
            style={{ fontSize: 'clamp(26px, 4vw, 52px)' }}
          >
            {ABOUT_VISION.heading}
          </h2>

          <div className="space-y-4 mb-8">
            {ABOUT_VISION.body.map((paragraph, i) => (
              <p
                key={i}
                className="font-hubot text-gray-600 leading-relaxed"
                style={{ fontSize: 'clamp(14px, 1.3vw, 16px)' }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <Button variant="primary" size="lg">
            {ABOUT_VISION.ctaLabel}
          </Button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-xl w-full mx-auto"
          style={{ aspectRatio: '4/5', maxHeight: '480px', maxWidth: '400px' }}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <OptimizedImage
            src={BumbleBImg}
            alt="Our vision — Urban Gravity"
            className="w-full h-full object-cover" width={0} height={0} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </div>
  </section>
);

export default VisionSection;
