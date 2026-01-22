"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  triggerOnScroll?: boolean;
  stagger?: number;
  lineHeight?: string;
  scrollStart?: string;
  waitForPageTransition?: boolean;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.2,
  triggerOnScroll = true,
  stagger = 0.1,
  lineHeight = "1.2",
  scrollStart = "top 85%",
  waitForPageTransition = true,
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !textRef.current || !containerRef.current) return;

    let split: SplitType | null = null;
    let tl: gsap.core.Timeline | null = null;

    const animate = () => {
      if (!textRef.current || !containerRef.current) return;

      try {
        // Make visible immediately
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
        }

        // Split text
        split = new SplitType(textRef.current, {
          types: "lines",
          lineClass: "line-mask",
        });

        if (split.lines && split.lines.length > 0) {
          // Wrap each line
          split.lines.forEach((line: Element) => {
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            wrapper.style.lineHeight = lineHeight;
            const parent = line.parentNode;
            if (parent) {
              parent.insertBefore(wrapper, line);
              wrapper.appendChild(line);
            }
          });

          // Calculate delay
          const totalDelay = waitForPageTransition ? 1.4 + delay : delay;

          // Create timeline
          tl = gsap.timeline();
          
          tl.set(split.lines, { y: "100%" })
            .to(split.lines, {
              y: "0%",
              duration: duration,
              ease: "power4.out",
              stagger: stagger,
              delay: totalDelay,
            });
        }
      } catch (error) {
        console.error("TextReveal animation error:", error);
        // Fallback: just show the text
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(animate, 50);

    return () => {
      clearTimeout(timer);
      if (tl) tl.kill();
      if (split) split.revert();
    };
  }, [mounted, delay, duration, stagger, lineHeight, waitForPageTransition]);

  return (
    <div ref={containerRef} style={{ opacity: 0 }}>
      <div ref={textRef} className={className} style={{ lineHeight }}>
        {children}
      </div>
    </div>
  );
}
