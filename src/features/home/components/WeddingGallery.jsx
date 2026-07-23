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
        <p className={styles.eyebrow}>Gallery</p>
        <h2 className={styles.title}>Inspiration For Wedding Frames</h2>
        <p className={styles.subtitle}>Give your special day a new look</p>
      </div>

      <div className={styles.tabsContainer}>
        {cities.map((city) => (
          <button
            key={city.id}
            onClick={() => setActiveCity(city.id)}
            className={`${styles.tab} ${activeCity === city.id ? styles.tabActive : ''}`}
          >
            {city.label}
          </button>
        ))}
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