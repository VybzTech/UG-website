import { type InputHTMLAttributes, forwardRef, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-[#666] mb-1.5">{label}</label>}
        <input
          ref={ref}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          className={`w-full px-4 py-3 bg-white border rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#999] transition-colors outline-none ${
            error ? 'border-[#F44336]' : focused ? 'border-[#FFCA08]' : 'border-[#E0E0E0] hover:border-[#999]'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-[#F44336]">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
