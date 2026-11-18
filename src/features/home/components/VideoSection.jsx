import styles from './VideoSection.module.css';

export default function VideoSection() {
  return (
    <section className={styles.videoSection}>
      {/* Video with top and side padding */}
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      {/* Text content below video */}
      <div className={styles.videoContent}>
        <p className={styles.videoLabel}>Our Approach</p>

        <p className={styles.videoText}>
         At Jashan-e-Riyasat, we believe that every couple has a beautiful story
         worth celebrating, and every wedding should be a true reflection of their
         love, personality, and dreams. Our approach begins with listening and
         understanding your vision, preferences, cultural traditions, and the little
         details that make your celebration uniquely yours.
         <br />
         <br />
         We take the time to understand what matters most to you, transforming your
         ideas into a thoughtfully planned and beautifully curated experience. From
         selecting the perfect theme and designing breathtaking decor to managing
         every detail with precision, our team works closely with you at every step.
         We focus on creativity, personalisation, and flawless execution to ensure
         that every celebration feels meaningful, effortless, and truly unforgettable.
         <br />
         <br />
         Because at Jashan-e-Riyasat, we don&apos;t believe in creating just another
         wedding, we believe in bringing your dream celebration to life.
        </p>
        
      </div>
    </section>
  );
}
