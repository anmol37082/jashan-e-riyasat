import Image from 'next/image';
import styles from './AboutBannerSection.module.css';

export default function AboutBannerSection() {
  return (
    <section className={styles.section} aria-label="About page banner">
      <div className={styles.frame}>
        <Image
          src="/aboutbanner.webp"
          alt="Elegant wedding celebration banner"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className={styles.image}
        />
      </div>
    </section>
  );
}
