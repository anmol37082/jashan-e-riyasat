'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';

const slides = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1920&q=80',
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