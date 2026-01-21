'use client';

import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/app/lib/animations';
import Link from 'next/link';
import { useEffect } from 'react';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function TransitionLink({ 
  href, 
  children, 
  className 
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Prefetch the page for faster navigation
  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className} prefetch={true}>
      {children}
    </Link>
  );
}
