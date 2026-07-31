import styles from './MobileMenu.module.css';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Destinations', href: '/destinations/delhi-ncr' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Our Work', href: '/stories' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
      <button className={styles.mobileMenuClose} onClick={onClose}>
        ×
      </button>
      {menuItems.map((item) => (
        <a key={item.href} href={item.href} onClick={onClose}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
