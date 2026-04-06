// import React from "react";
// import SectionHero from "@/components/landing/SectionHero";

// const ScrollSection = () => {
//   // Sample data for the section
//   const sectionData = {
//     no: 1,
//     title: "Find Your Perfect Match",
//     content: [
//       "Stop wasting time with irrelevant listings.",
//       "Our smart algorithm learns your preferences to show you only the homes you'll actually love.",
//       "Experience the future of property search with Urban Gravity.",
//     ],
//     CTA: "Start Exploring",
//     img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1073", // Placeholder optimized image
//     Btn: () => console.log("CTA Clicked"),
//   };

//   return (
//     <section className="min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
//       {/* Left side: Content with SectionHero (50%) */}
//       <div className="w-full md:w-1/2 h-[50vh] md:h-screen bg-white">
//         <SectionHero
//           no={sectionData.no}
//           title={sectionData.title}
//           content={sectionData.content}
//           CTA={sectionData.CTA}
//           img={sectionData.img}
//           Btn={sectionData.Btn}
//         />
//       </div>

//       {/* Right side: Optimized Image (50%) */}
//       <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative bg-gray-50 flex items-center justify-center p-8 md:p-12 lg:p-20">
//         <div className="relative w-full h-full max-w-2xl max-h-[80vh] group">
//           {/* Subtle background glow/blob for depth */}
//           <div className="absolute -inset-4 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-700" />

//           <img
//             src={sectionData.img}
//             alt={sectionData.title}
//             className="w-full h-full object-contain relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out"
//             loading="lazy"
//           />

//           {/* Floating badge for added detail */}
//           <div
//             className="absolute top-10 right-0 md:-right-10 bg-white shadow-xl rounded-2xl p-4 md:p-5 z-20 border border-gray-100 animate-bounce"
//             style={{ animationDuration: "3s" }}
//           >
//             <p className="text-sm font-bold text-gray-900 font-hubot">
//               ✨ Featured Home
//             </p>
//             <p className="text-xs text-gray-500 mt-1">Lagos, Nigeria</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollSection;

import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import DownloadButton from '@/components/ui/DownloadButton';
import { NumberImage } from '@/pages/landing/NumberImage';
import { useTheme } from '@/contexts/ThemeContext';

// ── Phone images (one per section) ─────────────────────────────────────────
import PhoneLogin from '@/assets/images/phones/iPhone-Login.png';
import PhoneMatch from '@/assets/images/phones/Match.png';
import PhoneMoveIn from '@/assets/images/phones/Move-In.png';

// ── Texture images used as fill inside the large number ────────────────────
import Texture1 from '@/assets/images/pexels-1.jpeg';
import Texture2 from '@/assets/images/pexels-2.jpg';
import Texture3 from '@/assets/images/pexels-3.jpg';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface ScrollSectionItem {
  number: number;
  numberImageUrl: string;
  heading: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  phoneImageSrc: string;
  accentColor?: string;
}

// ---------------------------------------------------------------------------
// Default section data — swap out copy / textures as needed
// ---------------------------------------------------------------------------
const SECTIONS: ScrollSectionItem[] = [
  {
    number: 1,
    numberImageUrl: Texture1,
    heading: 'Discover Something New',
    subtitle:
      'Explore a world of possibilities right at your fingertips. Built for speed, designed for you.',
    ctaLabel: 'Get Started',
    phoneImageSrc: PhoneLogin,
    accentColor: '#FFCA08',
  },
  {
    number: 2,
    numberImageUrl: Texture2,
    heading: 'Stay Connected Always',
    subtitle:
      'Real-time updates, seamless sync across devices. Your life, perfectly in sync wherever you go.',
    ctaLabel: 'Learn More',
    phoneImageSrc: PhoneMatch,
    accentColor: '#FFCA08',
  },
  {
    number: 3,
    numberImageUrl: Texture3,
    heading: 'Achieve More Together',
    subtitle:
      'Collaborate with your team, share instantly, and move faster than ever before.',
    ctaLabel: 'Download Now',
    phoneImageSrc: PhoneMoveIn,
    accentColor: '#FFCA08',
  },
];

