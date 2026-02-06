'use client';

import HeroSection from './components/HeroSection';
import HomeAbout from './components/HomeAbout';
import HomeServices from './components/HomeServices';
import HomeWorks from './components/HomeWork';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAbout />
      <HomeServices />
      <HomeWorks />
    </>
  );
}
