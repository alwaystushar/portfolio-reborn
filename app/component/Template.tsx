'use client';

import { useEffect } from 'react';
import { animatePageIn } from '@/app/lib/animations';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Multiple methods to ensure scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also use scrollTo with options
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as any);
    
    animatePageIn();
  }, [pathname]);

  return (
    <div className="relative">
      <div
        id="banner-1"
        className="min-h-screen z-[9999] fixed top-0 left-0 w-1/4 pointer-events-none bg-neutral-100"
      />
      <div
        id="banner-2"
        className="min-h-screen z-[9999] fixed top-0 left-1/4 w-1/4 pointer-events-none bg-neutral-100"
      />
      <div
        id="banner-3"
        className="min-h-screen z-[9999] fixed top-0 left-2/4 w-1/4 pointer-events-none bg-neutral-100"
      />
      <div
        id="banner-4"
        className="min-h-screen z-[9999] fixed top-0 left-3/4 w-1/4 pointer-events-none bg-neutral-100"
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
