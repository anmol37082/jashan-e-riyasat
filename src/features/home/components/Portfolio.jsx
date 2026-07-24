'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

const portfolioImages = [
  { src: '/portfolio/portfolio(1).webp', alt: 'Wedding table setting' },
  { src: '/portfolio/portfolio(2).webp', alt: 'Wedding cake' },
  { src: '/portfolio/portfolio(3).webp', alt: 'Wedding flowers' },
  { src: '/portfolio/portfolio(4).webp', alt: 'Bride and groom' },
  { src: '/portfolio/portfolio(5).webp', alt: 'Wedding rings' },
  { src: '/portfolio/portfolio(6).webp', alt: 'Wedding invitations' },
  { src: '/portfolio/portfolio(7).webp', alt: 'Wedding flowers' },
  { src: '/portfolio/portfolio(8).webp', alt: 'Wedding table setting' },

];

export default function Portfolio() {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Below 768px we don't scroll-jack the page for a horizontal animation.
    // That technique requires the sticky container to occupy a large chunk
    // of viewport height for the whole scroll duration, and short mobile
    // images inside a tall viewport-height box always leaves visible empty
    // space above/below — there's no way around that while this container
    // is taller than the images. A native swipeable strip (see CSS) sidesteps
    // the problem entirely: no vertical takeover, no empty space, and it
    // feels more natural on touch than a scrubbed animation anyway.
    const isDesktop = window.innerWidth > 768;
    if (!isDesktop) return;

    const initGSAP = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      const wrapper = wrapperRef.current;
      const inner = innerRef.current;
      const track = trackRef.current;

      if (!wrapper || !inner || !track) return;

      // Calculate exact dimensions
      const getScrollWidth = () => {
        const totalWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const padding = 160; // 80px left + 80px right
        return Math.max(0, totalWidth - viewportWidth + padding);
      };

      // Wrapper height must equal: scroll distance needed for the animation
      // + the sticky container's own height. That's the exact amount of
      // page-scroll it takes for the sticky element to travel from being
      // pinned to being released. Using a guessed viewport ratio here (old
      // approach) goes out of sync whenever the sticky container's height
      // changes across breakpoints — too small and it releases before the
      // animation finishes, too large and you get dead scroll space at the
      // bottom with nothing happening.
      const setWrapperHeight = () => {
        const scrollWidth = getScrollWidth();
        const innerHeight = inner.getBoundingClientRect().height;
        wrapper.style.height = `${scrollWidth + innerHeight}px`;
      };

      setWrapperHeight();

      // Create animation
      const tween = gsap.to(track, {
        x: () => -getScrollWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top', // Start exactly when the sticky section locks (fixed) at top of viewport
          end: () => `+=${getScrollWidth()}`, // End exactly at scroll distance
          scrub: 0.5,
          pin: false, // NO PIN - avoid blank space
          invalidateOnRefresh: true,
        },
      });

      const handleResize = () => {
        setWrapperHeight();
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        tween.kill();
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    };

    initGSAP();
  }, []);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolioHeader}>
        <h2 className={styles.portfolioHeading}>
         Crafting Bespoke <em>Luxury  </em> Weddings <br/> Across India & Beyond
        </h2>
        <a href="#portfolio" className={styles.portfolioCta}>
          View Our portfolio
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className={styles.horizontalScrollWrapper} ref={wrapperRef}>
        <div className={styles.horizontalScrollInner} ref={innerRef}>
          <div className={styles.horizontalTrack} ref={trackRef}>
            {portfolioImages.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={280}
                  height={380}
                  className={styles.portfolioImage}
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}