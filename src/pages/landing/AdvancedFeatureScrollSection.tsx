'use client';

import React, { useRef, useEffect, useState, type ReactNode } from 'react';
import { HubotH1, HubotH2, HubotP } from '../../components/ui/HubotText';

/**
 * ============================================================================
 * ADVANCED FEATURE SCROLL SECTION
 * With full customization, multiple variants, and extended features
 * ============================================================================
 */

export interface Feature {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  phoneImage: string;
  ctaText?: string;
  ctaAction?: () => void;
  downloadButtons?: {
    label: string;
    icon: string;
    url: string;
  }[];
  badge?: string;
  stats?: Array<{
    label: string;
    value: string;
  }>;
  highlights?: string[];
}

export interface ScrollProgress {
  current: number;
  progress: number;
}

export type SectionVariant = 'default' | 'minimal' | 'detailed' | '3d';
export type AnimationSpeed = 'slow' | 'normal' | 'fast';

export interface FeatureScrollSectionProps {
  features: Feature[];
  variant?: SectionVariant;
  animationSpeed?: AnimationSpeed;
  showProgressBar?: boolean;
  enableParallax?: boolean;
  onFeatureChange?: (featureIndex: number) => void;
  phonePosition?: 'left' | 'right';
  theme?: {
    primaryColor?: string;
    accentColor?: string;
    backgroundColor?: string;
  };
  children?: ReactNode;
}

// Default features for demo
const DEFAULT_FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Create a Profile',
    subtitle: 'Step 1: Profile Setup',
    description:
      'Create a Profile, No Hidden Fees. Smart matching, AI-powered recommendations based on your lifestyle.',
    phoneImage: '/images/phone-create-profile.png',
    ctaText: 'Sign Up',
    badge: 'STEP 1 OF 3',
    stats: [
      { label: 'Users', value: '10K+' },
      { label: 'Verified', value: '95%' },
    ],
    highlights: [
      '✓ No hidden fees',
      '✓ Smart matching',
      '✓ AI recommendations',
    ],
    downloadButtons: [
      { label: 'App Store', icon: '🍎', url: 'https://apps.apple.com' },
      { label: 'Google Play', icon: '🤖', url: 'https://play.google.com' },
    ],
  },
  {
    id: 2,
    title: 'Swipe & Match',
    subtitle: 'Step 2: Discovery',
    description:
      'Find your Dream Home. Just you and your preferences. No middle-man! Discover properties that match your lifestyle.',
    phoneImage: '/images/phone-swipe-match.png',
    ctaText: 'Start Swiping',
    badge: 'STEP 2 OF 3',
    stats: [
      { label: 'Properties', value: '5K+' },
      { label: 'Matches', value: '50K+' },
    ],
    highlights: [
      '✓ Real-time matches',
      '✓ Smart filters',
      '✓ Instant notifications',
    ],
    downloadButtons: [
      { label: 'App Store', icon: '🍎', url: 'https://apps.apple.com' },
      { label: 'Google Play', icon: '🤖', url: 'https://play.google.com' },
    ],
  },
  {
    id: 3,
    title: 'Move In Today!',
    subtitle: 'Step 3: Secure Payment',
    description:
      'Match with your choice & pay Landlords directly once satisfied. Back out at any time. Join 1000+ early users.',
    phoneImage: '/images/phone-payment.png',
    ctaText: 'Download App',
    badge: 'STEP 3 OF 3',
    stats: [
      { label: 'Cities', value: '15' },
      { label: 'Uptime', value: '99.9%' },
    ],
    highlights: [
      '✓ Secure escrow',
      '✓ Direct payment',
      '✓ 30-day guarantee',
    ],
    downloadButtons: [
      { label: 'App Store', icon: '🍎', url: 'https://apps.apple.com' },
      { label: 'Google Play', icon: '🤖', url: 'https://play.google.com' },
    ],
  },
];

/**
 * StepNumber Component
 */
interface StepNumberProps {
  number: number;
  opacity: number;
  scale: number;
  backgroundImage?: string;
}

const StepNumber: React.FC<StepNumberProps> = ({
  number,
  opacity,
  scale,
  backgroundImage,
}) => {
  return (
    <div
      className="relative w-32 h-40 md:w-48 md:h-64 flex-shrink-0"
      style={{
        opacity,
        transform: `scale(${scale})`,
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
      }}
    >
      <div
        className="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <HubotH1
          fontWeight="extrabold"
          size={120}
          className="text-white drop-shadow-2xl"
        >
          {number}
        </HubotH1>
      </div>
    </div>
  );
};

