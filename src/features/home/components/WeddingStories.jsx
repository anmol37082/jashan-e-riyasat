'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './WeddingStories.module.css';
import { stories } from '../data/stories';

export default function WeddingStories() {
  return (
    <section id="stories" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Wedding Stories
          <svg width="68" height="68" viewBox="0 0 64 64" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20 V54 Q20 49 32 55 Q44 49 59 54 V20" stroke="#b8860b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 16 Q20 12 32 18 V52 Q20 46 8 50 Z" fill="#fffaf0" stroke="#6b0000" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M56 16 Q44 12 32 18 V52 Q44 46 56 50 Z" fill="#fffaf0" stroke="#6b0000" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M14 28 H26 M14 34 H26 M14 40 H21" stroke="#b8860b" strokeWidth="2" strokeLinecap="round" />
            <path d="M45 39 C40 35 38 32.5 38 30 C38 27.8 39.7 26.5 41.5 26.5 C43 26.5 44.3 27.3 45 28.5 C45.7 27.3 47 26.5 48.5 26.5 C50.3 26.5 52 27.8 52 30 C52 32.5 50 35 45 39 Z" fill="#6b0000" />
            <path d="M32 2 L33.3 5.7 L37 7 L33.3 8.3 L32 12 L30.7 8.3 L27 7 L30.7 5.7 Z" fill="#b8860b" />
          </svg>
        </h2>
        <p className={styles.subtitle}>Special Moments</p>
      </div>
      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className={styles.marqueeGroup}
              aria-hidden={groupIndex === 1}
            >
              {stories.map((story) => (
                <div key={`${groupIndex}-${story.id}`} className={styles.slide}>
                  <Link href={`/stories/${story.slug}`} className={styles.card}>
                    <Image
                      src={story.image}
                      alt={story.names}
                      className={styles.image}
                      fill
                    />
                    <div className={styles.overlay}>
                      <span className={styles.names}>{story.names}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
