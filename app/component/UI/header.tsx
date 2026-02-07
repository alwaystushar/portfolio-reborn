'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import Button from '@/app/component/Button';
import TransitionLink from '@/app/component/TransitionLink';
import { ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const socialLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const indiaTime = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setCurrentTime(indiaTime);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      // GSAP animation for menu opening
      const tl = gsap.timeline();
      
      tl.fromTo(
        menuOverlayRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.6, ease: 'power3.out' }
      );
      
      // Animate menu items one by one
      menuItemsRef.current.forEach((item, index) => {
        if (item) {
          tl.fromTo(
            item,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            `-=${0.4 - index * 0.1}`
          );
        }
      });
      
      // Animate social links
      socialLinksRef.current.forEach((link, index) => {
        if (link) {
          tl.fromTo(
            link,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
            `-=${0.3 - index * 0.05}`
          );
        }
      });
    } else {
      document.body.style.overflow = 'unset';
      
      // GSAP animation for menu closing
      if (menuOverlayRef.current) {
        gsap.to(menuOverlayRef.current, {
          x: '100%',
          duration: 0.5,
          ease: 'power3.in'
        });
      }
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tusharux/' },
    { name: 'Email', href: 'mailto:tusharnegi.11.tn@gmail.com' },
    { name: 'Instagram', href: 'https://www.instagram.com/alwaystushar/' },
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-50 transition-colors duration-700 mix-blend-difference text-white pt-[var(--space-32)] pb-[var(--space-32)]"
      >
        <div className="grid girder gap-0 w-full px-[4vw]">
          {/* Logo */}
          <div className="col-span-2 lg:col-span-3 flex items-start">
            <TransitionLink href="/" className="cursor-pointer">
              <img src="/logo.svg" className='lg:w-[6vw]' alt="" />
            </TransitionLink>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <div className="hidden lg:flex lg:col-span-3 items-center justify-center gap-[0.1vw] flex-col items-start">
                {menuItems.map((item) => (
                  <TransitionLink 
                    key={item.name}
                    href={item.href}
                    variant="light"
                    textClassName="inline-flex items-center gap-[0.3vw]"
                    className="gap-[0.3vw] font-light text-[0.8vw]"
                  >
                    <span>{item.name}</span>
                  </TransitionLink>
                ))}
              </div>

              <div className="hidden lg:flex lg:col-span-3 items-center justify-start gap-[0.1vw] flex-col items-start">
                {socialLinks.map((link) => (
                  <TransitionLink  
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[0.3vw] font-light text-[0.8vw]"
                  >
                    <span>{link.name}</span>
                  </TransitionLink>
                ))}
              </div>

              <div className='hidden lg:flex flex-col lg:col-span-3 items-end justify-start gap-[0.1vw] '>
              <div className="">
                <span className="text-[0.8vw] font-light">India, Delhi</span>
              </div>

              <div className="">
                <span className="text-[0.8vw] font-light">Local {currentTime}</span>
              </div>                
              </div>


            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="col-span-2 flex items-center justify-end">
              <div  className="text-[4.27vw] font-light">
                <span onClick={() => setIsMenuOpen(true)}>
                Menu
                </span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div 
          ref={menuOverlayRef}
          className="fixed inset-0 z-100 text-black bg-white translate-x-full"
        >
          <div className="w-full h-full flex flex-col">
            {/* Menu Header */}
            <div 
              className="grid girder items-start gap-0 w-full px-[var(--space-32)] pt-[var(--space-32)] pb-[var(--space-32)]"
            >

              <div className="col-span-4 flex items-end justify-end">
                <div className="text-[4.27vw]">
                  <span onClick={() => setIsMenuOpen(false)}>
                    Close
                  </span>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div 
              className="flex-1 flex flex-col justify-center px-[var(--space-32)]"
            >
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  ref={(el) => { menuItemsRef.current[index] = el; }}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[10.67vw] mb-[2.67vw] opacity-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Menu Footer */}
            <div 
              className="grid girder gap-0 w-full px-[var(--space-32)] pb-[var(--space-64)]"
            >
              <div className="col-span-4 flex flex-col gap-[4.27vw]">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    ref={(el) => { socialLinksRef.current[index] = el; }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[4.27vw] opacity-0"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
