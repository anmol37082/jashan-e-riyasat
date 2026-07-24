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
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      {/* Text content below video */}
      <div className={styles.videoContent}>
        <p className={styles.videoLabel}>Our Approach</p>
        
        <p className={styles.videoText}>
         At Jashn E Riyasat, we believe every couple has a unique story, 
         and every wedding should reflect it. That&apos;s why we take the
          time to understand your vision, preferences, and traditions
           before we start planning.
        </p>
        
        <a href="#about" className={styles.videoCta}>
          About Us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}