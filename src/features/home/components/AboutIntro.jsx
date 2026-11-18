import Image from 'next/image';
import styles from './AboutIntro.module.css';

export default function AboutIntro() {
  return (
    <section className={styles.aboutIntro} id="about">
      <div className={styles.aboutInner}>
        <div className={styles.aboutLeft}>
          <h2 className={styles.aboutHeading}>
            Creating Weddings <em>That Feel Truly Yours </em>
          </h2>
          
          <p className={styles.aboutText}>
           Your wedding is not just a celebration, it is the beginning of
           a beautiful forever, a journey filled with love, promises, dreams,
           and countless moments to cherish.
           <br />
           <br />
           At Jashan-e-Riyasat, we believe every love story deserves a celebration
           as extraordinary as the bond it represents. From thoughtfully curated
           themes and breathtaking decor to meticulous planning and seamless
           coordination, we take care of every little detail to bring your dream
           wedding to life. We blend creativity, elegance, and perfection to create
           celebrations that reflect your unique story, leaving you and your loved
           ones with memories that will be treasured for a lifetime. Because your
           special day deserves nothing less than magical.
          </p>
          
        </div>
        
        <div className={styles.aboutRight}>
          <div className={styles.aboutImageWrapper}>
            <Image
              src="/about.jpeg"
              alt="Elegant wedding table setting"
              className={styles.aboutImage}
              width={600}
              height={900}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
