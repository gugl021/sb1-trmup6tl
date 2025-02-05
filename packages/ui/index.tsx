import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}