/**
 * PhoneImage Component - Enhanced
 */
interface PhoneImageProps {
  src: string;
  rotation: number;
  opacity: number;
  variant?: SectionVariant;
}

const PhoneImage: React.FC<PhoneImageProps> = ({
  src,
  rotation,
  opacity,
  variant = 'default',
}) => {
  const transform3d = () => {
    if (variant === '3d') {
      return `perspective(1200px) rotateZ(${rotation}deg) rotateX(${rotation / 2}deg) rotateY(${rotation / 3}deg)`;
    }
    return `perspective(1200px) rotateZ(${rotation}deg)`;
  };

  return (
    <div
      className="flex-shrink-0 w-64 h-auto md:w-80"
      style={{
        opacity,
        transform: transform3d(),
        transition: 'all 0.3s ease-out',
      }}
    >
      <div className="relative">
        {/* Phone mockup frame */}
        <div className="bg-black rounded-[40px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="bg-white rounded-[32px] overflow-hidden aspect-video md:aspect-[9/19] relative">
            <img src={src} alt="App screen" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl" />

        {/* Glow effect (optional) */}
        <div className="absolute inset-0 rounded-[40px] pointer-events-none opacity-20">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-yellow-400 to-transparent" />
        </div>
      </div>
    </div>
  );
};

/**
 * DownloadButtons Component - Enhanced
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
      className="flex gap-3 mt-8 flex-wrap"
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
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 hover:scale-105 transition-all duration-200 group"
        >
          <span className="group-hover:scale-110 transition-transform">
            {button.icon}
          </span>
          <span className="text-sm font-medium">{button.label}</span>
        </a>
      ))}
    </div>
  );
};

/**
 * Feature Highlights Component
 */
interface HighlightsProps {
  items: string[];
  opacity: number;
}

const Highlights: React.FC<HighlightsProps> = ({ items, opacity }) => {
  return (
    <div
      className="mt-6 space-y-2"
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      {items.map((item, idx) => (
        <HubotP
          key={idx}
          fontWeight="medium"
          size={14}
          className="text-green-600 flex items-center gap-2"
        >
          {item}
        </HubotP>
      ))}
    </div>
  );
};

/**
 * Stats Component
 */
interface StatsProps {
  stats: Array<{ label: string; value: string }>;
  opacity: number;
}

const Stats: React.FC<StatsProps> = ({ stats, opacity }) => {
  return (
    <div
      className="grid grid-cols-2 gap-4 mt-8"
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-gray-50 rounded-lg p-4">
          <HubotP fontWeight="bold" size={20} className="text-black">
            {stat.value}
          </HubotP>
          <HubotP fontWeight="regular" size={12} className="text-gray-600 mt-1">
            {stat.label}
          </HubotP>
        </div>
      ))}
    </div>
  );
};

/**
 * Progress Bar Component
 */
interface ProgressBarProps {
  current: number;
  total: number;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, progress }) => {
  const progressPercent = ((current + progress) / total) * 100;

  return (
    <div className="fixed bottom-8 left-8 right-8 md:left-12 md:right-12 z-50">
      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs font-medium text-gray-600">
          {current + 1} of {total}
        </span>
        <span className="text-xs font-medium text-gray-600">
          {Math.round(progressPercent)}%
        </span>
      </div>
    </div>
  );
};

/**
 * Main AdvancedFeatureScrollSection Component
 */
export const AdvancedFeatureScrollSection: React.FC<
  FeatureScrollSectionProps
