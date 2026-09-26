'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Header from '@/features/home/components/Header';
import MobileMenu from '@/features/home/components/MobileMenu';
import Footer from '@/features/home/components/Footer';
import Loader from '@/components/Loader';
import styles from './SiteShell.module.css';

export default function SiteShell({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeLoading, setIsHomeLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      return undefined;
    }

    let isActive = true;

    const heroImage = new window.Image();
    const finishLoading = () => {
      if (isActive) setIsHomeLoading(false);
    };

    heroImage.addEventListener('load', finishLoading, { once: true });
    heroImage.addEventListener('error', finishLoading, { once: true });
    heroImage.src = '/hero/hero10.png';

    return () => {
      isActive = false;
      heroImage.removeEventListener('load', finishLoading);
      heroImage.removeEventListener('error', finishLoading);
    };
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header onMenuToggle={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <main>{children}</main>
      <Footer />
      {pathname === '/' && isHomeLoading && (
        <div className={styles.loadingOverlay}>
          <Loader />
        </div>
      )}
    </>
  );
}
