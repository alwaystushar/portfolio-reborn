'use client';

import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/app/lib/animations';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type ButtonVariant = "light" | "dark";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  showIcon?: boolean;
  icon?: React.ReactNode;
  iconBoxClassName?: string;
  iconClassName?: string;
  animateIcon?: boolean;
  animateText?: boolean;
  textClassName?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export default function TransitionLink({ 
  href, 
  children, 
  className = "",
  variant = "dark",
  showIcon = false,
  icon,
  iconBoxClassName = "",
  iconClassName = "",
  animateIcon = true,
  animateText = true,
  textClassName = "",
  target,
  rel
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const iconBoxRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textTopRef = useRef<HTMLSpanElement>(null);
  const textBottomRef = useRef<HTMLSpanElement>(null);

  // Prefetch the page for faster navigation
  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  // GSAP Animation Effect
  useEffect(() => {
    const button = buttonRef.current;
    const iconBox = iconBoxRef.current;
    const iconEl = iconRef.current;
    const textTop = textTopRef.current;
    const textBottom = textBottomRef.current;

    if (!button) return;
    if (animateText && (!textTop || !textBottom)) return;
    if (showIcon && animateIcon && (!iconBox || !iconEl)) return;

    if (animateText && textBottom) {
      // Set initial state for bottom text
      gsap.set(textBottom, { y: "100%" });
    }

    const tl = gsap.timeline({ paused: true });

    if (showIcon && animateIcon && iconBox && iconEl) {
      tl.to(iconBox, {
        scale: 1.05,
        backgroundColor: variant === "dark" 
          ? "hsl(28, 50%, 65%)" 
          : "var(--color-black)",
        duration: 0.3,
        ease: "power2.out",
      }, 0)
      .to(iconEl, {
        x: "0.3vw",
        duration: 0.3,
        ease: "power2.out",
      }, 0);
    }

    if (animateText && textTop && textBottom) {
      tl.to(textTop, {
        y: "-100%",
        duration: 0.3,
        ease: "power2.out",
      }, 0)
      .to(textBottom, {
        y: "0%",
        duration: 0.3,
        ease: "power2.out",
      }, 0);
    }

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      tl.kill();
    };
  }, [variant, showIcon, animateIcon, animateText]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (target === "_blank") {
      return;
    }
    e.preventDefault();
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  // Variant styles
  const variantStyles = {
    dark: {
      text: "text-white",
      iconBox: "bg-orange-400",
      iconColor: "text-black",
    },
    light: {
      text: "text-black",
      iconBox: "bg-orange-400",
      iconColor: "text-black",
    },
  };

  const styles = variantStyles[variant];

  if (showIcon) {
    return (
      <Link 
        ref={buttonRef}
        href={href} 
        onClick={handleClick} 
        target={target}
        rel={rel}
        className={`inline-flex items-center gap-4 cursor-pointer bg-transparent ${className}`}
        prefetch={true}
      >
        {animateText ? (
          <div
            ref={textContainerRef}
            className="relative overflow-hidden h-10"
          >
            <span ref={textTopRef} className={`block font-light tracking-wide ${styles.text} ${textClassName}`}>
              {children}
            </span>
            <span ref={textBottomRef} className={`block font-light tracking-wide ${styles.text} ${textClassName} absolute top-0 left-0`}>
              {children}
            </span>
          </div>
        ) : (
          <span className={`font-light tracking-wide ${styles.text} ${textClassName}`}>
            {children}
          </span>
        )}
        <div
          ref={iconBoxRef}
          className={`flex items-center justify-center w-10 h-10 rounded ${styles.iconBox} ${iconBoxClassName}`}
        >
          <span ref={iconRef} className={`flex items-center ${styles.iconColor} ${iconClassName}`}>
            {icon ?? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L8 3M13 8L8 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
      </Link>
    );
  }

  // Simple version without icon
  return (
    <Link 
      ref={buttonRef}
      href={href} 
      onClick={handleClick} 
      target={target}
      rel={rel}
      className={`inline-block cursor-pointer ${className}`}
      prefetch={true}
    >
      <div className="relative overflow-hidden">
        <span ref={textTopRef} className={`block ${textClassName}`}>
          {children}
        </span>
        <span ref={textBottomRef} className={`block absolute top-0 left-0 ${textClassName}`}>
          {children}
        </span>
      </div>
    </Link>
  );
}
