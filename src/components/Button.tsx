// ./ui/button.tsx
import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost';  // Customize variants if needed
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  className = '',
  onClick,
  children,
}) => {
  // Define button variants
  const variantClasses = {
    default: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border border-purple-600 text-purple-600 hover:bg-purple-100',
    ghost: 'text-purple-600 hover:bg-purple-100',
  };

  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${className} px-6 py-3 rounded-lg transition-colors duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;
