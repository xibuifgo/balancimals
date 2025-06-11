import styles from '../Patient.module.scss';

export default function PatientSU() {
    return(
        <div className={styles.Container}>
            <div className={styles.Box}>
                <h1>Register</h1>
                <input type='text' id='fname' placeholder='First Name' />
                <input type='password' id='password1' placeholder='Enter Password' />
                <input type='password' id='password2' placeholder='Reenter Password' />
                <a href='\'>
                    <button type='submit' className={styles.Btn}><p>Register</p></button>
                </a>
            </div>
        </div>
    )
}