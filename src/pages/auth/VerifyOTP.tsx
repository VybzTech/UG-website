import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function VerifyOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (idx: number, val: string) => {
    if (val.length > 1) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) refs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) refs.current[idx - 1]?.focus();
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#1A1A1A] mb-1">Verify your account</h1>
      <p className="text-sm text-[#666] mb-8">Enter the 6-digit code sent to your email/phone</p>

      <div className="flex justify-center gap-3 mb-8">
        {otp.map((digit, i) => (
          <input key={i} ref={(el) => { refs.current[i] = el; }} type="text" inputMode="numeric" maxLength={1}
            value={digit} onChange={(e) => handleChange(i, e.target.value)} onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-12 h-14 text-center text-xl font-bold border-2 border-[#E0E0E0] rounded-xl focus:border-[#FFCA08] outline-none transition-colors" />
        ))}
      </div>

      <Button onClick={() => navigate('/choose-role')} fullWidth size="lg" className="mb-4">Verify</Button>

      <p className="text-sm text-[#666]">
        Didn't receive a code?{' '}
        <button className="text-[#FFCA08] font-semibold cursor-pointer">Resend</button>
      </p>
    </div>
  );
}
