'use client';

import { useEffect } from 'react';
import { ThemeProvider, useTheme } from '@/app/component/ThemeContext';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

function PageContent() {
  const { setActiveSection, activeSection, isDark } = useTheme();

  // Add this console log to debug
  console.log('Active Section:', activeSection, 'Is Dark:', isDark);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    console.log('Found sections:', sections.length); // Debug log
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          console.log('Section in view:', sectionId); // Debug log
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

export default function Home() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  );
}
