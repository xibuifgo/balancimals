import styles from '../physio.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles['footer-container']}>
      <div className={styles['footer-col']}>
        <div className={styles['footer-title']}>Follow Us</div>
        <div className={styles['footer-social-icons']}>
          <a href="#" aria-label="Facebook"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="#" aria-label="LinkedIn"><img src="/linkedin.png" alt="LinkedIn" /></a>
          <a href="#" aria-label="YouTube"><img src="/youtube.png" alt="YouTube" /></a>
          <a href="#" aria-label="Instagram"><img src="/instagram.png" alt="Instagram" /></a>
        </div>
      </div>
      <div className={styles['footer-col']}>
        <div className={styles['footer-title']}>About Us</div>
        <a href="#">Services</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <div className={styles['footer-col']}>
        <div className={styles['footer-title']}>Services</div>
        <a href="#">Balance &amp; Coordination Training</a>
        <a href="#">Stretching &amp; Range of Motion Therapy</a>
        <a href="#">Pain Management Techniques</a>
        <a href="#">Hydrotherapy</a>
      </div>
    </div>
    <div className={styles['footer-bottom']}>
      &copy; 2025 Balancimals. All rights reserved.
    </div>
  </footer>
);

export default Footer;