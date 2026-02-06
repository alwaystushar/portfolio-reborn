"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
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
  wrapperClassName = "",
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
    let scrollTrigger: ScrollTrigger | null = null;
    let hasAnimated = false;

    const animate = () => {
      if (hasAnimated || !textRef.current || !containerRef.current) return;
      hasAnimated = true;

      try {
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
        }

        split = new SplitType(textRef.current, {
          types: "lines",
          lineClass: "line-mask",
        });

        if (split.lines && split.lines.length > 0) {
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

          const totalDelay = waitForPageTransition ? 1.4 + delay : delay;

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
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
        }
      }
    };

    let timer: ReturnType<typeof setTimeout> | null = null;

    if (triggerOnScroll) {
      scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: scrollStart,
        once: true,
        onEnter: animate,
      });
    } else {
      timer = setTimeout(animate, 50);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (scrollTrigger) scrollTrigger.kill();
      if (tl) tl.kill();
      if (split) split.revert();
    };
  }, [mounted, delay, duration, stagger, lineHeight, waitForPageTransition, triggerOnScroll, scrollStart]);

  return (
    <div ref={containerRef} className={wrapperClassName} style={{ opacity: 0 }}>
      <div ref={textRef} className={className} style={{ lineHeight }}>
        {children}
      </div>
    </div>
  );
}
