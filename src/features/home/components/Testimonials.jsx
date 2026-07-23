'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Our corporate event was a huge success, thanks to EGO Company. Their attention to detail and professionalism are unmatched",
    author: "JANE COOPER",
    role: "CEO OF TOKOKERIPTO",
    rating: "5 Star Rating",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
  },
  {
    quote: "Working with this team was an absolute dream. They transformed our vision into reality with elegance and precision that exceeded every expectation",
    author: "SARAH MITCHELL",
    role: "DIRECTOR AT LUXE EVENTS",
    rating: "5 Star Rating",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80",
  },
  {
    quote: "The level of creativity and dedication they brought to our special day was truly remarkable. Every moment felt magical and perfectly orchestrated",
    author: "EMILY RICHARDS",
    role: "FOUNDER OF BLOOM & CO",
    rating: "5 Star Rating",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&q=80",
  },
  {
    quote: "From planning to execution, every detail was handled with such care and expertise. Our wedding was everything we dreamed of and more",
    author: "AMANDA CLARKE",
    role: "BRIDE, NEW YORK",
    rating: "5 Star Rating",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&q=80",
  },
  {
    quote: "Their professionalism and creative vision made our event truly unforgettable. The attention to every small detail was absolutely incredible",
    author: "RACHEL THOMPSON",
    role: "EVENT MANAGER",
    rating: "5 Star Rating",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const goToSlide = useCallback((index, dir = 'next') => {
    if (isAnimating || index === current) return;
    setDirection(dir);
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [current, isAnimating]);

  const next = useCallback(() => {
    const nextIndex = (current + 1) % testimonials.length;
    goToSlide(nextIndex, 'next');
  }, [current, goToSlide]);

  const prev = useCallback(() => {
    const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
    goToSlide(prevIndex, 'prev');
  }, [current, goToSlide]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Image with slide animation */}
        <div className={styles.imageBox}>
          <div
            key={`img-${current}`}
            className={`${styles.imageSlide} ${direction === 'next' ? styles.slideInRight : styles.slideInLeft}`}
          >
            <Image
              src={t.image}
              alt={`${t.author} photo`}
              fill
              className={styles.image}
              priority
              sizes="(max-width: 480px) 140px, (max-width: 768px) 160px, 200px"
            />
          </div>
        </div>

        {/* Quote with fade animation */}
        <div className={styles.contentBox}>
          <blockquote
            key={`quote-${current}`}
            className={`${styles.quoteBlock} ${styles.fadeInUp}`}
          >
            <p className={styles.quoteText}>
              &ldquo;{t.quote}&rdquo;
            </p>
          </blockquote>

          <p
            key={`author-${current}`}
            className={`${styles.authorName} ${styles.fadeInUpDelay1}`}
          >
            {t.author}, {t.role}
          </p>

          <span
            key={`rating-${current}`}
            className={`${styles.rating} ${styles.fadeInUpDelay2}`}
          >
            {t.rating}
          </span>
        </div>

        {/* Navigation */}
        <div className={styles.navWrapper}>
          <button
            className={styles.navArrow}
            onClick={prev}
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className={styles.progressBar}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.progressLine} ${i === current ? styles.progressLineActive : ''}`}
                onClick={() => goToSlide(i, i > current ? 'next' : 'prev')}
                aria-label={`Go to testimonial ${i + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>

          <button
            className={styles.navArrow}
            onClick={next}
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}