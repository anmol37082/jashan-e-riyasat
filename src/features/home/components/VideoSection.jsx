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
         At Jashan-e-Riyasat, we believe every couple has a unique story,
         and every wedding should reflect it. That&apos;s why we take the
          time to understand your vision, preferences, and traditions
           before we start planning.
        </p>
        
      </div>
    </section>
  );
}
