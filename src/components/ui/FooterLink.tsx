import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { COLORS } from '@/constants/colors';

export interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * FooterLink — animated underline that fills with the primary yellow on hover.
 * The underline expands left-to-right and is a solid fill, not just a border.
 */
const FooterLink: React.FC<FooterLinkProps> = ({ href, children, className = '' }) => {
  const { isDark } = useTheme();

  return (
    <motion.a
      href={href}
      className={`relative inline-block text-sm font-medium font-hubot group ${className}`}
      style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#555' }}
      whileHover={{ color: COLORS.primary }}
      transition={{ duration: 0.2 }}
    >
      {/* Text sits above the fill layer */}
      <span className="relative z-10">{children}</span>

      {/* Content-fill underline — solid yellow block growing from left */}
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] rounded-full"
        style={{ background: COLORS.primary, originX: 0 }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.a>
  );
};

export default FooterLink;
