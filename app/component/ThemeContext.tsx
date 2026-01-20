'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ThemeContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('section1');
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const darkSections = ['section2'];
  const isDark = darkSections.includes(activeSection);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    
    sections.forEach((section, i) => {
      const sectionElement = section as HTMLElement;
      const bgColor = sectionElement.dataset.bgcolor || '#ffffff';
      const textColor = sectionElement.dataset.textcolor || '#000000';
      const sectionId = sectionElement.dataset.section || '';
      
      const prevBg = i === 0 ? '#ffffff' : (sections[i - 1] as HTMLElement).dataset.bgcolor || '#ffffff';
      const prevText = i === 0 ? '#000000' : (sections[i - 1] as HTMLElement).dataset.textcolor || '#000000';

      ScrollTrigger.create({
        trigger: sectionElement,
        start: 'top 50%',
        end: 'bottom 50%',
        // markers: true,
        onEnter: () => {
          setActiveSection(sectionId);
          gsap.to(bgRef.current, {
            backgroundColor: bgColor,
            duration: 1,
            ease: 'power2.inOut',
            overwrite: 'auto' // Key fix: prevents animation conflicts
          });
          gsap.to(contentRef.current, {
            color: textColor,
            duration: 1,
            ease: 'power2.inOut',
            overwrite: 'auto' // Key fix: prevents animation conflicts
          });
        },
        onLeaveBack: () => {
          if (i > 0) {
            const prevSectionId = (sections[i - 1] as HTMLElement).dataset.section || '';
            setActiveSection(prevSectionId);
            gsap.to(bgRef.current, {
              backgroundColor: prevBg,
              duration: 1,
              ease: 'power2.inOut',
              overwrite: 'auto'
            });
            gsap.to(contentRef.current, {
              color: prevText,
              duration: 1,
              ease: 'power2.inOut',
              overwrite: 'auto'
            });
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ activeSection, setActiveSection, isDark }}>
      {/* Fixed smooth-transitioning background */}
      <div 
        ref={bgRef}
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: '#ffffff' }}
      />
      
      {/* Content with smooth text color transitions */}
      <div 
        ref={contentRef}
        className="relative z-0"
        style={{ color: '#000000' }}
      >
        {children}
      </div>
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
