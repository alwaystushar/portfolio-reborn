'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with premium, tighter scroll settings
    // const lenis = new Lenis({
    //   duration: 1.5,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   orientation: 'vertical',
    //   gestureOrientation: 'vertical',
    //   smoothWheel: true,
    //   wheelMultiplier: 0.8,
    //   touchMultiplier: 1.5,
    //   infinite: false,
    //   autoResize: true,
    //   syncTouch: true,
    //   syncTouchLerp: 0.1,
    // });
    const lenis = new Lenis({
        duration: 1.8,
        easing: (t) => {
          // Custom easing for ultra-smooth premium feel
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        },
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.6,  // Even tighter
        touchMultiplier: 1.2,   // Even more controlled
        infinite: false,
        autoResize: true,
        syncTouch: true,
        syncTouchLerp: 0.075,   // Ultra-tight touch response
      });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
