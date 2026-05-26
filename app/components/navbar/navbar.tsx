import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import styles from './navbar.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/#courses', label: 'Courses' },
  { to: '/#shlokas', label: 'Shlokas' },
  { to: '/staff', label: 'Our People' },
  { to: '/#campus', label: 'Campus' },
  { to: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMenu]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/images/logo.jpg" alt="AKMSSS Logo" className={styles.logo} />
          <div className={styles.brandText}>
            <span className={styles.brandName}>A.K.M.S.S.S</span>
            <span className={styles.brandSub}>Ajit Kumar Mehta Sanskrit Sikshan Sansthan</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className={styles.mobileNav} onClick={closeMenu}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
