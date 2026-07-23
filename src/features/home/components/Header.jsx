'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import useScrollPosition from '@/hooks/useScrollPosition';

const leftNavItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
];

const rightNavItems = [
  { label: 'Journal', href: '#journal' },
  { label: 'Mentorship', href: '#mentorship' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ onMenuToggle }) {
  const isScrolled = useScrollPosition(80);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = document.getElementById('portfolio');
      const testimonialsSection = document.getElementById('testimonials');

      let shouldHide = false;

      if (portfolioSection) {
        const portfolioRect = portfolioSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isPortfolioActive = portfolioRect.top <= 0 && portfolioRect.bottom > viewportHeight;
        if (isPortfolioActive) shouldHide = true;
      }

      if (testimonialsSection) {
        const testimonialsRect = testimonialsSection.getBoundingClientRect();
        // Testimonials section (85vh) is shorter than the viewport, so the
        // old "bottom > viewportHeight" check never fired. Instead: hide
        // header as soon as the section's top crosses the header area,
        // and keep it hidden until the section has fully scrolled away.
        const isTestimonialsActive = testimonialsRect.top <= 0 && testimonialsRect.bottom > 0;
        if (isTestimonialsActive) shouldHide = true;
      }

      setIsHidden(shouldHide);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        ${styles.header} 
        ${isScrolled ? styles.scrolled : ''} 
        ${isHidden ? styles.hidden : ''}
      `}
    >
      <div className={styles.headerInner}>
        {/* Left Navigation */}
        <ul className={styles.navLeft}>
          {leftNavItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <div className={styles.logo}>
          <div className={styles.logoTop}>
            <span className={styles.logoEst}>Est</span>
            <div className={styles.logoIcon} />
            <span className={styles.logoYear}>2026</span>
          </div>
          <h1 className={styles.logoMain}>
            Jashn-<span>e-</span>Riyasat
          </h1>
          <p className={styles.logoSub}>Events</p>
        </div>

        {/* Right Navigation */}
        <ul className={styles.navRight}>
          {rightNavItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className={styles.menuToggle} onClick={onMenuToggle}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}