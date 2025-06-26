
"use client";
// import apiGetHelloName from "@/io/api-get-hello-name";
import apiGetHelloWorld from "@/io/api-get-hello-world";
import { useEffect, useState } from "react";
const HelloWorldPage = function () {
    const [message, setMessage] = useState<string | null>('No Message');
    // const [name, setName] = useState<any>('');

    useEffect(() => {
        fetchHelloWorld()
    }, [])
    const fetchHelloWorld=async()=>{
        const r=await apiGetHelloWorld();
        setMessage(r.data.message)
    }
    // const doFetchMessage=async()=>{
    //     const r=await apiGetHelloName(name);
    //     setMessage(r.data.message)
    // }

    return (
        <>
            {/* <br/>
            Enter name :
            <input type="text" value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }}/> */}
            {/* <button
            onClick={(e)=>{
                doFetchMessage()
            }}>Submit</button> */}

            <h3>
                {message}
            </h3>
        </>
    );
};
export default HelloWorldPage;
