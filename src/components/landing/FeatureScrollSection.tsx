'use client';

import React, { useRef, useEffect, useState } from 'react';
import { HubotH1, HubotH2, HubotP } from '../ui/HubotText';

// Type definitions
interface Feature {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  phoneImage: string;
  ctaText?: string;
  downloadButtons?: {
    label: string;
    icon: string;
    url: string;
  }[];
}

interface ScrollProgress {
  current: number;
  progress: number; // 0-1 within current section
}

// Feature data - customize with your content and images
export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Create a Profile',
    subtitle: 'Create a Profile.',
    description:
      'Create a Profile, No Hidden Fees. Smart matching, AI-powered recommendations based on your lifestyle.',
    phoneImage: '/images/phone-create-profile.png',
    ctaText: 'Sign Up',
    downloadButtons: [
      {
        label: 'App Store',
        icon: '🍎',
        url: 'https://apps.apple.com',
      },
      {
        label: 'Google Play',
        icon: '🤖',
        url: 'https://play.google.com',
      },
    ],
  },
  {
    id: 2,
    title: 'Swipe & Match',
    subtitle: 'Swipe & Match.',
    description:
      'Find your Dream Home. Just you and your preferences. No middle-man! Discover properties that match your lifestyle with our intelligent matching algorithm.',
    phoneImage: '/images/phone-swipe-match.png',
    ctaText: 'Start Swiping',
    downloadButtons: [
      {
        label: 'App Store',
        icon: '🍎',
        url: 'https://apps.apple.com',
      },
      {
        label: 'Google Play',
        icon: '🤖',
        url: 'https://play.google.com',
      },
    ],
  },
  {
    id: 3,
    title: 'Move In Today!',
    subtitle: 'Move In Today!',
    description:
      'Match with your choice & pay Landlords directly once you\'re satisfied. Back out at any time. Join 1000+ early users.',
    phoneImage: '/images/phone-payment.png',
    ctaText: 'Download App',
    downloadButtons: [
      {
        label: 'App Store',
        icon: '🍎',
        url: 'https://apps.apple.com',
      },
      {
        label: 'Google Play',
        icon: '🤖',
        url: 'https://play.google.com',
      },
    ],
  },
];

/**
 * StepNumber Component
 * Large animated number with background image
 */
interface StepNumberProps {
  number: number;
  opacity: number;
  scale: number;
}

const StepNumber: React.FC<StepNumberProps> = ({ number, opacity, scale }) => {
  return (
    <div
      className="relative w-32 h-40 md:w-48 md:h-64 flex-shrink-0"
      style={{
        opacity,
        transform: `scale(${scale})`,
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
      }}
    >
      {/* Background image container */}
      <div
        className="absolute inset-0 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url('/images/step-bg-${number}.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Large number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <HubotH1
          fontWeight="extrabold"
          size={120}
          className="text-white drop-shadow-lg"
        >
          {number}
        </HubotH1>
      </div>
    </div>
  );
};

/**
 * PhoneImage Component
 * Rotating phone mockup with image inside
 */
interface PhoneImageProps {
  src: string;
  rotation: number;
  opacity: number;
}

const PhoneImage: React.FC<PhoneImageProps> = ({ src, rotation, opacity }) => {
  return (
    <div
      className="flex-shrink-0 w-64 h-auto md:w-80"
      style={{
        opacity,
        transform: `perspective(1200px) rotateZ(${rotation}deg)`,
        transition: 'all 0.3s ease-out',
      }}
    >
      <div className="relative">
        {/* Phone mockup frame */}
        <div className="bg-black rounded-[40px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="bg-white rounded-[32px] overflow-hidden aspect-video md:aspect-[9/19] relative">
            {/* Phone image */}
            <img
              src={src}
              alt="App screen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl" />
      </div>
    </div>
  );
};

/**
 * DownloadButtons Component
 * iOS and Android download buttons
 */
