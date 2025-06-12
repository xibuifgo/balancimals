
// filepath: balancimals/balancimals/src/app/patient record/page.tsx
import styles from './patient.module.scss';

export default function PatientRecord() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles['header-left']}>
          <img src="bear_header.png" alt="Bear Mascot" height={70} />
          <img src="title.png" alt="Balancimals Logo" height={70} />
        </div>
        <div className={styles['header-right']}>
          <div className={styles['dr-info']}>
            <strong>Hi, Dr Peters</strong>
            <a href="#" className={styles['signout-btn']}>Sign Out</a>
          </div>
          <img src="dr-peters.png" alt="Dr Peters" className={styles['profile-pic']} />
          <span className={styles['settings-icon']}>
            <img src="settings.png" alt="Settings" className={styles['settings-img']} style={{width: 50, height: 50}} />
          </span>
        </div>
      </header>

      <div className={styles.container}>
        <section className={styles['patient-info-pro']}>
          <img src="john-doe.jpg.png" alt="Patient Photo" className={styles['profile-pic-large']} />
          <div className={styles['patient-info-main']}>
            <div className={styles['patient-info-header']}>
              <span className={styles['patient-info-label']}>Patient details</span>
              <span className={styles['patient-info-name']}>John Doe</span>
              <button className={styles['ehr-btn']}>Push to EHR</button>
            </div>
            <div className={styles['patient-info-grid']}>
              <div><strong>DOB:</strong> 4/6/2019</div>
              <div><strong>Patient ID:</strong> 363-8236</div>
              <div><strong>Age:</strong> 6</div>
              <div><strong>Email:</strong> j.doe@gmail.com</div>
              <div><strong>Gender:</strong> Male</div>
              <div><strong>Phone:</strong> +44 6372757193</div>
              <div><strong>Diagnosis:</strong> Balance impairment</div>
              <div><strong>Referring Clinician:</strong> Dr. Peters</div>
              <div><strong>Last Session:</strong> 20/1/2025</div>
              <div><strong>Next Appointment:</strong> 27/1/2025</div>
            </div>
          </div>
        </section>

        <section className={styles['focus-area-pro']}>
          <div className={styles['focus-area-left']}>
            <img src="knee.image.png" alt="Knee Icon" className={styles['focus-icon']} />
            <div>
              <div className={styles['focus-title']}>Area of Focus</div>
              <div className={styles['focus-main']}>
                Knee <span className={styles['focus-side']}>(left)</span>
              </div>
              <div className={styles['focus-meta']}>
                <div className={styles['focus-meta-block']}>
                  <div className={styles['focus-meta-label']}>Outcome Scores</div>
                  <div className={styles['focus-meta-value']}>3</div>
                </div>
                <div className={styles['focus-meta-block']}>
                  <div className={styles['focus-meta-label']}>Week</div>
                  <div className={styles['focus-meta-value']}>22</div>
                </div>
                <div className={styles['focus-meta-block']}>
                  <div className={styles['focus-meta-label']}>Last Exam</div>
                  <div className={styles['focus-meta-value']}>20/1/2025</div>
                </div>
                <div className={styles['focus-meta-block']}>
                  <div className={styles['focus-meta-label']}>Visits</div>
                  <div className={styles['focus-meta-value']}>12</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['focus-area-right']}>
            <div className={styles['chart-title']} style={{marginBottom: '0.5em'}}>
              Flexion/Extension Angle Analysis
            </div>
            <img
              src="flexion-extension.chart.png"
              alt="Combined Flexion/Extension and SPM Chart"
              className={styles['chart-img']}
              style={{
                maxWidth: 480,
                width: '100%',
                background: '#e6f2fb',
                borderRadius: 10,
                boxShadow: '0 1px 4px rgba(44,44,84,0.04)'
              }}
            />
          </div>
        </section>

        <section className={styles['recovery-plan-pro']}>
          <button className={styles['recovery-btn']}>
            <span className={styles['recovery-icon']}>&#9654;</span>
            Recovery Plan
          </button>
        </section>

        <section className={styles.summary}>
          <div className={styles['summary-results']}>
            <h4>Final Results</h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Games Completed</td>
                  <td>5 / 5</td>
                </tr>
                <tr>
                  <td>Average Balance Score</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>Reaction Time (ms)</td>
                  <td>420</td>
                </tr>
                <tr>
                  <td>Falls or Loss of Balance</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Session Duration</td>
                  <td>18 min</td>
                </tr>
                <tr>
                  <td>Fun Rating (Self-Reported)</td>
                  <td>9 / 10</td>
                </tr>
              </tbody>
            </table>
            <div style={{marginTop: '1em'}}>
              <strong>Comments:</strong>
              <div style={{
                background: '#f4f7fa',
                borderRadius: 6,
                padding: '0.7em',
                marginTop: '0.3em'
              }}>
                Great effort! Maintained balance throughout all games. Enjoyed the session and followed instructions well.
              </div>
            </div>
            <div className={styles['medical-records-table']}>
              <h2>Medical Records</h2>
              <table>
                <thead>
                  <tr>
                    <th style={{width: '70%'}}>Record</th>
                    <th style={{width: '30%'}}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles['record-name']}>MRI</td>
                    <td><button className={styles['view-btn']}>View</button></td>
                  </tr>
                  <tr>
                    <td className={styles['record-name']}>X Ray</td>
                    <td><button className={styles['view-btn']}>View</button></td>
                  </tr>
                  <tr>
                    <td className={styles['record-name']}>Blood Test Report</td>
                    <td><button className={styles['view-btn']}>View</button></td>
                  </tr>
                  <tr>
                    <td className={styles['record-name']}>Prescription</td>
                    <td><button className={styles['view-btn']}>View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles['summary-results']}>
            <h4>Pain &amp; Discomfort Ratings</h4>
            <table>
              <thead>
                <tr>
                  <th>Body Part</th>
                  <th>Pain (0-10)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Knee</td>
                  <td>0</td>
                  <td>No pain reported</td>
                </tr>
                <tr>
                  <td>Ankle</td>
                  <td>1</td>
                  <td>Mild tiredness after session</td>
                </tr>
                <tr>
                  <td>Back</td>
                  <td>0</td>
                  <td>No discomfort</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.summary}>
          <div className={styles['summary-results']}>
            <h4>Final Results</h4>
            <table>
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Performed Effect Observed</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Balance Test</td>
                  <td>Improved stability</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>Reaction Game</td>
                  <td>Faster response</td>
                  <td>75%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles['summary-results']}>
            <h4>Pain Ratings</h4>
            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Knee</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Ankle</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <footer className={styles['footer']}>
        <div className={styles['footer-container']}>
          <div className={`${styles['footer-col']} ${styles.social}`}>
            <div className={styles['footer-title']}>Follow Us</div>
            <div className={styles['footer-social-icons']}>
              <a href="#" aria-label="Facebook"><img src="facebook.icon.webp" alt="Facebook" /></a>
              <a href="#" aria-label="LinkedIn"><img src="linkedin.icon.png" alt="LinkedIn" /></a>
              <a href="#" aria-label="YouTube"><img src="youtube.icon.webp" alt="YouTube" /></a>
              <a href="#" aria-label="Instagram"><img src="instagram.icon.webp" alt="Instagram" /></a>
            </div>
            <div className={styles['footer-contact']}>
              <div><strong>Email:</strong> info@balancimals.com</div>
              <div><strong>Phone:</strong> +44 1234 567890</div>
              <div><strong>Location:</strong> 123 Therapy Lane, London, UK</div>
            </div>
          </div>
          <div className={styles['footer-col']}>
            <div className={styles['footer-title']}>About</div>
            <a href="#">Our Team</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
          <div className={styles['footer-col']}>
            <div className={styles['footer-title']}>Services</div>
            <a href="#">Balance &amp; Coordination Training</a>
            <a href="#">Stretching &amp; Range of Motion</a>
            <a href="#">Hydrotherapy</a>
            <a href="#">Pain Management</a>
            <a href="#">Pediatric Exergames</a>
          </div>
          <div className={styles['footer-col']}>
            <div className={styles['footer-title']}>Resources</div>
            <a href="#">FAQs</a>
            <a href="#">Parental Guidance</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          &copy; 2025 Balancimals. All rights reserved.
        </div>
      </footer>
    </div>
  );
}