import styles from '../layout.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles['header-left']}>
      <img src="/bear_header.png" alt="Bear Mascot" className={styles.bearImg} width={137} height={108}/>
      <img src="/balancimals_header.png" alt="Balancimals Logo" className={styles.logoImg} height={100} width={240}/>
    </div>
    <div className={styles['header-right']}>
      <div className={styles['dr-info']}>
        <strong>Hi, Dr Peters</strong>
        <a href="#" className={styles['signout-btn']}>Sign Out</a>
      </div>
      <img src="/doctor_header.png" alt="Dr Peters" className={styles['profile-pic']} width={80} height={80} />
      <span className={styles['settings-icon']}>
        <img src="/settings_header.png" alt="Settings" className={styles['settings-img']} height={50} width={50}/>
      </span>
    </div>
  </div>
);

export default Header;