import styles from './Services.module.css';

const services = [
  {
    number: '01',
    title: 'Full Service Planning',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
  },
  {
    number: '02',
    title: 'Partial Planning',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
  },
  {
    number: '03',
    title: 'Event Design',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesInner}>
        <div className={styles.servicesHeader}>
          <p className={styles.servicesLabel}>Our Services</p>
          <h2 className={styles.servicesHeading}>
            Creative Vision, <em>Seamless Execution</em>
          </h2>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.number} className={styles.serviceCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                className={styles.serviceImage}
              />
              <div className={styles.serviceOverlay}>
                <span className={styles.serviceNumber}>{service.number}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}