interface DownloadButtonsProps {
  buttons?: Feature['downloadButtons'];
  opacity: number;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({
  buttons = [],
  opacity,
}) => {
  return (
    <div
      className="flex gap-3 mt-8"
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      {buttons.map((button, idx) => (
        <a
          key={idx}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition-opacity"
        >
          <span>{button.icon}</span>
          <span className="text-sm font-medium">{button.label}</span>
        </a>
      ))}
    </div>
  );
};

/**
 * FeatureScrollSection Component
 * Main component with scroll-triggered animations
 */
export const FeatureScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    current: 0,
    progress: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const containerHeight = containerRef.current.offsetHeight;

      // Calculate when section comes into view
      const sectionStart = sectionHeight;
      const viewportCenter = window.innerHeight / 2;

      // Distance from viewport center to section
      const distance = sectionRect.top - viewportCenter;

      // Total scrollable distance (section height + viewport height)
      const totalDistance = sectionHeight + window.innerHeight;

      // Calculate progress (0 to FEATURES.length)
      const rawProgress =
        ((sectionStart - distance) / totalDistance) * FEATURES.length;
      const clampedProgress = Math.max(
        0,
        Math.min(FEATURES.length - 0.01, rawProgress)
      );

      const currentFeatureIndex = Math.floor(clampedProgress);
      const progressWithinFeature = clampedProgress - currentFeatureIndex;

      setScrollProgress({
        current: currentFeatureIndex,
        progress: progressWithinFeature,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentFeature = FEATURES[scrollProgress.current];
  const nextFeature =
    scrollProgress.current < FEATURES.length - 1
      ? FEATURES[scrollProgress.current + 1]
      : currentFeature;

  // Calculate animation values
  const currentOpacity = 1 - scrollProgress.progress;
  const nextOpacity = scrollProgress.progress;
  const currentScale = 0.95 + scrollProgress.progress * 0.05;
  const nextScale = 0.9 + scrollProgress.progress * 0.1;
  const phoneRotation = scrollProgress.progress * 25; // Rotate up to 25 degrees

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[300vh] bg-gradient-to-b from-white to-gray-50"
    >
      {/* Fixed container */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden bg-white">
        <div
          ref={containerRef}
          className="w-full h-full px-6 md:px-12 py-12 flex items-center justify-between gap-12"
        >
          {/* Left side - Text content */}
          <div className="flex-1 max-w-xl">
            {/* Step number with background */}
            <div className="mb-12 relative h-64 md:h-80">
              <StepNumber
                number={currentFeature.id}
                opacity={currentOpacity}
                scale={currentScale}
              />
              <StepNumber
                number={nextFeature.id}
                opacity={nextOpacity}
                scale={nextScale}
              />
            </div>

            {/* Text content */}
            <div
              style={{
                opacity: currentOpacity,
                transform: `translateY(${scrollProgress.progress * 20}px)`,
                transition: 'all 0.3s ease-out',
              }}
            >
              {/* Subtitle */}
              <HubotP
                fontWeight="medium"
                size={14}
                className="text-gray-600 uppercase tracking-wider mb-2"
              >
                {currentFeature.subtitle}
              </HubotP>

              {/* Main title */}
              <HubotH2
                fontWeight="extrabold"
                size={42}
                className="text-black mb-6 leading-tight"
              >
                {currentFeature.title}
              </HubotH2>

              {/* Description */}
              <HubotP
                fontWeight="regular"
                size={18}
                className="text-gray-700 leading-relaxed mb-8"
              >
                {currentFeature.description}
              </HubotP>

              {/* CTA Button */}
              <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors duration-200 mb-8">
                {currentFeature.ctaText}
              </button>
            </div>

            {/* Download buttons */}
            <DownloadButtons
              buttons={currentFeature.downloadButtons}
              opacity={currentOpacity}
            />
          </div>

          {/* Right side - Phone images */}
          <div className="flex-1 flex items-center justify-center relative h-full min-h-[600px]">
            {/* Current phone */}
            <div className="absolute">
              <PhoneImage
                src={currentFeature.phoneImage}
                rotation={-phoneRotation}
                opacity={currentOpacity}
              />
            </div>

            {/* Next phone */}
            <div className="absolute">
              <PhoneImage
                src={nextFeature.phoneImage}
                rotation={25 - phoneRotation}
                opacity={nextOpacity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureScrollSection;
