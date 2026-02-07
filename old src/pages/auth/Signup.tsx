import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAppStore } from '@/store/useAppStore';

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/verify-otp');
    }, 500);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1A1A1A] font-hubot">
          Create account
        </h1>
        <p className="text-sm text-[#666] mt-1.5">
          Join Urban Gravity to find your perfect home
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4 mb-6">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First name"
            placeholder="John"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: '' }));
            }}
            error={errors.firstName}
          />
          <Input
            label="Last name"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: '' }));
            }}
            error={errors.lastName}
          />
        </div>

        {/* Email */}
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
          }}
          error={errors.email}
          autoComplete="email"
        />

        {/* Phone */}
        <Input
          label="Phone number"
          type="tel"
          placeholder="+234 800 000 0000"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
          }}
          error={errors.phone}
        />

        {/* Password */}
        <div className="w-full">
          <label className="block text-sm font-medium text-[#666] mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
              }}
              autoComplete="new-password"
              className={`w-full px-4 py-3 bg-white border rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#999] transition-colors outline-none pr-12 ${
                errors.password
                  ? 'border-[#F44336]'
                  : 'border-[#E0E0E0] hover:border-[#999] focus:border-[#FFCA08]'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#666] transition-colors p-1 cursor-pointer"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-[#F44336]">{errors.password}</p>
          )}
        </div>

        {/* Confirm password */}
        <div className="w-full">
          <label className="block text-sm font-medium text-[#666] mb-1.5">
            Confirm password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: '' }));
              }}
              autoComplete="new-password"
              className={`w-full px-4 py-3 bg-white border rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#999] transition-colors outline-none pr-12 ${
                errors.confirmPassword
                  ? 'border-[#F44336]'
                  : 'border-[#E0E0E0] hover:border-[#999] focus:border-[#FFCA08]'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#666] transition-colors p-1 cursor-pointer"
              tabIndex={-1}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-[#F44336]">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      {/* Terms notice */}
      <p className="text-center text-xs text-[#999] mb-4">
        By signing up, you agree to our{' '}
        <span className="text-[#FFCA08] font-medium">Terms of Service</span> and{' '}
        <span className="text-[#FFCA08] font-medium">Privacy Policy</span>
      </p>

      {/* Create Account button */}
      <Button
        onClick={handleSignup}
        fullWidth
        size="lg"
        loading={loading}
        className="mb-6"
      >
        Create Account
      </Button>

      {/* Login link */}
      <p className="text-center text-sm text-[#666]">
        Already have an account?{' '}
        <Link
          to="/login"
          className="text-[#FFCA08] font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
