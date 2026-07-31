export const metadata = {
  title: 'Jashn-e-Riyasat | Luxury Wedding Planning & Event Design',
  description:
    'Jashn-e-Riyasat plans elegant weddings with tailored design, thoughtful hospitality, and seamless execution for every celebration.',
};

import Hero from '@/features/home/components/Hero';
import AboutIntro from '@/features/home/components/AboutIntro';
import Services from '@/features/home/components/Services';
import Testimonials from '@/features/home/components/Testimonials';
import PressLogos from '@/features/home/components/PressLogos';
import VideoSection from '@/features/home/components/VideoSection';
import Portfolio from '@/features/home/components/Portfolio';
import CinematicPan from '@/features/home/components/CinematicPan';
import Gallery from '@/features/home/components/WeddingGallery';
import WeddingStories from '@/features/home/components/WeddingStories';
import WeddingFAQ from '@/features/home/components/WeddingFAQ';
import OurBlogs from '@/features/home/components/OurBlogs';


export default function Home() {
  return (
    <>
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
      
    </>
  );
}
