"use client";
import apiMultiply from "@/io/api-multiply";
import { useEffect, useState } from "react";
const HelloWorldPage = function () {
    const [result, setResult] = useState<string | null>('No result');
    const [n1, setN1] = useState<any>('');
    const [n2, setN2] = useState<any>('');
    const [n1Error, setN1Error] = useState<any>('');
    const [n2Error, setN2Error] = useState<any>('');


    const doFetchResult = async () => {
        setN1Error('')
        setN2Error('')

        const r = await apiMultiply(n1, n2);
        if (r.status == 422) {
            setN1Error(r.data.errors['n1'][0])
            setN2Error(r.data.errors['n2'][0])
        }
        if (r.status == 200) {
            setResult(r.data.message)
        }

    }

    return (
        <>
            <br />
            N1 :
            <input type="text" value={n1}
                onChange={(e) => {
                    setN1(e.target.value)
                }} />
            <span style={{ color: '#ffaaaa' }}>{n1Error}</span>
            <br />
            N2 :
            <input type="text" value={n2}
                onChange={(e) => {
                    setN2(e.target.value)
                }} />
            <span style={{ color: '#ffaaaa' }}>{n2Error}</span>

            <br />
            <button
                onClick={(e) => {
                    doFetchResult()
                }}>Submit</button>

            <h3>
                {result}
            </h3>
        </>
    );
};
export default HelloWorldPage;
