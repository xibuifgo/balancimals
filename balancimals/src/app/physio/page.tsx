import styles from './physio.module.scss';
import Image from 'next/image';

export default function PhysioDashboard() {
  return (
    <div>
      {/* Header Bar */}
      <div className={styles.HeaderBar}>
        <div className={styles.HeaderLeft}>
          <Image src="/bear_header.png" alt="Bear" width={48} height={48} />
          <Image src="/balancimals_header.png" alt="Balancimals Logo" width={160} height={48} />
        </div>
        <div className={styles.HeaderRight}>
          <div className={styles.HeaderUser}>
            <span>Hi, Dr. Peters</span>
            <span className={styles.SignOut}>Sign Out</span>
          </div>
          <Image src="/doctor_header.png" alt="Doctor" width={40} height={40} className={styles.ProfilePic} />
          <Image src="/settings_header.png" alt="Settings" width={36} height={36} className={styles.SettingsIcon} />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.DashboardContainer}>
        <div className={styles.CenteredContent}>
          <h1 className={styles.HeaderTitle}>Hi Dr Peters,</h1>
          <p className={styles.HeaderSubtitle}>Here is your patient overview.</p>
          
          {/* Filter Row */}
          <div className={styles.FilterRow}>
            <select className={styles.FilterSelect}>
              <option>All</option>
            </select>
            <button className={styles.FilterButton}>
              <Image src="/filter_header.png" alt="Filter" width={24} height={24} />
            </button>
          </div>

          {/* Overview Cards */}
          <div className={styles.CardsRow}>
            <div className={styles.OverviewCard}>
              <Image src="/totalpatients_box.png" alt="Total Patients" width={80} height={80} />
              <div className={styles.CardLabel}>Total patients</div>
              <div className={styles.CardValue}>55</div>
            </div>
            <div className={styles.OverviewCard}>
              <Image src="/upcomingappointments_box.png" alt="Upcoming Appointments" width={80} height={80} />
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
                    <td>John Doe</td>
                    <td>7</td>
                    <td>Left Knee</td>
                    <td>22</td>
                    <td>5/20/2025</td>
                    <td><button className={styles.PoseStatsBtn}>Pose Stats</button></td>
                  </tr>
                  <tr>
                    <td>Lia Wong</td>
                    <td>5</td>
                    <td>Left Knee</td>
                    <td>25</td>
                    <td>4/26/2025</td>
                    <td><button className={styles.PoseStatsBtn}>Pose Stats</button></td>
                  </tr>
                  <tr>
                    <td>Leo Ford</td>
                    <td>9</td>
                    <td>Left Knee</td>
                    <td>26</td>
                    <td>4/05/2025</td>
                    <td><button className={styles.PoseStatsBtn}>Pose Stats</button></td>
                  </tr>
                  <tr>
                    <td>Anna Reid</td>
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

      {/* Footer */}
      <footer className={styles.FooterPro}>
        <div className={styles.FooterContainer}>
          <div className={`${styles.FooterCol} ${styles.Social}`}>
            <div className={styles.FooterTitle}>Follow Us</div>
            <div className={styles.FooterSocialIcons}>
              <a href="#" aria-label="Facebook">
                <Image src="/facebook.png" alt="Facebook" width={48} height={48} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Image src="/linkedin.png" alt="LinkedIn" width={48} height={48} />
              </a>
              <a href="#" aria-label="YouTube" className={styles.YoutubeIcon}>
                <Image src="/youtube.png" alt="YouTube" width={48} height={48} />
              </a>
              <a href="#" aria-label="Instagram">
                <Image src="/instagram.png" alt="Instagram" width={48} height={48} />
              </a>
            </div>
            <div className={styles.FooterContact}>
              <div><strong>Email:</strong> info@balancimals.com</div>
              <div><strong>Phone:</strong> +44 1234 567890</div>
              <div><strong>Location:</strong> 123 Therapy Lane, London, UK</div>
            </div>
          </div>
          <div className={styles.FooterCol}>
            <div className={styles.FooterTitle}>About</div>
            <a href="#">Our Team</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
          <div className={styles.FooterCol}>
            <div className={styles.FooterTitle}>Services</div>
            <a href="#">Balance &amp; Coordination Training</a>
            <a href="#">Stretching &amp; Range of Motion</a>
            <a href="#">Hydrotherapy</a>
            <a href="#">Pain Management</a>
            <a href="#">Pediatric Exergames</a>
          </div>
          <div className={styles.FooterCol}>
            <div className={styles.FooterTitle}>Resources</div>
            <a href="#">FAQs</a>
            <a href="#">Parental Guidance</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
        <div className={styles.FooterBottom}>
          &copy; 2025 Balancimals. All rights reserved.
        </div>
      </footer>
    </div>
  );
}