import styles from './MobileMenu.module.css';

const menuItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Journal', href: '#journal' },
  { label: 'Mentorship', href: '#mentorship' },
  { label: 'Contact', href: '#contact' },
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