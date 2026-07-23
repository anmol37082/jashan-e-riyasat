'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';

const slides = [
   './hero/hero7.jpeg',
  './hero/hero9.jpeg',
  './hero/hero4.png',
  
];

const SLIDE_INTERVAL = 5000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className={styles.hero}>
      {/* Background Slideshow */}
      <div className={styles.heroSlideshow}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className={styles.heroOverlay} />

      {/* Bottom Bar Content */}
      <div className={styles.heroBottomBar}>
        <div className={styles.bottomBarInner}>
          <span className={styles.bottomEst}>EST</span>
          
          <div className={styles.bottomCenter}>
            <p className={styles.bottomTagline}>WEDDINGS & EVENTS</p>
            <p className={styles.bottomSubtext}>
              Extraordinary Weddings for <em>Modern Romantics</em>
            </p>
          </div>
          
          <span className={styles.bottomYear}>2012</span>
        </div>
        
        {/* Decorative line */}
        <div className={styles.bottomLine} />
      </div>

      {/* Slide Indicators */}
      <div className={styles.slideIndicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.slideDot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}