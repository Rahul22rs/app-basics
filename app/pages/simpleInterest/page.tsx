"use client"
import { useEffect, useState } from "react";
import apiSimpleInterest from "@/io/api-get-simple-interest";

const simpleInterest = function () {
    const [interest, setInterest] = useState<string>("Simple Interest is: ");
    const [principal, setPrincipal] = useState<any>();
    const [rate, setRate] = useState<any>();
    const [time, setTime] = useState<any>();
    const [principalError, setPrincipalError] = useState<any>('');
    const [rateError, setRateError] = useState<any>('');
    const [timeError, setTimeError] = useState<any>('');


    // useEffect(() => {
    //     getSi()
    // }, [])

    const getSi = async () => {
        setPrincipalError('')
        setRateError('')
        setTimeError('')

        const response = await apiSimpleInterest(principal, rate, time)
        if (response.status == 422) {
            if (response.data.errors.principal) {
                setPrincipalError(response.data.errors['principal'][0])
            }
            if (response.data.errors.rate) {
                setRateError(response.data.errors['rate'][0])
            }
            if (response.data.errors.time) {
                setTimeError(response.data.errors['time'][0])
            }
        } else {
            setInterest(response.data.message)
        }

    }

    return (
        <>
            <br />
            Principal: <input type="text" value={principal} onChange={(e) => {
                setPrincipal(e.target.value);
            }} />
            <span style={{ color: 'red', padding: '10px' }}>{principalError}</span>
            <br />
            <br />
            Rate:     <input type="text" value={rate} onChange={(e) => {
                setRate(e.target.value);

            }} />
            <span style={{ color: 'red', padding: '10px' }}>{rateError}</span>
            <br />
            <br />

            Time:
            <input type="text" value={time} onChange={(e) => {
                setTime(e.target.value);

            }} />
            <span style={{ color: 'red', padding: '10px' }}>{timeError}</span>
            <br />
            <br />
            <button onClick={(event) => {
                getSi()
            }}>submit</button>



            <h1>
                {interest}
            </h1>
        </>
    )
}
export default simpleInterest;