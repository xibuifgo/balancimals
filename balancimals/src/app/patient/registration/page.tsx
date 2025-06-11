import styles from '../Patient.module.scss';

export default function PatientSU() {
    return(
        <div className={styles.Container}>
            <div className={styles.Box}>
                <h1>Register</h1>
                <input type='text' id='fname' placeholder='First Name' />
                <input type='text' id='lname' placeholder='Last Name' />
                <input type='email' id='email' placeholder='Enter Email' />
                <input type='number' id='height' min="0" max="300" step="0.1" placeholder='Enter Height in cm' />
                <input type='number' id='weight' min="0" max="200" step="1" placeholder='Enter Weight in kg' />
                <input type='date' id='birthday'/>
                <a href='\patient\signup'>
                    <button type='submit' className={styles.Btn}><p>Register</p></button>
                </a>
            </div>
        </div>
    )
}