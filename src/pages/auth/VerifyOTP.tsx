import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react';
import Button from '@/components/ui/Button';

const RESEND_SECONDS = 60;

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function VerifyOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(RESEND_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) {
      setCanResend(true);
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const handleChange = (idx: number, val: string) => {
    // Allow pasting full OTP
    if (val.length === 6 && /^\d{6}$/.test(val)) {
      const chars = val.split('');
      setOtp(chars);
      refs.current[5]?.focus();
      return;
    }
    if (val.length > 1) return;
    if (val && !/^\d$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) refs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (otp[idx]) {
        const next = [...otp];
        next[idx] = '';
        setOtp(next);
      } else if (idx > 0) {
        refs.current[idx - 1]?.focus();
      }
    }
    if (e.key === 'ArrowLeft' && idx > 0) refs.current[idx - 1]?.focus();
    if (e.key === 'ArrowRight' && idx < 5) refs.current[idx + 1]?.focus();
  };

  const handleResend = () => {
    if (!canResend) return;
    setCanResend(false);
    setCountdown(RESEND_SECONDS);
    setOtp(['', '', '', '', '', '']);
    refs.current[0]?.focus();
  };

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/choose-role');
    }, 700);
  };

  const isComplete = otp.every((d) => d !== '');

  return (
    <motion.div
      className="w-full text-center"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {/* Icon */}
      <motion.div variants={fadeUp} className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-[#FFCA08]/15 rounded-2xl flex items-center justify-center">
          <ShieldCheck size={32} className="text-[#FFCA08]" strokeWidth={1.8} />
        </div>
      </motion.div>

      {/* Header */}
      <motion.div variants={fadeUp} className="mb-8">
        <h1 className="font-hubot font-bold text-3xl text-[#1A1A1A] mb-3 leading-tight">
          Verify your email
        </h1>
        <p className="font-hubot text-sm text-[#666] leading-relaxed">
          We sent a 6-digit code to{' '}
          <span className="font-semibold text-[#1A1A1A]">your@email.com</span>
          <br />
          Enter it below to continue.
        </p>
      </motion.div>

      {/* OTP boxes */}
      <motion.div variants={fadeUp} className="flex justify-center gap-2.5 sm:gap-3 mb-8">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onFocus={(e) => e.target.select()}
            className={`
              w-12 h-14 sm:w-13 sm:h-15
              text-center text-2xl font-bold font-hubot
              border-2 rounded-2xl
              outline-none
              transition-all duration-200
              ${digit
                ? 'border-[#FFCA08] bg-[#FFCA08]/8 text-[#1A1A1A]'
                : 'border-[#E0E0E0] bg-white text-[#1A1A1A]'
              }
              focus:border-[#FFCA08] focus:ring-4 focus:ring-[#FFCA08]/15
              placeholder:text-[#E0E0E0]
            `}
            placeholder="·"
            autoFocus={i === 0}
          />
        ))}
      </motion.div>

      {/* Verify button */}
      <motion.div variants={fadeUp} className="mb-5">
        <Button
          onClick={handleVerify}
          fullWidth
          size="lg"
          loading={loading}
          disabled={!isComplete}
          icon={ArrowRight}
          iconPosition="right"
        >
          Verify & Continue
        </Button>
      </motion.div>

      {/* Resend */}
      <motion.div variants={fadeUp}>
        {canResend ? (
          <button
            onClick={handleResend}
            className="inline-flex items-center gap-1.5 font-hubot text-sm text-[#FFCA08] font-semibold hover:underline cursor-pointer transition-opacity hover:opacity-80"
          >
            <RotateCcw size={14} />
            Resend code
          </button>
        ) : (
          <p className="font-hubot text-sm text-[#999]">
            Resend code in{' '}
            <span className="font-semibold text-[#1A1A1A]">
              {String(Math.floor(countdown / 60)).padStart(2, '0')}:
              {String(countdown % 60).padStart(2, '0')}
            </span>
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
