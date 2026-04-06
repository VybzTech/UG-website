import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import FooterLink from '@/components/ui/FooterLink';
import SocialButton from '@/components/ui/SocialButton';
import UGLogo from '@/assets/images/ug-logo.png';
import {
  FOOTER_LEGAL_LINKS,
  FOOTER_COMPANY_LINKS,
  SOCIAL_LINKS,
} from '@/constants/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

interface LinkColumnProps {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
  isDark: boolean;
}

const LinkColumn: React.FC<LinkColumnProps> = ({ title, links, isDark }) => (
  <motion.div className="flex flex-col gap-5" variants={itemVariants}>
    <h3
      className="font-hubot text-[15px] font-bold tracking-tight"
      style={{ color: isDark ? '#ffffff' : '#1A1A1A' }}
    >
      {title}
    </h3>
    <nav className="flex flex-col gap-3">
      {links.map((link) => (
        <FooterLink key={link.href} href={link.href}>
          {link.label}
        </FooterLink>
      ))}
    </nav>
  </motion.div>
);

const Footer: React.FC = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const divider = isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F0F0F0';

  return (
    <footer
      style={{
        background: isDark ? '#0a0a0f' : '#ffffff',
        borderTop: divider,
        transition: 'background 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">

        {/* ── Main grid ───────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col lg:flex lg:flex-row lg:items-start gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* Brand — takes ~40% on desktop */}
          <motion.div
            className="flex flex-col gap-6 lg:w-[40%] lg:pr-12"
            variants={itemVariants}
          >
            <img
              src={UGLogo}
              alt="Urban Gravity"
              className="w-20 h-20 object-contain"
              style={{
                filter: isDark ? 'brightness(0) invert(1)' : 'none',
                transition: 'filter 0.4s ease',
              }}
            />
            <p
              className="font-hubot text-sm leading-relaxed max-w-xs"
              style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#555' }}
            >
              Urban Gravity isn't just a housing app. It's a platform built on
              trust, experience, and choice — flipping an outdated,
              agent-controlled system into a user-first digital ecosystem.
            </p>

            {/* Social icons */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <SocialButton
                    key={s.label}
                    icon={s.icon}
                    href={s.href}
                    label={s.label}
                    variant={isDark ? 'dark' : 'light'}
                  />
                ))}
              </div>
              <span
                className="font-hubot text-xs"
                style={{ color: isDark ? 'rgba(255,255,255,0.3)' : '#999' }}
              >
                Connect with us on Social Media
              </span>
            </div>
          </motion.div>

          {/* Link columns — flex-1 so they share remaining width evenly */}
          <div className="flex flex-1 flex-wrap gap-x-16 gap-y-10 lg:justify-end">
            <LinkColumn title="Legal"   links={FOOTER_LEGAL_LINKS}   isDark={isDark} />
            <LinkColumn title="Company" links={FOOTER_COMPANY_LINKS} isDark={isDark} />
          </div>

        </motion.div>

        {/* ── Bottom bar ─────────────────────────────────────────── */}
        <div
          className="mt-14 pt-6 flex justify-end"
          style={{ borderTop: divider }}
        >
          <p
            className="font-hubot text-xs"
            style={{ color: isDark ? 'rgba(255,255,255,0.3)' : '#999' }}
          >
            {currentYear} © Urban Gravity Corporation. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
