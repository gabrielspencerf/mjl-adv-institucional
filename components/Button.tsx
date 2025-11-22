import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ fullWidth, variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-mjl-gold hover:bg-mjl-goldLight text-white hover:text-mjl-dark focus:ring-mjl-gold shadow-lg hover:shadow-glow transform hover:-translate-y-0.5 border border-transparent",
    outline: "border border-mjl-gold text-mjl-gold hover:bg-mjl-gold hover:text-white focus:ring-mjl-gold bg-transparent",
    white: "bg-white text-mjl-dark hover:bg-gray-50 shadow-md hover:shadow-lg focus:ring-white border border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;