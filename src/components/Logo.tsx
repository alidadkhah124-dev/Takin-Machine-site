import { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 'md', className = '', showText = true }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-sm', subtext: 'text-xs' },
    md: { container: 'w-12 h-12', text: 'text-lg', subtext: 'text-xs' },
    lg: { container: 'w-20 h-20', text: 'text-2xl', subtext: 'text-sm' },
  };

  const currentSize = sizes[size];

  if (imageError) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className={`${currentSize.container} bg-gradient-to-br from-bronze-400 to-bronze-600 rounded-xl flex items-center justify-center shadow-lg`}>
          <svg viewBox="0 0 40 40" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
            <path d="M10 26L20 12L30 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="20" r="6" fill="white" fillOpacity="0.3" />
            <path d="M20 14V26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        {showText && (
          <div>
            <h1 className={`${currentSize.text} font-bold text-white`}>تکین ماشین مانا</h1>
            <p className={`${currentSize.subtext} text-gray-300`}>راهکارهای مهندسی، ماشینکاری و ساخت</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${currentSize.container} rounded-xl overflow-hidden shadow-lg bg-white`}>
        <img
          src="/LOGO.png"
          alt="تکین ماشین مانا"
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
        />
      </div>
      {showText && (
        <div>
          <h1 className={`${currentSize.text} font-bold text-white`}>تکین ماشین مانا</h1>
          <p className={`${currentSize.subtext} text-gray-300`}>راهکارهای مهندسی، ماشینکاری و ساخت</p>
        </div>
      )}
    </div>
  );
}

export function LogoIcon({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
  };

  return (
    <div className={`${sizes[size]} bg-gradient-to-br from-bronze-400 to-bronze-600 rounded-xl flex items-center justify-center shadow-lg ${className}`}>
      <svg viewBox="0 0 40 40" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
        <path d="M10 26L20 12L30 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="6" fill="white" fillOpacity="0.3" />
        <path d="M20 14V26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
