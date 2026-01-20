'use client';

import { useEffect } from 'react';
import { ThemeProvider, useTheme } from '@/app/component/ThemeContext';
import About from '@/app/about/component/About'
import AboutSecond from '@/app/about/component/Aboutsecond'
import AboutThird from './component/AboutThird';
import AboutFourth from './component/AboutFourth';

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
      <About />
      <AboutSecond />
      <AboutThird />
      <AboutFourth />
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