> = ({
  features = DEFAULT_FEATURES,
  variant = 'default',
  animationSpeed = 'normal',
  showProgressBar = false,
  enableParallax = true,
  onFeatureChange,
  phonePosition = 'right',
  theme = {},
  children,
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
      current: 0,
      progress: 0,
    });

    const animationSpeedMap = {
      slow: 0.5,
      normal: 0.3,
      fast: 0.15,
    };

    const animationDuration = animationSpeedMap[animationSpeed];

    useEffect(() => {
      const handleScroll = () => {
        if (!sectionRef.current || !containerRef.current) return;

        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        const sectionStart = sectionHeight;
        const viewportCenter = window.innerHeight / 2;
        const distance = sectionRect.top - viewportCenter;
        const totalDistance = sectionHeight + window.innerHeight;

        const rawProgress =
          ((sectionStart - distance) / totalDistance) * features.length;
        const clampedProgress = Math.max(
          0,
          Math.min(features.length - 0.01, rawProgress)
        );

        const currentFeatureIndex = Math.floor(clampedProgress);
        const progressWithinFeature = clampedProgress - currentFeatureIndex;

        const newProgress = {
          current: currentFeatureIndex,
          progress: progressWithinFeature,
        };

        setScrollProgress(newProgress);

        // Call callback when feature changes
        if (onFeatureChange && currentFeatureIndex !== scrollProgress.current) {
          onFeatureChange(currentFeatureIndex);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [features.length, scrollProgress.current, onFeatureChange]);

    const currentFeature = features[scrollProgress.current];
    const nextFeature =
      scrollProgress.current < features.length - 1
        ? features[scrollProgress.current + 1]
        : currentFeature;

    const currentOpacity = 1 - scrollProgress.progress;
    const nextOpacity = scrollProgress.progress;
    const currentScale = 0.95 + scrollProgress.progress * 0.05;
    const nextScale = 0.9 + scrollProgress.progress * 0.1;
    const phoneRotation = scrollProgress.progress * 25;

    const contentOrder = phonePosition === 'left' ? 'flex-row-reverse' : 'flex-row';

    return (
      <div
        ref={sectionRef}
        className="relative w-full min-h-[300vh] bg-gradient-to-b from-white to-gray-50"
        style={{ backgroundColor: theme.backgroundColor }}
      >
        {/* Fixed container */}
        <div className="fixed inset-0 w-full h-screen overflow-hidden bg-white">
          <div
            ref={containerRef}
            className={`w-full h-full px-6 md:px-12 py-12 flex ${contentOrder} items-center justify-between gap-12`}
            style={{
              backgroundImage: enableParallax
                ? `url('/images/parallax-bg.jpg')`
                : undefined,
              backgroundAttachment: enableParallax ? 'fixed' : 'scroll',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Background overlay for parallax */}
            {enableParallax && (
              <div className="absolute inset-0 bg-white/95 pointer-events-none" />
            )}

            {/* Left side - Text content */}
            <div className="flex-1 max-w-xl relative z-10">
              {/* Badge */}
              {currentFeature.badge && (
                <div
                  style={{
                    opacity: currentOpacity,
                    transition: `opacity ${animationDuration}s ease-out`,
                  }}
                >
                  <HubotP
                    fontWeight="bold"
                    size={12}
                    className="text-yellow-500 uppercase tracking-wider mb-4"
                  >
                    {currentFeature.badge}
                  </HubotP>
                </div>
              )}

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
                  transition: `all ${animationDuration}s ease-out`,
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

                {/* Highlights */}
                {currentFeature.highlights && (
                  <Highlights
                    items={currentFeature.highlights}
                    opacity={currentOpacity}
                  />
                )}

                {/* CTA Button */}
                <button
                  onClick={currentFeature.ctaAction}
                  className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all duration-200 mb-8 hover:scale-105 active:scale-95"
                  style={{
                    fontFamily: "'Hubot', sans-serif",
                  }}
                >
                  {currentFeature.ctaText}
                </button>
              </div>

              {/* Stats */}
              {currentFeature.stats && (
                <Stats stats={currentFeature.stats} opacity={currentOpacity} />
              )}

              {/* Download buttons */}
              <DownloadButtons
                buttons={currentFeature.downloadButtons}
                opacity={currentOpacity}
              />
            </div>

            {/* Right side - Phone images */}
            <div className="flex-1 flex items-center justify-center relative h-full min-h-[600px] z-10">
              <div className="absolute">
                <PhoneImage
                  src={currentFeature.phoneImage}
                  rotation={-phoneRotation}
                  opacity={currentOpacity}
                  variant={variant}
                />
              </div>

              <div className="absolute">
                <PhoneImage
                  src={nextFeature.phoneImage}
                  rotation={25 - phoneRotation}
                  opacity={nextOpacity}
                  variant={variant}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        {showProgressBar && (
          <ProgressBar
            current={scrollProgress.current}
            total={features.length}
            progress={scrollProgress.progress}
          />
        )}

        {/* Custom children */}
        {children}
      </div>
    );
  };

export default AdvancedFeatureScrollSection;
