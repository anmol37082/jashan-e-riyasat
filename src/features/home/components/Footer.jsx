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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Left - Description */}
        <div className={styles.footerLeft}>
          <p className={styles.footerDesc}>
            Your destination for luxury wedding planning, creative event
            production, and refined celebrations in Toronto and destinations
            worldwide. Recognized as one of Canada&apos;s top wedding planners.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerInstagram}
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
        </div>

        {/* Center - Logo */}
        <div className={styles.footerCenter}>
          <Image
            src="/logo.png"
            alt="Jashn-e-Riyasat Monogram"
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
          <a href="mailto:hello@jashneriyasat.com" className={styles.footerEmail}>
            hello@jashneriyasat.com
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerInstagramRight}
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
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

      {/* Large Brand Name */}
      <div className={styles.footerBrand}>
        <p className={styles.footerBrandText}>
          JASHN<span>-E-</span>RIYASAT
        </p>
      </div>
    </footer>
  );
}