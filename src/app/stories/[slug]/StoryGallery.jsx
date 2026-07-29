"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './page.module.css';

export default function StoryGallery({ storyName, mediaItems }) {
  const [activeMedia, setActiveMedia] = useState(null);

  useEffect(() => {
    if (!activeMedia) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveMedia(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeMedia]);

  return (
    <>
      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Gallery</h2>
        <div className={styles.galleryGrid}>
          {mediaItems.map((item, index) => {
            const media = typeof item === 'string' ? { type: 'image', src: item } : item;
            const heightPattern = [
              styles.galleryShort,
              styles.galleryMedium,
              styles.galleryTall,
              styles.galleryMedium,
              styles.galleryShort,
              styles.galleryMedium,
              styles.galleryTall,
              styles.galleryShort,
              styles.galleryTall,
            ];
            const tileClass = heightPattern[index % heightPattern.length];

            return (
              <button
                key={`${media.type}-${media.src}`}
                type="button"
                className={`${styles.galleryButton} ${styles.galleryItem} ${tileClass}`}
                data-media-type={media.type}
                onClick={() => setActiveMedia(media)}
                aria-label={`Open ${storyName} gallery item ${index + 1}`}
              >
                {media.type === 'video' ? (
                  <>
                    <video
                      className={styles.galleryImage}
                      src={media.src}
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <span className={styles.videoBadge} aria-hidden="true">
                      <span className={styles.videoPlayIcon} />
                      <span className={styles.videoBadgeText}>Video</span>
                    </span>
                  </>
                ) : (
                  <Image
                    src={media.src}
                    alt={`${storyName} gallery ${index + 1}`}
                    fill
                    className={styles.galleryImage}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {activeMedia ? (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label="Media preview"
          onClick={() => setActiveMedia(null)}
        >
          <div className={styles.modalContent} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActiveMedia(null)}
              aria-label="Close preview"
            >
              X
            </button>

            <div className={styles.modalImageWrap}>
              {activeMedia.type === 'video' ? (
                <video
                  className={styles.modalMedia}
                  src={activeMedia.src}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <Image
                  src={activeMedia.src}
                  alt={`${storyName} preview`}
                  fill
                  className={styles.modalMedia}
                />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
