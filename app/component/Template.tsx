'use client';

import { useEffect, useState } from 'react';
import { animatePageIn } from '@/app/lib/animations';
import { useTheme } from '@/app/component/ThemeContext';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    animatePageIn();
    
    // Reset animation state after transition completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1200); // Slightly longer than animation duration

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when pathname changes

  return (
    <div className="relative">
      {/* Transition banners */}
      <div
        id="banner-1"
        className={`min-h-screen z-[9999] fixed top-0 left-0 w-1/4 pointer-events-none transition-colors ${
          isDark ? 'bg-neutral-950' : 'bg-neutral-100'
        }`}
      />
      <div
        id="banner-2"
        className={`min-h-screen z-[9999] fixed top-0 left-1/4 w-1/4 pointer-events-none transition-colors ${
          isDark ? 'bg-neutral-950' : 'bg-neutral-100'
        }`}
      />
      <div
        id="banner-3"
        className={`min-h-screen z-[9999] fixed top-0 left-2/4 w-1/4 pointer-events-none transition-colors ${
          isDark ? 'bg-neutral-950' : 'bg-neutral-100'
        }`}
      />
      <div
        id="banner-4"
        className={`min-h-screen z-[9999] fixed top-0 left-3/4 w-1/4 pointer-events-none transition-colors ${
          isDark ? 'bg-neutral-950' : 'bg-neutral-100'
        }`}
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
