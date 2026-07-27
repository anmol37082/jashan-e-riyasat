'use client';

import { useState } from 'react';
import Header from '@/features/home/components/Header';
import Hero from '@/features/home/components/Hero';
import AboutIntro from '@/features/home/components/AboutIntro';
import Services from '@/features/home/components/Services';
import Testimonials from '@/features/home/components/Testimonials';
import PressLogos from '@/features/home/components/PressLogos';
import MobileMenu from '@/features/home/components/MobileMenu';
import VideoSection from '@/features/home/components/VideoSection';
import Portfolio from '@/features/home/components/Portfolio';
import CinematicPan from '@/features/home/components/CinematicPan';
import Footer from '@/features/home/components/Footer';
import Gallery from '@/features/home/components/WeddingGallery';
import Banner from '@/features/home/components/Banner';
import WeddingStories from '@/features/home/components/WeddingStories';
import WeddingFAQ from '@/features/home/components/WeddingFAQ';
import OurBlogs from '@/features/home/components/OurBlogs';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header onMenuToggle={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <Hero />
      <AboutIntro />
       <Services />
       <PressLogos />
      <VideoSection />
      
      <Gallery />
      {/* <Banner /> */}
      <WeddingStories />
     
      <Portfolio />
        <Testimonials />
     
      <CinematicPan />
     
      
      <OurBlogs />
      
 <WeddingFAQ />
      <Footer />

      
    </>
  );
}