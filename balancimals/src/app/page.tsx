import Image from "next/image";
import styles from './home.module.scss';
import Title from '../../public/balancimals_header.png';

export default function Home() {
  return (
    <div>
      <div className={styles.Navbar}>
          <p className={styles.NavLeft}>www.balancimals.com</p>
          <div className={styles.NavLinks}>
              <p>About Us</p>
              <p>Service</p>
              <p>Contact Us</p>
              <a href='\signup'>
                  <div className={styles.SUButton}>
                      <p>Sign Up</p>
                  </div>
              </a>
          </div>
      </div>
      <div className={styles.Banner}>
        <div className = {styles.Container}>
          <Image 
            src = {Title}
            width = {600}
            height = {600}
            alt = "Pixel art of a sleeping bear"
          />
          <h1>Balance Training, <br /> made fun. </h1>
          <h2> Where play meets progress - trusted by families and physiotherapists </h2>
        </div>
        <div className={ styles.Card_Container }>
          <div className={ styles.Card } >
            <h2 className={styles.Title}>For Parents</h2>
            <div className={styles.JointS}>
              <div className={styles.Joint}>
                <div className={ styles.game_circle } ></div>
                <h3>Make sure to <a href="\patient\register">Register Now</a> to play!</h3>
              </div>
              <div className={styles.Joint}>
                <div className={styles.ppl_circle}></div>
                <h3>Family-Friendly Fun for everyone!</h3>
              </div>             
            </div>
            <button className={styles.Download}>Download Now</button>
          </div>
          <div className={ styles.Card } >
            <h2 className={styles.PTitle}>For Physiotherapists</h2>
            <div className={styles.JointS}>
              <div className={styles.Joint}>
                <div className={ styles.graph_circle } ></div>
                <h3>View patients progress</h3>
              </div>
              <div className={styles.Joint}>
                <div className={ styles.report_circle } ></div>
                <h3>Professional Data Insights</h3>
              </div>
            </div>
            <a href="\login"><button className={styles.PhDownload}>Log In</button></a>
          </div>
        </div>
      </div>
      <div className={styles.HIW}>
        <h2>How It Works</h2>
        <div className={styles.BunkS}>
          <div className={styles.Bunk}>
            <div className={styles.game_circle}></div>
            <h3>Play</h3>
            <h4>Children engage with balance games at home</h4>
          </div>
          <div className={styles.Bunk}>
            <div className={styles.report_circle}></div>
            <h3>Track</h3>
            <h4>Progress data is synced to our dashboard</h4>
          </div>
          <div className={styles.Bunk}>
            <div className={styles.graph_circle}></div>
            <h3>Improve</h3>
            <h4>Therapists analyse performance and adjust plans</h4>
          </div>
        </div>
      </div>
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
    </div>
  )
}
