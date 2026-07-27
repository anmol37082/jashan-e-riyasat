'use client';

import Hero from '@/features/home/components/Hero';
import AboutBannerSection from '@/features/about/components/AboutBannerSection';
import OurStorySection from '@/features/about/components/OurStorySection';
import WhyChooseUsSection from '@/features/about/components/WhyChooseUsSection';
import StatsSection from '@/features/about/components/StatsSection';
import PlanningProcessSection from '@/features/about/components/PlanningProcessSection';
export default function AboutLanding() {
  return (
    <>
      <Hero />
     
      <OurStorySection />
      <WhyChooseUsSection />
       <AboutBannerSection />
      <StatsSection />
      <PlanningProcessSection />
    </>
  );
}
