'use client';

import { useEffect, useRef } from 'react';
import TransitionLink from '@/app/component/TransitionLink';
import TextReveal from '@/app/component/TextReveal';
import Button from '@/app/component/Button';
import { useTheme } from '@/app/component/ThemeContext';

export default function HeroSection() {
  const { isDark } = useTheme();
  const lightVideoRef = useRef<HTMLVideoElement>(null);
  const darkVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const lightVideo = lightVideoRef.current;
    const darkVideo = darkVideoRef.current;

    if (!lightVideo || !darkVideo) return;

    if (isDark) {
      if (lightVideo && !lightVideo.paused) {
        const time = lightVideo.currentTime;
        lightVideo.pause();
        darkVideo.currentTime = time;
        darkVideo.play().catch(() => {});
      }
    } else {
      if (darkVideo && !darkVideo.paused) {
        const time = darkVideo.currentTime;
        darkVideo.pause();
        lightVideo.currentTime = time;
        lightVideo.play().catch(() => {});
      }
    }
  }, [isDark]);

  return (
    <section 
      data-section="section1"
      data-bgcolor="#ffffff"
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      {/* Background Videos */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={lightVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <source src="/video/intro-video-light.mp4" type="video/mp4" />
        </video>

        <video
          ref={darkVideoRef}
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/video/intro-video-dark.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content with Mix Blend Mode */}
      <div 
        className="relative z-10 text-center px-8"
        style={{
          mixBlendMode: 'difference',
          color: '#ffffff'
        }}
      >
        <div className="text-white">
          <TextReveal 
            className="text-6xl font-bold mb-4"
            triggerOnScroll={false}
            waitForPageTransition={true}
            duration={1.5}
            stagger={0.15}
          >
            <h1>Welcome to Our Website</h1>
          </TextReveal>

          <TextReveal 
            className="text-xl mb-8"
            delay={0.5}
            triggerOnScroll={false}
            waitForPageTransition={true}
            duration={1.2}
          >
            <p>Short section</p>
          </TextReveal>
        </div>
        
        {/* Buttons need to be outside mix-blend-mode */}
        <div style={{ mixBlendMode: 'normal', isolation: 'isolate' }}>
          <TransitionLink 
            href="/about"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-colors duration-300 font-medium shadow-xl"
          >
            Learn More About Us
          </TransitionLink>

          <div className="mt-8">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
