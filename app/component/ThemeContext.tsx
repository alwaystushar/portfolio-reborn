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
    // Small delay to ensure Lenis is initialized
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('[data-section]');
      
      sections.forEach((section, i) => {
        const sectionElement = section as HTMLElement;
        const bgColor = sectionElement.dataset.bgcolor || '#F0F2F4';
        const sectionId = sectionElement.dataset.section || '';
        
        const prevBg = i === 0 ? '#F0F2F4' : (sections[i - 1] as HTMLElement).dataset.bgcolor || '#F0F2F4';

        // Determine text color based on background brightness
        const getTextColor = (bg: string) => {
          const hex = bg.replace('#', '');
          const r = parseInt(hex.substr(0, 2), 16);
          const g = parseInt(hex.substr(2, 2), 16);
          const b = parseInt(hex.substr(4, 2), 16);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          return brightness > 128 ? '#000000' : '#ffffff';
        };

        const textColor = getTextColor(bgColor);
        const prevTextColor = getTextColor(prevBg);

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
              overwrite: 'auto'
            });
            gsap.to(contentRef.current, {
              color: textColor,
              duration: 1,
              ease: 'power2.inOut',
              overwrite: 'auto'
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
                color: prevTextColor,
                duration: 1,
                ease: 'power2.inOut',
                overwrite: 'auto'
              });
            }
          }
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ activeSection, setActiveSection, isDark }}>
      {/* Fixed smooth-transitioning background */}
      <div 
        ref={bgRef}
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: '#F0F2F4' }}
      />
      
      {/* Content with smooth color transitions */}
      <div 
        ref={contentRef}
        className="relative z-0"
        style={{ 
          color: '#000000',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'subpixel-antialiased',
          MozOsxFontSmoothing: 'auto',
          fontSmooth: 'always'
        }}
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
