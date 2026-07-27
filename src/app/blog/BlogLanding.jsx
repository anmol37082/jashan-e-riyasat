'use client';

import { useState } from 'react';
import Image from 'next/image';

import Header from '@/features/home/components/Header';
import MobileMenu from '@/features/home/components/MobileMenu';
import Hero from '@/features/home/components/Hero';
import { blogs } from '@/features/home/data/blogs';

import styles from './page.module.css';

export default function BlogLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header onMenuToggle={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <Hero />

      <section className={styles.page}>
        <div className={styles.gridWrap}>
          <div className={styles.grid}>
            {blogs.map((blog) => (
              <article key={blog.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className={styles.image}
                    fill
                  />
                  <div className={styles.overlay} />
                  <div className={styles.content}>
                    <h2 className={styles.blogTitle}>{blog.title}</h2>
                    <p className={styles.date}>{blog.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
