import Image from 'next/image';
import styles from './AboutIntro.module.css';

export default function AboutIntro() {
  return (
    <section className={styles.aboutIntro} id="about">
      <div className={styles.aboutInner}>
        <div className={styles.aboutLeft}>
          {/* Small C&C Logo */}
          <div className={styles.aboutLogoSmall}>
            <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="40" cy="50" rx="35" ry="45" stroke="#2c241b" strokeWidth="1.5"/>
              <ellipse cx="40" cy="50" rx="30" ry="40" stroke="#2c241b" strokeWidth="1" opacity="0.5"/>
              <path d="M32 32 C24 32, 20 40, 20 50 C20 60, 24 68, 32 68" stroke="#2c241b" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M48 32 C56 32, 60 40, 60 50 C60 60, 56 68, 48 68" stroke="#2c241b" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M34 50 Q40 42, 46 50 Q40 58, 34 50" stroke="#2c241b" strokeWidth="1.5" fill="none"/>
              <path d="M28 82 Q40 90, 52 82" stroke="#2c241b" strokeWidth="1" fill="none" opacity="0.4"/>
              <path d="M30 16 Q40 8, 50 16" stroke="#2c241b" strokeWidth="1" fill="none" opacity="0.4"/>
            </svg>
          </div>

          <h2 className={styles.aboutHeading}>
            Creating Weddings <em>That Feel Truly Yours </em>
          </h2>
          
          <p className={styles.aboutText}>
           Your wedding is more than an event it&apos;s the beginning of 
           a beautiful journey. At Jashn E Riyasat, we bring your vision 
           to life through thoughtful planning, stunning décor, and 
           seamless coordination, creating celebrations filled with 
           love, joy, and unforgettable memories.
          </p>
          
          <a href="#services" className={styles.aboutCta}>
            Our Services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className={styles.aboutRight}>
          <div className={styles.aboutImageWrapper}>
            <Image
              src="/aboutbnner2.webp"
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