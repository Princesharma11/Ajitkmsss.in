import { NavLink } from "react-router";
import styles from "./navbar.module.css";

export default function Navbar() {
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
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Home
          </NavLink>
          <NavLink to="/#courses" className={styles.link}>Courses</NavLink>
          <NavLink to="/#leadership" className={styles.link}>Leadership</NavLink>
          <NavLink to="/#campus" className={styles.link}>Campus</NavLink>
          <NavLink to="/#contact" className={styles.link}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
