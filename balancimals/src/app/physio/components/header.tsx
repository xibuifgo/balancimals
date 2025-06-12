import styles from '../layout.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles['header-left']}>
      <img src="/bear_header.png" alt="Bear Mascot" className={styles.bearImg} width={100} height={79}/>
      <img src="/balancimals_header.png" alt="Balancimals Logo" className={styles.logoImg} height={80} width={192}/>
    </div>
    <div className={styles['header-right']}>
      <div className={styles['dr-info']}>
        <strong>Hi, Dr Peters</strong>
        <a href="\login" className={styles['signout-btn']}>Sign Out</a>
      </div>
      <img src="/doctor_header.png" alt="Dr Peters" className={styles['profile-pic']} width={60} height={60} />
      <span className={styles['settings-icon']}>
        <img src="/settings_header.png" alt="Settings" className={styles['settings-img']} height={30} width={30}/>
      </span>
    </div>
  </div>
);

export default Header;