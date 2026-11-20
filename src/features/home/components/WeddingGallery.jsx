'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WeddingGallery.module.css';
import { cities, galleryData } from '../data/gallery';
// ^ adjust path based on your folder structure

export default function WeddingGallery() {
  const [activeCity, setActiveCity] = useState('haldi');
  const currentImages = galleryData[activeCity];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>
          Gallery
          <svg width="60" height="60" viewBox="0 0 64 64" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="8" width="46" height="40" rx="3" stroke="#b8860b" strokeWidth="2.5" transform="rotate(-6 29 28)" />
            <rect x="12" y="14" width="46" height="40" rx="3" fill="#fffaf0" stroke="#6b0000" strokeWidth="2.5" />
            <circle cx="25" cy="26" r="4.5" fill="#b8860b" />
            <path d="M14.5 52 L28 36 L36 45 L43 37 L55.5 52 Z" fill="#6b0000" />
            <path d="M56 2 L57.4 5.6 L61 7 L57.4 8.4 L56 12 L54.6 8.4 L51 7 L54.6 5.6 Z" fill="#b8860b" />
          </svg>
        </p>
        <h2 className={styles.title}>Inspiration For Wedding Frames</h2>
        <p className={styles.subtitle}>Give your special day a new look</p>
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabsFirstRow}>
          {cities.slice(0, -2).map((city) => (
            <button
              key={city.id}
              onClick={() => setActiveCity(city.id)}
              className={`${styles.tab} ${activeCity === city.id ? styles.tabActive : ''}`}
            >
              {city.label}
            </button>
          ))}
        </div>
        <div className={styles.tabsLastRow}>
          {cities.slice(-2).map((city) => (
            <button
              key={city.id}
              onClick={() => setActiveCity(city.id)}
              className={`${styles.tab} ${activeCity === city.id ? styles.tabActive : ''}`}
            >
              {city.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.collageGrid} key={activeCity}>
        {currentImages.map((item, index) => (
          <div key={index} className={styles.cell}>
            <Image
              src={item.img}
              alt={item.label}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className={styles.cellImage}
              unoptimized
            />
            <div className={styles.overlay} />
            <div className={styles.caption}>
              <span className={styles.captionLine} />
              <span className={styles.captionLabel}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
