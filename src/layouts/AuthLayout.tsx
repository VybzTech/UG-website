import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ugLogo from '@/assets/images/ug-logo.png';
import heroBg from '@/assets/images/landing/hero-bg.jpg';

interface PanelContent {
  headline: string;
  subtext: string;
  accent: string;
}

const panelMap: Record<string, PanelContent> = {
  '/login': {
    headline: 'Welcome back.',
    subtext: 'Your next home is waiting for you.',
    accent: 'Sign in to continue your journey.',
  },
  '/signup': {
    headline: 'Join thousands.',
    subtext: 'Find, match, and move into your dream home.',
    accent: 'Create your free account today.',
  },
  '/verify-otp': {
    headline: 'Almost there.',
    subtext: 'We take security seriously.',
    accent: 'One quick step to verify your identity.',
  },
  '/choose-role': {
    headline: 'One platform.',
    subtext: 'Built for tenants, landlords, and agents.',
    accent: 'Tell us how you want to use Urban Gravity.',
  },
  '/basic-info': {
    headline: 'Make it yours.',
    subtext: 'A complete profile gets 3x more matches.',
    accent: "A few details and you're ready to go.",
  },
  '/preview': {
    headline: "You're in.",
    subtext: 'The journey to your dream home starts now.',
    accent: 'Your profile is live and ready to match.',
  },
};

const stats = [
  { label: '10,000+ verified properties', icon: '🏠' },
  { label: '4.8★ average rating', icon: '⭐' },
  { label: 'Zero commission fees', icon: '✦' },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

export default function AuthLayout() {
  const location = useLocation();
  const panel = panelMap[location.pathname] ?? panelMap['/login'];

  return (
    <div className="min-h-screen flex w-full bg-white overflow-hidden">
      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex lg:w-[55%] relative flex-col overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Yellow glow accent */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#FFCA08]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#FFCA08]/8 blur-[100px] pointer-events-none" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,202,8,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,202,8,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-12 py-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={ugLogo} alt="Urban Gravity" className="w-10 h-10 object-contain" />
            <span className="font-hubot font-bold text-xl text-white">
              Urban<span className="text-[#FFCA08]">Gravity</span>
            </span>
          </div>

          {/* Main copy — animated per route */}
          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Yellow accent bar */}
                <div className="w-10 h-1 bg-[#FFCA08] rounded-full mb-8" />

                <h2 className="font-hubot font-bold text-5xl xl:text-6xl text-white leading-[1.1] mb-5">
                  {panel.headline}
                </h2>
                <p className="font-hubot text-xl text-white/80 mb-3 leading-relaxed">
                  {panel.subtext}
                </p>
                <p className="font-hubot text-sm text-white/40">
                  {panel.accent}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Floating stat pills */}
            <div className="mt-14 space-y-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
                  className="inline-flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-sm w-fit"
                >
                  <span className="text-base leading-none">{stat.icon}</span>
                  <span className="font-hubot text-sm text-white/75 font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom tagline */}
          <p className="font-hubot text-xs text-white/25 pb-2">
            © {new Date().getFullYear()} Urban Gravity. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 lg:w-[45%] flex flex-col min-h-screen overflow-y-auto bg-white">
        {/* Top bar — logo visible on mobile only */}
        <div className="flex items-center gap-2.5 px-6 lg:px-10 pt-8 pb-2 lg:hidden">
          <img src={ugLogo} alt="Urban Gravity" className="w-8 h-8 object-contain" />
          <span className="font-hubot font-bold text-lg text-[#1A1A1A]">
            Urban<span className="text-[#FFCA08]">Gravity</span>
          </span>
        </div>

        {/* Centered form area */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-12 py-10">
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                {...fadeUp}
                className="w-full"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
