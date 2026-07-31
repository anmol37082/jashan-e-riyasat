'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Our wedding was everything we had imagined and more. The team handled every detail with perfection. Thank you, Jashn E Riyasat, for making our special day unforgettable.",
    author: "Rohan & Priya Sharma",
    role: "",
    rating: "5 Star Rating",
    image: "/review/Rohan%26PriyaSharma.webp",
  },
  {
    quote: "The decor was elegant, the planning was smooth, and the execution was flawless. Every guest appreciated the beautiful arrangements. Highly recommend this team for anyone planning a luxury wedding.",
    author: "Simran Kaur",
    role: "",
    rating: "5 Star Rating",
    image: "/review/SimranKaur.webp",
  },
  {
    quote: "From our first meeting until the final event, everything was managed professionally. The team was always available and ensured we never had to worry about a thing. A truly wonderful experience.",
    author: "Aman Malhotra",
    role: "",
    rating: "5 Star Rating",
    image: "/review/AmanMalhotra.webp",
  },
  {
    quote: "The best part was how stress-free the entire wedding felt. Every ceremony was perfectly coordinated, and we could simply enjoy our celebrations.",
    author: "Neha Arora",
    role: "",
    rating: "5 Star Rating",
    image: "/review/NehaArora.webp",
  },
  {
    quote: "Jashn E Riyasat exceeded all our expectations. The decor, hospitality, and event management were simply outstanding. We received compliments from almost every guest.",
    author: "Harpreet Singh",
    role: "",
    rating: "5 Star Rating",
    image: "/review/HarpreetSingh.webp",
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

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
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
            {t.author}
            {t.role ? `, ${t.role}` : ''}
          </p>

          <span
            key={`rating-${current}`}
            className={`${styles.rating} ${styles.fadeInUpDelay2}`}
          >
            {t.rating}
          </span>
        </div>

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
