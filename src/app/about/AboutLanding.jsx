'use client';

import { useState } from 'react';

import Header from '@/features/home/components/Header';
import MobileMenu from '@/features/home/components/MobileMenu';
import Hero from '@/features/home/components/Hero';
import OurStorySection from '@/features/about/components/OurStorySection';
import WhyChooseUsSection from '@/features/about/components/WhyChooseUsSection';
import StatsSection from '@/features/about/components/StatsSection';
import PlanningProcessSection from '@/features/about/components/PlanningProcessSection';
export default function AboutLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header onMenuToggle={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <Hero />

      <OurStorySection />
      <WhyChooseUsSection />
      <StatsSection />
      <PlanningProcessSection />
     
      
    </>
  );
}
