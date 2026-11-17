import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  const contactData = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Address',
      value: 'Studio address available on request',
      href: null,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 78891 08874',
      href: 'tel:+917889108874',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email',
      value: 'jashneriyasat@gmail.com',
      href: 'mailto:jashneriyasat@gmail.com',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: 'Hours',
      value: 'Mon – Sat: 10:00 AM – 7:00 PM',
      href: null,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: '+91 78891 08874',
      href: 'https://wa.me/917889108874',
    },
  ];

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.overline}>Contact</span>
            <h2 className={styles.heading}>Let&apos;s Plan Your Perfect Day</h2>
            <p className={styles.subheading}>
              Reach out to plan your celebration, or connect with us on social media.
            </p>
          </div>

          <div className={styles.infoList}>
            {contactData.map((item, index) => (
              <div key={index} className={styles.infoRow}>
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.infoText}>
                  <span className={styles.label}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className={styles.value} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {item.value}
                    </a>
                  ) : (
                    <span className={styles.value}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mapSide}>
          <div className={styles.mapWrapper}>
            <iframe
              className={styles.mapFrame}
              src="https://www.google.com/maps?q=Chandigarh&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chandigarh Map"
            />
          </div>
          <a
            href="https://maps.google.com/?q=Chandigarh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsLink}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            View Chandigarh Map
          </a>
        </div>
      </div>
    </section>
  );
}
