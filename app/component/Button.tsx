"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

type ButtonVariant = "light" | "dark";

interface ExplorePanelsButtonProps {
  onClick?: () => void;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  textClassName?: string;
  textContainerClassName?: string;
  iconBoxClassName?: string;
  showIcon?: boolean;
  animateText?: boolean;
}

const ExplorePanelsButton = ({ 
  onClick, 
  href,
  target,
  rel,
  children = "Explore Panels",
  variant = "dark",
  className = "",
  textClassName = "",
  textContainerClassName = "",
  iconBoxClassName = "",
  showIcon = true,
  animateText = true
}: ExplorePanelsButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const iconBoxRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textTopRef = useRef<HTMLSpanElement>(null);
  const textBottomRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const iconBox = iconBoxRef.current;

    if (!button) return;
    if (showIcon && !iconBox) return;

    const tl = gsap.timeline({ paused: true });

    if (showIcon && iconBox) {
      tl.to(iconBox, {
        scale: 1.05,
        backgroundColor: variant === "dark" 
          ? "hsl(28, 50%, 65%)" // Lighter accent on hover for dark
          : "var(--color-black)", // Black on hover for light
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
  }, [variant, showIcon, animateText]);

  // Variant styles
  const variantStyles = {
    dark: {
      text: "text-[var(--color-white)]",
      iconBox: "bg-[var(--color-accent)]",
      iconColor: "text-[var(--color-black)]",
    },
    light: {
      text: "text-[var(--color-black)]",
      iconBox: "bg-[var(--color-accent)]",
      iconColor: "text-[var(--color-black)]",
    },
  };

  const styles = variantStyles[variant];
  const textStyles = `b1 font-light tracking-wide leading-[1] block ${styles.text} ${textClassName}`;

  const ButtonContent = () => (
    <>
      {animateText ? (
        <div
          ref={textContainerRef}
          className={`relative overflow-hidden h-[1em] ${textContainerClassName}`}
        >
          <span
            ref={textTopRef}
            className={`${textStyles} transition-transform duration-300 ease-out group-hover:-translate-y-full`}
          >
            {children}
          </span>
          <span
            ref={textBottomRef}
            className={`${textStyles} absolute top-0 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0`}
          >
            {children}
          </span>
        </div>
      ) : (
        <span className={textStyles}>{children}</span>
      )}
      {showIcon && (
        <div
          ref={iconBoxRef}
          className={`flex items-center justify-center w-[2vw] h-[2vw] ${styles.iconBox} ${iconBoxClassName}`}
        />
      )}
    </>
  );

  const baseClasses = `group inline-flex items-center gap-[1vw] cursor-pointer bg-transparent border-none outline-none focus:outline-none ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={baseClasses}
    >
      <ButtonContent />
    </button>
  );
};

export default ExplorePanelsButton;
