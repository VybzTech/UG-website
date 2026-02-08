import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

const variants: Record<string, string> = {
  primary: 'bg-[#FFCA08] text-[#1A1A1A] hover:bg-[#E6BF22] active:scale-[0.98] shadow-sm',
  secondary: 'bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90 active:scale-[0.98]',
  outline: 'border border-[#E0E0E0] bg-transparent text-[#1A1A1A] hover:bg-[#F5F5F5] active:scale-[0.98]',
  danger: 'bg-[#F44336] text-white hover:bg-[#F44336]/90 active:scale-[0.98]',
  ghost: 'bg-transparent text-[#666] hover:bg-[#F5F5F5] active:scale-[0.98]',
};

const sizes: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-6 py-3 text-base rounded-xl',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, fullWidth, className = '', children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {loading && <Loader2 size={16} className="animate-spin" />}
      {children}
    </button>
  )
);

Button.displayName = 'Button';
export default Button;
