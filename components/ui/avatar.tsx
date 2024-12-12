import React from "react";

interface AvatarProps {
  children?: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ children, className }) => (
  <div className={`relative inline-flex items-center justify-center rounded-full overflow-hidden ${className}`}>
    {children}
  </div>
);

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  alt,
  className = "",
}) => (
  <img
    className={`w-full h-full object-cover ${className}`}
    src={src}
    alt={alt}
    loading="lazy"
  />
);

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  children,
  className = "",
}) => (
  <div
    className={`flex items-center justify-center w-full h-full bg-gray-300 text-gray-700 text-lg font-bold ${className}`}
  >
    {children}
  </div>
);