// ---------------------------------------------------------------------------
// useInView hook
// ---------------------------------------------------------------------------
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
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

// ---------------------------------------------------------------------------
// Single Section
// ---------------------------------------------------------------------------
interface SectionProps {
  item: ScrollSectionItem;
  index: number;
  total: number;
}

const Section: React.FC<SectionProps> = ({ item, index, total }) => {
  const { ref, inView } = useInView();
  const { isDark } = useTheme();

  // Light mode: alternating white / soft grey. Dark mode: near-black.
  const bgLight = index % 2 === 0 ? '#ffffff' : '#f8f8f8';
  const bgDark = index % 2 === 0 ? '#0a0a0f' : '#0d0a12';

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(36px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const fadeLeft = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(56px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        background: isDark ? bgDark : bgLight,
        transition: 'background 0.4s ease',
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 55% 55% at 75% 50%, ${item.accentColor}14 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* ── LEFT — 50% ──────────────────────────────────────────── */}
      <div
        style={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 4% 0 8%',
          position: 'relative',
          zIndex: 1,
          gap: 0,
        }}
      >
        {/* Image-filled number */}
        <div style={{ ...fadeUp(0), marginBottom: '4px' }}>
          <NumberImage
            value={item.number}
            imageUrl={item.numberImageUrl}
            size={200}
            fontWeight="extrabold"
          />
        </div>

        {/* Heading */}
        <h2
          className="font-hubot"
          style={{
            ...fadeUp(0.12),
            fontSize: 'clamp(26px, 3vw, 48px)',
            fontWeight: 800,
            color: isDark ? '#ffffff' : '#0a0a0f',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 14px',
            transition: 'color 0.4s ease',
          }}
        >
          {item.heading}
        </h2>

        {/* Subtitle */}
        <p
          className="font-hubot"
          style={{
            ...fadeUp(0.22),
            fontSize: 'clamp(13px, 1.2vw, 17px)',
            fontWeight: 400,
            color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
            lineHeight: 1.7,
            margin: '0 0 36px',
            maxWidth: '400px',
            transition: 'color 0.4s ease',
          }}
        >
          {item.subtitle}
        </p>

        {/* CTA — reuses existing Button component */}
        <div style={fadeUp(0.32)}>
          <Button
            variant="primary"
            size="xl"
            onClick={item.onCtaClick}
            iconName="ArrowRight"
            iconPosition="right"
            className="px-10"
          >
            {item.ctaLabel}
          </Button>
        </div>
      </div>

      {/* ── RIGHT — 50% ─────────────────────────────────────────── */}
      <div
        style={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: '44px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Phone image */}
        <div
          style={{
            ...fadeLeft(0.1),
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <img
            src={item.phoneImageSrc}
            alt="App screenshot"
            style={{
              maxHeight: '74vh',
              maxWidth: '85%',
              objectFit: 'contain',
              filter: isDark
                ? 'drop-shadow(0 28px 60px rgba(0,0,0,0.65))'
                : 'drop-shadow(0 20px 48px rgba(0,0,0,0.18))',
            }}
          />
        </div>

        {/* Download badges */}
        <div style={{ ...fadeUp(0.42), paddingTop: '20px' }}>
          <DownloadButton size="md" layout="row" />
        </div>
      </div>

      {/* Progress dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '8%',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          opacity: 0.35,
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? '22px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: i === index ? item.accentColor : (isDark ? '#fff' : '#999'),
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------
// ScrollSections — main export
// ---------------------------------------------------------------------------
interface ScrollSectionsProps {
  sections?: ScrollSectionItem[];
}

const ScrollSections: React.FC<ScrollSectionsProps> = ({
  sections = SECTIONS,
}) => (
  <div style={{ width: '100%' }}>
    {sections.map((item, index) => (
      <Section key={index} item={item} index={index} total={sections.length} />
    ))}
  </div>
);

export default ScrollSections;