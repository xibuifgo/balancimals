'use client';
import { useRouter } from 'next/navigation';
import styles from '../physio.module.scss';

const Header = () => {
  const router = useRouter();

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    // Optionally clear auth/session here
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles['header-left']}>
        <img src="/bear_header.png" alt="Bear Mascot" className={styles.bearImg} />
        <img src="/balancimals_header.png" alt="Balancimals Logo" className={styles.logoImg} />
      </div>
      <div className={styles['header-right']}>
        <div className={styles['dr-info']}>
          <strong>Hi, Dr Peters</strong>
          <a
            href="#"
            className={styles['signout-btn']}
            onClick={handleSignOut}
          >
            Sign Out
          </a>
        </div>
        <img src="/doctor_header.png" alt="Dr Peters" className={styles['profile-pic']} />
        <span className={styles['settings-icon']}>
          <img src="/settings_header.png" alt="Settings" className={styles['settings-img']} />
        </span>
      </div>
    </header>
  );
};

export default Header;