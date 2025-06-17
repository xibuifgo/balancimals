'use client';

import { useState } from 'react';
import styles from './TSU.module.scss';
import { useRouter } from 'next/navigation';
// import { prisma } from '@/lib/prisma';

export default function TSignUp() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        username: '',
        password1: '',
        password2: ''
    })

    const[message, setMessage] = useState('')

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("[FORM SUBMIT]", formData);
        const res = await fetch('/api/doctor/sign_up', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await res.json();
        setMessage(result.message);

        if (res.ok) {
            router.push("/login");
            console.log('Patient created', result.patient);
        } else {
            console.error(result?.message);
        }
    };

    return(
        <div className={styles.Container}>
            <form className={styles.Box} onSubmit={ handleSubmit }>
                <h1>Sign Up</h1>
                <input type='text' name='fname' id='fname' value={ formData.fname } placeholder='Enter First Name' onChange={ handleChange } />
                <input type='text' name='lname' id='lname' value={ formData.lname } placeholder='Enter Surname' onChange={ handleChange } />
                <input type='email' name='email' id='email' value={ formData.email } placeholder='Enter Email' onChange={ handleChange } />
                <input type='text' name='username' id='username' value={ formData.username } placeholder='Enter Username' onChange={ handleChange }/>
                <input type="password" name='password1' id="password1" value={ formData.password1 } placeholder="Enter Password" onChange={ handleChange } />
                <input type="password" name='password2' id="password2" value={ formData.password2 } placeholder="Repeat Password" onChange={ handleChange } />
                {message && <p className={styles.Message}>{message}</p>}
                <button type='submit' className={styles.Btn}><p>Sign Up</p></button>
            </form>
        </div>
    );
}