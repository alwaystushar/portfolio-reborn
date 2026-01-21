'use client';

import { ThemeProvider } from '@/app/component/ThemeContext';
import SmoothScroll from '@/app/component/SmoothScroll';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </ThemeProvider>
  );
}
