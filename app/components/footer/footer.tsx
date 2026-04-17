import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoRow}>
          <img src="/images/logo.jpg" alt="AKMSSS Logo" className={styles.logo} />
          <div>
            <p className={styles.name}>Ajit Kumar Mehta Sanskrit Sikshan Sansthan</p>
            <p className={styles.location}>Umakant Nagar Ward-06, Ladaura, Samastipur, Bihar (INDIA)</p>
          </div>
        </div>
        <div className={styles.divider} />
        <p className={styles.copy}>
          © Ajit Kumar Mehta Sanskrit Sikshan Sansthan | Central Sanskrit University Delhi recognized by Government of India
        </p>
      </div>
    </footer>
  );
}
