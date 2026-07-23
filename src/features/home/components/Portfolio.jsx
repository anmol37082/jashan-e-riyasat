'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', alt: 'Wedding table setting' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Couple walking' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Wedding reception' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt: 'Bride portrait' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', alt: 'Wedding ceremony' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80', alt: 'Wedding details' },
  { src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80', alt: 'Wedding flowers' },
  { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=80', alt: 'Wedding venue' },
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
          Named one of &ldquo;Canada&rsquo;s <em>Best</em> Wedding Planners&rdquo;
        </h2>
        <a href="#portfolio" className={styles.portfolioCta}>
          View Our Portfolio
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