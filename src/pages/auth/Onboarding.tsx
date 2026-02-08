import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import onboard1 from '@/assets/images/onboarding/Onboarding-1.png';
import onboard2 from '@/assets/images/onboarding/Onboarding-2.png';
import onboard3 from '@/assets/images/onboarding/Onboarding-3.png';

const slides = [
  { image: onboard1, title: 'Find Your Perfect Match', subtitle: 'Swipe through curated properties that match your preferences and budget.' },
  { image: onboard2, title: "It's a Match!", subtitle: 'Connect with verified landlords and tenants through our matching system.' },
  { image: onboard3, title: 'Secure Agreements', subtitle: 'Move in with confidence using our verified profiles and secure platform.' },
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else navigate('/login');
  };

  return (
    <div className="flex flex-col items-center text-center -mt-8">
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="flex flex-col items-center">
          <img src={slides[current].image} alt="" className="w-64 h-64 object-contain mb-8" />
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">{slides[current].title}</h2>
          <p className="text-sm text-[#666] max-w-xs mb-8">{slides[current].subtitle}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2 mb-8">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${i === current ? 'bg-[#FFCA08] w-8' : 'bg-[#E0E0E0]'}`} />
        ))}
      </div>

      <div className="w-full space-y-3">
        <Button onClick={next} fullWidth size="lg">{current === slides.length - 1 ? 'Get Started' : 'Next'}</Button>
        {current < slides.length - 1 && (
          <Button onClick={() => navigate('/login')} variant="ghost" fullWidth size="lg">Skip</Button>
        )}
      </div>
    </div>
  );
}
