'use client';

import { useState } from 'react';
import styles from '../Patient.module.scss';
import { useRouter } from 'next/navigation';


export default function PatientSU() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        gender: 'male',
        height: '',
        weight: '',
        bday: '',
        password1: '',
        password2: '',
        sharecode: ''
    });

    const[message, setMessage] = useState('')

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("[FORM SUBMIT]", formData);
        const res = await fetch('/api/patient_register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await res.json();
        setMessage(result.message);

        if (res.ok) {
            router.push("/");
            console.log('Patient created', result.patient);
        } else {
            console.error(result?.message);
        }
    };

    return(
        <div className={styles.ScrollContainer}>
            <form className={styles.Box} onSubmit={ handleSubmit }>
                <h1>Register</h1>
                <input type='text' name='fname' id='fname' placeholder='First Name' value={formData.fname} onChange={ handleChange } />
                <input type='text' name='lname' id='lname' placeholder='Last Name' value={formData.lname} onChange={ handleChange } />
                <input type='email' name='email' id='email' placeholder='Enter Email' value={formData.email} onChange={ handleChange } />
                <input type='phone' name='phone' id='phone' placeholder='Enter Phone Number' value={formData.phone} onChange={ handleChange } />
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" value={formData.gender} onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non_binary">Non-binary</option>
                    <option value="no_say">Prefer not to say</option>
                </select>
                <input type='number' name='height' id='height' min="0" max="300" step="0.1" placeholder='Enter Height in cm'  value={formData.height} onChange={ handleChange } />
                <input type='number' name='weight' id='weight' min="0" max="200" step="1" placeholder='Enter Weight in kg' value={formData.weight} onChange={ handleChange } />
                <input type='date' name='bday' id='bday' value={formData.bday} onChange={ handleChange } />
                <input type='password' name='password1' id='password1' placeholder='Enter Password' value={formData.password1} onChange={ handleChange } />
                <input type='password' name='password2' id='password2' placeholder='Reenter Password' value={formData.password2} onChange={ handleChange } />
                <input type='text' name='sharecode' id='sharecode' placeholder='Enter Sharecode from Physiotherapist'  value={formData.sharecode} onChange={ handleChange } />
                <button type='submit' className={styles.Btn}><p>Register</p></button>
            </form>
        </div>
    )
}