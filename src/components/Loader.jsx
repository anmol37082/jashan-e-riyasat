import styles from './Loader.module.css';
import Image from 'next/image';

const LOGO_SRC = '/mainlogo.webp';

export default function Loader({ label = 'Loading', size = 200, className = '' }) {
  return (
    <div className={`${styles.stage} ${className}`} role="status" aria-label={label || 'Loading'}>
      <div className={styles.loader} style={{ width: size, height: size }} aria-hidden="true">
        <div className={styles.halo} />
        <div className={styles.ringTrack} />
        <div className={styles.ring} />
        <div className={styles.spark} />
        <div className={styles.mark}>
          <Image src={LOGO_SRC} alt="" className={styles.markImg} width={200} height={200} />
          <div className={styles.shimmer}>
            <div className={styles.shimmerBar} />
          </div>
        </div>
      </div>

      {label && (
        <>
          <div className={styles.rule} aria-hidden="true" />
          <div className={styles.label} aria-hidden="true">
            {label.split('').map((character, index) => (
              <span key={`${character}-${index}`} style={{ animationDelay: `${index * 0.08}s` }}>
                {character === ' ' ? '\u00A0' : character}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
