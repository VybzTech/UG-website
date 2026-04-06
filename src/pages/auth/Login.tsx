import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAppStore } from '@/store/useAppStore';

const GoogleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { initializeMockData } = useAppStore();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      initializeMockData();
      const lower = email.toLowerCase();
      if (lower.includes('landlord')) {
        navigate('/landlord');
      } else if (lower.includes('officer')) {
        navigate('/officer');
      } else if (lower.includes('agent')) {
        navigate('/agent');
      } else {
        const role =
          useAppStore.getState().currentUser?.primaryRole?.toLowerCase() ||
          'tenant';
        navigate(`/${role}`);
      }
      setLoading(false);
    }, 700);
  };

  const handleGoogleLogin = () => {
    initializeMockData();
    navigate('/tenant');
  };

  return (
    <motion.div
      className="w-full"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="mb-8">
        <div className="inline-flex items-center gap-1.5 bg-[#FFCA08]/12 border border-[#FFCA08]/25 rounded-full px-3 py-1 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCA08]" />
          <span className="font-hubot text-xs font-semibold text-[#1A1A1A]">
            Welcome back
          </span>
        </div>
        <h1 className="font-hubot font-bold text-3xl text-[#1A1A1A] mb-2 leading-tight">
          Sign in to your account
        </h1>
        <p className="font-hubot text-sm text-[#666]">
          Your next home is just a few taps away.
        </p>
      </motion.div>

      {/* Form */}
      <motion.div variants={fadeUp} className="space-y-4 mb-2">
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          iconName="Mail"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          iconName="Lock"
        />
      </motion.div>

      {/* Forgot password */}
      <motion.div variants={fadeUp} className="flex justify-end mb-6">
        <button className="font-hubot text-xs font-semibold text-[#FFCA08] hover:underline cursor-pointer transition-opacity hover:opacity-80">
          Forgot password?
        </button>
      </motion.div>

      {/* Login button */}
      <motion.div variants={fadeUp}>
        <Button
          onClick={handleLogin}
          fullWidth
          size="lg"
          loading={loading}
          icon={ArrowRight}
          iconPosition="right"
          className="mb-5"
        >
          Sign In
        </Button>
      </motion.div>

      {/* Divider */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-[#E0E0E0]" />
        <span className="font-hubot text-xs text-[#999] font-medium">or continue with</span>
        <div className="flex-1 h-px bg-[#E0E0E0]" />
      </motion.div>

      {/* Google SSO */}
      <motion.div variants={fadeUp} className="mb-8">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 px-5 py-3 bg-white border border-[#E0E0E0] rounded-xl font-hubot text-sm font-semibold text-[#1A1A1A] hover:border-[#FFCA08]/60 hover:bg-[#FAFAFA] transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer"
        >
          <GoogleIcon />
          Continue with Google
        </button>
      </motion.div>

      {/* Sign up link */}
      <motion.p variants={fadeUp} className="text-center font-hubot text-sm text-[#666]">
        Don't have an account?{' '}
        <Link to="/signup" className="text-[#FFCA08] font-semibold hover:underline">
          Sign up free
        </Link>
      </motion.p>
    </motion.div>
  );
}
