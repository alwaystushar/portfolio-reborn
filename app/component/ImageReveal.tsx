"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

type RevealDirection = "left" | "right" | "top" | "bottom";

interface ImageRevealProps {
  src: string;
  alt: string;
  dir?: RevealDirection;
  className?: string;
  imgClassName?: string;
  maskColor?: string;
  duration?: number;
  waitForPageTransition?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  dir = "left",
  className = "",
  imgClassName = "",
  maskColor = "var(--color-grey)",
  duration = 1,
  waitForPageTransition = true,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [transitionDone, setTransitionDone] = useState(!waitForPageTransition);
  const revealedRef = useRef(false);

  // Check if image is already loaded (cached)
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalHeight !== 0) {
      setImageLoaded(true);
    }
  }, []);

  // Wait for page transition
  useEffect(() => {
    if (!waitForPageTransition) return;
    const timer = setTimeout(() => {
      setTransitionDone(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [waitForPageTransition]);

  // Intersection Observer for visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if already visible (for page refresh scenarios)
    const rect = container.getBoundingClientRect();
    const isAlreadyVisible =
      rect.top < window.innerHeight + 100 && rect.bottom > 0;

    if (isAlreadyVisible) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px 100px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Trigger reveal when all conditions are met
  useEffect(() => {
    const mask = maskRef.current;
    if (!mask || revealedRef.current) return;
    if (!imageLoaded || !isVisible || !transitionDone) return;

    revealedRef.current = true;

    const finalTransform = {
      left: { x: "-100%" },
      right: { x: "100%" },
      top: { y: "-100%" },
      bottom: { y: "100%" },
    };

    gsap.to(mask, {
      ...finalTransform[dir],
      duration: duration,
      ease: "power2.inOut",
    });
  }, [imageLoaded, isVisible, transitionDone, dir, duration]);

  // Set initial mask position
  useEffect(() => {
    const mask = maskRef.current;
    if (!mask) return;

    const initialTransform = {
      left: { x: "0%" },
      right: { x: "0%" },
      top: { y: "0%" },
      bottom: { y: "0%" },
    };

    gsap.set(mask, initialTransform[dir]);
  }, [dir]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`block h-full w-full min-h-full min-w-full object-cover object-center ${imgClassName}`}
        onLoad={() => setImageLoaded(true)}
      />
      <div
        ref={maskRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: maskColor }}
      />
    </div>
  );
}
