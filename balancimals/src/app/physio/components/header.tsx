'use client'

import { useEffect, useState } from 'react';
import { Doctor, Patient } from '@prisma/client';
import styles from '../layout.module.scss';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [doctor, setDoctor] = useState<Doctor & { patients: Patient[] } | null>(null);
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    router.push('/login');
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('/api/doctor/dashboard', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setDoctor(data.doctor))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.header}>
      <a href='\'>
        <div className={styles['header-left']}>
          <img src="/bear_header.png" alt="Bear Mascot" className={styles.bearImg} width={100} height={79}/>
          <img src="/balancimals_header.png" alt="Balancimals Logo" className={styles.logoImg} height={80} width={192}/>
        </div>
      </a>
      <div className={styles['header-right']}>
        <div className={styles['dr-info']}>
          <strong>Hi, Dr {doctor?.lname || '...'}</strong>
          <a onClick={handleSignOut} className={styles['signout-btn']}>Sign Out</a>
        </div>
        <span className={styles['settings-icon']}>
          <img src="/settings_header.png" alt="Settings" className={styles['settings-img']} height={30} width={30}/>
        </span>
      </div>
    </div>
  );
}
