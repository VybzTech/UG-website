import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Pencil } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';

// Confetti particle data
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  angle: (i / 20) * 360,
  distance: 60 + Math.random() * 60,
  size: 4 + Math.random() * 6,
  delay: Math.random() * 0.3,
  color: i % 3 === 0 ? '#FFCA08' : i % 3 === 1 ? '#FFF3CC' : '#1A1A1A',
}));

const stats = [
  { label: 'Role', value: 'Tenant', color: '#1A1A1A' },
  { label: 'Tier', value: 'Free', color: '#B8860B' },
  { label: 'Daily Swipes', value: '10', color: '#1A1A1A' },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Preview() {
  const navigate = useNavigate();
  const { initializeMockData } = useAppStore();

  const handleComplete = () => {
    initializeMockData();
    navigate('/tenant');
  };

  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="w-full text-center"
    >
      {/* Confetti burst + checkmark */}
      <motion.div
        variants={fadeUp}
        className="flex justify-center mb-8 relative"
      >
        {/* Particles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{
                x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
                y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0.5],
              }}
              transition={{
                delay: p.delay + 0.3,
                duration: 0.9,
                ease: 'easeOut',
              }}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
              }}
            />
          ))}
        </div>

        {/* Checkmark circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18,
            delay: 0.1,
          }}
          className="relative w-24 h-24 bg-[#FFCA08] rounded-full flex items-center justify-center shadow-xl shadow-[#FFCA08]/30 z-10"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3, ease: 'easeOut' }}
          >
            <Check size={42} className="text-[#1A1A1A]" strokeWidth={3} />
          </motion.div>

          {/* Ping ring */}
          <motion.div
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full bg-[#FFCA08]"
          />
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.div variants={fadeUp} className="mb-8">
        <div className="inline-flex items-center gap-1.5 bg-[#FFCA08]/12 border border-[#FFCA08]/25 rounded-full px-3 py-1 mb-4">
          <Sparkles size={12} className="text-[#FFCA08]" />
          <span className="font-hubot text-xs font-semibold text-[#1A1A1A]">
            Profile created
          </span>
        </div>
        <h1 className="font-hubot font-bold text-4xl text-[#1A1A1A] mb-3 leading-tight">
          You're all set!
        </h1>
        <p className="font-hubot text-sm text-[#666] max-w-xs mx-auto leading-relaxed">
          Your profile is live. Start exploring properties matched to your preferences.
        </p>
      </motion.div>

      {/* Profile summary card */}
      <motion.div
        variants={fadeUp}
        className="bg-[#FAFAFA] border border-[#EFEFEF] rounded-2xl p-5 mb-7 text-left"
      >
        <p className="font-hubot text-xs font-semibold text-[#999] uppercase tracking-widest mb-4">
          Your profile summary
        </p>
        <div className="space-y-3.5">
          {stats.map((stat, i) => (
            <div key={stat.label}>
              <div className="flex items-center justify-between">
                <span className="font-hubot text-sm text-[#666]">
                  {stat.label}
                </span>
                <span
                  className="font-hubot text-sm font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="h-px bg-[#EFEFEF] mt-3.5" />
              )}
            </div>
          ))}
        </div>

        {/* Yellow accent bar at bottom */}
        <div className="mt-5 h-1 w-full bg-[#F0F0F0] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '60%' }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            className="h-full bg-[#FFCA08] rounded-full"
          />
        </div>
        <p className="font-hubot text-xs text-[#999] mt-2">
          Profile 60% complete — add more details to boost matches
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div variants={fadeUp} className="space-y-3">
        <Button
          onClick={handleComplete}
          fullWidth
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
        >
          Start Exploring
        </Button>

        <Button
          onClick={() => navigate('/basic-info')}
          variant="ghost"
          fullWidth
          size="lg"
          icon={Pencil}
          iconPosition="left"
          iconSize={15}
        >
          Edit Profile
        </Button>
      </motion.div>
    </motion.div>
  );
}
