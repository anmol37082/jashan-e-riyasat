'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsSection.module.css';

const stats = [
  { value: 300, suffix: '+', label: 'Happy Couples' },
  { value: 500, suffix: '+', label: 'Events Managed' },
  { value: 150, suffix: '+', label: 'Vendor Partners' },
  { value: 20, suffix: '+', label: 'Cities Covered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const DURATION = 1800;

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const hasRunRef = useRef(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const runAnimation = () => {
      if (hasRunRef.current) return;
      hasRunRef.current = true;

      const start = performance.now();

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / DURATION, 1);
        const eased = easeOutExpo(progress);

        setCounts(stats.map((stat) => Math.round(stat.value * eased)));

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(node);

    // Fallback: agar observer kisi wajah se fire na ho (already in viewport on load)
    const fallback = setTimeout(() => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        runAnimation();
      }
    }, 300);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={stat.label} className={styles.item}>
              <p className={styles.value}>
                {counts[index]}
                {stat.suffix}
              </p>
              <p className={styles.label}>{stat.label}</p>
              {index !== stats.length - 1 && (
                <span className={styles.divider} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}