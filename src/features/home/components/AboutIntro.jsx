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
           Your wedding is more than an event it&apos;s the beginning of
           a beautiful journey. At Jashan-e-Riyasat, we bring your vision
           to life through thoughtful planning, stunning décor, and
           seamless coordination, creating celebrations filled with 
           love, joy, and unforgettable memories.
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
