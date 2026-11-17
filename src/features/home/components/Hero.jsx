'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';

const slides = [
  './hero/hero10.png',
  './hero/hero12.png',
  './hero/hero13.png',
  './hero/hero14.png',
];

const SLIDE_INTERVAL = 5000;

export default function Hero({ title, backgroundVideo = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (backgroundVideo) return undefined;
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [backgroundVideo, nextSlide]);

  return (
    <section className={styles.hero}>
      {backgroundVideo ? (
        <video className={styles.heroVideo} autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <>
          <div className={styles.heroSlideshow}>
            {slides.map((slide, index) => (
              <div
                key={slide}
                className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ''}`}
                style={{ backgroundImage: `url('${slide}')` }}
              />
            ))}
          </div>
          <div className={styles.slideIndicators}>
            {slides.map((slide, index) => (
              <button
                key={slide}
                className={`${styles.slideDot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <div className={styles.heroOverlay} />

      {title ? <h1 className={styles.heroTitle}>{title}</h1> : null}
    </section>
  );
}
