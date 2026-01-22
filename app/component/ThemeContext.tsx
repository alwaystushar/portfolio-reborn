'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ThemeContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('section1');
  const bgRef = useRef<HTMLDivElement>(null);
  const lastSectionRef = useRef<string>('section1'); // Track last section

  const darkSections = ['section2'];
  const isDark = darkSections.includes(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get all sections
      const section1 = document.querySelector('[data-section="section1"]') as HTMLElement;
      const section2 = document.querySelector('[data-section="section2"]') as HTMLElement;
      
      if (!section1 || !section2) return;
      
      const section1Height = section1.offsetHeight;
      
      // Determine active section based on scroll position
      let newSection = 'section1';
      let newBgColor = '#ffffff';
      
      // If we've scrolled past half of section1's height, switch to section2
      if (scrollY > section1Height / 2) {
        newSection = 'section2';
        newBgColor = '#000000';
      }
      
      // Only update if section changed
      if (lastSectionRef.current !== newSection) {
        console.log('Switching from', lastSectionRef.current, 'to', newSection, 'ScrollY:', scrollY);
        
        lastSectionRef.current = newSection;
        setActiveSection(newSection);
        
        gsap.to(bgRef.current, {
          backgroundColor: newBgColor,
          duration: 1,
          ease: 'power2.inOut',
        });
      }
    };

    // Throttle scroll events
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []); // Empty dependency array - no infinite loop!

  return (
    <ThemeContext.Provider value={{ activeSection, setActiveSection, isDark }}>
      <div 
        ref={bgRef}
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: '#ffffff' }}
      />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
