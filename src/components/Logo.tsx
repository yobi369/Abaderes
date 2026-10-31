import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full', showTagline = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Mountain Peak Vector Icon (matching the green peaks from the screenshot) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          className="w-10 h-10 md:w-11 md:h-11"
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background mountain shadow/gradient */}
          <path
            d="M50 12L75 58H25L50 12Z"
            fill="url(#greenGradientLight)"
            opacity="0.9"
          />
          {/* Main front sharp emerald peak */}
          <path
            d="M32 20L58 64H6L32 20Z"
            fill="url(#greenGradientMain)"
          />
          {/* Third overlapping peak */}
          <path
            d="M68 28L92 68H44L68 28Z"
            fill="url(#greenGradientAccent)"
          />
          {/* Clean stylized snow cap / contour lines */}
          <path
            d="M32 20L40 36L32 39L24 35L32 20Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
          <path
            d="M68 28L75 42L68 45L61 41L68 28Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
          {/* Flowing fresh water ribbon under peaks */}
          <path
            d="M4 72C24 64 42 76 60 70C78 64 88 74 96 70"
            stroke="#0284C7"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M14 77C32 71 52 81 72 75C84 71 90 76 94 74"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="greenGradientMain" x1="6" y1="20" x2="58" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="greenGradientAccent" x1="44" y1="28" x2="92" y2="68" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="greenGradientLight" x1="25" y1="12" x2="75" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6EE7B7" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight uppercase leading-tight font-heading ${
          variant === 'light' ? 'text-white' : 'text-slate-900'
        } ${variant === 'compact' ? 'text-base' : 'text-base md:text-lg'}`}>
          <span className="text-emerald-700">MOUNT ABADARES</span>
          <span className="block text-sky-600 font-bold tracking-wider text-xs md:text-sm">FRESH WATER</span>
        </span>
        {showTagline && (
          <span className="text-[11px] text-slate-500 font-medium italic">
            Pure Water. Better Everyday.
          </span>
        )}
      </div>
    </div>
  );
};
