'use client';

import { useEffect } from 'react';
import { useTheme } from '@/app/component/ThemeContext';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  const { setActiveSection, activeSection, isDark } = useTheme();

  console.log('Active Section:', activeSection, 'Is Dark:', isDark);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    console.log('Found sections:', sections.length);
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          console.log('Section in view:', sectionId);
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <HeroSection />
      <ServicesSection />
    </>
  );
}
