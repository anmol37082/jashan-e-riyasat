import Image from 'next/image';
import styles from './Services.module.css';

const services = [
  {
    number: '01',
    title: 'Full Wedding Planning',
    image: '/services/service01.webp',
  },
  {
    number: '02',
    title: 'Destination Weddings',
    image: '/services/service2.webp',
  },
  {
    number: '03',
    title: 'Wedding Decoration',
    image: '/services/service3.webp',
  },
  {
    number: '04',
    title: 'Photography & Films',
    image: '/services/service4.webp',
  },
  {
    number: '05',
    title: 'Catering',
    image: '/services/service5.webp',
  },
  {
    number: '06',
    title: 'Bridal Makeup',
    image: '/services/service6.webp',
  },
  {
    number: '07',
    title: 'Entertainment',
    image: '/services/service7.webp',
  },
  {
    number: '08',
    title: 'Guest Management',
    image: '/services/service8.webp',
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
