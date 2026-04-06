import { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import ugLogo from '@/assets/images/ug-logo.png';
import onboard1 from '@/assets/images/onboarding/Onboarding-1.png';
import onboard2 from '@/assets/images/onboarding/Onboarding-2.png';
import onboard3 from '@/assets/images/onboarding/Onboarding-3.png';

const slides = [
  {
    image: onboard1,
    tag: 'Smart Matching',
    title: 'Find Your\nPerfect Match',
    subtitle:
      'Swipe through thousands of curated properties that fit your budget, location, and lifestyle — all in one tap.',
    bg: 'from-[#0a0a0f] via-[#111118] to-[#0a0a0f]',
  },
  {
    image: onboard2,
    tag: "It's a Match!",
    title: 'Connect With\nVerified Hosts',
    subtitle:
      'When you and a landlord both show interest, it becomes a match. Chat, negotiate, and seal the deal — zero middlemen.',
    bg: 'from-[#0d0d0a] via-[#14130a] to-[#0d0d0a]',
  },
  {
    image: onboard3,
    tag: 'Secure & Trusted',
    title: 'Move In With\nConfidence',
    subtitle:
      'Verified profiles, transparent agreements, and zero commission fees. Urban Gravity protects every step of your journey.',
    bg: 'from-[#0a0a0f] via-[#0f0f14] to-[#0a0a0f]',
  },
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current],
  );

  const next = () => {
    if (current < slides.length - 1) {
      goTo(current + 1);
    } else {
      navigate('/signup');
    }
  };

  const slide = slides[current];
  const isLast = current === slides.length - 1;

  return (
    <div
      className={`min-h-screen w-full flex flex-col bg-gradient-to-br ${slide.bg} relative overflow-hidden transition-colors duration-700`}
    >
      {/* Background glow */}
      <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-[#FFCA08]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[40vw] h-[40vw] max-w-[350px] max-h-[350px] rounded-full bg-[#FFCA08]/6 blur-[120px] pointer-events-none" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-12 pb-2">
        <div className="flex items-center gap-2.5">
          <img src={ugLogo} alt="Urban Gravity" className="w-8 h-8 object-contain" />
          <span className="font-hubot font-bold text-white text-base">
            Urban<span className="text-[#FFCA08]">Gravity</span>
          </span>
        </div>
        {!isLast && (
          <button
            onClick={() => navigate('/login')}
            className="font-hubot text-sm text-white/50 hover:text-white/80 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
          >
            Skip
          </button>
        )}
      </div>

      {/* Phone mockup image — large center piece */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-8 py-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -60, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[#FFCA08]/15 rounded-[40px] blur-3xl scale-90" />
              <img
                src={slide.image}
                alt={slide.title}
                className="relative w-auto max-w-[280px] sm:max-w-[320px] md:max-w-[360px] object-contain drop-shadow-2xl"
                style={{ maxHeight: '60vh' }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom sheet content */}
      <div className="relative z-10 bg-white rounded-t-[32px] px-7 pt-8 pb-10 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.38, ease: 'easeOut' }}
          >
            {/* Tag pill */}
            <div className="inline-flex items-center gap-1.5 bg-[#FFCA08]/15 border border-[#FFCA08]/30 rounded-full px-3 py-1 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFCA08]" />
              <span className="font-hubot text-xs font-semibold text-[#1A1A1A]">
                {slide.tag}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-hubot font-bold text-3xl text-[#1A1A1A] mb-3 leading-tight whitespace-pre-line">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="font-hubot text-sm text-[#666] leading-relaxed mb-7">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="cursor-pointer transition-all duration-300"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-[#FFCA08] w-7'
                      : i < current
                        ? 'bg-[#FFCA08]/40 w-2'
                        : 'bg-[#E0E0E0] w-2'
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="font-hubot text-xs text-[#999]">
            {current + 1} / {slides.length}
          </span>
        </div>

        {/* CTAs */}
        {isLast ? (
          <div className="space-y-3">
            <Button
              onClick={() => navigate('/signup')}
              fullWidth
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Create an Account
            </Button>
            <p className="text-center font-hubot text-sm text-[#666] pt-1">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[#FFCA08] font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        ) : (
          <Button
            onClick={next}
            fullWidth
            size="lg"
            icon={ChevronRight}
            iconPosition="right"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
