import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Button from '@/components/ui/Button';
import DownloadButton from '@/components/ui/DownloadButton';
import { NumberImage } from '@/pages/landing/NumberImage';

import PhoneLogin from '@/assets/images/phones/iPhone-Login.png';
import PhoneMatch from '@/assets/images/phones/Match.png';
import PhoneMoveIn from '@/assets/images/phones/Move-In.png';
import Texture1 from '@/assets/images/pexels-1.jpeg';
import Texture2 from '@/assets/images/pexels-2.jpg';
import Texture3 from '@/assets/images/pexels-3.jpg';
import OptimizedImage from '@/components/ui/OptimizedImage';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface SectionData {
  number: number;
  numberImageUrl: string;
  heading: string;
  subtitle: string;
  ctaLabel: string;
  phoneImageSrc: string;
  accentColor: string;
}

const SECTIONS: SectionData[] = [
  {
    number: 1,
    numberImageUrl: Texture1,
    heading: 'Find Your Perfect Match',
    subtitle:
      'Swipe through thousands of curated properties that fit your budget, location, and lifestyle — all in one tap.',
    ctaLabel: 'Get Started',
    phoneImageSrc: PhoneLogin,
    accentColor: '#FFCA08',
  },
  {
    number: 2,
    numberImageUrl: Texture2,
    heading: 'It\'s a Match!',
    subtitle:
      'When you and a landlord both show interest, it becomes a match. Chat, negotiate, and seal the deal — zero middlemen.',
    ctaLabel: 'Learn More',
    phoneImageSrc: PhoneMatch,
    accentColor: '#FFCA08',
  },
  {
    number: 3,
    numberImageUrl: Texture3,
    heading: 'Move In With Confidence',
    subtitle:
      'Verified profiles, transparent agreements, and zero commission fees. Urban Gravity protects every step of your journey.',
    ctaLabel: 'Download Now',
    phoneImageSrc: PhoneMoveIn,
    accentColor: '#FFCA08',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// useInView
// ─────────────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.25) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─────────────────────────────────────────────────────────────────────────────
// Single Section
// ─────────────────────────────────────────────────────────────────────────────
interface SectionProps {
  item: SectionData;
  index: number;
  total: number;
}

const Section: React.FC<SectionProps> = ({ item, index, total }) => {
  const { ref, inView } = useInView();
  const { isDark } = useTheme();

  const bgLight = index % 2 === 0 ? '#ffffff' : '#f8f8f8';
  const bgDark = index % 2 === 0 ? '#0a0a0f' : '#0d0a12';

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const fadeIn = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section
      ref={ref}
      style={{
        background: isDark ? bgDark : bgLight,
        transition: 'background 0.4s ease',
      }}
      className="relative w-full overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 70% 50%, ${item.accentColor}12 0%, transparent 70%)`,
        }}
      />

      {/* ── Layout: stacked on mobile, side-by-side on lg+ ────────────────── */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-stretch lg:min-h-screen">

        {/* LEFT — text content */}
        <div className="
          flex flex-col justify-center items-center 
          px-6 pt-10
          sm:px-10 sm:pt-28
          lg:items-start
          lg:pt-24 pb-10
          lg:w-1/2 lg:px-[8%] lg:py-0
        ">
          {/* Number */}
          <div style={fadeUp(0)} className="mb-2">
            <NumberImage
              value={item.number}
              imageUrl={item.numberImageUrl}
              // size={140}
              fontWeight="extrabold"
            />
          </div>

          {/* Heading */}
          <h2
            className="font-hubot font-extrabold leading-tight mb-4 text-center lg:text-left"
            style={{
              ...fadeUp(0.1),
              fontSize: 'clamp(28px, 4vw, 52px)',
              color: isDark ? '#ffffff' : '#0a0a0f',
              letterSpacing: '-0.02em',
              transition: 'color 0.4s ease',
            }}
          >
            {item.heading}
          </h2>

          {/* Subtitle */}
          <p
            className="font-hubot leading-relaxed mb-8 text-center lg:text-left mx-4 lg:mx-0"
            style={{
              ...fadeUp(0.18),
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
              maxWidth: '440px',
              transition: 'color 0.4s ease',
            }}
          >
            {item.subtitle}
          </p>

          {/* CTA */}
          <div style={fadeUp(0.26)}>
            <Button
              variant="primary"
              size="lg"
              // iconName="ArrowRight"
              // iconPosition="right"
            >
              {item.ctaLabel}
            </Button>
          </div>
        </div>

        {/* RIGHT — phone image */}
        <div className="
          flex flex-col items-center justify-end
          px-6 pb-10
          sm:px-10
          lg:w-1/2 lg:pb-12
        ">
          {/* Phone */}
          <div
            style={fadeIn(0.08)}
            className="flex items-end justify-center w-full"
          >
            <OptimizedImage
              src={item.phoneImageSrc}
              alt="App screenshot"
              className="w-auto object-contain"
              width={280}
              height={560}
              style={{
                filter: isDark
                  ? 'drop-shadow(0 24px 56px rgba(0,0,0,0.7))'
                  : 'drop-shadow(0 16px 40px rgba(0,0,0,0.15))',
              }}
            />
          </div>

          {/* Download badges */}
          <div style={fadeUp(0.32)} className="mt-6">
            <DownloadButton size="md" layout="row" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Default export — renders all sections
// ─────────────────────────────────────────────────────────────────────────────
const ScrollSection: React.FC = () => (
  <>
    {SECTIONS.map((item, index) => (
      <Section key={index} item={item} index={index} total={SECTIONS.length} />
    ))}
  </>
);

export default ScrollSection;
