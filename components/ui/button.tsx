import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);
