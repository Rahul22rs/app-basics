'use client'

import apiEmpCreate from "@/io/api-emp-create";
import { useState } from "react";

export default function EmpHomePage() {
    const [name, setName] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [nameError, setNameError] = useState<any>('');
    const [emailError, setEmailError] = useState<any>('');


    const doCreateEmp = async () => {
        setNameError('')
        setEmailError('')

        const r = await apiEmpCreate(name, email);
        if (r.status == 422) {
            if(r.data.errors.name)
            setNameError(r.data.errors['name'][0])
            if(r.data.errors.email)
            setEmailError(r.data.errors['email'][0])
        }
        if (r.status == 200) {
            alert("SUCCESS")
        }

    }

    return (
        <>
            <br />
            Name :
            <input type="text" value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }} />
            <span style={{ color: '#ffaaaa' }}>{nameError}</span>
            <br />
            Email :
            <input type="text" value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }} />
            <span style={{ color: '#ffaaaa' }}>{emailError}</span>

            <br />
            <button
                onClick={(e) => {
                    doCreateEmp()
                }}>Submit</button>

            
        </>
    );
};

