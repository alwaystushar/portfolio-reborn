import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageIn = () => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ];

  if (banners.every(banner => banner)) {
    const tl = gsap.timeline();

    tl.set(banners, {
      yPercent: 0,
    }).to(banners, {
      yPercent: 100,
      stagger: 0.15,
      duration: 1,
      ease: 'power4.inOut',
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ];

  if (banners.every(banner => banner)) {
    const tl = gsap.timeline();

    tl.set(banners, {
      yPercent: -100,
    }).to(banners, {
      yPercent: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'power4.inOut',
      onComplete: () => {
        // Scroll to top before navigation
        window.scrollTo(0, 0);
        
        // Small delay to ensure content is ready
        setTimeout(() => {
          router.push(href);
        }, 150);
      },
    });
  }
};
