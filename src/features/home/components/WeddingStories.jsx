'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './WeddingStories.module.css';
import { stories } from '../data/stories';

export default function WeddingStories() {
  return (
    <section id="stories" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Wedding Stories</h2>
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
