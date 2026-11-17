'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'MENTORSHIP', href: '#mentorship' },
  { label: 'INQUIRE', href: '#contact' },
  { label: 'STUDIO', href: '#studio' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/JASHNERIYASAT/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Jashn-E-Riyasat' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/Jashn_E_Riyasat/' },
  { label: 'Instagram', href: 'https://www.instagram.com/jashn_e_riyasat/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Left - Description */}
        <div className={styles.footerLeft}>
          <p className={styles.footerDesc}>
            Your destination for luxury wedding planning, creative event
            production, and refined celebrations in India and destinations
            worldwide.
          </p>
          <div className={styles.footerSocials} aria-label="Social media links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Center - Logo */}
        <div className={styles.footerCenter}>
          <Image
            src="/mainlogo.webp"
            alt="Jashan-e-Riyasat Monogram"
            width={120}
            height={150}
            className={styles.footerLogo}
            unoptimized
          />
        </div>

        {/* Right - Contact */}
        <div className={styles.footerRight}>
          <p className={styles.footerInquire}>
            Inquire <a href="#contact">here</a> for weddings, for other questions:
          </p>
          <a href="mailto:jashneriyasat@gmail.com" className={styles.footerEmail}>
            jashneriyasat@gmail.com
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.footerNav}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.footerNavLink}>
            {link.label}
          </a>
        ))}
      </nav>

    </footer>
  );
}
