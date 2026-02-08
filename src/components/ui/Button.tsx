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

// import React, {   useRef, type ReactNode, type ButtonHTMLAttributes } from 'react';
// // import { cn } from '@/lib/utils'; // ← optional: if you have clsx/tailwind-merge helper (very common)

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'purple-blue' | 'teal' | 'default';
//   children: ReactNode;
//   className?: string;
//   ripple?: boolean; // default true
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   (
//     {
//       variant = 'default',
//       children,
//       className,
//       ripple = true,
//       onClick,
//       ...props
//     },
//     ref
//   ) => {
//     const buttonRef = useRef<HTMLButtonElement>(null);

//     const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
//       if (!ripple || !buttonRef.current) return;

//       const btn = buttonRef.current;
//       const rect = btn.getBoundingClientRect();
//       const size = Math.max(rect.width, rect.height);

//       const x = event.clientX - rect.left - size / 2;
//       const y = event.clientY - rect.top - size / 2;

//       const circle = document.createElement('span');
//       circle.classList.add(
//         'absolute',
//         'rounded-full',
//         'bg-white/30',
//         'pointer-events-none',
//         'animate-ripple'
//       );
//       circle.style.width = circle.style.height = `${size}px`;
//       circle.style.left = `${x}px`;
//       circle.style.top = `${y}px`;

//       // Remove old ripples if many clicks happen fast
//       const oldRipple = btn.querySelector('.animate-ripple');
//       if (oldRipple) oldRipple.remove();

//       btn.appendChild(circle);

//       // Cleanup after animation
//       setTimeout(() => {
//         circle.remove();
//       }, 700);
//     };

//     const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//       createRipple(e);
//       if (onClick) onClick(e);
//     };

//     // Base styles + variant-specific gradients
//     const baseStyles = `relative overflow-hidden
//       text-white font-medium rounded-lg
//       text-sm px-5 py-2.5 text-center leading-5
//       focus:ring-4 focus:outline-none transition-all duration-200
//       shadow-md hover:shadow-lg active:shadow-sm
//       ${className}`
//     // const baseStyles = cn(
//     //   'relative overflow-hidden',
//     //   'text-white font-medium rounded-lg', // rounded-base → assuming rounded-lg or similar in your tailwind config
//     //   'text-sm px-5 py-2.5 text-center leading-5',
//     //   'focus:ring-4 focus:outline-none transition-all duration-200',
//     //   'shadow-md hover:shadow-lg active:shadow-sm',
//     //   className
//     // );

//     const variantStyles = {
//       'purple-blue':
//         'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800',
//       teal:
//         'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-teal-800/80',
//       default:
//         'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:ring-indigo-300',
//     }[variant];

//     return (
//       <button
//         ref={(node) => {
//           buttonRef.current = node;
//           if (typeof ref === 'function') ref(node);
//           else if (ref) ref.current = node;
//         }}
//         type="button"
//         className={`${baseStyles} ${variantStyles}`}
//         onClick={handleClick}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   }
// );

// Button.displayName = 'Button';

// export default Button;