'use client'

import { useEffect, useState } from 'react';
import { Doctor, Patient } from '@prisma/client'

import Link from 'next/link';
import styles from './physio.module.scss';

export default function PhysioDashboard() {

  function getAgeFromBirthday(birthday: string | Date) {
      const birth = new Date(birthday);
      const ageDifMs = Date.now() - birth.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  type DoctorWithPatients = Doctor & { patients: Patient[] };
  const [doctor, setDoctor ] = useState<DoctorWithPatients | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("[DEBUG] Token from localStorage: ", token);
    if (!token) {
      console.error("[DEBUG] No token found in localStorage");
      return;
    }

    fetch('/api/doctor/dashboard', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        return res.json();
      })
      .then(data => setDoctor(data.doctor))
      .catch(err => {
        console.error('[DEBUG] Failed fetch', err);
      });
  }, []);


  return (
    <div>
      {/* Header Bar */}
      <div className={styles.Container}>

        <h1>Hi Dr. {doctor?.lname},</h1>
        <h3>Here is your patient overview.</h3>

        {/* Overview Cards */}
        <div className={styles.CardsRow}>
          <div className={styles.OverviewCard}>
            <img src="/totalpatients_box.png" alt="Total Patients" width={80} height={80} />
            <div className={styles.CardLabel}>Total patients</div>
            <div className={styles.CardValue}> {doctor?.patients.length} </div>
          </div>
          <div className={styles.OverviewCard}>
            <img src="/upcomingappointments_box.png" alt="Upcoming Appointments" width={80} height={80} />
            <div className={styles.CardLabel}>Upcoming Appointments</div>
            <div className={styles.CardValue}>23</div>
          </div>
        </div>

        {/* Manage Patients Section */}
        <div className={styles.PatientsSection}>
          {/* Share Code Card */}
          <div className={styles.ShareCodeCard}>
            <div>
              <span>Share Code:</span>
              <span className={styles.ShareCode}> {doctor?.sharecode} </span>
            </div>
            <button className={styles.ExpandBtn} title="Expand">
              <svg width="20" height="20" viewBox="0 0 20 20"><path d="M7 3H3v4M3 3l5 5M13 17h4v-4M17 17l-5-5" stroke="#888" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </button>
          </div>

          {/* Patients Table */}
          <div className={styles.PatientsTableWrapper}>
            <h2>Manage Patients</h2>
            <table className={styles.PatientsTable}>
              <thead>
                <tr>
                  <th>Name &#9660;</th>
                  <th>Age &#9660;</th>
                  <th>Last Visit &#9660;</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {doctor?.patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>
                      <Link
                        href={`/physio/patient-record/${patient.id}`}
                        style={{
                          color: '#2c2154',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          fontWeight: 500
                        }}
                      >
                        {patient.fname} {patient.lname}
                      </Link>
                    </td>
                    <td>{getAgeFromBirthday(patient.birthday)}</td>
                    <td>17/06/2025</td>
                    <td>
                      <button className={styles.PoseStatsBtn}>Pose Stats</button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Load More Patients Button */}
          <div className={styles.LoadMoreWrapper}>
            <button className={styles.LoadMoreBtn}>Load more patients</button>
          </div>
        </div>
      </div>
    </div>
  );
}