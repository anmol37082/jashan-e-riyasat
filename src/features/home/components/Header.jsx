'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import useScrollPosition from '@/hooks/useScrollPosition';

const leftNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Destinations', href: '/destinations/delhi-ncr' },
];

const rightNavItems = [
  { label: 'Blog', href: '/blog' },
  { label: 'Our Work', href: '/stories' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ onMenuToggle }) {
  const isScrolled = useScrollPosition(80);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = document.getElementById('portfolio');
      const testimonialsSection = document.getElementById('testimonials');
      const storiesSection = document.getElementById('stories');

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

      if (storiesSection) {
        const storiesRect = storiesSection.getBoundingClientRect();
        const isStoriesActive = storiesRect.top <= 0 && storiesRect.bottom > 0;
        if (isStoriesActive) shouldHide = true;
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
              {item.href.startsWith('/') ? (
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              ) : (
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <Link href="/" className={styles.logo} aria-label="Go to home page">
          <Image
            src="/logo.webp"
            alt="Jashan-e-Riyasat Luxury Wedding Planners"
            width={896}
            height={280}
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Right Navigation */}
        <ul className={styles.navRight}>
          {rightNavItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.navLink}
                {...(item.href.startsWith('/') ? { 'aria-label': item.label } : {})}
              >
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
