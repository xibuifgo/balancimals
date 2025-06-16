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
        height: '',
        weight: '',
        bday: '',
        password1: '',
        password2: '',
        sharecode: ''
    });

    const[message, setMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
                <input type='text' id='fname' placeholder='First Name' onChange={ handleChange } />
                <input type='text' id='lname' placeholder='Last Name' onChange={ handleChange } />
                <input type='email' id='email' placeholder='Enter Email' onChange={ handleChange } />
                <input type='number' id='height' min="0" max="300" step="0.1" placeholder='Enter Height in cm' onChange={ handleChange } />
                <input type='number' id='weight' min="0" max="200" step="1" placeholder='Enter Weight in kg' onChange={ handleChange } />
                <input type='date' id='birthday' onChange={ handleChange } />
                <input type='password' id='password1' placeholder='Enter Password' onChange={ handleChange } />
                <input type='password' id='password2' placeholder='Reenter Password' onChange={ handleChange } />
                <input type='text' id='sharecode' placeholder='Enter Sharecode from Physiotherapist' onChange={ handleChange } />
                <button type='submit' className={ styles.Btn } ><p>Register</p></button>
            </form>
        </div>
    )
}