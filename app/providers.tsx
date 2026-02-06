'use client';

import SmoothScroll from '@/app/component/SmoothScroll';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      {children}
    </SmoothScroll>
  );
}
