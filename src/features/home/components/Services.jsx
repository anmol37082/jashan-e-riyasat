import Image from 'next/image';
import styles from './Services.module.css';

const services = [
  {
    number: '01',
    title: 'Full Wedding Planning',
    image: '/images/wedding-1.jpg',
  },
  {
    number: '02',
    title: 'Destination Weddings',
    image: '/images/wedding-2.jpg',
  },
  {
    number: '03',
    title: 'Wedding Decoration',
    image: '/images/wedding-3.jpg',
  },
  {
    number: '04',
    title: 'Photography & Films',
    image: '/images/wedding-4.jpg',
  },
  {
    number: '05',
    title: 'Catering',
    image: '/gallery/haldi1.webp',
  },
  {
    number: '06',
    title: 'Bridal Makeup',
    image: '/gallery/haldi2.webp',
  },
  {
    number: '07',
    title: 'Entertainment',
    image: '/gallery/haldi3.webp',
  },
  {
    number: '08',
    title: 'Guest Management',
    image: '/gallery/haldi4.webp',
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
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={styles.serviceImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
