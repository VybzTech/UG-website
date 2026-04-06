import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const GoogleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Min 6 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clear = (field: string) =>
    setErrors((prev) => ({ ...prev, [field]: '' }));

  const handleSignup = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/verify-otp');
    }, 600);
  };

  return (
    <motion.div
      className="w-full"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="mb-7">
        <div className="inline-flex items-center gap-1.5 bg-[#FFCA08]/12 border border-[#FFCA08]/25 rounded-full px-3 py-1 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCA08]" />
          <span className="font-hubot text-xs font-semibold text-[#1A1A1A]">
            Free account
          </span>
        </div>
        <h1 className="font-hubot font-bold text-3xl text-[#1A1A1A] mb-2 leading-tight">
          Create your account
        </h1>
        <p className="font-hubot text-sm text-[#666]">
          Join thousands finding their dream home.
        </p>
      </motion.div>

      {/* Google SSO — top */}
      <motion.div variants={fadeUp} className="mb-5">
        <button
          onClick={() => navigate('/verify-otp')}
          className="w-full flex items-center justify-center gap-3 px-5 py-3 bg-white border border-[#E0E0E0] rounded-xl font-hubot text-sm font-semibold text-[#1A1A1A] hover:border-[#FFCA08]/60 hover:bg-[#FAFAFA] transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer"
        >
          <GoogleIcon />
          Sign up with Google
        </button>
      </motion.div>

      {/* Divider */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-[#E0E0E0]" />
        <span className="font-hubot text-xs text-[#999] font-medium">or with email</span>
        <div className="flex-1 h-px bg-[#E0E0E0]" />
      </motion.div>

      {/* Form */}
      <motion.div variants={fadeUp} className="space-y-4 mb-5">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First name"
            placeholder="John"
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value); clear('firstName'); }}
            error={errors.firstName}
            iconName="User"
          />
          <Input
            label="Last name"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => { setLastName(e.target.value); clear('lastName'); }}
            error={errors.lastName}
          />
        </div>

        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); clear('email'); }}
          error={errors.email}
          autoComplete="email"
          iconName="Mail"
        />

        <Input
          label="Phone number"
          type="tel"
          placeholder="+234 800 000 0000"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); clear('phone'); }}
          error={errors.phone}
          iconName="Phone"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a strong password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); clear('password'); }}
          error={errors.password}
          autoComplete="new-password"
          iconName="Lock"
        />

        <Input
          label="Confirm password"
          type="password"
          placeholder="Repeat your password"
          value={confirmPassword}
          onChange={(e) => { setConfirmPassword(e.target.value); clear('confirmPassword'); }}
          error={errors.confirmPassword}
          autoComplete="new-password"
          iconName="LockKeyhole"
        />
      </motion.div>

      {/* Terms */}
      <motion.p variants={fadeUp} className="font-hubot text-xs text-[#999] text-center mb-5 leading-relaxed">
        By creating an account, you agree to our{' '}
        <span className="text-[#FFCA08] font-semibold cursor-pointer hover:underline">Terms of Service</span>
        {' '}and{' '}
        <span className="text-[#FFCA08] font-semibold cursor-pointer hover:underline">Privacy Policy</span>
      </motion.p>

      {/* Submit */}
      <motion.div variants={fadeUp}>
        <Button
          onClick={handleSignup}
          fullWidth
          size="lg"
          loading={loading}
          icon={ArrowRight}
          iconPosition="right"
          className="mb-6"
        >
          Create Account
        </Button>
      </motion.div>

      {/* Sign in link */}
      <motion.p variants={fadeUp} className="text-center font-hubot text-sm text-[#666]">
        Already have an account?{' '}
        <Link to="/login" className="text-[#FFCA08] font-semibold hover:underline">
          Sign in
        </Link>
      </motion.p>
    </motion.div>
  );
}
