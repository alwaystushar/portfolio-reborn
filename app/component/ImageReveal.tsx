"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = "left" | "right" | "top" | "bottom";

interface ImageRevealProps {
  src: string;
  alt: string;
  dir?: RevealDirection;
  className?: string;
  imgClassName?: string;
  maskColor?: string;
  duration?: number;
}

export default function ImageReveal({
  src,
  alt,
  dir = "left",
  className = "",
  imgClassName = "",
  maskColor = "var(--color-grey)",
  duration = 1.2,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<() => void>(() => {});
  const revealedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const mask = maskRef.current;

    if (!container || !mask) return;

    const ctx = gsap.context(() => {
      // Set initial mask position based on direction
      const initialTransform = {
        left: { x: "0%" },
        right: { x: "0%" },
        top: { y: "0%" },
        bottom: { y: "0%" },
      };

      const finalTransform = {
        left: { x: "-100%" },
        right: { x: "100%" },
        top: { y: "-100%" },
        bottom: { y: "100%" },
      };

      const reveal = () => {
        if (revealedRef.current) return;
        revealedRef.current = true;
        gsap.to(mask, {
          ...finalTransform[dir],
          duration: duration,
          ease: "power2.inOut",
        });
      };

      revealRef.current = reveal;

      gsap.set(mask, initialTransform[dir]);

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: "top 90%",
        once: true,
        onEnter: reveal,
      });

      const isInView = () => {
        const rect = container.getBoundingClientRect();
        const viewH = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= viewH * 0.9 && rect.bottom >= viewH * 0.1;
      };

      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
        if (isInView()) reveal();
      }, 50);

      const fallbackTimer = setTimeout(() => {
        reveal();
      }, 600);

      return () => {
        clearTimeout(refreshTimer);
        clearTimeout(fallbackTimer);
        trigger.kill();
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [dir, duration]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`block h-full w-full min-h-full min-w-full object-cover object-center ${imgClassName}`}
        onLoad={() => {
          revealRef.current();
        }}
      />

      {/* Reveal Mask */}
      <div
        ref={maskRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: maskColor }}
      />
    </div>
  );
}
