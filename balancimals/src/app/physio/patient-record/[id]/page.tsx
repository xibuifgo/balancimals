import { prisma } from "@/lib/prisma"
import styles from '../patient.module.scss';

export default async function Page({ params }: { params: { id: string } }) {

  const { id } = params;

  const patient = await prisma.patient.findUnique({
    where: { id: params.id },
    include: {
      doctor: true,
    }
  })

  function getAgeFromBirthday(birthday: string | Date) {
    const birth = new Date(birthday);
    const ageDifMs = Date.now() - birth.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  function capitalize(str: string | undefined ) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={styles.container}>
      <section className={styles['patient-info-pro']}>
        {/* <img src="/john-doe.jpg.png" alt="Patient Photo" className={styles['profile-pic-large']} /> */}
        <div className={styles['patient-info-main']}>
          <div className={styles['patient-info-header']}>
            <span className={styles['patient-info-label']}>Patient details</span>
            <span className={styles['patient-info-name']}>{patient?.fname} {patient?.lname}</span>
            {/* <button className={styles['ehr-btn']}>Push to EHR</button> */}
          </div>
          <div className={styles['patient-info-grid']}>
            <div><strong>DOB:</strong> {patient?.birthday && new Date(patient.birthday).toISOString().split('T')[0]}</div>
            <div><strong>Patient ID:</strong> 363-8236 </div>
            <div><strong>Age:</strong> {patient?.birthday ? getAgeFromBirthday(patient?.birthday): 'N/A'} </div>
            <div><strong>Email:</strong> { patient?.email } </div>
            <div><strong>Gender:</strong> { capitalize(patient?.gender) }  </div>
            <div><strong>Phone:</strong> { patient?.phone } </div>
            {/* <div><strong>Diagnosis:</strong> Balance impairment</div> */}
            <div><strong>Referring Clinician:</strong> Dr. {patient?.doctor?.lname} </div>
            <div><strong>Last Session:</strong> 17/06/2025</div>
            {/* <div><strong>Next Appointment:</strong> 27/1/2025</div> */}
          </div>
        </div>
      </section>

      <section className={styles['focus-area-pro']}>
        <div className={styles['focus-area-left']}>
          <img src="/knee.image.png" alt="Knee Icon" className={styles['focus-icon']} />
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
            src="/flexion-extension.chart.png"
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
                {/* <td>Reaction Time (ms)</td>
                <td>420</td> */}
              </tr>
              <tr>
                <td>Falls or Loss of Balance</td>
                <td>0</td>
              </tr>
              <tr>
                {/* <td>Session Duration</td>
                <td>18 min</td> */}
              </tr>
              <tr>
                <td>Fun Rating (Self-Reported)</td>
                <td>9 / 10</td>
              </tr>
            </tbody>
          </table>
          {/* <div style={{marginTop: '1em'}} className={styles.comm}>
            <strong>Comments:</strong>
            <div style={{
              background: '#f4f7fa',
              borderRadius: 6,
              padding: '0.7em',
              marginTop: '0.3em'
            }}>
              Great effort! Maintained balance throughout all games. Enjoyed the session and followed instructions well.
            </div>
          </div> */}
          {/* <div className={styles['medical-records-table']}>
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
          </div> */}
        </div>
        {/* <div className={styles['summary-results']}>
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
        </div> */}
      </section>

      {/* <section className={styles.summary}>
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
                <td>Balance</td>
                <td>Improved stability</td>
                <td>85%</td>
              </tr>
              <tr>
                <td>Reaction Time</td>
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
      </section> */}
    </div>
  );
}