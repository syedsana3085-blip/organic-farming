import { useState } from 'react';
import { Sprout } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Agricultural Field Illustration',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EAF2E8] to-[#DCE8D9] text-[#1B5E20] p-6 text-center ${className}`}
      >
        <Sprout className="w-8 h-8 mb-2 opacity-80" aria-hidden="true" />
        <span className="text-sm font-medium text-[#1A241B]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
