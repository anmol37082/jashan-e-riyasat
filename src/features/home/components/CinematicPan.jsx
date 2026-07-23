'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './CinematicPan.module.css';

export default function CinematicPan() {
  const sectionRef = useRef(null);
  const imageInnerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageInner = imageInnerRef.current;
    if (!section || !imageInner) return;

    const updatePan = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrollProgress = Math.max(0, Math.min(1,
        (viewportHeight - rect.top) / (viewportHeight + sectionHeight)
      ));

      const imageWidth = imageInner.offsetWidth;
      const boxWidth = imageInner.parentElement.offsetWidth;
      const maxPan = imageWidth - boxWidth;

      const panX = -scrollProgress * maxPan;
      imageInner.style.transform = `translate3d(${panX}px, 0, 0)`;
    };

    window.addEventListener('scroll', updatePan, { passive: true });
    window.addEventListener('resize', updatePan);
    updatePan();

    return () => {
      window.removeEventListener('scroll', updatePan);
      window.removeEventListener('resize', updatePan);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.panSection}>
      <div className={styles.panImageBox}>
        {/* Inner image that pans */}
        <div ref={imageInnerRef} className={styles.panImageInner}>
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=2400&h=1200&fit=crop&q=80"
            alt="Wedding couple cinematic"
            fill
            className={styles.panImage}
            priority
            sizes="150vw"
            unoptimized
          />
        </div>

        {/* Overlay inside the box */}
        <div className={styles.panOverlay}>
          <p className={styles.panTextTop}>Creative Vision,</p>
          <p className={styles.panTextBottom}>seamless execution .</p>
        </div>

        {/* CTA with top border line */}
        <div className={styles.panCtaWrapper}>
          <div className={styles.panCta}>
            <a href="#contact">GET IN TOUCH →</a>
          </div>
        </div>
      </div>
    </section>
  );
}