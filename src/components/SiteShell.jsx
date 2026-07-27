'use client';

import { useState } from 'react';

import Header from '@/features/home/components/Header';
import MobileMenu from '@/features/home/components/MobileMenu';
import Footer from '@/features/home/components/Footer';

export default function SiteShell({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header onMenuToggle={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
