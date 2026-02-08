import FooterLink from '@/components/ui/FooterLink';
import SocialButton from '@/components/ui/SocialButton';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import ComboText from '@/components/ui/ComboText';
import { COLORS } from '@/constants/colors';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-16">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Brand Section */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-base font-bold">🏢</span>
              </div>
              <span className="text-xl font-bold font-hubot">Urban Gravity</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Urban Gravity is a housing app. It's a platform for tenant
              experience and choice. You're taking an educated, agent-controlled
              system and fixing it for the first, right, digital way.
            </p>
          </motion.div>

          {/* Legal Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 font-hubot">
              Legal
            </h3>
            <nav className="space-y-3">
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#refund">Refund Policy</FooterLink>
              <FooterLink href="#terms">Terms & Conditions</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </nav>
          </motion.div>

          {/* Company Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 font-hubot">
              Company
            </h3>
            <nav className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#live-chat">Live Chat</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
              <FooterLink href="#faqs">FAQs</FooterLink>
              <FooterLink href="#download">Download App</FooterLink>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 font-hubot">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-400 group"
                whileHover={{ color: COLORS.primary }}
                transition={{ duration: 0.3 }}
              >
                <Phone size={18} />
                <span className="text-sm">+1 (234) 567-890</span>
              </motion.a>
              <motion.a
                href="mailto:hello@urbangravity.com"
                className="flex items-center gap-3 text-gray-400 group"
                whileHover={{ color: COLORS.primary }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={18} />
                <span className="text-sm">hello@urbangravity.com</span>
              </motion.a>
              <motion.a
                href="#location"
                className="flex items-center gap-3 text-gray-400 group"
                whileHover={{ color: COLORS.primary }}
                transition={{ duration: 0.3 }}
              >
                <MapPin size={18} />
                <span className="text-sm">123 Main Street, NY</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            2025 © Urban Gravity Corporation. All rights reserved.
          </p>

          {/* Social Buttons */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">
              Connect with us on Social Media
            </span>
            <div className="flex gap-3">
              <SocialButton icon="instagram" href="https://instagram.com" />
              <SocialButton icon="twitter" href="https://twitter.com" />
              <SocialButton icon="linkedin" href="https://linkedin.com" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}