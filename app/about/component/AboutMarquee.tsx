"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function AboutMarquee() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const marqueeSpeed = isMobile ? 45 : 170;

  return (
    <div className="col-span-12">
      <div className="overflow-hidden bg-[#f2f3f4] text-black">
        <Marquee speed={marqueeSpeed} gradient={false} pauseOnHover={true}>
          <div className="flex items-center gap-[8vw] pr-[8vw] text-[8vw] tracking-tight text-black lg:text-[5.2vw]">
            <span>Product Designer</span>
            <span>UI/UX Designer</span>
            <span>Pixel Pusher</span>
            <span>Frontend Developer</span>
            <span>Product Designer</span>
            <span>UI/UX Designer</span>
            <span>Pixel Pusher</span>
            <span>Frontend Developer</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
}