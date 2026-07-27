'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/features/home/components/Header';
import MobileMenu from '@/features/home/components/MobileMenu';
import Hero from '@/features/home/components/Hero';
import { stories } from '@/features/home/data/stories';

import styles from './page.module.css';

export default function StoriesLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header onMenuToggle={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <Hero />

      <section id="stories" className={styles.page}>
        <div className={styles.gridWrap}>
          <div className={styles.grid}>
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className={styles.card}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={story.image}
                    alt={story.names}
                    className={styles.image}
                    fill
                  />
                  <div className={styles.overlay}>
                    <span className={styles.overlayText}>{story.names}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
