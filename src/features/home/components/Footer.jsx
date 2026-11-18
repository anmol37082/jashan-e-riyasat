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
                {link.label === 'Instagram' ? (
                  <svg
                    className={styles.footerInstagramIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="96"
                    height="96"
                    aria-label="Instagram"
                    role="img"
                  >
                    <defs>
                      <linearGradient id="footerInstagramGradient" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0" stopColor="#feda75" />
                        <stop offset="0.3" stopColor="#fa7e1e" />
                        <stop offset="0.55" stopColor="#d62976" />
                        <stop offset="0.8" stopColor="#962fbf" />
                        <stop offset="1" stopColor="#4f5bd5" />
                      </linearGradient>
                    </defs>
                    <rect width="512" height="512" rx="120" fill="url(#footerInstagramGradient)" />
                    <rect x="116" y="116" width="280" height="280" rx="80" fill="none" stroke="#fff" strokeWidth="28" />
                    <circle cx="256" cy="256" r="66" fill="none" stroke="#fff" strokeWidth="28" />
                    <circle cx="340" cy="172" r="18" fill="#fff" />
                  </svg>
                ) : link.label === 'Pinterest' ? (
                  <svg
                    className={styles.footerPinterestIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="96"
                    height="96"
                    aria-label="Pinterest"
                    role="img"
                  >
                    <circle cx="256" cy="256" r="256" fill="#E60023" />
                    <path
                      fill="#fff"
                      d="M265.5 94c-85.6 0-131 57.4-131 120 0 29 15.5 65.2 40.2 76.7 3.8 1.8 5.7 1 6.6-2.6.7-2.7 4-16.2 5.5-22.5.5-2 .2-3.7-1.4-5.6-8.1-9.9-14.6-28-14.6-45 0-43.5 32.9-85.6 89-85.6 48.4 0 82.3 33 82.3 80.2 0 53.3-26.9 90.2-61.9 90.2-19.3 0-33.8-16-29.2-35.6 5.6-23.4 16.3-48.7 16.3-65.6 0-15.1-8.1-27.7-24.9-27.7-19.7 0-35.6 20.4-35.6 47.7 0 17.4 5.9 29.2 5.9 29.2s-19.5 82.6-23 97.9c-4 17-2.4 40.8-.7 56.3.9 7.8 5.3 9.4 7.8 5.1 3.3-5.7 22.5-35.1 29.4-60.6 2.1-7.4 11.2-43.2 11.2-43.2 5.5 10.4 21.6 19.6 38.7 19.6 51 0 85.5-46.5 85.5-108.7C380.9 134.7 340.9 94 265.5 94z"
                    />
                  </svg>
                ) : link.label === 'YouTube' ? (
                  <svg
                    className={styles.footerYouTubeIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="96"
                    height="96"
                    aria-label="YouTube"
                    role="img"
                  >
                    <rect x="16" y="104" width="480" height="304" rx="90" fill="#FF0000" />
                    <path fill="#fff" d="M208 176v160l140-80z" />
                  </svg>
                ) : link.label === 'Facebook' ? (
                  <svg
                    className={styles.footerFacebookIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="96"
                    height="96"
                    aria-label="Facebook"
                    role="img"
                  >
                    <circle cx="256" cy="256" r="256" fill="#1877F2" />
                    <path
                      fill="#fff"
                      d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H369v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330z"
                    />
                  </svg>
                ) : link.label}
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
