import styles from './PressLogos.module.css';

const logos = [
  'The Anti-Bride',
  'The Kit',
  'Ruffled',
  'WedVibes',
  'Wedding Sparrow',
];

export default function PressLogos() {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className={styles.pressLogos}>
      <div className={styles.pressTrack}>
        {allLogos.map((logo, index) => (
          <span key={`${logo}-${index}`} className={styles.pressLogo}>
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}