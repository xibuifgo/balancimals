import Link from 'next/link';
import styles from './physio.module.scss';

export default function PhysioDashboard() {
  return (
    <div>
      {/* Header Bar */}
      <div className={styles.Container}>

        <h1>Hi Dr. Peters,</h1>
        <h3>Here is your patient overview.</h3>

        {/* Overview Cards */}
        <div className={styles.CardsRow}>
          <div className={styles.OverviewCard}>
            <img src="/totalpatients_box.png" alt="Total Patients" width={80} height={80} />
            <div className={styles.CardLabel}>Total patients</div>
            <div className={styles.CardValue}>55</div>
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
              <span className={styles.ShareCode}>6ztEFj09</span>
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
                  <th>Area of Focus &#9660;</th>
                  <th>Week &#9660;</th>
                  <th>Last Visit &#9660;</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/physio/patient-record" style={{ color: '#2c2154', textDecoration: 'underline', cursor: 'pointer', fontWeight: 500 }}>
                      John Doe
                    </Link>
                  </td>
                  <td>7</td>
                  <td>Left Knee</td>
                  <td>22</td>
                  <td>5/20/2025</td>
                  <td><button className={styles.PoseStatsBtn}>Pose Stats</button></td>
                </tr>
                <tr>
                  <td>
                    <span style={{ color: '#2c2154', textDecoration: 'underline', cursor: 'pointer', fontWeight: 500 }}>
                      Lia Wong
                    </span>
                  </td>
                  <td>5</td>
                  <td>Left Knee</td>
                  <td>25</td>
                  <td>4/26/2025</td>
                  <td><button className={styles.PoseStatsBtn}>Pose Stats</button></td>
                </tr>
                <tr>
                  <td>
                    <span style={{ color: '#2c2154', textDecoration: 'underline', cursor: 'pointer', fontWeight: 500 }}>
                      Leo Ford
                    </span>
                  </td>
                  <td>9</td>
                  <td>Left Knee</td>
                  <td>26</td>
                  <td>4/05/2025</td>
                  <td><button className={styles.PoseStatsBtn}>Pose Stats</button></td>
                </tr>
                <tr>
                  <td>
                    <span style={{ color: '#2c2154', textDecoration: 'underline', cursor: 'pointer', fontWeight: 500 }}>
                      Anna Reid
                    </span>
                  </td>
                  <td>10</td>
                  <td>Left Knee</td>
                  <td>27</td>
                  <td>3/30/2025</td>
                  <td><button className={styles.PoseStatsBtn}>Pose Stats</button></td>
                </tr>
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